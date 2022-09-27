const jwt = require('jsonwebtoken')
require('dotenv').config();



const checkToken = (request, response, next) => {
    const token = request.headers['authorization']
    const SECRET = process.env.JWT_SECRET;

    if (!token) {
        return response.status(401).json({ message: "Token not found" })
    }

    try {
        const user = jwt.verify(token, SECRET)
        if (!user) {
            return response.status(401).json({ message: "Expired or invalid token" })
        }
        next()
    }
    catch (error) {
        return response.status(401).json({ message: "Expired or invalid token" })
    }

}


module.exports = { checkToken };