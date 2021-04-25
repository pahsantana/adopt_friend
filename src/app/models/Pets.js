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
            microchip: DataTypes.BOOLEAN,
            is_adopted: DataTypes.BOOLEAN,
        },{
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as:'user'});
      }
}

export default Pet;