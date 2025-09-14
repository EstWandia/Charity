// config/config.js
import 'dotenv/config';

export default {
  development: {
    username: "root",
    password: "P@ssW0rd",
    database: "students_db",
    host: "localhost",
    dialect: "postgres"
  },

  test: {
    username: "postgres",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },

  production: {
    use_env_variable: "DATABASE_URL",  // Render provides this
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // important for Render
      }
    }
  }
};
