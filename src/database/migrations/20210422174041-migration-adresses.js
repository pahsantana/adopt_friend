'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id',
        },
        OnUpdate:'CASCADE',
        OnDelete:'CASCADE',
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
    });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('addresses');
  }
};

