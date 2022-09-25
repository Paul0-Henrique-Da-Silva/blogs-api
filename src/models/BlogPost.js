// https://stackoverflow.com/questions/29652538/sequelize-js-timestamp-not-datetime

const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
          },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },{
        tableName: 'blog_posts',
        timestamps: false,
        underscored: true
    }
    
    );
   /// or ({ User })
   BlogPostTable.associete = (models) => {
    BlogPostTable.belongsTo(models.User,
            {
                foreingKey: 'userId',
                as: 'user'
            })
    }

    return BlogPostTable
}

module.exports = BlogPostSchema;
