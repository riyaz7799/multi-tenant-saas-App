const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
  tenantId: DataTypes.STRING
});

module.exports = Task;
