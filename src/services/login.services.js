const Joi = require('joi')
const jwt = require('jsonwebtoken')
const { User } = require('../models/User')

// https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages

const userLogin = Joi.object({
    password: Joi.string().required()
    .label("Some required fields are missing"),
    // .error(() => {
    //     return {
    //         message: "Some required fields are missing"
    //     }
    // }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .label("Some required fields are missing")
        // .error(() => {
        // return {
        //     message: "Some required fields are missing"
        // }
        // })
})

const login = async ({ email, password }) => {
    const { error } = userLogin.validate({ email, password })
    if (error)
        return { code: 400, message: error.message }

    const exists = await User.findOne({where: { email }})
    if (!exists) return { code: 400, message: 'Invalid fields' }

    try {
        const SECRET = process.env.JWT_SECRET
        const token = jwt.sign({ data: email }, SECRET, { expiresIn: 3600 })
        return { code: 200, message: { message: token } }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login }