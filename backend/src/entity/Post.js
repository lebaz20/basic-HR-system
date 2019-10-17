import { DataTypes } from "sequelize";
import { connect } from "../services/Database";

export const TYPES = {
  BENEFIT: "BENEFIT",
  NEWS: "NEWS"
};

export const properties = {
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
};

export default () => {
  const sequelize = connect();

  return sequelize.define("post", properties, {
    tableName: "post",
    timestamps: false
  });
};
