const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Group = sequelize.define('Group', {
    name_group: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
});

module.exports = Group;