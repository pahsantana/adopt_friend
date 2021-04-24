import * as Yup from "yup";
import User from '../models/Users';

class UserController {

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async store(req, res) {

        if (!req.body.name) {
            return res.status(400).json({
                ERROR: "Nome é obrigatório",
                request: {
                    name: "Nome"
                }
            });
        }

        if (!req.body.cpf) {
            return res.status(400).json({
                ERROR: "CPF é obrigatório",
                request: {
                    cpf: "CPF podendo utilizar caracteres especiais XXX.XXX.XXX-XX"
                }
            });
        }

        if (!req.body.email) {
            return res.status(400).json({
                ERROR: "E-mail é obrigatório",
                request: {
                    email: "email@email.com"
                }
            });
        }

        if (!req.body.phone) {
            return res.status(400).json({
                ERROR: "Telefone é obrigatório",
                request: {
                    phone: "eu telefone (XXX)XXXXX-XXXX"
                }
            });
        }
        if (!req.body.password) {
            return res.status(400).json({
                ERROR: "A senha é obrigatória",
                request: {
                    password: "senha"
                }
            });
        }

        const userExists = await User.findOne({ where: { cpf: req.body.cpf } })

        if (userExists) {
            return res.status(400).json({ error: `CPF ${req.body.cpf} já está cadastrado` })
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

<<<<<<< HEAD
    async findUserByCpf  (req, res) {
        const user = await User.findOne({
            where: { cpf: req.body.cpf },
        });
=======
    //     return res.status(200).json(user);
    // }
>>>>>>> 1ddddafba24fc8d6b1869764876323bf39344346

    // async findUserByCpf(req, res) {
    //     const user = await User.findOne({
    //         where: { cpf: req.body.cpf },
    //     });

<<<<<<< HEAD
        return res.status(200).json(user);
    }
=======
    //     if (!user) {
    //         return res.status(400).json({ error: "Usuário não encontrado!" });
    //     }

    //     return res.status(200).json(user);
    // }
}
>>>>>>> 1ddddafba24fc8d6b1869764876323bf39344346

    



export default new UserController();