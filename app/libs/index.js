import pg from 'pg';

const {Pool} = pg;

const pool = new Pool({
  connetionString: process.env.POSTGRES_URL,
})

module.exports = pool;