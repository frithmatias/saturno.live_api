import { Router } from 'express';

// MIDDLEWARES
import  mdAuth  from '../middlewares/auth';

// CONTROLLER
import  ticketController from '../controllers/ticket.controller';

// ROUTES 
const ticketRoutes = Router();

// public requests
ticketRoutes.post('/nuevoticket', ticketController.createTicket);
ticketRoutes.get('/cancelticket/:idTicket', ticketController.cancelTicket);

ticketRoutes.get('/gettickets/:id_company', ticketController.getTickets);
ticketRoutes.put('/actualizarsocket', ticketController.updateSocket);

// desktop requests
ticketRoutes.get('/pendingticket/:idCompany/:idDesk', mdAuth.verificaToken, ticketController.readPendingTicket);
ticketRoutes.post('/taketicket', mdAuth.verificaToken, ticketController.takeTicket);
ticketRoutes.post('/devolverticket', mdAuth.verificaToken, ticketController.rejectTicket);
ticketRoutes.post('/finalizarticket', mdAuth.verificaToken, ticketController.endTicket);

export default ticketRoutes;