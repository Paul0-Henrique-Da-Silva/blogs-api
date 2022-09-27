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
    try {
        const result = await userServices.getUsers()
        return response.status(200).json(result)
    } catch (err) {
        return response.status(500).json('erro services')
    }
}

module.exports = { creater , getUsers};
