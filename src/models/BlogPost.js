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
        underscored: true,
        timestamps: false,
    }
    
    );
   /// or ({ User })
   BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User,
            {
                foreingKey: 'user_id',
                as: 'user'
            })
    }

    return BlogPostTable
}

module.exports = BlogPostSchema;
