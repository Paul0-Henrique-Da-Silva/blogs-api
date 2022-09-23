'use strict';
//https://pt.stackoverflow.com/questions/447920/relacionamento-entre-tabelas-com-sequelize
// maneira mais simplista de relacionar tabelas

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('blog_post', {
     id:  {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
    title : {
       allownull: false,
       type: Sequelize.STRING 
    },
    content: {
      allownull: false,
      type: Sequelize.STRING 
    },
    userId: {
      allowNull: false,
      field: 'user_id',
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: { model: 'users', key: 'id' }
    },
    published: {
      type: Sequelize.DATE,  
      defaultValue: Sequelize.NOW
    },
    updated: {
      type: Sequelize.DATE,  
      defaultValue: Sequelize.NOW
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_post');
  }
};
