import { Router } from 'express';
import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import PetController from './app/controllers/PetController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users/:user_id/address',AddressController.store);
routes.get('/users/:user_id/address',AddressController.index);



routes.get('/users/:user_id/pets',PetController.index)
routes.post('/users/:user_id/pets',PetController.store)

export default routes;