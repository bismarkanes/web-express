const redis = require('redis');
const $ = require('config');

class Redis {
  constructor() {
    this._redisClient = redis.createClient($.clients.redis);
  }

  set({ key, values, expTime = '60' }) {
    this._redisClient.set(key, JSON.stringify(values), 'EX', expTime);
  }

  get({ key }) {
    return new Promise((resolve, reject) => {
      this._redisClient.get(key, (err, cache) => {
        if (err) return reject(err);

        if (cache) {
          return resolve(JSON.parse(cache));
        }

        reject(new Error('ERR_NO_CACHE'));
      });
    });
  }

  del({ key }) {
    this._redisClient.del(key);
  }
}

module.exports = new Redis();
