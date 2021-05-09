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
<<<<<<< HEAD:src/database/migrations/20210423232521-migration-pets.js
=======
        defaultValue: false,
>>>>>>> bbbdbd01e42e62ed4f89e41ef734c49d5dc7bdaf:src/database/migrations/20210423224426-migration-pets.js
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
