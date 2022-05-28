"use strict";
const jwt = require('jsonwebtoken');

const Token = class Token {
    
    constructor() 
    {
    }

    signToken(user) {
        return jwt.sign(
            {
                username: user.username,
                userId: user._id,
            },
            process.env.JWT_KEY,
            {
                expiresIn: process.env.TOKEN_LIVE
            }
        );
    }

    verifyToken(token) {
        return jwt.verify(token, process.env.JWT_KEY,);
    }
}

module.exports = Token;