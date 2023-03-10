require("dotenv").config();
const Pool = require ("pg").Pool;


const pool = new Pool({
    user: process.env.USER_DB,
    database: process.env.DATABASE_DB,
    host: process.env.HOST_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
});

module.exports = pool;