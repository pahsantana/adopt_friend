import * as Yup from "yup";
import User from '../models/Users';

class UserController {

    async index(req,res){
        const users = await User.findAll();

        return res.json(users);
    }

    async store(req, res) {

        const userExists = await User.findOne({ where: { cpf: req.body.cpf } })
       
        if (userExists) {
            return res.status(400).json({ error: `CPF ${req.body.cpf} já está cadastrado` })
        }
        
        const { id, name, cpf, email, phone} = await User.create(req.body);

        return res.json({
            id,
            name,
            cpf,
            email,
            phone
        })

    }

    async update(req,res){

        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword:Yup.string().min(6),
            password: Yup.string().min(6).when('oldPassword',(oldPassword,field)=>
                oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().when('password',(password, field)=>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha ao validar.' });
        }

        const {email,oldPassword} = req.body;

        const user = await User.findByPk(req.params.id);

        if(email && email != user.email){
            const userExists = await User.findOne({ where: {email}});

            if(userExists){
                return res.status(400).json({error: 'Usuário já existe'})
            }
        }

        if(oldPassword && !(await user.checkPassword(oldPassword))){
            return res.status(401).json({error: "Senha não corresponde"});
        }

        const { id, name,cpf,phone } = await user.update(req.body);

        return res.json({
            id,
            name,
            cpf,
            email,
            phone
        });
    }


    async delete(req, res){

        try {
            const user = await User.findByPk(req.params.id);
      
            await user.destroy();
      
            return res.status(200).json({message: `Usuario ${req.params.id} foi deletado`});
          } catch (err) {
            return res.status(400).json({ error: err.message });
          }

    }

}

export default new UserController();