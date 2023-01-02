const redisapi = require('redis');


const redisUrl = process.env.REDIS_TLS_URL ? process.env.REDIS_TLS_URL : process.env.REDIS_URL;
const redisDefaults = {
  tls: {
  // Heroku uses self-signed certificate, which will cause error in connection, unless check is disabled
  rejectUnauthorized: false,
  },
};
//const defaultClient = redis.createClient(redisUrl, redisDefaults);

// Socket required for node redis <-> docker-compose connection

//const Redis = createClient({ socket: { host: 'redis', port: 6379 } });

const Redis = redisapi.createClient(redisUrl,redisDefaults);


module.exports = Redis;
