import { Sequelize } from 'sequelize';
import  databaseConfig  from '../config/database';
import  User  from '../app/models/Users';
import Address from '../app/models/Addresses';
import Pet from '../app/models/Pets';


const models = [User,Address, Pet];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); 

        models.map( model => model.init(this.connection));

        User.associate(this.connection.models);
        Pet.associate(this.connection.models);
        Address.associate(this.connection.models);
    }
}

export default new Database();