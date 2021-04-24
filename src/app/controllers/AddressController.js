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

    async delete(req, res) {
        try {
          
          const address = await address.findByPk(req.params.id);
    
          await address.destroy();
    
          return res.status(200).json({message: `Endereço ${req.params.id} foi deletado`});
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

}

export default new AddressController();