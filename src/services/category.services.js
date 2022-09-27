const { Category } = require('../models');

const getCategory = async () => {
    const category = await Category.findAll({ attributes: { exclude: ['password'] } }); 
    return category;
};

module.exports = { getCategory };
