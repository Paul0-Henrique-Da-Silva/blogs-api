// https://stackoverflow.com/questions/29652538/sequelize-js-timestamp-not-datetime

const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTablet = sequelize.define('BlogPost', {
        id: DataTypes.INTERGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTERGER,
        published: DataTypes.TIMESTAMP,
        update: DataTypes.TIMESTAMP,
    });

    BlogPostSchema.associete = (models) => {
        BlogPostSchema.belongsTo(models.User,
            {
                as: 'user',
                foreingKey: 'userId'
            })
    }

    return BlogPostTablet
}

module.exports = BlogPostSchema;
