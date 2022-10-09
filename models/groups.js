const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Student = require('./students');

const Group = sequelize.define('Group', {
    name_group: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
});

Group.hasMany(Student);
Student.belongsTo(Group);

module.exports = Group;