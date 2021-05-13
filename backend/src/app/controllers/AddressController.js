import User from '../models/Users';
import Address from '../models/Addresses';

class AddressController {

    async index(req,res){

        let {name, email,address} = await User.findByPk(req.userId, {

            include: { association: 'address'}
                 
        });
     
        const {uf, city, logradouro, number, complement, cep} = address;
        
        return res.status(200).json({
            name,
            email,
            uf, 
            city,
            logradouro,
            number,
            complement,
            cep
        });
    }

    async store(req, res) {

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

        const address = await Address.findByPk(req.params.id);

        const {uf, city, logradouro, number, complement, cep} = await address.update(req.body);

        res.status(200).json({
            uf, 
            city, 
            logradouro, 
            number, 
            complement, 
            cep
        });

    }

    async delete(req, res) {
        try {
          
          const address = await Address.findByPk(req.params.id);
    
          await address.destroy();
    
          return res.status(200).json({message: `Endereço ${req.params.id} foi deletado`});
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

}

export default new AddressController();