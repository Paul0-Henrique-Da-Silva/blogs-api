'use strict';
// https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addColumn(
        'users',
        'password',
        {
          allowNull: false,
          type: Sequelize.STRING,
          after: 'email',
        }
      ),

      await queryInterface.addColumn(
        'users',
        'image',
        {
          allownull: false,
          type: Sequelize.STRING,
          after: 'password',
        }
      )

    ]);
  },

  down: async (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.removeColumn('users', 'password'),
        queryInterface.removeColumn('users', 'image')
      ])
  }
};
