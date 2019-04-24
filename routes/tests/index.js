class Tests {
  ping(req, res) {
    res.send('PONG');
  }
}

module.exports = new Tests();
