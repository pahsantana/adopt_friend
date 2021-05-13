import * as Yup from "yup";
import User from '../models/Users';
import { userId } from '../middlewares/auth'

class UserController {

    async index(req, res) {
        const users = await User.findByPk(req.userId);

        return res.json({
            name: users.name,
            cpf: users.cpf,
            email: users.email,
            phone: users.phone
        });
    }

    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            cpf: Yup.string().required().length(11),
            email: Yup.string().email().required(),
            phone: Yup.string().required(),
            password: Yup.string().min(6).required(),
            confirmPassword: Yup.string().when('password',(password, field)=>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Cadastro inválido, verifique os item obrigatórios' });
        }

        const userExists = await User.findOne({ where: { cpf: req.body.cpf, email: req.body.email } })

        if (userExists) {
            return res.status(400).json({ error: `Usuário já cadastrado.` })
        }

        const { id, name, cpf, email, phone } = await User.create(req.body);

        return res.json({
            message: "Usuário criado com sucesso",
            user: {
                id,
                name,
                cpf,
                email,
                phone
            }
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

        const user = await User.findByPk(req.userId);

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
      
            ({ where: { user_id: req.userId } })
            await user.destroy();
      
            return res.status(200).json({message: `Usuario ${userId} foi deletado`});
          } catch (err) {
            return res.status(400).json({ error: err.message });
          }

    }
}
    export default new UserController();
    // Passível de implementação - talvez desnecssário


    // async findAllUsers(req, res) {

    //     const users = await User.findAll({ where: null });
    //     if (users.length < 1)
    //         return res.json({ message: "Nenhum usuário foi cadastrado." });
    //     return res.json(users);
    // }

    // async findUserById(req, res) {
    //     const user = await User.findOne({ where: { id: req.params.id } });

    //     if (!user) {
    //         return res.status(400).json({ error: "Usuário não encontrado!" });
    //     }

    //     return res.status(200).json(user);
    // }

    // async findUserByCpf(req, res) {
    //     const user = await User.findOne({
    //         where: { cpf: req.body.cpf },
    //     });

    //     if (!user) {
    //         return res.status(400).json({ error: "Usuário não encontrado!" });
    //     }

    //     return res.status(200).json(user);
    // }


    



