const jwt = require('jsonwebtoken')
require('dotenv').config();



const checkToken = (request, response, next) => {
     const { authorization } = request.headers
    const SECRET = process.env.JWT_SECRET;

    if (!authorization) {
        return response.status(401).json({ message: "Token not found" })
    }

    try {
        jwt.verify(authorization, SECRET)
        next()
        }
    catch (error) {
         return response.status(401).json({ message: "Expired or invalid token" })
    }
    
}


module.exports = { checkToken };