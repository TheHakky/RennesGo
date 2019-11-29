FROM node:13.1.0

COPY front-end/package*.json /

RUN npm install

COPY . .

CMD ng serve
