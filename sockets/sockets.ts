import { Socket, } from 'socket.io';
import socketIO from 'socket.io';
import { ticket } from '../routes/router';

// Borrar marcador
export const escucharMensajes = (cliente: Socket, io: socketIO.Server) => {

	// Orden enviada por el cliente.
	cliente.on('cliente-en-camino', () => {
		const myDestination = getMyDestination(cliente);
		io.to(myDestination).emit('cliente-en-camino');
	});

	cliente.on('mensaje-publico', (payload: { de: string, cuerpo: string }) => {
		io.emit('mensaje-publico', payload);
	});

	cliente.on('mensaje-privado', (payload: { mensaje: string }) => {
		const myDestination = getMyDestination(cliente);
		// io.in(cliente.id).emit('mensaje-nuevo', payload);
		io.to(myDestination).emit('mensaje-privado', payload);
		
	});


	function getMyDestination(cliente: any): string {
		const myTicket = ticket.getTickets().filter(ticket =>
			(ticket.tm_end === null) && ( // sólo el último ticket en atención sin finalizar.
				(ticket.id_socket_desk === cliente.id) ||
				(ticket.id_socket === cliente.id))
		)[0];

		if (!myTicket || !myTicket.id_socket || !myTicket.id_socket_desk) {
			errorResponse(cliente);
			return 'error';
		}

		// si mi socket corresponde a id_socket mi destino es un escritorio
		// si mi socket corresponde a id_socket_desk mi destino es un cliente
		const destination = (cliente.id === myTicket.id_socket) ? myTicket.id_socket_desk : myTicket.id_socket;
		if (typeof (destination) === 'string') {
			return destination;
		} else {
			errorResponse(cliente);
			return 'error';
		}
	}

	function errorResponse(cliente: any): void {
		const payload = {mensaje: '<system> No se pudo enviar el mensaje'}
		io.to(cliente.id).emit('mensaje-privado', payload);
	}

};

