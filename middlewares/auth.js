const { User } = require("../models");
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

// const { users } = require('../controllers')
// console.log(users)


const auth = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(" ");

    
    try {
        if (bearer !== 'Bearer') {
            res.status(401).json({
            status: 'unauthorized',
            code: 401,
            message: 'Not authorized bearer'
        })
        }

    const { id } = await jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user||!user.token) {
        res.status(401).json({
            status: 'unauthorized',
            code: 401,
            message: 'Not authorized'
        })
    }
         req.user = user;
    next();

       
    } catch (error) {
        if (error.message === 'Invalid signature') {
            error.status = 401;
        }
        next(error);
    }

   
    
};

module.exports = {auth};