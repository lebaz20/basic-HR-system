require("@babel/register");
require("dotenv").config();

const config = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: true,
    migrationStorageTableName: "migrations"
  }
};

module.exports = config;
