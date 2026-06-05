// ACTIVIDAD 3 - BACKEND VULNERABLE DE LABORATORIO
// Este fichero se usa solo para documentar riesgos detectables por SAST/DAST.

const express = require('express');
const app = express();
const db = require('./persistence/mysql');
const addItem = require('./routes/addItem');

app.use(express.json());

// Riesgo: CORS demasiado permisivo.
// Cualquier origen podría intentar interactuar con la API.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

// Riesgo: secretos hardcodeados en código fuente.
// Estos valores no deberían estar en el repositorio.
const API_TOKEN = 'todo-demo-token-123456';
const DB_PASSWORD = 'root';
const JWT_SECRET = 'jwt-demo-secret-insecure';

app.post('/items', addItem);

// Riesgo: endpoint de debug expuesto sin autenticación.
// Puede revelar información sensible de configuración y cabeceras.
app.get('/debug/config', (req, res) => {
    res.send({
        environment: process.env.NODE_ENV || 'development',
        databasePassword: DB_PASSWORD,
        token: API_TOKEN,
        jwtSecret: JWT_SECRET,
        headers: req.headers
    });
});

// Riesgo: uso de eval() sobre entrada del usuario.
// Puede derivar en ejecución de código si se explota.
app.post('/debug-eval', (req, res) => {
    const expression = req.body.expression;
    const result = eval(expression);
    res.send({ result });
});

// Riesgo: manejador de errores verboso.
// Expone detalles internos de la aplicación.
app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message,
        stack: err.stack,
        requestHeaders: req.headers
    });
});

db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
});
