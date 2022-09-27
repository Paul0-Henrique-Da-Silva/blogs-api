const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const creteUser = Joi.object({
    displayName: Joi.string().min(8).required()
        .messages({ 'string.empty': '"displayName" length must be at least 8 characters long' }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
        .messages({ 'string.empty': '"email" must be a valid email' }),

    password: Joi.string().min(6).required()
        .messages({ 'string.empty': '"password" length must be at least 6 characters long' }),
    image: Joi.string(),
});

const creater = async ({ displayName, email, password, image }) => {
    const { error } = creteUser.validate({ displayName, email, password });
        if (error) return { code: 400, message: error.message };

    const exitsEmail = await User.findOne({ where: { email } });
       if (exitsEmail) return { code: 409, message: 'User already registered' };

    const result = await User.create({ displayName, email, password, image });

    const SECRET = process.env.JWT_SECRET;

    const token = jwt.sign({ data: result.email }, SECRET, { expiresIn: 3600 });

    return { code: 201, token };
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } }); // deleta o password 
    return users;
};

const getUsersById = async ({ id }) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
};

module.exports = { creater, getUsers, getUsersById };
