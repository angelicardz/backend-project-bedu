const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Grade = sequelize.define('Grade', {
    mark: {
        type: DataTypes.FLOAT(4,2),
        allowNull: false
    },
});

module.exports = Grade;