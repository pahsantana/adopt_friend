import * as Yup from "yup";

import {Op} from 'sequelize'
import Pet from '../models/Pets';
import User from '../models/Users';

class PetController{

    async index(req, res){
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'pet'}
        });
        
        if(!user){
            res.status(400).json({error: "Usuário não existe"})
        }

        return res.json(user)
    }

    async store(req, res){

        const {user_id} = req.params;
        const {name, age, size, breed, weight, vaccine, castration, microchip, is_adopted} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: "Usuario não existe"})
        }

         const pet = await Pet.create({
             name,
             age,
             size,
             breed,
             weight,
             vaccine,
             castration,
             microchip,
             is_adopted,
             user_id
         })

        return res.json(pet);
    };

    async findAllPets(req, res) {

        const pets = await Pet.findAll({ where: null });
        if (pets.length < 1)
            return res.json({ message: "Nenhum pet foi cadastrado." });
        return res.json(pets);
    }

    async findPetById(req, res) {
        const pet = await Pet.findOne({ where: { id: req.params.id } });

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async findPetByAdopt(req, res) {

        
        const pet = await Pet.findAll({where: {is_adopted:false}});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async findPetByVaccine(req, res) {

        
        const pet = await Pet.findAll({where: {vaccine:true}});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async findPetByMicrochip(req, res) {

        
        const pet = await Pet.findAll({where: {microchip:true}});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }
    
    async findPetByCastration(req, res) {

        
        const pet = await Pet.findAll({where: {castration:true}});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async findPetBySize(req, res) {

        const size = req.query.size;

        let condition = size ? { size: {[Op.like]: `%${size}%`}} : null;
        
        const pet = await Pet.findAll({where: condition});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async findPetBreed(req, res) {

        const breed = req.query.breed;

        let condition = breed ? { breed: {[Op.like]: `%${breed}%`}} : null;
        
        const pet = await Pet.findAll({where: condition});

        if (!pet) {
            return res.status(400).json({ error: "Pet não encontrado!" });
        }

        return res.status(200).json(pet);
    }

    async update(req,res){

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            age: Yup.number(),
            size: Yup.string(),
            breed: Yup.string(),
            weight: Yup.number(),
            vaccine: Yup.boolean(),
            castration: Yup.boolean(),
            microchip: Yup.boolean(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha ao validar.' });
        }

        const pet = await Pet.findByPk(req.params.id);

        const { name, age, size, breed, weight, vaccine, castration, microchip } = await pet.update(req.body);

        return res.json({
            name,
            age,
            size,
            breed,
            weight,
            vaccine,
            castration,
            microchip
        });
    }

    async delete(req, res) {
        try {
          const pet = await Pet.findByPk(req.params.id);
    
          await pet.destroy();
    
          return res.status(200).json({message: `Pet ${req.params.id} foi deletado`});
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }
}
export default new PetController();