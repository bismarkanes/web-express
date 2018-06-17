const path = require('path');
const test = require(path.resolve(process.env.ROOT, 'views', 'tests', 'index'));

const router = (req, res) => {
  res.marko(test, {message: 'This is test'});
};

module.exports = router;
