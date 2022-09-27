const { BlogPost, User, Category } = require('../models');

const getPost = async () => {
    const post = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
          ],
}); 
    return post;
};

const getPostById = async ({ id }) => {
    const post = await BlogPost.findOne({ 
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' }],
        });
    return post;
};

module.exports = { getPost, getPostById };
