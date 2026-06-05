// ACTIVIDAD 3 - RUTA VULNERABLE DE LABORATORIO
// Este fichero se usa solo para explicar riesgos detectables por SAST/DAST.

const db = require('../persistence/mysql');
const { v4: uuid } = require('uuid');
const child_process = require('child_process');

module.exports = async (req, res) => {
    // Riesgo: logging de cabeceras completas.
    // Puede exponer tokens, cookies o información de sesión en logs.
    console.log('Headers recibidas:', req.headers);

    // Riesgo: mass assignment.
    // El usuario podría sobrescribir campos internos mediante req.body.
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
        ownerId: 'default-user',
        ...req.body
    };

    // Riesgo: command injection.
    // Se ejecuta directamente un comando recibido desde la petición.
    if (req.body.command) {
        child_process.exec(req.body.command, (error, stdout, stderr) => {
            console.log('Comando ejecutado:', req.body.command);
            console.log('Salida:', stdout);
            console.log('Errores:', stderr);
        });
    }

    await db.storeItem(item);
    res.send(item);
};
