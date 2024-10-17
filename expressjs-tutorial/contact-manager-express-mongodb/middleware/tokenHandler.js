const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async (req, res, next) => {
    let token
    let authHeader = req.headers.Authorization || req.headers.authorization
    //The token looks like "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiTW9oaXQiLCJlbWFpbCI6Im1vaGl0IiwiaWQiOiI2NzExMTJjZTEzOTM2OGIwNGU3ZTA5YjIifSwiaWF0IjoxNzI5MTc1NTk1LCJleHAiOjE3MjkxNzU2NTV9.LPwvnyUfhzXCd__TiwFtI_0bYcAWDa7pVY5cm4YcERs"
    //Lets get the token
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1] //[0] contains the keyword "Bearer"
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
            if (error) {
                res.status(401)
                throw new Error("User not authorized")
            }
            req.user = decoded.user
            next()
        })
    }
    if (!token) {
        res.status(401)
        throw new Error("User not authorized or token is missing")
    }

})

module.exports = validateToken