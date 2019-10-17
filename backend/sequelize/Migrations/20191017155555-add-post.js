/*
This migration creates the post table.
*/
import { DataTypes } from "sequelize";

const TYPES = {
  BENEFIT: "BENEFIT",
  NEWS: "NEWS"
};

export default {
  up: queryInterface =>
    queryInterface.createTable(
      "post",
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
        type: {
          type: DataTypes.ENUM(Object.values(TYPES)),
          allowNull: false
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      }
    ),

  down: queryInterface => queryInterface.dropTable("post")
};
