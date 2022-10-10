const secret = require('./secret');
const { expressjwt } = require('express-jwt');

//Bearer <JWT>
function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
}

const auth = {
    required: function (req, res, next){
        if(!req.auth || !req.auth.user) {
            return res.sendStatus(401);
        }
        next();
    },
    isTeacher: function (req, res, next) {
        //console.log(req.auth.user);
        if(!req.auth) {
            return res.sendStatus(401);
        }
        if (req.auth.rol === 1) {
            console.log("Eres un profesor")
            return res.sendStatus(200);
        }else{
            console.log("Eres un profesor")
            return res.sendStatus(200);
        }
        next();
    },
    optional: expressjwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
}

module.exports = auth;
