
const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
         type: DataTypes.INTEGER, 
         primaryKey: true 
        },
      categoryId: { 
        type: DataTypes.INTEGER, 
        primaryKey: true 
      },
  },
      {
          timestamps: false,
          underscored: true,
          tableName: 'posts_categories'
      },
  );

  PostCategory.associate = ({ Category, BlogPost}) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'postCategories',
    });
  };

  return PostCategory;
};

module.exports = PostCategoriesSchema