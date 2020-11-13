const queries = require('../../queries/pings');

const getPing = async (req, res) => {
  res.json(await queries.getPing());
};

const updatePing = async (req, res) => {
  res.json(await queries.updatePing({
    id: req.params.id,
    name: req.body.name,
  }));
};

const createPing = async (req, res) => {
  res.json(await queries.createPing({ name: req.body.name }));
};

const deletePing = async (req, res) => {
  res.json(await queries.deletePing({ id: req.params.id, }));
};

module.exports = {
  getPing,
  updatePing,
  createPing,
  deletePing,
};
