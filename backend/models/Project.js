const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  name: DataTypes.STRING,
  tenantId: DataTypes.STRING
});

module.exports = Project;
