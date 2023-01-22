const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres",
    database: "observation",
    host: "containers-us-west-151.railway.app",
    password: "grk871cmrq9NfaVVpZL8",
    port: "6007",
});

module.exports = pool;