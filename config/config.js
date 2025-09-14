// config/config.js
import 'dotenv/config';

export default {
  development: {
    username: "root",
    password: "P@ssW0rd",
    database: "students_db",
    host: "localhost",
    dialect: "mysql"
  },

  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
  }
};
