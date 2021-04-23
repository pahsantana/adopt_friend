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

}

// exports.update = (req, res) => {
//     const id = req.params.id;
  
//     Tutorial.update(req.body, {
//       where: {id : id}
//     })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial atualizado"
//         });
//       } else {
//         res.send({
//           message: `Não foi possível atulizar o tutorial de id: ${id}, tutorial não encontrado ou body vazio`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: `Erro interno ao atualizar o tutorial de id: ${id}`
//       })
//     })
//   }
  
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