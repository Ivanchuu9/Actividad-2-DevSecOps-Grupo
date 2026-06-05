# Evidencias de la Actividad 3

Esta carpeta contiene capturas extraídas del informe final y utilizadas como evidencias de la evaluación automática de seguridad.

## Evidencias incluidas

| Archivo | Descripción |
|---|---|
| `nodejs_20_1_0_referencia_cve.png` | Referencia de vulnerabilidades asociadas a Node.js 20.1.0. |
| `dockerfile_version_vulnerable_copy_user.png` | Cambios inseguros en Dockerfile: imagen vulnerable, COPY amplio y ausencia de usuario no root. |
| `compose_privileged_mysql_expuesto.png` | Configuración insegura en compose.yaml: `privileged:true` y MySQL expuesto. |
| `backend_index_cors_eval_errores.png` | CORS permisivo, ejecución insegura y errores verbosos. |
| `backend_additem_inyeccion_logging.png` | Inyección de comandos y logging de cabeceras en rutas del backend. |
| `github_secret_scanning_sin_alertas.png` | Secret Scanning sin alertas tras introducir credenciales falsas. |
| `github_dependabot_alertas.png` | Alertas de Dependabot por dependencias vulnerables. |
| `snyk_resultados_criticas_altas.png` | Resultados de Snyk con vulnerabilidades críticas y altas. |
| `nmap_puertos_mysql_abierto.png` | Nmap mostrando puertos abiertos, incluido MySQL en `3306/tcp`. |
| `owasp_zap_alertas_dast.png` | Alertas de OWASP ZAP sobre la aplicación en ejecución. |
