'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**id 	title 	content 	user_id 	published 	updated*/
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allownull: false,
        type: Sequelize.STRING,
      }
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
