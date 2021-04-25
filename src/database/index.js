import { Sequelize } from 'sequelize';
import  databaseConfig  from '../config/database';
import  User  from '../app/models/Users';
import Address from '../app/models/Addresses';
import Pet from '../app/models/Pets';
<<<<<<< HEAD


const models = [User,Address, Pet];
=======
import File from '../app/models/File';
// import Event from '../app/models/Events'
import databaseConfig from '../config/database';

const models = [User,Address, Pet, File];
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); 

<<<<<<< HEAD
        models.map( model => model.init(this.connection));

        User.associate(this.connection.models);
        Pet.associate(this.connection.models);
        Address.associate(this.connection.models);
    }
=======
        models.map( model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
        
       }
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf
}

export default new Database();