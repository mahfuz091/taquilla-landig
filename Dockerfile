# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y el archivo package-lock.json
# e instala las dependencias de la aplicación
COPY package*.json ./
RUN npm install

# Copia el código fuente de tu aplicación al directorio de trabajo
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expon el puerto en el que se ejecutará la aplicación (puerto predeterminado de Next.js)
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
