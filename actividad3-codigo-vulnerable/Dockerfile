# ACTIVIDAD 3 - DOCKERFILE VULNERABLE DE LABORATORIO
# Este fichero se usa solo para documentar los riesgos generados en la evaluación automática.

# Riesgo: uso de una versión concreta antigua/vulnerable de Node.js.
FROM node:20.1.0

WORKDIR /app

# Riesgo: copia completa del contexto del proyecto.
# Si .dockerignore no está bien configurado, pueden copiarse ficheros sensibles.
COPY . .

# Riesgo: instalación sin separación clara de dependencias de producción/desarrollo.
RUN npm install

EXPOSE 3000

# Riesgo: no se define USER node.
# El proceso podría ejecutarse como root dentro del contenedor.
CMD ["node", "src/index.js"]
