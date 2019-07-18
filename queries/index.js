const $ = require('config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize($.db);

const { getModel, createModel, updateModel, deleteModel, } = require('./ping')(sequelize);

module.exports = {
  getModel,
  createModel,
  updateModel,
  deleteModel,
};
