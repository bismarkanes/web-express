const models = require('../../models');
const query = models.Pings;
const $ = require('config');

module.exports = {
  getPing: async ({ id, limit = $.pagination.defaultLimit, offset = $.pagination.defaultOffset, } = {}) => {
    let where = {};
    if (id) {
      where.id = id;
      limit = 1;
    }

    return await query.findAll({
      where,
      limit,
      offset,
      raw: true,
    });
  },
  createPing: async ({ name, }) => {
    return await query.create({ name, }, {
      raw: true
    });
  },
  updatePing: async ({ id, name, }) => {
    let where = {
      id,
    };

    return await query.update({ name, }, {
      where,
    });
  },
  deletePing: async ({ id }) => {
    let where = {
      id,
    };

    return await query.destroy({
      where,
    });
  },
};
