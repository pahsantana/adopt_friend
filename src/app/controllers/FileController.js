import File from '../models/File';

class FileController {
    // async index(req,res){

    //     const {provider,id} = req.params;

    //     if(provider==1){
    //         const users = await User.findOne({where:{id: req.params.id}});
            
    //         let {name, email, files} = await User.findByPk(user_id, {

    //             include: { association: 'files'}
                     
    //         });
            
    //         return res.status(200).json({
                
    //         });
    //     }

       

    //     const {user_id} = req.params;

    //     let {name, email,address} = await User.findByPk(user_id, {

    //         include: { association: ''}
                 
    //     });
     
    //     const {uf, city, logradouro, number, complement, cep} = address;
        
    //     return res.status(200).json({
        
    //     });
    // }

    async store(request, response) {
        const { originalname: name, filename: path } = request.file;

        // const {provider} = request.query;

        const file = await File.create({
            name,
            path,
        });

        return response.json(file);
    }
}

export default new FileController();