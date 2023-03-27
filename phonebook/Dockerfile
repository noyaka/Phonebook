FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD npm run start:dev