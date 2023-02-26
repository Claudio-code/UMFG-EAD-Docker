FROM node:lts-alpine

WORKDIR /home/node/api

COPY package.json ./

COPY package-lock.json ./

COPY index.js ./

RUN npm i

EXPOSE 3000

CMD [ "node", "--watch", "index.js" ]