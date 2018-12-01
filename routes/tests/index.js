const ping = (req, res) => {
  res.send('ping');
};

const tests = {
  ping,
};

module.exports = tests;
