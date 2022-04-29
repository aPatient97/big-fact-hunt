const { Pool } = require("pg");
const pool = new Pool(
    {
    user: 'lap3',
    host: 'localhost',
    database: 'lap3project',
    password: 'password',
    port: 5432,
}
);
module.exports = pool;
