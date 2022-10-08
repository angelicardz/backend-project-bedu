const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Teacher = require('./teachers');
const Subject = require('./subjects');

const Teacher = sequelize.define('Teacher', {
    name: {
        type: DataTypes.CHAR(64),
        allowNull: false
    },
    surname: {
        type: DataTypes.CHAR(64),
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
});

Teacher.hasMany(Subject);
Subject.belongsTo(Teacher);

module.exports = Teacher;