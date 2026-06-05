# Modificaciones realizadas para generar alertas

Para comprobar el funcionamiento de las herramientas automáticas, se preparó una versión insegura de laboratorio. Estas modificaciones se realizaron únicamente con finalidad académica y no deben mantenerse en producción.

| Fichero / componente | Alteración realizada | Objetivo | Herramienta esperada |
|---|---|---|---|
| Dockerfile | Uso de `node:20.1.0`, versión con vulnerabilidades conocidas. | Provocar alertas por imagen/base vulnerable. | Dependabot, Snyk, Trivy |
| Dockerfile | `COPY` configurado para copiar todo el contenido. | Aumentar el riesgo de exposición de ficheros sensibles. | Snyk, Trivy |
| Dockerfile | No se especifica `USER node`. | Ejecutar procesos como root dentro del contenedor. | Snyk, Trivy |
| compose.yaml | Se añade `privileged: true` al servicio proxy. | Detectar ejecución con privilegios excesivos. | Trivy / revisión DevSecOps |
| compose.yaml | Se expone MySQL al host. | Comprobar si el puerto `3306/tcp` queda abierto. | Nmap |
| backend/src/index.js | CORS permisivo, errores verbosos, secretos en código y uso de `eval()`. | Provocar alertas de SAST, DAST y secret scanning. | Snyk, ZAP, Secret Scanning |
| backend/src/routes/addItem.js | Uso inseguro de `...req.body`, ejecución de comandos y `console.log(req.headers)`. | Detectar exposición de información e inyección de comandos. | Snyk, ZAP |

Las capturas asociadas a estas modificaciones se encuentran en la carpeta `evidencias/`.
