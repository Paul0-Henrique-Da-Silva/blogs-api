'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('users', 'email',{
       allowNull: false,
       type: Sequelize.STRING,
       after: 'display_name'
      });  
  },


  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'email')
  }
};
