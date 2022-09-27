const jwt = require('jsonwebtoken')
require('dotenv').config();



const checkToken = (request, response, next) => {
     const authHeader  = request.headers[ 'authorization']
     const token = authHeader && authHeader.split(" ")[1]
    const SECRET = process.env.JWT_SECRET;

    if (!token) {
        return response.status(401).json({ message: "Token not found" })
    }

    try {
        jwt.verify(token, SECRET)
        next()
        }
    catch (error) {
         return response.status(401).json({ message: "Expired or invalid token" })
    }
    
}


module.exports = { checkToken };