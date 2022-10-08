const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Subject = sequelize.define("Subject", {
  name: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    unique: true,
  },
  credits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Subject;
