import { Router } from 'express';

import ClientController from './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import FavoriteController from './app/controllers/FavoriteController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.get('/clients/:clientId', ClientController.show);
routes.post('/clients', ClientController.store);
routes.put('/clients/:clientId', ClientController.update);
routes.delete('/clients/:clientId', ClientController.delete);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/favorites/:productId', FavoriteController.show);

export default routes;
