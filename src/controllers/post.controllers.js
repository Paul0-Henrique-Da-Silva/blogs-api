const postServices = require('../services/post.services');

const getPost = async (_request, response) => {
    const result = await postServices.getPost();
    return response.status(200).json(result);
};

const getPostById = async (request, response) => {
    const user = await postServices.getPostById(request.params);
    if (!user) return response.status(404).json({ message: 'Post does not exist' });
    return response.status(200).json(user);
};

module.exports = { getPost, getPostById };
