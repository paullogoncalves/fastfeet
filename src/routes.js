import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DeliveryManController from './app/controllers/DeliveryManController';
import OrderController from './app/controllers/OrderController';

import DeliveriesController from './app/controllers/DeliveriesController';
import WithdrawalController from './app/controllers/WithdrawalController';
import ReceivementController from './app/controllers/ReceivementController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/deliveryman', DeliveryManController.store);
routes.get('/deliveryman', DeliveryManController.index);
routes.put('/deliveryman/:id', DeliveryManController.update);
routes.delete('/deliveryman/:id', DeliveryManController.delete);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

routes.get('/deliveries/:idDeliveryman', DeliveriesController.index);
routes.put(
  '/deliveries/:idDeliveryman/withdrawal/:idOrder',
  WithdrawalController.update
);
routes.put(
  '/deliveries/:idDeliveryman/receivement/:idOrder',
  ReceivementController.update
);

routes.put('/users', UserController.update);

export default routes;
