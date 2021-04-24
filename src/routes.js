import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import PetController from './app/controllers/PetController';
import EventController from './app/controllers/EventController';

const routes = new Router();

routes.get('/users/:user_id/pets',PetController.index)
routes.post('/users/:user_id/pets',PetController.store)
routes.post('/users/:user_id/address',AddressController.store);
routes.get('/users/:user_id/address',AddressController.index);
routes.post('/users', UserController.store);
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