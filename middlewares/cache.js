const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

const cache = (req, res, next) => {
  const key = req.url;

  client.get(key, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

module.exports = cache;
