const redisapi = require('redis');

// Socket required for node redis <-> docker-compose connection

//const Redis = createClient({ socket: { host: 'redis', port: 6379 } });

const Redis = redisapi.createClient({
    url: process.env.REDIS_TLS_URL,
    socket: {
      tls: true,
      rejectUnauthorized: false
    }
  });


module.exports = Redis;
