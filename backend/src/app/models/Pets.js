import {DataTypes, Model} from 'sequelize';

class Pet extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            city: DataTypes.STRING,
            size: DataTypes.STRING,
            gender: DataTypes.STRING,
            breed: DataTypes.STRING,
            weight: DataTypes.FLOAT,
            vaccine: DataTypes.BOOLEAN,
            castration: DataTypes.BOOLEAN,
            microchip: DataTypes.BOOLEAN,
            url: DataTypes.STRING,
            description: DataTypes.STRING,
        },{
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as:'user'});
        this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar_pet'}); 
    }
}

export default Pet;