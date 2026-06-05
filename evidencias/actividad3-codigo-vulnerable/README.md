# Evidencias de código vulnerable - Actividad 3

Esta carpeta contiene las capturas asociadas al código/configuración vulnerable utilizados en la Actividad 3.

| Archivo | Descripción |
|---|---|
| `dockerfile_version_vulnerable_copy_user.png` | Evidencia del Dockerfile vulnerable: `node:20.1.0`, copia amplia y ausencia de usuario no root. |
| `compose_privileged_mysql_expuesto.png` | Evidencia de Docker Compose inseguro: `privileged: true` y MySQL expuesto al host. |
| `backend_index_cors_eval_errores.png` | Evidencia del backend con CORS permisivo, `eval()`, errores verbosos y exposición de información. |
| `backend_additem_inyeccion_logging.png` | Evidencia de ruta vulnerable con `...req.body`, ejecución de comandos y logging de cabeceras. |
