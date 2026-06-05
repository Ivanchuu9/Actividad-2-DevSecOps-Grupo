# Justificación de herramientas y técnicas utilizadas

Esta sección documenta las cinco herramientas seleccionadas para evaluar la seguridad de la Web-App To-Do como continuación del trabajo de S-SDLC y DevSecOps.

| Herramienta | Tipo | Motivo de selección | Ventajas | Limitaciones |
|---|---|---|---|---|
| Snyk | SAST | Analizar código fuente y configuraciones desde fases tempranas del desarrollo. | Integra el enfoque Shift-Left, se conecta con GitHub y ayuda a priorizar riesgos. | Puede generar falsos positivos y no sustituye a pruebas dinámicas. |
| GitHub Dependabot | SCA | Detectar dependencias vulnerables u obsoletas y proponer actualizaciones. | Integración nativa en GitHub y apoyo a la gestión de dependencias/SBOM. | Puede generar alertas sobre librerías que no siempre son explotables en la práctica. |
| GitHub Secret Scanning | Detección de secretos | Monitorizar el repositorio para detectar claves, tokens o contraseñas subidas por error. | Ayuda a prevenir fugas de información sensible durante la codificación. | Depende de patrones conocidos y puede no detectar secretos falsos o formatos no reconocidos. |
| Nmap | Escaneo de red | Comprobar puertos y servicios expuestos por los contenedores Docker. | Rápido, ligero y útil para validar la superficie de exposición. | No analiza lógica interna de la aplicación ni vulnerabilidades de código. |
| OWASP ZAP | DAST | Evaluar la aplicación levantada simulando pruebas externas. | Detecta problemas de cabeceras, CSP, XSS y comportamiento real en ejecución. | Consume más tiempo y puede ser agresivo si se ejecuta sin control en producción. |

La combinación de estas herramientas permite cubrir distintas fases del ciclo de vida: desarrollo, integración, pruebas, verificación y despliegue en preproducción.
