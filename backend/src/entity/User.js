import { DataTypes } from "sequelize";
import { connect } from "../services/Database";

export const POSITIONS = {
  HR_ASSISSTANT: "HR assistant",
  OTHER: "other"
};

export const DEPARTMENTS = {
  HR: "HR",
  OTHER: "other"
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
};

export default () => {
  const sequelize = connect();

  return sequelize.define("user", properties, {
    tableName: "user",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["email"]
      }
    ]
  });
};
