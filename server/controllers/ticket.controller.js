"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const server_1 = __importDefault(require("../classes/server"));
// MODELS
const ticket_model_1 = require("../models/ticket.model");
const position_model_1 = require("../models/position.model");
const user_model_1 = require("../models/user.model");
const skill_model_1 = require("../models/skill.model");
const desktop_model_1 = require("../models/desktop.model");
const session_model_1 = require("../models/session.model");
const server = server_1.default.instance; // singleton
// ========================================================
// user methods
// ========================================================
function createTicket(req, res) {
    const { idSkill, idSocket, blPriority } = req.body;
    const idDay = +new Date().getDate();
    const idMonth = +new Date().getMonth() + 1;
    const idYear = +new Date().getFullYear();
    let idPosition;
    skill_model_1.Skill.findById(idSkill).then(skillDB => {
        if (!skillDB) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe el skill solicitado',
                ticket: null
            });
        }
        // busco la posición que le corresponde
        position_model_1.Position.findOneAndUpdate({
            id_skill: idSkill,
            id_year: idYear,
            id_month: idMonth,
            id_day: idDay
        }, { $inc: { id_position: 1 } }, { new: true }).then((skillNextNumber) => {
            // si no existe el primer turno lo crea
            if (!skillNextNumber) {
                let newSkillNumber = new position_model_1.Position({
                    id_skill: idSkill,
                    id_year: idYear,
                    id_month: idMonth,
                    id_day: idDay,
                    id_position: 1
                });
                newSkillNumber.save()
                    .catch(() => {
                    return res.status(400).json({
                        ok: false,
                        msg: "El nuevo status no se pudo guardar."
                    });
                });
                idPosition = newSkillNumber.id_position;
            }
            if (skillNextNumber) {
                idPosition = skillNextNumber.id_position;
            }
            let idCompany = skillDB.id_company;
            // guardo el ticket
            let ticket = new ticket_model_1.Ticket({
                id_root: null,
                id_child: null,
                bl_priority: blPriority,
                id_position: idPosition,
                id_socket: idSocket,
                id_socket_desk: null,
                id_session: null,
                id_company: idCompany,
                id_skill: idSkill,
                tm_start: +new Date().getTime(),
                tm_att: null,
                tm_end: null
            });
            ticket.id_root = ticket._id;
            ticket.save().then((ticketSaved) => {
                const server = server_1.default.instance;
                // welcome message to client
                server.io.to(idSocket).emit('message-private', { msg: 'Bienvenido, puede realizar culquier consulta por aquí. Gracias por esperar.' });
                // advice to dekstops in company
                server.io.to(idCompany).emit('update-desktops');
                res.status(201).json({
                    ok: true,
                    msg: "Ticket guardado correctamente.",
                    ticket: ticketSaved
                });
            }).catch(() => {
                return res.status(400).json({
                    ok: false,
                    msg: 'Error al guardar el ticket',
                    ticket: false
                });
            });
        }).catch(() => {
            return res.status(400).json({
                ok: false,
                msg: "Error al procesar el status de los tickets para la empresa."
            });
        });
    }).catch(() => {
        return res.status(400).json({
            ok: false,
            msg: 'No se pudo obtener el skill solicitado',
            ticket: null
        });
    });
}
;
function cancelTicket(req, res) {
    const idTicket = req.params.idTicket;
    ticket_model_1.Ticket.findByIdAndUpdate(idTicket, { tm_end: +new Date().getTime() }).then((ticketCanceled) => {
        if (ticketCanceled) {
            if (ticketCanceled.id_socket_desk) {
                // cancel dekstop session and update tickets on assistant desktop 
                server.io.to(ticketCanceled.id_socket_desk).emit('ticket-cancelled', ticketCanceled._id);
            }
            else {
                // update tickets on desktops
                server.io.to(ticketCanceled.id_company).emit('update-desktops');
            }
            return res.status(200).json({
                ok: true,
                msg: "Ticket finalizado correctamente",
                ticket: ticketCanceled
            });
        }
    }).catch(() => {
        return res.status(400).json({
            ok: false,
            msg: "No se pudo finalizar el ticket",
            ticket: null
        });
    });
}
// ========================================================
// assistant methods
// ========================================================
function reassignTicket(req, res) {
    // desvía un ticket de un skill a otro dejando en el ticket un id_parent con el id del documento original 
    // un id_child con el nuevo ticket creado en el nuevo skill. 
    const { idTicket, idSkill, blPriority } = req.body;
    const idDay = +new Date().getDate();
    const idMonth = +new Date().getMonth() + 1;
    const idYear = +new Date().getFullYear();
    let idPosition;
    ticket_model_1.Ticket.findById(idTicket).then(ticketParentDB => {
        if (!ticketParentDB) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe el ticket a reenviar',
                ticket: null
            });
        }
        skill_model_1.Skill.findById(idSkill).then((skillDB) => {
            if (!skillDB) {
                return res.status(400).json({
                    ok: false,
                    msg: 'No existe el skill solicitado',
                    ticket: null
                });
            }
            // busco la posición que le corresponde
            position_model_1.Position.findOneAndUpdate({
                id_skill: idSkill,
                id_year: idYear,
                id_month: idMonth,
                id_day: idDay
            }, { $inc: { id_position: 1 } }, { new: true }).then((skillNextNumber) => {
                if (!skillNextNumber) {
                    // si no existe el primer turno lo crea
                    let newSkillNumber = new position_model_1.Position({
                        id_skill: idSkill,
                        id_year: idYear,
                        id_month: idMonth,
                        id_day: idDay,
                        id_position: 1
                    });
                    newSkillNumber.save()
                        .catch(() => {
                        return res.status(400).json({
                            ok: false,
                            msg: "El nuevo status no se pudo guardar."
                        });
                    });
                    idPosition = newSkillNumber.id_position;
                }
                if (skillNextNumber) {
                    idPosition = skillNextNumber.id_position;
                }
                let idCompany = skillDB.id_company;
                let idSocket = ticketParentDB.id_socket;
                let idRoot = ticketParentDB.id_root;
                // guardo el ticket
                let ticket = new ticket_model_1.Ticket({
                    id_root: idRoot,
                    id_child: null,
                    bl_priority: blPriority,
                    id_position: idPosition,
                    id_socket: idSocket,
                    id_socket_desk: null,
                    id_session: null,
                    id_company: idCompany,
                    id_skill: idSkill,
                    tm_start: +new Date().getTime(),
                    tm_att: null,
                    tm_end: null
                });
                ticket.save().then((ticketChildSaved) => {
                    const server = server_1.default.instance;
                    server.io.to(idSocket).emit('message-private', { msg: 'Bienvenido, puede realizar culquier consulta por aquí. Gracias por esperar.' });
                    server.io.to(idCompany).emit('update-public');
                    let ticketToUser = {
                        id_root: ticketChildSaved.id_root,
                        id_position: ticketChildSaved.id_position,
                        id_socket: ticketChildSaved.id_socket,
                        id_socket_desk: null,
                        id_session: null,
                        id_company: ticketChildSaved.id_company,
                        id_skill: skillDB,
                        tm_start: ticketChildSaved.tm_start,
                        tm_att: null,
                        tm_end: null
                    };
                    res.status(201).json({
                        ok: true,
                        msg: "Ticket guardado correctamente.",
                        ticket: ticketToUser
                    });
                    // después de guardar el nuevo ticket, cierro el anterior
                    ticketParentDB.id_child = ticketChildSaved._id;
                    ticketParentDB.tm_end = +new Date().getTime();
                    ticketParentDB.save().catch(() => {
                        return res.status(400).json({
                            ok: false,
                            msg: 'Error al cerrar el ticket anterior',
                            ticket: false
                        });
                    });
                }).catch(() => {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Error al abrir el ticket nuevo',
                        ticket: false
                    });
                });
            }).catch(() => {
                return res.status(400).json({
                    ok: false,
                    msg: "Error al procesar el status de los tickets para la empresa."
                });
            });
        }).catch(() => {
            return res.status(400).json({
                ok: false,
                msg: 'No se pudo obtener el skill solicitado',
                ticket: null
            });
        });
    });
}
;
function takeTicket(req, res) {
    const server = server_1.default.instance;
    const { idSession, idSocketDesk } = req.body;
    session_model_1.Session.findById(idSession).then(sessionDB => {
        if (!sessionDB) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe la sesión del escritorio',
                session: null
            });
        }
        if (sessionDB.fc_end) {
            return res.status(400).json({
                ok: false,
                msg: 'La sesión del escritorio ya finalizó',
                session: null
            });
        }
        desktop_model_1.Desktop.findById(sessionDB === null || sessionDB === void 0 ? void 0 : sessionDB.id_desktop).then(desktopDB => {
            if (!desktopDB) {
                return res.status(400).json({
                    ok: false,
                    msg: 'No existe el escritorio',
                    assistant: null
                });
            }
            user_model_1.User.findById(sessionDB.id_assistant).then(assistantDB => {
                if (!assistantDB) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'No existe el asistente',
                        assistant: null
                    });
                }
                if (assistantDB.id_company !== desktopDB.id_company) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'El usuario y el escritorio no pertenecen a la misma empresa',
                        assistant: null
                    });
                }
                // Se obtuvo la sesión, el asistente y el escritorio
                // Busco un nuevo ticket para atender
                ticket_model_1.Ticket.findOne({
                    id_company: assistantDB.id_company,
                    id_skill: { $in: assistantDB.id_skills },
                    id_session: null,
                    tm_end: null
                })
                    .populate('id_skill')
                    .populate({
                    path: 'id_session',
                    populate: { path: 'id_assistant id_desktop' }
                })
                    .sort({ bl_priority: -1, tm_start: 1 }) // priority true first
                    // .limit(1)
                    .then(ticketDB => {
                    if (!ticketDB) {
                        return res.status(200).json({
                            ok: false,
                            msg: 'No existen tickets pendientes.',
                            ticket: null
                        });
                    }
                    ticketDB.tm_att = +new Date().getTime();
                    ticketDB.id_session = idSession;
                    ticketDB.id_socket_desk = idSocketDesk;
                    ticketDB.save().then(ticketSaved => {
                        server.io.to(ticketSaved.id_socket).emit('message-private', { msg: `Usted fue llamado desde el escritorio ${desktopDB.cd_desktop} por ${assistantDB.tx_name} ` });
                        if (ticketSaved === null || ticketSaved === void 0 ? void 0 : ticketSaved.id_company) {
                            server.io.to(ticketSaved.id_company).emit('update-public');
                        }
                        return res.status(200).json({
                            ok: true,
                            msg: 'Ticket obtenido correctamente',
                            ticket: ticketSaved
                        });
                    }).catch(() => {
                        return res.status(400).json({
                            ok: false,
                            msg: 'Se encontro un ticket pero sucedió un error al actualizarlo',
                            ticket: null
                        });
                    });
                }).catch(() => {
                    return res.status(500).json({
                        ok: false,
                        msg: 'Error al consultar el ticket',
                        ticket: null
                    });
                });
            }).catch(() => {
                return res.status(500).json({
                    ok: false,
                    msg: 'Error al consultar el asistente',
                    assistant: null
                });
            });
        }).catch(() => {
            return res.status(500).json({
                ok: false,
                msg: 'Error al consultar el escritorio',
                assistant: null
            });
        });
    });
}
;
function releaseTicket(req, res) {
    const idTicket = req.body.idTicket;
    ticket_model_1.Ticket.findByIdAndUpdate(idTicket, {
        tm_att: null,
        id_socket_desk: null,
        id_session: null,
        tm_end: null
    }, { new: true }).then(ticketReleased => {
        if (ticketReleased === null || ticketReleased === void 0 ? void 0 : ticketReleased.id_company) {
            server.io.to(ticketReleased.id_company).emit('update-public');
        }
        return res.status(200).json({
            ok: true,
            msg: 'Ticket soltado correctamente',
            ticket: ticketReleased
        });
    }).catch(() => {
        return res.status(400).json({
            ok: false,
            msg: 'No se pudo soltar el ticket',
            ticket: null
        });
    });
}
;
function endTicket(req, res) {
    const idTicket = req.body.idTicket;
    ticket_model_1.Ticket.findByIdAndUpdate(idTicket, { tm_end: +new Date().getTime() }).then(ticketEnded => {
        if (ticketEnded === null || ticketEnded === void 0 ? void 0 : ticketEnded.id_company) {
            server.io.to(ticketEnded.id_company).emit('update-public'); // clients
        }
        return res.status(200).json({
            ok: true,
            msg: 'Ticket finalizado correctamente',
            ticket: ticketEnded
        });
    }).catch(() => {
        return res.status(400).json({
            ok: false,
            msg: 'No se pudo finalizar el ticket',
            ticket: null
        });
    });
}
;
// ========================================================
// public methods
// ========================================================
function getTickets(req, res) {
    const idCompany = req.params.id_company;
    let year = +new Date().getFullYear();
    let month = +new Date().getMonth();
    let day = +new Date().getDate();
    let time = +new Date(year, month, day).getTime();
    ticket_model_1.Ticket.find({
        id_company: idCompany,
        tm_start: { $gt: time } // only from today
    }).populate({
        path: 'id_session',
        populate: { path: 'id_assistant id_desktop' }
    })
        .populate('id_skill')
        .then((tickets) => {
        if (tickets.length > 0) {
            return res.status(200).json({
                ok: true,
                msg: "Se encontraron tickets para la empresa solicitada.",
                tickets
            });
        }
        return res.status(200).json({
            ok: false,
            msg: "No existen tickets para la empresa solicitada.",
            tickets: []
        });
    }).catch((err) => {
        return res.status(500).json({
            ok: false,
            msg: "Error al obtener los tickets para la empresa solicitada.",
            tickets: null
        });
    });
}
;
function updateSocket(req, res) {
    const idTicket = req.body.idTicket;
    const oldSocket = req.body.oldSocket;
    const newSocket = req.body.newSocket;
    ticket_model_1.Ticket.findById(idTicket).then((ticketDB) => {
        if (!ticketDB) {
            return res.status(400).json({
                ok: false,
                msg: "No existe el ticket con el socket a actualizar."
            });
        }
        let requestUpdateTo;
        switch (oldSocket) {
            case ticketDB.id_socket: // actualizo el socket del cliente
                ticketDB.id_socket = newSocket;
                if (ticketDB.id_socket_desk) {
                    requestUpdateTo = ticketDB.id_socket_desk;
                }
                break;
            case ticketDB.id_socket_desk: // actualizo el socket del asistente
                ticketDB.id_socket_desk = newSocket;
                requestUpdateTo = ticketDB.id_socket;
                break;
            default:
                break;
        }
        ticketDB.save().then((ticketUpdated) => {
            // antes de enviar el ticket actualizado al solicitante, tengo que 
            // avisarle a la otra parte, que tiene que actualizar el ticket. 
            if (requestUpdateTo) {
                server.io.to(requestUpdateTo).emit('ticket-updated', {
                    ok: true,
                    msg: 'El socket del destino ha cambiado',
                    ticket: ticketUpdated
                });
            }
            return res.status(200).json({
                ok: true,
                msg: "El socket del ticket fue actualizado correctamente.",
                ticket: ticketUpdated
            });
        }).catch(() => {
            return res.status(400).json({
                ok: false,
                msg: "Error al actualizar el socket del ticket."
            });
        });
    }).catch(() => {
        return res.status(400).json({
            ok: false,
            msg: "Error al obtener el socket del ticket."
        });
    });
}
module.exports = {
    createTicket,
    cancelTicket,
    takeTicket,
    releaseTicket,
    reassignTicket,
    endTicket,
    getTickets,
    updateSocket,
};
