process.env.APP_ROOT = __dirname;
const express = require('express');
const config = require('config');
const bearerToken = require('express-bearer-token');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const constants = require('./include/constants');
const mapResponse = require('./lib/mapresponse');

const app = express();

// web server
const { getPing, updatePing, createPing, deletePing, } = require('./routes/ping');

app.use(bearerToken());
app.use(logger(process.env.NODE == 'production' ? 'common' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(mapResponse());

/*
 * Web html front demo
 */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/socket.io.html');
});

app.get('/ping', getPing);
app.patch('/ping', updatePing);
app.post('/ping', createPing);
app.delete('/ping', deletePing);

app.use((req, res) => {
  res.status(404).send(constants.ERR_NOT_FOUND);
});

// websocket server configuration
const server = require('http').Server(app);
const io = require('socket.io')(server);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter(config.redis));

// websocket handler demo
server.listen(process.env.WEBSOCKET_PORT || 8081);
io.on('connection', (socket) => {
  socket.join('test');
});

let val = 0;
setInterval(() => {
  val++;
  io.volatile.to('test').emit('news', { hello: `world ${val}`, pid: process.pid, });
}, 1000);

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
