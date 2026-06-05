// ACTIVIDAD 3 - MYSQL VULNERABLE DE LABORATORIO
// Este fichero se usa solo para explicar riesgos de persistencia insegura.

const mysql = require('mysql2/promise');

// Riesgo: credenciales hardcodeadas.
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'todo'
};

let pool;

async function init() {
    pool = mysql.createPool(config);
}

async function storeItem(item) {
    // Riesgo: construcción manual de SQL por concatenación.
    // Puede derivar en SQL Injection si el valor llega manipulado.
    const query = "INSERT INTO todo_items (id, name, completed) VALUES ('" +
        item.id + "', '" + item.name + "', " + (item.completed ? 1 : 0) + ")";

    await pool.query(query);
}

async function findItemByName(name) {
    // Riesgo: SQL Injection por concatenar directamente entrada del usuario.
    const query = "SELECT * FROM todo_items WHERE name = '" + name + "'";
    const [rows] = await pool.query(query);
    return rows;
}

async function teardown() {
    if (pool) {
        await pool.end();
    }
}

module.exports = {
    init,
    storeItem,
    findItemByName,
    teardown
};
