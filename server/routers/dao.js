const { Pool } = require('pg');

const host = process.env.NODE_ENV == 'production' ? '172.21.198.96':'169.60.200.83'
const port = process.env.NODE_ENV == 'production' ? 5432:30410

const pool = new Pool({
    host: host,
    port: port,
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

exports.insert = async (query) => {
    const client = await pool.connect();
    const result = await client.query(`insert into list (item, quantidade, unidade, status, nome, obs) values ('${query.item}', ${query.quantidade}, '${query.unidade}', '${query.status}', '${query.nome}', '${query.obs}')`);
    client.release();
    return result;
}

exports.delete = async (query) => {
    const client = await pool.connect();
    const result = await client.query(`delete from list where item='${query.item}' and quantidade=${query.quantidade} and unidade='${query.unidade}' and status='${query.status}' and nome='${query.nome}' and obs='${query.obs}'`);
    client.release();
    return result;
}