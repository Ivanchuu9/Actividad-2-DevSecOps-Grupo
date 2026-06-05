# Pruebas de seguridad - Actividad 3

La Actividad 3 amplía el plan de pruebas de la actividad anterior mediante herramientas automáticas.

## Herramientas ejecutadas

1. Snyk - análisis estático SAST.
2. GitHub Dependabot - análisis de dependencias SCA.
3. GitHub Secret Scanning - detección de secretos.
4. Nmap - escaneo de red y servicios expuestos.
5. OWASP ZAP - análisis dinámico DAST.

## Objetivo

Validar que el pipeline DevSecOps propuesto es capaz de detectar vulnerabilidades en distintas capas: código, dependencias, secretos, contenedores, red y aplicación en ejecución.

## Resultado general

Las herramientas detectaron vulnerabilidades relevantes, salvo Secret Scanning, que no generó alerta ante credenciales falsas. Este resultado se documenta como falso negativo y refuerza la necesidad de combinar varias técnicas de evaluación.
