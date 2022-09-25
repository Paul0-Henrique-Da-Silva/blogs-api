const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userLogin = Joi.object({
    password: Joi.string().required(),
    // .error(() => {
    //     return {
    //         message: "Some required fields are missing"
    //     }
    // }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
});

const login = async ({ email, password }) => {
    const { error } = userLogin.validate({ email, password });
    if (error) return { code: 400, message: 'Some required fields are missing' };

    const exists = await User.findOne({ where: { email } });
    if (!exists) return { code: 400, message: 'Invalid fields' };
    try {
        const SECRET = process.env.JWT_SECRET;
        const token = jwt.sign({ data: email }, SECRET, { expiresIn: 3600 });
        return { code: 200, message: { token } };
    } catch (err) {
        console.log(error);
    }
};

module.exports = { login };