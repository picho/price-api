const Token = require('../models/Token');

module.exports = (req, res, next) => {

    try {
        const token = new Token();
        token.verifyToken(req.headers.authorization.split(' ')[1]);
        next();
    }
    catch(error) {
        if (error.name === "TokenExpiredError"){
            return res.status(418).json({
                message: 'Auth failed'
            });
        }
        else {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
    }
};
