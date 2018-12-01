const path = require('path');
const test = require(path.join(process.env.APP_ROOT, 'views', 'tests', 'index'));

const ping = (req, res) => {
  res.marko(test, {message: 'PONG'});
};

const tests = {
  ping,
};

module.exports = tests;
