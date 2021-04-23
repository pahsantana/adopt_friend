import {DataTypes, Model} from 'sequelize';

class Address extends Model{

  static init(sequelize){
    super.init({
      uf: DataTypes.STRING,
      city: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      cep: DataTypes.STRING,
    }, {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as:'user'});
  }
}

export default Address;