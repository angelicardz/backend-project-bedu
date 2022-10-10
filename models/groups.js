const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./students');
const Subject = require('./subjects');

const Group = sequelize.define('Group', {
    name_group: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
});

Group.hasMany(Student);
Student.belongsTo(Group);

Group.hasMany(Subject);
Subject.belongsTo(Group);

module.exports = Group;