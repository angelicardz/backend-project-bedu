const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    surname: {
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
    }

});

module.exports = Student;