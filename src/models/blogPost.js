// https://stackoverflow.com/questions/29652538/sequelize-js-timestamp-not-datetime

const BlogPostShema = (sequelize, DataTypes) => {
    const BlogPostTablet = sequelize.define('BlogPost', {
        id: DataTypes.INTERGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTERGER,
        published: DataTypes.TIMESTAMP,
        update: DataTypes.TIMESTAMP,
    });

    BlogPostShema.associete = (models) => {
        BlogPostShema.belongsTo(models.Users,
            {
                as: 'user',
                foreingKey: 'userId'
            })
    }

    return BlogPostTablet
}

module.export = BlogPostShema;