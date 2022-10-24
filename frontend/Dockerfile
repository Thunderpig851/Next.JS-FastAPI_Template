FROM node:16.17.1-bullseye
WORKDIR /app
COPY /app/package*.json .
COPY /app .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]