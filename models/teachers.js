const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Subject = require('./subjects');
const User = require('./users');

const Teacher = sequelize.define('Teacher');

Teacher.hasMany(Subject);
Subject.belongsTo(Teacher);

Teacher.hasOne(User);
User.belongsTo(Teacher);


module.exports = Teacher;