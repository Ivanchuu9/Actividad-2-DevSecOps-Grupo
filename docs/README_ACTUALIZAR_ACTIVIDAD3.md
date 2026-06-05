# Bloque recomendado para actualizar el README.md

Copia este bloque dentro del README principal, preferiblemente al final del apartado de Actividad 3.

```markdown
### Código vulnerable de laboratorio

Para dejar trazabilidad de las modificaciones utilizadas durante la evaluación automática de seguridad, se incluye una carpeta específica con el código vulnerable de laboratorio:

`actividad3-codigo-vulnerable/`

Esta carpeta no sustituye a la aplicación principal. Se añade únicamente para documentar los cambios inseguros introducidos durante la Actividad 3 y facilitar su revisión.

| Componente | Vulnerabilidad introducida | Objetivo de la prueba |
|---|---|---|
| Dockerfile | `node:20.1.0`, `COPY . .` y ausencia de `USER node` | Provocar alertas por imagen vulnerable, copia excesiva y ejecución como root. |
| Docker Compose | `privileged: true`, MySQL expuesto en `3306:3306` y credenciales débiles | Validar configuraciones inseguras y exposición de servicios. |
| Backend `index.js` | CORS permisivo, secretos hardcodeados, endpoint de debug, `eval()` y errores verbosos | Generar alertas de SAST/DAST y evidenciar exposición de información. |
| Ruta `addItem.js` | Logging de cabeceras, `...req.body` y `child_process.exec()` | Representar exposición de información, mass assignment e inyección de comandos. |
| Persistencia MySQL | Consultas SQL construidas por concatenación | Documentar riesgo de SQL Injection. |

Las capturas asociadas al código vulnerable se encuentran en:

`evidencias/actividad3-codigo-vulnerable/`

La explicación técnica de estos cambios está documentada en:

`docs/actividad3_codigo_vulnerable.md`
```
