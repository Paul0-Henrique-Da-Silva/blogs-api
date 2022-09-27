const postServices = require('../services/post.services');

const getPost = async (_request, response) => {
    const result = await postServices.getPost();
    return response.status(200).json(result);
};

module.exports = { getPost };
