const sequelize = require('../db');

const { getModel, createModel, updateModel, deleteModel, } = require('./ping')(sequelize);

module.exports = {
  getModel,
  createModel,
  updateModel,
  deleteModel,
};
