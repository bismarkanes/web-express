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

/*
 * [["createdAt","DESC"],["email","ASC"]] -> createdAt DESC, email DESC
 */
const parseOrderByToSqlString = (orderBy) => {
  return orderBy.map(item => item.join(' ')).join(',');
};

module.exports = {
  getSqlConnection,
  releaseSqlConnection,
  parseOrderByToSqlString,
};
