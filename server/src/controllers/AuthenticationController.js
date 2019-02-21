const {
    User
} = require('../models')

const jwt = require('jsonwebtoken');
const config = require('../config');

function jwtSignUser (user) {
    const WEEK =60*60*24*7;
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn: WEEK
    });
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: "This email account is already in use",
            });
        }
    },
    async login(req, res) {
        try {
            const {
                email,
                password
            } = req.body

            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password;

            const userJson = user.toJSON()

            if(isPasswordValid){
                return res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            } else {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
        } 
        catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }
    }
}