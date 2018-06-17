require('marko/node-require');

process.env.ROOT = __dirname;
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const markoExpress = require('marko/express');
const favicon = require('serve-favicon');

const constants = require('./include/constants');

const routes = require('./routes');
const app = express();

app.use(logger(process.env.NODE == 'production' ? 'common' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(markoExpress());

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(favicon(path.join(__dirname, 'assets', 'img', 'favicon.ico')));

app.use('/', routes);

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
