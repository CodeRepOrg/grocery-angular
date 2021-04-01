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

exports.insert = async (query) => {
    const client = await pool.connect();
    const result = await client.query(`insert into list (item, quantidade, unidade, status, nome, obs) values ('${query.item}', ${query.quantidade}, '${query.unidade}', '${query.status}', '${query.nome}', '${query.obs}')`);
    client.release();
    return result;
}

exports.delete = async (query) => {
    const client = await pool.connect();
    const result = await client.query(`remove from list where item='${query.item}' and quantidade=${query.quantidade} and unidade='${query.unidade}' and status='${query.status}' and nome='${query.nome}' and obs='${query.obs}')`);
    client.release();
    return result;
}