const queries = require('../../queries/pings');
const { pageLengthToOffsetLimit, } = require('../../utility');

const getPing = async (req, res) => {
  let pagination = pageLengthToOffsetLimit({ page: req.query.page, length: req.query.length, });

  if (pagination) {
    var offset = pagination.offset;
    var limit = pagination.limit;
  }

  res.JSON({ payload: await queries.getPing({ id: req.params.id, offset, limit }), });
};

const updatePing = async (req, res) => {
  res.JSON({
    payload: await queries.updatePing({
      id: req.params.id,
      name: req.body.name,
    })
  });
};

const createPing = async (req, res) => {
  res.JSON({ payload: await queries.createPing({ name: req.body.name }), });
};

const deletePing = async (req, res) => {
  res.JSON({ payload: await queries.deletePing({ id: req.params.id, }), });
};

module.exports = {
  getPing,
  updatePing,
  createPing,
  deletePing,
};
