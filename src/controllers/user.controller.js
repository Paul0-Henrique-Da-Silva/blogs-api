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

const getUsers = async (_request, response) => {
    const result = await userServices.getUsers();
    return response.status(200).json(result);
};

const getUsersById = async (request, response) => {
    const user = await userServices.getUsersById(request.params);
    if (!user) return response.status(404).json({ message: 'User does not exist' });
    return response.status(200).json(user);
};

module.exports = { creater, getUsers, getUsersById };
