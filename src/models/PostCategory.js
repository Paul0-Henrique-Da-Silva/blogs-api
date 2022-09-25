//https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize
const PostCategoriesSchema = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('PostCategory', {
            postId: {
              type: DataTypes.INTEGER,
              foreignKey: true,
            },
            categoryId: {
              type: DataTypes.INTEGER,
              foreignKey: true,
            },
          },
          {
            tableName: 'posts_categories',
            timestamps: false,
            underscored: true,

        },

        PostCategoriesSchema.associate = ({ Category, BlogPost}) => {
            BlogPost.belongsToMany(models.Category, {
                through: PostCategories, // Parent_Child',
                foreignKey: 'postId', //  'Parent_parentId',
                otherKey: 'categoryId',
                as: 'blogPosts'
            });
            Category.belongsToMany(models.BlogPost, {
                through: PostCategories, 
                foreignKey: 'categoryId',
                otherKey: 'postId',
                as: 'categories'
            })
        })
};

module.exports = PostCategoriesSchema;
