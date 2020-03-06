const $ = require('config');
const Sequelize = require('sequelize');

(function () {
  let max = typeof process.env.DB_POOL_MAX === 'string' ? parseInt(process.env.DB_POOL_MAX) : undefined;
  let min = typeof process.env.DB_POOL_MIN === 'string' ? parseInt(process.env.DB_POOL_MIN) : undefined;
  let acquire = typeof process.env.DB_POOL_ACQUIRE === 'string' ? parseInt(process.env.DB_POOL_ACQUIRE) : undefined;
  let idle = typeof process.env.DB_POOL_IDLE === 'string' ? parseInt(process.env.DB_POOL_IDLE) : undefined;


  if (max !== undefined && min !== undefined && acquire !== undefined && idle !== undefined )
    $.db.pool = {max, min, acquire, idle, };
}());

const connection = new Sequelize($.db);

connection.authenticate().then((data) => console.log('Connection database success!')).catch((err) => console.error(err));

module.exports = connection;
