const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Subject = require('./subjects');


const Teacher = sequelize.define('Teacher');

Teacher.hasMany(Subject);
Subject.belongsTo(Teacher);




module.exports = Teacher;