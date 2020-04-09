const sequelizeConn = require('./index');

/*
 * Get sql connection pool
 */
const getSqlConnection = async () => {
  return await sequelizeConn.connectionManager.getConnection();
};

/*
 * Release sql connection pool
 */
const releaseSqlConnection = async (connection) => {
  return await sequelizeConn.connectionManager.releaseConnection(connection);
};

module.exports = {
  getSqlConnection,
  releaseSqlConnection,
};
