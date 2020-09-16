"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = __importDefault(require("../classes/token"));
const environment_1 = __importDefault(require("../global/environment"));
const user_model_1 = require("../models/user.model");
const menu_model_1 = require("../models/menu.model");
// Google Login
var GOOGLE_CLIENT_ID = environment_1.default.GOOGLE_CLIENT_ID;
const { OAuth2Client } = require("google-auth-library");
const oauthClient = new OAuth2Client(GOOGLE_CLIENT_ID);
// ========================================================
// User Methods
// ========================================================
function createUser(req, res) {
    var body = req.body;
    var user = new user_model_1.User({
        tx_name: body.user.tx_name,
        tx_email: body.user.tx_email,
        tx_password: bcrypt_1.default.hashSync(body.user.tx_password, 10),
        bl_google: false,
        fc_lastlogin: null,
        fc_createdat: new Date(),
        tx_role: 'ADMIN_ROLE',
    });
    user.save().then((userSaved) => {
        res.status(201).json({
            ok: true,
            msg: "Usuario guardado correctamente.",
            user: userSaved
        });
    }).catch((err) => {
        return res.status(400).json({
            ok: false,
            msg: "Error al guardar el user.",
            errors: err
        });
    });
}
function attachCompany(req, res) {
    let company = req.body.company;
    let idUser = req.params.idUser;
    user_model_1.User.findByIdAndUpdate(idUser, { 'id_company': company._id }, { new: true })
        .populate('id_company')
        .populate('id_skills')
        .then(userUpdated => {
        return res.status(200).json({
            ok: true,
            msg: 'La empresa se asigno al user correctamente',
            user: userUpdated
        });
    }).catch(() => {
        return res.status(500).json({
            ok: true,
            msg: 'No se pudo asignar la empresa al user',
            user: null
        });
    });
}
function checkEmailExists(req, res) {
    let pattern = req.body.pattern;
    user_model_1.User.findOne({ tx_email: pattern }).then(userDB => {
        if (!userDB) {
            return res.status(200).json({
                ok: true,
                msg: 'No existe el email'
            });
        }
        return res.status(200).json({
            ok: false,
            msg: 'El email ya existe.'
        });
    }).catch(() => {
        return res.status(500).json({
            ok: false,
            msg: 'Error al consultar si existe el email'
        });
    });
}
function updateToken(req, res) {
    let body = req.body;
    var token = token_1.default.getJwtToken({ user: body.user });
    res.status(200).json({
        ok: true,
        user: req.user,
        newtoken: token
    });
}
function verify(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticket = yield oauthClient.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        return {
            name: payload.name,
            email: payload.email,
            img: payload.picture,
            google: true,
            payload: payload
        };
    });
}
function loginGoogle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var gtoken = req.body.gtoken;
        yield verify(gtoken)
            .then((googleUser) => {
            user_model_1.User.findOne({ tx_email: googleUser.email })
                .populate('id_company')
                .populate('id_skills')
                .then(userDB => {
                if (userDB) { // el user existe, intenta loguearse
                    if (userDB.bl_google === false) {
                        return res.status(400).json({
                            ok: false,
                            msg: "Para el email ingresado debe usar autenticación con clave.",
                            user: null
                        });
                    }
                    else {
                        // Google SignIn -> new token
                        var token = token_1.default.getJwtToken({ user: userDB });
                        userDB.updateOne({ fc_lastlogin: +new Date().getTime() })
                            .then((userSaved) => __awaiter(this, void 0, void 0, function* () {
                            userSaved.tx_password = ":)";
                            yield obtenerMenu(userDB.tx_role, userDB.cd_pricing).then(menu => {
                                let home;
                                switch (userDB.tx_role) {
                                    case 'ADMIN_ROLE':
                                        home = '/admin/home';
                                        break;
                                    case 'SUPERUSER_ROLE':
                                        home = '/superuser/home';
                                        break;
                                    default:
                                        home = '/admin/role';
                                }
                                ;
                                res.status(200).json({
                                    ok: true,
                                    msg: 'Login exitoso',
                                    token: token,
                                    user: userDB,
                                    menu,
                                    home
                                });
                            }).catch(() => {
                                res.status(500).json({
                                    ok: false,
                                    msg: 'No se pudo obtener el menu del usuario',
                                    token: null,
                                    user: null,
                                    menu: null,
                                    home: null
                                });
                            });
                        })).catch((err) => {
                            return res.status(400).json({
                                ok: false,
                                msg: 'Error al loguear el user de Google',
                                err
                            });
                        });
                    }
                }
                else { // el user no existe, hay que crearlo.
                    var user = new user_model_1.User();
                    user.tx_email = googleUser.email;
                    user.tx_name = googleUser.name;
                    user.tx_password = ':)';
                    user.tx_img = googleUser.img;
                    user.bl_google = true;
                    user.fc_lastlogin = new Date();
                    user.fc_createdat = new Date();
                    user.tx_role = 'ADMIN_ROLE';
                    user.cd_pricing = 0;
                    user.save().then((userSaved) => __awaiter(this, void 0, void 0, function* () {
                        var token = token_1.default.getJwtToken({ user });
                        yield obtenerMenu(user.tx_role, user.cd_pricing).then(menu => {
                            res.status(200).json({
                                ok: true,
                                msg: 'Usuario creado y logueado correctamente',
                                token: token,
                                user,
                                menu,
                                home: '/admin/home'
                            });
                        }).catch(() => {
                            res.status(500).json({
                                ok: false,
                                msg: 'Error al obtener el menu del usuario',
                                token: null,
                                user: null,
                                menu: null,
                                home: null
                            });
                        });
                    })).catch((err) => {
                        res.status(500).json({
                            ok: false,
                            msg: 'Error al guardar el user de Google',
                            err
                        });
                    });
                }
            }).catch((err) => {
                res.status(500).json({
                    ok: false,
                    msg: "Error al buscar user",
                    error: err
                });
            });
        })
            .catch(err => {
            res.status(403).json({
                ok: false,
                msg: "Token de Google no valido",
                err
            });
        });
    });
}
function loginUser(req, res) {
    var body = req.body;
    user_model_1.User.findOne({ tx_email: body.tx_email })
        .populate('id_company')
        .populate({ path: 'id_skills', select: 'cd_skill tx_skill' })
        .then(userDB => {
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                msg: "Usuaro o Contraseña incorrecta."
            });
        }
        if (!bcrypt_1.default.compareSync(body.tx_password, userDB.tx_password)) {
            return res.status(400).json({
                ok: false,
                msg: "Contraseña o usuario incorrecto."
            });
        }
        // Si llego hasta acá, el user y la contraseña son correctas, creo el token
        var token = token_1.default.getJwtToken({ user: userDB });
        userDB.fc_lastlogin = new Date();
        userDB.save().then(() => __awaiter(this, void 0, void 0, function* () {
            userDB.tx_password = ":)";
            let home;
            switch (userDB.tx_role) {
                case 'ASSISTANT_ROLE':
                    home = '/assistant/home';
                    break;
                case 'ADMIN_ROLE':
                    home = '/admin/home';
                    break;
                case 'SUPERUSER_ROLE':
                    home = '/superuser/home';
                    break;
                default:
                    home = '/assistant/role';
            }
            ;
            res.status(200).json({
                ok: true,
                msg: "Login post recibido.",
                token: token,
                body: body,
                id: userDB._id,
                user: userDB,
                menu: yield obtenerMenu(userDB.tx_role, userDB.cd_pricing),
                home
            });
        })).catch((err) => {
            return res.status(500).json({
                ok: false,
                msg: "Error al actualizar la fecha de login",
                errors: err
            });
        });
    }).catch((err) => {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar un user",
            errors: err
        });
    });
}
function obtenerMenu(txRole, cdPricing = 0) {
    return new Promise((resolve, reject) => {
        var cdRole = [];
        switch (txRole) {
            case 'ASSISTANT_ROLE':
                cdRole = [0]; // assistant
                break;
            case 'ADMIN_ROLE':
                cdRole = [0, 1]; // assistant && admin
                break;
            case 'SUPERUSER_ROLE':
                cdRole = [2]; // superuser
        }
        menu_model_1.Menu.find({ cd_role: { $in: cdRole } }).then((menuDB) => {
            for (let menu of menuDB) {
                menu.ar_submenu = menu.ar_submenu.filter(submenu => submenu.cd_pricing <= cdPricing);
            }
            resolve(menuDB);
        }).catch(() => {
            reject([]);
        });
    });
}
function testData(req, res) {
    var user = user_model_1.User.findOne({ tx_email: 'matiasfrith@gmail.com' }, (err, userDB) => {
        return res.json({ data: userDB === null || userDB === void 0 ? void 0 : userDB.getData() });
    });
}
module.exports = {
    testData,
    createUser,
    attachCompany,
    checkEmailExists,
    updateToken,
    loginGoogle,
    loginUser,
    obtenerMenu
};
