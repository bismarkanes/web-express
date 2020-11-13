module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false
    },
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false
    },
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false
    },
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  },
};
