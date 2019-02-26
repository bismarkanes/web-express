process.env.APP_ROOT = __dirname;
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const constants = require('./include/constants');

const app = express();

const tests = require('./routes/tests');

app.use(logger(process.env.NODE == 'production' ? 'common' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/ping', tests.ping)

app.use((req, res) => {
  res.status(404).send(constants.ERR_NOT_FOUND);
});

if (process.env.NODE_ENV === 'production') {
  app.use(function(err, req, res) {
    if (err) console.error(err);

    res.status(err.status || 500).send(constants.ERR_INTERNAL);
  });
} else {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    if (err)
      next(err);
    else
      res.send(constants.ERR_INTERNAL);
  });
}

module.exports = app;
