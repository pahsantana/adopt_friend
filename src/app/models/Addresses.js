module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('addresses', {
      uf: DataTypes.STRING,
      city: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      cep: DataTypes.STRING,
      id_user: DataTypes.INTEGER
    }, {});
    Address.associate = function (models) {
      Address.hasMany(models.Users,{foreignKey:'id_user'})
    };
    return Address
  };