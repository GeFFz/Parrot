const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Users = db.define(
  "Users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    apartment: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    permission: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "users",
  }
);
