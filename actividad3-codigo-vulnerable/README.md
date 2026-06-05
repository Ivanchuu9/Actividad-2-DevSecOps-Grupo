# Actividad 3 - Código vulnerable de laboratorio

Esta carpeta contiene una versión vulnerable controlada de la aplicación To-Do utilizada para la Actividad 3.

El objetivo no es sustituir la aplicación principal, sino dejar documentado el código y la configuración que se usaron para generar alertas en las herramientas automáticas de seguridad.

## Contenido

```text
actividad3-codigo-vulnerable/
├── Dockerfile
├── compose.yaml
├── backend/
│   └── src/
│       ├── index.js
│       ├── routes/
│       │   └── addItem.js
│       └── persistence/
│           └── mysql.js
└── client/
    └── README.md
```

## Riesgos introducidos

| Componente | Riesgo introducido | Relación con seguridad |
|---|---|---|
| Dockerfile | Imagen `node:20.1.0`, `COPY . .` y ausencia de `USER node` | Imagen vulnerable, copia excesiva y ejecución como root |
| compose.yaml | `privileged: true`, MySQL expuesto en `3306:3306` y credenciales débiles | Configuración insegura y exposición de servicios |
| backend/src/index.js | CORS permisivo, secretos hardcodeados, endpoint de debug, `eval()` y errores verbosos | Exposición de información e inyección |
| backend/src/routes/addItem.js | `console.log(req.headers)`, `...req.body` y `child_process.exec()` | Logging inseguro, mass assignment e inyección de comandos |
| backend/src/persistence/mysql.js | Consulta SQL construida por concatenación | Riesgo de SQL Injection |

## Herramientas relacionadas

Las modificaciones anteriores se documentaron y contrastaron con herramientas como Snyk, GitHub Dependabot, GitHub Secret Scanning, Nmap y OWASP ZAP.

Las capturas asociadas están en:

```text
evidencias/actividad3-codigo-vulnerable/
```

## Nota

Estos ficheros son únicamente material de laboratorio para explicar los riesgos de la Actividad 3. No deben usarse como versión de producción.
