module.exports = {
  app: {
    hostname: process.env.HOSTNAME,
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    define: {
      timestamps: false
    },
    dialectOptions: {
      decimalNumbers: true,
    },
  },
};
