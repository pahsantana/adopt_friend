'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // id_pet:{
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model: 'Pets',
      //     key: 'id'
      //   }
      // },
      // id_event:{
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model: 'Events',
      //     key: 'id'
      //   }
      // },
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
    return queryInterface.dropTable('users');
  }
};
