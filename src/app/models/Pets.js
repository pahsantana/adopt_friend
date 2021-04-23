import Sequelize, {Model} from 'sequelize';

class Pet extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            size: Sequelize.STRING,
            breed: Sequelize.STRING,
        },{
            sequelize,
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

export default Pet;