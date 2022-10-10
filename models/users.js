const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./students');
const Teacher = require('./teachers');


const User = sequelize.define('User', {
    name: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    last_name: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
    },
    email: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

});

// User.hasOne(Student);
// Student.belongsTo(User);

// User.hasOne(Teacher);
// Teacher.belongsTo(User);

module.exports = User;