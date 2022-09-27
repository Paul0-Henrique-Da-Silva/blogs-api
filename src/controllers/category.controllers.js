const categoryServices = require('../services/category.services');

const getCategory = async (_request, response) => {
    const result = await categoryServices.getCategory();
    return response.status(200).json(result);
};

module.exports = { getCategory };
