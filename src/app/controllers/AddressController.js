import User from '../models/Users';
import Address from '../models/Addresses';

class AddressController {

    async index(req,res){

        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {

            include: { association: 'address'}

        });

        return res.status(200).json(user);
    }

    async store(req, res) {
        const {user_id} = req.params;
    
        const {uf, city, logradouro, number, complement, cep} = req.body;
    
        const address = await Address.create({
            uf,
            city, 
            logradouro, 
            number, 
            complement, 
            cep,
            user_id
        })
        
        return res.json(address);

    }

    async update(req,res){

        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {

            include: { association: 'address'}

        });

        return res.status(200).json(user);
    }

}

export default new AddressController();