//https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize

const PostCategoriesSchema = (sequelize, Daatypes) => {
    const PostCategories = sequelize.define('PostCategory', {
            timestamps: false,
        },

        PostCategoriesSchema.associate = (models) => {
            models.BlogPost.belongsToMany(models.Category, {
                through: PostCategories, // Parent_Child',
                foreignKey: 'postId', //  'Parent_parentId',
                // otherKey: 'categoryId',
            });
            models.Categories.belongsToMany(models.BlogPost, {
                through: PostCategories, 
                foreignKey: 'categoryId',
                // otherKey: 'postId'
            })
        })
};

module.exports = PostCategoriesSchema;