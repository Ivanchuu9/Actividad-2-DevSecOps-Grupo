# Actividad 3 - Código vulnerable utilizado para generar alertas

Para reforzar la trazabilidad de la Actividad 3, se añade una carpeta específica con el código vulnerable de laboratorio:

```text
actividad3-codigo-vulnerable/
```

Esta carpeta no sustituye al código principal del proyecto. Su función es conservar de forma clara los cambios inseguros utilizados para generar alertas en las herramientas automáticas de seguridad.

## Modificaciones incluidas

| Archivo | Cambio introducido | Riesgo asociado | Herramienta relacionada |
|---|---|---|---|
| `Dockerfile` | Uso de `node:20.1.0`, `COPY . .` y ausencia de `USER node` | Imagen vulnerable, copia excesiva y ejecución como root | Dependabot, Snyk, Trivy |
| `compose.yaml` | `privileged: true`, MySQL expuesto en `3306:3306` y credenciales débiles | Configuración insegura y exposición de servicios | Nmap, Snyk, revisión DevSecOps |
| `backend/src/index.js` | CORS permisivo, secretos hardcodeados, endpoint de debug, `eval()` y errores verbosos | Exposición de información e inyección | Snyk, OWASP ZAP, Secret Scanning |
| `backend/src/routes/addItem.js` | Logging de cabeceras, `...req.body` y `child_process.exec()` | Exposición de información, mass assignment e inyección de comandos | Snyk, OWASP ZAP |
| `backend/src/persistence/mysql.js` | Consultas SQL construidas por concatenación | SQL Injection | Snyk / revisión de código |

## Evidencias

Las capturas del código vulnerable se han añadido en:

```text
evidencias/actividad3-codigo-vulnerable/
```

Además, el informe completo de resultados se mantiene dentro de la carpeta `docs/` del repositorio.

## Nota importante

Estos ficheros tienen finalidad académica y de laboratorio. No deben utilizarse como configuración de producción.
