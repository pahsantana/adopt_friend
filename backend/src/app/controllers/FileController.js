import File from '../models/File';

class FileController {

    async store(request, response) {
        const { originalname: name, filename: path } = request.file;

        const file = await File.create({
            name,
            path,
        });

        return response.json(file);
    }

    async retrive(request, response) {
        const { filename: path } = request.file;
    
        const file = await File.findOne({
          path,
        });
      }
}

export default new FileController();