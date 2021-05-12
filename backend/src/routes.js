import { Router } from 'express';

import multer from 'multer';
import multerConfig_user from './config/multer_user';
import multerConfig_pet from './config/multer_pet';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';
import SessionController from './app/controllers/SessionController';
import PetController from './app/controllers/PetController';
import FileController from './app/controllers/FileController';
//import EventController from './app/controllers/EventController';

import authMiddleware from './app/middlewares/auth';
const upload_user = multer(multerConfig_user);
const upload_pet = multer(multerConfig_pet);

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.use(authMiddleware);
routes.post('/files/user', upload_user.single('file'), FileController.store);
// routes.post('/files/:user_id', upload_user.single('file'), FileController.store);
routes.post('/users/:user_id/address',AddressController.store);
routes.get('/users/:id', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/users/:user_id/address',AddressController.index);
routes.put('/address/:id',AddressController.update);
routes.delete('/address/:id',AddressController.delete);

routes.post('/users/:user_id/pets',PetController.store);
// routes.post('/files/:pet_id', upload_pet.single('file'), FileController.store);
routes.post('/files/pet', upload_pet.single('file'), FileController.store);
routes.get('/users/:user_id/pets',PetController.index);
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