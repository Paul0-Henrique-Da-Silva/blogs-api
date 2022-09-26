const createrServices = require('../services/user.services');

const creater = async (request, response) => {
    try {
        const result = await createrServices.creater(request.body);
         if (result) {
            return response.status(result.code).json(result);
        }
    } catch (err) {
        return response.status(500).json('service erro');
    }
};

module.exports = { creater };
