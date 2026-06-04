# Actividad 2: Incorporación de S-SDLC y DevSecOps en proyecto tipo

## 1. Miembros del equipo y repositorios base

| Miembro | Matrícula / usuario UEM | Repositorio actividad anterior | Aplicación |
|---|---:|---|---|
| Iván Jiménez Caidas | 224c8130 | Entregado en Local | To-Do App |
| Sergio González Martín | 2181960 | https://github.com/porteroFitness/Met_Desarrollo_Seguro-To_Do-Secured_A1 | To-Do App |
| Daniel Asensio Vázquez | 224b9614 | https://github.com/dasensio03/secure-todo-sdlc | To-Do App |
| Mario Martín Fernández | 224a9917 | https://github.com/mario2448/Actividad-1-ToDo-Mario | To-Do App |

> Los datos incluidos son únicamente la matrícula o usuario UEM. No se incluyen correos electrónicos completos.

---

## 2. Definición de la aplicación

El proyecto final se basa en una Web-App tipo **To-Do**, utilizada por los miembros del grupo en la actividad anterior. Al haber trabajado todos sobre la misma aplicación base, la unificación no consiste en mezclar aplicaciones distintas, sino en crear una versión común más completa, incorporando las mejores prácticas de seguridad, documentación, pruebas y DevSecOps identificadas por el grupo.

La aplicación permite gestionar tareas desde una interfaz web y se ejecuta mediante Docker.

### Arquitectura prevista

- Proxy inverso: Traefik.
- Frontend: React.js.
- Backend: Node.js.
- Base de datos: MySQL.
- Gestión de base de datos: phpMyAdmin.
- Contenerización: Docker y Docker Compose.

---

## 3. Cómo ejecutar la aplicación

Desde la raíz del repositorio:

```bash
git clone <URL_DEL_REPOSITORIO_FINAL>
cd <NOMBRE_DEL_REPOSITORIO>
cp .env.example .env
docker compose up -d --build
docker ps
```

Para detener la aplicación:

```bash
docker compose down
```



---

## 4. Revisión de proyectos individuales

Como todos los miembros trabajaron sobre una aplicación To-Do, el análisis se centra en comparar las medidas de seguridad, documentación y controles propuestos por cada uno.

| Miembro | Medidas identificadas | Fase S-SDLC relacionada | Estado |
|---|---|---|---|
| Iván Jiménez Caidas | Enfoque Shift-Left y Business Recovery Plan. Análisis SAST en Pull Requests. Uso de SCA para generar un SBOM de dependencias. Pruebas DAST y protección activa. | Diseño, Implementación, Construcción, Pruebas, Despliegue y Mantenimiento. | Aprovechable |
| Sergio González Martín | Uso de ramas, control de versiones, .env, .gitignore, Trivy, SAST/SCA, Quality Gates y staging | Diseño, desarrollo, pruebas, verificación y despliegue | Aprovechable |
| Daniel Asensio Vázquez | Ejecución Docker, documentación S-SDLC, pruebas con npm audit, estructura docs/security/tests y evidencias | Requisitos, diseño, implementación, pruebas y mantenimiento | Aprovechable |
| Mario Martín Fernández | Usuario no root en Dockerfile, variables de entorno y uso de .gitignore/.dockerignore. Exposición mínima de red, revisión con npm audit y plan de pruebas con Trivy y OWASP ZAP (DAST). | Requisitos, Diseño, Desarrollo, Pruebas y Mantenimiento. | Aprovechable |

---

## 5. Unificación del proyecto

La versión común de la To-Do integra:

- Ejecución mediante Docker Compose.
- Uso de `.env` para variables sensibles.
- Inclusión de `.env` en `.gitignore`.
- Archivo `.env.example` con valores de ejemplo.
- Revisión de `Dockerfile` y `compose.yaml`.
- Uso de ramas `main`, `preprod` y `feature/fix`.
- Revisión de dependencias mediante GitHub Dependabot como SCA.
- Análisis estático SAST con Snyk.
- Detección de secretos con GitHub Secret Scanning.
- Escaneo de imágenes Docker con Trivy.
- Revisión de puertos y servicios expuestos con Nmap.
- Análisis dinámico DAST con OWASP ZAP.
- Quality Gates para bloquear vulnerabilidades altas o críticas.
- Despliegue en staging antes de fusionar a `main`.

---

## 6. Consideraciones de seguridad durante el diseño

