const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mini-crm",
  password: "shalini6725",
  port: 5432,
});

module.exports = pool;