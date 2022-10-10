const crypto = require('crypto');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./students');
const Teacher = require('./teachers');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');


const User = sequelize.define('User', {
    name: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    last_name: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_hash: {
        type: DataTypes.CHAR(64),
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.CHAR(64),
        allowNull: true,
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

});

User.createPassword = function(plainText) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(plainText, salt, 10000, 512, "sha512")
        .toString("hex");
    return {salt: salt, hash: hash}
}

User.validatePassword = function(password, user_salt, user_hash) {
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
        .toString("hex");
    return user_hash === hash;
}

User.generateJWT = function(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60); // En 2 meses

    return jwt.sign({
        user: user.username,
        exp: parseInt(exp.getTime() / 1000) // En segundos
    }, secret);
}

User.hasOne(Student);
Student.belongsTo(User);

User.hasOne(Teacher);
Teacher.belongsTo(User);

module.exports = User;