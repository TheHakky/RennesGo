FROM node:13.1.0

COPY front-end/package*.json /

EXPOSE 4200

RUN npm install

COPY . .

CMD npm run ng serve
