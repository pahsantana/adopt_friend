import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import PetController from './app/controllers/PetController';

const routes = new Router();

routes.get('/users/:user_id/pets',PetController.index)
routes.post('/users/:user_id/pets',PetController.store)
routes.post('/users/:user_id/address',AddressController.store);
routes.get('/users/:user_id/address',AddressController.index);
routes.post('/users', UserController.store);




routes.get('/pets/is_adopted', PetController.findPetByAdopt);
routes.get('/pets/vaccined', PetController.findPetByVaccine);
routes.get('/pets/microchiped', PetController.findPetByMicrochip);
routes.get('/pets/castrated', PetController.findPetByCastration);
routes.get('/pets/size', PetController.findPetBySize);
routes.get('/pets/breed', PetController.findPetBreed);
routes.get('/pets/:id', PetController.findPetById);
routes.get('/pets', PetController.findAllPets);
routes.delete('/pets/:id', PetController.delete);



export default routes;