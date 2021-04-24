import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import SessionController from './app/controllers/SessionController';
import PetController from './app/controllers/PetController';
import EventController from './app/controllers/EventController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users/:user_id/address',AddressController.store);
routes.post('/session', SessionController.store);
routes.use(authMiddleware);
routes.get('/users/:user_id/address',AddressController.index);
routes.get('/users/:user_id/address',AddressController.delete);
routes.post('/users/:user_id/pets',PetController.store);
routes.get('/users/:user_id/pets',PetController.index);
routes.put('/users/:id', UserController.update);


routes.get('/pets/is_adopted', PetController.findPetByAdopt);
routes.get('/pets/vaccined', PetController.findPetByVaccine);
routes.get('/pets/microchiped', PetController.findPetByMicrochip);
routes.get('/pets/castrated', PetController.findPetByCastration);
routes.get('/pets/size', PetController.findPetBySize);
routes.get('/pets/breed', PetController.findPetBreed);
routes.get('/pets/:id', PetController.findPetById);
routes.get('/pets', PetController.findAllPets);
routes.delete('/pets/:id', PetController.delete);
routes.put('/pets/:id', PetController.update);


// routes.post('/event/:user_id', EventController.store);
// routes.get('/event/:user_id', EventController.index);


export default routes;