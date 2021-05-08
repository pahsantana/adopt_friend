
import {DataTypes, Model} from 'sequelize';

class Event extends Model{

  static init(sequelize){
    super.init({
      is_adopted: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
 /* static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as:'user_event'});
    this.hasOne(models.Pet, { foreignKey: 'pet_id', as:'pet_event'});
  }
  */
}

export default Event;