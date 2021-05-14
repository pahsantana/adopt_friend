import { Router } from 'express';

import multer from 'multer';
import multerConfig_pet from './config/multer_pet';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import SessionController from './app/controllers/SessionController';
import PetController from './app/controllers/PetController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const upload_pet = multer(multerConfig_pet);

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);
routes.get('/user/:id', UserController.findUserById);

routes.post('/files/pet', upload_pet.single('file'), FileController.store);

routes.get('/users/pets',PetController.index);
routes.post('/users/pets', PetController.store);
routes.get('/pets', PetController.findAllPets);
routes.get('/pets/is_adopted', PetController.findPetByAdopt);
routes.get('/pets/vaccined', PetController.findPetByVaccine);
routes.get('/pets/microchiped', PetController.findPetByMicrochip);
routes.get('/pets/castrated', PetController.findPetByCastration);
routes.get('/pets/size', PetController.findPetBySize);
routes.get('/pets/breed', PetController.findPetBreed);
routes.get('/pets/:id', PetController.findPetById);
routes.delete('/pets/:id', PetController.delete);
routes.put('/pets/:id', PetController.update);

routes.post('/users/address',AddressController.store);
routes.get('/users/:user_id/address',AddressController.index);
routes.put('/address/:id',AddressController.update);
routes.delete('/address/:id',AddressController.delete);

export default routes;