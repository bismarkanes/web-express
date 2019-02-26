const path = require('path');
const pingView = require(path.join(process.env.APP_ROOT, 'views', 'tests', 'index'));

class Tests {
  ping(req, res) {
    res.marko(pingView, {message: 'PONG'});
  }
}

module.exports = new Tests();
