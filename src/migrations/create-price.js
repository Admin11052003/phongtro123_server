'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false, 
        primaryKey: true,
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },

      order: {
        type: Sequelize.INTEGER
      },

      value: {
        type: Sequelize.STRING
      },

    
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prices');
  }
};

//npx sequelize db:migrate