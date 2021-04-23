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

    async findAllUsers(req, res) {

        const users = await User.findAll({ where: null });
        if (users.length < 1)
            return res.json({ message: "Nenhum usuário foi cadastrado." });
        return res.json(users);
    }

    async findUserById(req, res) {
        const user = await User.findOne({ where: { id: req.params.id } });

        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado!" });
        }

        return res.status(200).json(user);
    }

    async findUserByCpf(req, res) {
        const user = await User.findOne({
            where: { cpf: req.body.cpf },
        });

        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado!" });
        }

        return res.status(200).json(user);
    }
}
//   exports.delete = (req, res) => {
//     const id = req.params.id;

//     Tutorial.destroy({where: {id : id}})
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial apagado com sucesso"
//         });
//       } else {
//         res.send({
//           message: `Não foi possível apagar o tutorial de id: ${id}, tutorial não encontrado ou body vazio`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: `Erro interno ao apagar o tutorial de id: ${id}`
//       })
//     })
//   }

export default new UserController();