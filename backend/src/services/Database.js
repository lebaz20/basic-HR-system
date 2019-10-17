import Sequelize from "sequelize";
// eslint-disable-next-line no-unused-vars
import sql from "mysql2"; // Required for webpack DO NOT REMOVE

export const connect = () => {
  const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 1,
      min: 0,
      idle: 1000,
      evict: 1000
    },
    logging: false
  };
  return new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
};

export default { connect };
