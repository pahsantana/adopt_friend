import { Sequelize } from 'sequelize';
import  databaseConfig  from '../config/database';
import  User  from '../app/models/Users';
import Address from '../app/models/Addresses';
import Pet from '../app/models/Pets';
import File from '../app/models/File';
<<<<<<< HEAD
// import Event from '../app/models/Events'
=======
import databaseConfig from '../config/database';
>>>>>>> d740b2dcf45c18159bafd198028af3b0e0ae239d

const models = [User,Address, Pet, File];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); 

        models.map( model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
        
       }
}

export default new Database();  