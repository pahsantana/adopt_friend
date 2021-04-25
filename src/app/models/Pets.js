import {DataTypes, Model} from 'sequelize';

class Pet extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            size: DataTypes.STRING,
            breed: DataTypes.STRING,
            weight: DataTypes.FLOAT,
            vaccine: DataTypes.BOOLEAN,
            castration: DataTypes.BOOLEAN,
<<<<<<< HEAD
            microchip: DataTypes.BOOLEAN,
            is_adopted: DataTypes.BOOLEAN,
=======
            microchip: DataTypes.BOOLEAN
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf
        },{
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as:'user'});
<<<<<<< HEAD
=======
        // this.belongsTo(models.Event, { foreignKey: 'event_id', as:'event'});
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf
      }
}

export default Pet;