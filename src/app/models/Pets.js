module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pets', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    vaccine: DataTypes.BOOLEAN,
    castration: DataTypes.BOOLEAN,
    microchip: DataTypes.BOOLEAN,
    size: DataTypes.STRING,
    id_image: DataTypes.INTEGER,
    is_adopted: DataTypes.BOOLEAN,
    id_event: DataTypes.INTEGER,
  }, {});

  Pet.associate = function (models) {
    Pet.hasMany(models.Events, { foreignKey: 'id_event'})
  };

  return Pet;
};

// import Sequelize, {Model} from 'sequelize';

// class Pet extends Model{

//         static init(sequelize){
//             super.init({
//               name: Sequelize.STRING,
//               age:  Sequelize.TINYINT,
//               breed: Sequelize.STRING,
//               Weight: Sequelize.STRING,
//               Size: Sequelize.FLOAT,
//             })
//         }
// }

// export default Pet;