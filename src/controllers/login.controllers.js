const loginSevices = require('../services/login.services')

 const login = async (request, response) => {
    // const { email, password } = request.body
    try {
        const result = await loginSevices.login(request.body)
        return response.status(result.code).json(result)
    } catch (error) {
        return response.status(500).json({ message: error.message })
    }
 }

module.exports = { login }
