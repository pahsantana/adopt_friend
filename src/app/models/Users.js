// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('users', {
//         name: DataTypes.STRING,
//         cpf: DataTypes.STRING,
//         email: DataTypes.STRING,
//         phone: DataTypes.STRING,
//         password: DataTypes.VIRTUAL,
//         password_hash: DataTypes.STRING,
//         id_pet: DataTypes.INTEGER,
//         id_event: DataTypes.INTEGER,
//     }, {});
    
//     User.associate = function (models) {
//       User.hasMany(models.Pets, { foreignKey: 'id_pet'})
//     };
    
//     User.associate = function (models) {
//       User.hasMany(models.Events, { foreignKey: 'id_event'})
//     };


//     return User
//   };



import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            cpf: Sequelize.STRING,
            email: Sequelize.STRING,
            phone: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            // id_address: Sequelize.INTEGER,
            // id_pet: Sequelize.INTEGER
        }, {
            sequelize, 
        });

        this.addHook('beforeSave', async (user) =>{
            if(user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            };
        });

        return this;
    }

    // static associate(sequelize) {
    //     this.hasMany(sequelize.Models.Pets, { through: 'userroles' });
    

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    };
}

export default User