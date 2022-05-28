const mongoose = require('mongoose');
const Token = require('../models/token');

const User = require('../models/user');

exports.login_user = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    User.find({username: username, password: password})
    .then((userFound) => {

        if(userFound.length === 1) {

            if (userFound[0].password === password){
                
                const token = new Token();
                
                res.status(200).json({
                    username: userFound[0].username,
                    BearerToken: token.signToken(userFound[0])
                });
            }
            else
                res.status(401).json({message: "Auth error"});        
        }
        else
            res.status(404).json({message: "User was not found"});
    })
    .catch((err) => {
        res.status(500).json({error:err});
    });
}