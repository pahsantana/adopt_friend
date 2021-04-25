import {DataTypes, Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
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

    static associate(models) {
        this.hasOne(models.Address, { foreignKey: 'user_id', as:'address'});
<<<<<<< HEAD
    }

    static associate(models){
        this.hasMany(models.Pet, {foreignKey: 'user_id', as: 'pet'})
    }

    checkPassword(password){
=======
        this.hasMany(models.Pet, {foreignKey: 'user_id', as: 'pet'});
        this.belongsTo(models.File, { foreignKey: 'avatar_id' });
        
        }
    
        // this.hasMany(models.Event, {foreignKey: 'user_id', as: 'event'})
    
    checkPassword(password) {
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf
        return bcrypt.compare(password, this.password_hash);
    };
}

export default User;