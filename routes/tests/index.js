class Tests {
  ping(req, res) {
    res.send('ping');
  }
}

module.exports = new Tests();
