const Redis = require('ioredis');
module.exports = {
  db: require('knex')({
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE
    },
    pool: {
      max: 1000
    }
  }),
  logdb: require('knex')({
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      query_timeout: 10000
    },
    pool: {
      min: 0,
      max: 1
    }
  }),
  cache: new Redis({
    host: process.env.RDHOST || 'localhost',
    port: process.env.RDPORT || 6379,
    keyPrefix: 'cacheman:'
  }),
  failsafe: new Redis({
    host: process.env.RDHOST || 'localhost',
    port: process.env.RDPORT || 6379,
    keyPrefix: 'importers:'
  })
};
