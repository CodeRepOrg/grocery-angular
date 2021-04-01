const { Pool } = require('pg');

const pool = new Pool({
    host: '169.60.200.83',
    port: 30410,
    user: 'admin',
    password: 'admin',
    database: 'postgres'
});

exports.query = async () => {
    const client = await pool.connect();
    const result = await client.query('select * from list');
    client.release();
    return result;
}