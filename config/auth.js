const secret = require('./secret');
const { expressjwt } = require('express-jwt');
const User = require('../models/users');

//Bearer <JWT>
function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
}

const auth = {
    required: function (req, res, next) {
        if (!req.auth || !req.auth.rol) {
            return res.sendStatus(401);
        }
        next();
    },
    isAdmin: async (req, res, next) => {
        const email = req.auth.user;
        const user = await User.findOne({ where: { email: email } });
        const rol = user.rol
        if (!req.auth) {
            return res.sendStatus(401);
        }
        if (rol !== 0) {
            console.log("Eres un Estudiante")
            return res.sendStatus(403);
        }
        next();
    },
    isTeacher: async (req, res, next) => {
        const email = req.auth.user;
        const user = await User.findOne({ where: { email: email } });
        const rol = user.rol
        if (!req.auth) {
            return res.sendStatus(401);
        }
        if (rol !== 1) {
            console.log("Eres un profesor")
            return res.sendStatus(403);
        }
        next();
    },
    isStudent: async (req, res, next) => {
        const email = req.auth.user;
        const user = await User.findOne({ where: { email: email } });
        const rol = user.rol
        if (!req.auth) {
            return res.sendStatus(401);
        }
        if (rol !== 2) {
            console.log("Eres un Estudiante")
            return res.sendStatus(403);
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
