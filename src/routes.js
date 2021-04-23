import { Router } from 'express';
import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users/:user_id/address',AddressController.store);
routes.get('/users/:user_id/address',AddressController.index);


export default routes;