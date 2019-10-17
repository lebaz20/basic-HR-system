/*
This migration creates the user table.
*/
import { DataTypes } from "sequelize";

const POSITIONS = {
  HR_ASSISSTANT: "HR assistant",
  OTHER: "other"
};

const DEPARTMENTS = {
  HR: "HR",
  OTHER: "other"
};

export default {
  up: queryInterface =>
    Promise.all([
      queryInterface.createTable(
        "user",
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
          email: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
          password: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          position: {
            type: DataTypes.ENUM(Object.values(POSITIONS)),
            allowNull: false
          },
          department: {
            type: DataTypes.ENUM(Object.values(DEPARTMENTS)),
            allowNull: false
          },
          manager: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id"
            },
            allowNull: true
          }
        },
        {
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        }
      ),
      queryInterface.addIndex("user", [], {
        unique: true,
        fields: ["email"]
      })
    ]),

  down: queryInterface => queryInterface.dropTable("user")
};