| Riesgo | Ubicación | Medida propuesta |
|---|---|---|
| Credenciales hardcodeadas | `compose.yaml` | Usar `.env` y subir solo `.env.example` |
| Exposición accidental de secretos | GitHub | `.gitignore` + GitHub Secret Scanning |
| Uso de versiones `latest` | phpMyAdmin / imágenes Docker | Fijar versiones estables |
| Ejecución como root | `Dockerfile` | Usar `USER node` cuando sea viable |
| Dependencias vulnerables | Node.js / React | GitHub Dependabot como SCA |
| Patrones inseguros en código | Frontend / Backend | Snyk como SAST |
| Vulnerabilidades en imágenes | Docker images | Escaneo con Trivy |
| Puertos o servicios expuestos | Staging / preprod | Revisión con Nmap |
| Fallos en ejecución | Aplicación levantada | Pruebas DAST con OWASP ZAP |
| XSS o entradas maliciosas | Formulario de tareas | Validación y saneamiento de entradas |

---

## 7. S-SDLC y DevSecOps paso a paso

1. **Planificación:** concienciación, cultura de seguridad y enfoque Shift-Left.
2. **Diseño:** identificación de riesgos en arquitectura, Dockerfile y compose.yaml.
3. **Desarrollo:** ramas feature/fix, `.env`, `.gitignore`, versiones controladas y usuario no root.
4. **Pruebas:** SAST con Snyk, SCA con GitHub Dependabot, Secret Scanning, Trivy, Nmap y escaneo de imágenes.
5. **Verificación:** DAST con OWASP ZAP, Quality Gates y bloqueo automático si hay vulnerabilidades altas o críticas.
6. **Despliegue:** entrega en staging y posterior fusión a `main` cuando las comprobaciones sean correctas.
7. **Mantenimiento:** actualización de dependencias, imágenes y documentación.


### 7.1. Herramientas de seguridad seleccionadas

| Herramienta | Uso en el proyecto | Ventaja principal | Limitación |
|---|---|---|---|
| Snyk (SAST) | Analizar código y dependencias de la Web-App. | Integración sencilla con GitHub e informes claros. | Puede generar falsos positivos y algunas funciones son avanzadas. |
| GitHub Dependabot (SCA) | Revisar dependencias y proponer actualizaciones. | Nativo de GitHub y útil para mantener dependencias actualizadas. | Puede generar ruido si no se priorizan alertas. |
| GitHub Secret Scanning | Detectar tokens, contraseñas o secretos subidos por error. | Previene fugas de credenciales desde el repositorio. | Puede requerir configuración para secretos personalizados. |
| Trivy | Escanear imágenes Docker, Dockerfile y configuraciones. | Rápido e integrable en CI/CD. | Requiere priorizar CVE para evitar tratar todas las alertas igual. |
| Nmap | Comprobar puertos y servicios expuestos en staging. | Valida la superficie de exposición real. | No sustituye pruebas de código ni análisis de dependencias. |
| OWASP ZAP (DAST) | Probar dinámicamente la aplicación levantada. | Detecta fallos visibles en ejecución. | Consume más tiempo y necesita entorno desplegado. |

### 7.2. Flujo de pipeline propuesto

| Etapa | Control DevSecOps | Herramienta | Resultado esperado |
|---|---|---|---|
| Commit a `preprod` | Activación del pipeline | GitHub Actions | Se ejecutan las comprobaciones automáticas. |
| Secret scanning | Búsqueda de credenciales expuestas | GitHub Secret Scanning | Detectar tokens o claves subidas por error. |
| SAST | Análisis estático de código | Snyk | Detectar patrones inseguros antes de construir la imagen. |
| SCA | Análisis de dependencias | GitHub Dependabot | Detectar CVE y proponer actualizaciones. |
| Contenedores | Escaneo de imagen y Dockerfile | Trivy | Detectar vulnerabilidades y malas configuraciones. |
| Staging | Comprobación de servicios expuestos | Nmap | Validar que solo estén accesibles los puertos necesarios. |
| DAST | Pruebas dinámicas sobre la aplicación | OWASP ZAP | Detectar fallos en ejecución antes de promocionar a `main`. |
| Quality Gate | Bloqueo automático del merge | GitHub Actions / reglas de rama | Impedir la fusión si existen riesgos altos o críticos. |
| Entrega controlada | Despliegue en preproducción | Docker Compose | Validar antes de la rama `main` estable. |

---

## 8. Diagrama S-SDLC y DevSecOps

El siguiente diagrama representa el flujo propuesto para incorporar S-SDLC y DevSecOps en la aplicación To-Do.

![Diagrama S-SDLC y DevSecOps](assets/esquema-sdlc-devsecops.png)

---

## 9. Entrega

La entrega final será un ZIP generado desde el repositorio de GitHub. El nombre debe seguir el formato indicado por el enunciado:

```text
<ap01>_<ap02>_<ap03>_<ap04>.zip
```
