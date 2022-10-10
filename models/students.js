const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Grade = require('./grades');



const Student = sequelize.define('Student');

Student.hasMany(Grade);
Grade.belongsTo(Student);



module.exports = Student;