import Pet from '../models/Pet';
import User from '../models/User';
import User from '../models/User';

class PetController{

    async index(req, res){
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'pets'}
        });
        
        if(!user){
            res.status(400).json({error: "Usuário não existe"})
        }

        return res.json(user)
    }


    async store(req, res){

        const {user_id} = req.params;
        const {name, age, size, breed} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: "Usuario não existe"})
        }

         const pet = await Pet.create({
             name,
             age,
             size,
             breed,
             user_id
         })

        return res.json(pet);
    };
};

export default new PetController();