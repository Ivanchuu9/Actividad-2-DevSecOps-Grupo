FROM node:18-alpine
WORKDIR /app

# Copiamos los archivos de dependencias desde la carpeta app
COPY app/package*.json ./
RUN npm install

# Copiamos el resto del código de la aplicación
COPY app/ .

# Por seguridad, usamos el usuario "node" sin privilegios en vez de "root"
USER node

EXPOSE 3000
CMD ["node", "src/index.js"]