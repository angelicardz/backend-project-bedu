const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Grade = require('./grades');
const User = require('./users');


const Student = sequelize.define('Student');

Student.hasMany(Grade);
Grade.belongsTo(Student);

Student.hasOne(User);
User.belongsTo(Student);

module.exports = Student;