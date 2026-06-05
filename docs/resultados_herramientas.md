# Resultados de las pruebas automáticas

Tras introducir las modificaciones inseguras, se ejecutaron las herramientas seleccionadas. Los resultados se resumen a continuación.

| Herramienta | Tipo de prueba | Alteración detectada | Resultado | Conclusión |
|---|---|---|---|---|
| GitHub Secret Scanning | Detección de secretos | Credenciales falsas en código | No generó alerta | Falso negativo útil para evidenciar limitaciones. |
| GitHub Dependabot | SCA | `node:20.1.0` y dependencias vulnerables | 33 vulnerabilidades abiertas | Detecta correctamente CVE y librerías vulnerables. |
| Snyk | SAST | Dockerfile inseguro y patrones vulnerables | Alertas críticas y altas | Eficaz para detectar problemas antes del despliegue. |
| Nmap | Red | MySQL expuesto al host | Puerto `3306/tcp` abierto | Valida la superficie de exposición de servicios. |
| OWASP ZAP | DAST | Aplicación vulnerable en ejecución | Alertas por CSP, XSS e información | Complementa SAST/SCA al analizar comportamiento real. |

## Evidencias principales

- `evidencias/github_secret_scanning_sin_alertas.png`
- `evidencias/github_dependabot_alertas.png`
- `evidencias/snyk_resultados_criticas_altas.png`
- `evidencias/nmap_puertos_mysql_abierto.png`
- `evidencias/owasp_zap_alertas_dast.png`

Estas pruebas demuestran que ninguna herramienta cubre todo por sí sola. SAST y SCA ayudan a anticipar problemas antes del despliegue, mientras que Nmap y OWASP ZAP permiten validar el comportamiento del entorno una vez levantado.
