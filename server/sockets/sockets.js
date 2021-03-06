"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Borrar marcador
exports.escucharMensajes = (cliente, io) => {
    cliente.on('enterCompany', (idCompany) => {
        cliente.join(idCompany);
        console.log(cliente.id, 'entrando a la sala ', idCompany);
    });
    // Orden enviada por el cliente.
    cliente.on('cliente-en-camino', (idSocketDesk) => {
        io.to(idSocketDesk).emit('cliente-en-camino');
    });
    cliente.on('mensaje-publico', (payload) => {
        io.emit('mensaje-publico', payload);
    });
    cliente.on('mensaje-privado', (payload) => {
        io.to(payload.to).emit('mensaje-privado', payload);
    });
};
