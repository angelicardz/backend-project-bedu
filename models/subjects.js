const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Grade = require("./grades");

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

Subject.hasMany(Grade);
Grade.belongsTo(Subject);

module.exports = Subject;
