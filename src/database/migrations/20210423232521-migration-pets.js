'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      size: {
        type: Sequelize.STRING,
      },
      breed: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      vaccine: {
        type: Sequelize.BOOLEAN,
      },
      castration: {
        type: Sequelize.BOOLEAN,
      },
      microchip: {
        type: Sequelize.BOOLEAN,
      },
      is_adopted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
  }
};