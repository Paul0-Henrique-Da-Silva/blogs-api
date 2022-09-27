const userServices = require('../services/user.services');

const creater = async (request, response) => {
    try {
        const result = await userServices.creater(request.body);
         if (result) {
            return response.status(result.code).json(result);
        }
    } catch (err) {
        return response.status(500).json('service erro');
    }
};

const getUsers = async (_request, response, next) => {
    try {
        const posts = await userServices.getUsers();
        return response.status(200).json(posts);
      } catch (error) {
        next(error);
      }
};

module.exports = { creater, getUsers };
