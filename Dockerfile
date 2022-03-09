FROM node:17

EXPOSE 3000

WORKDIR /src

COPY ./app .

RUN npm install -g nodemon
