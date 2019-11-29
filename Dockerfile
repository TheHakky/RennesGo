FROM node:13.1.0

COPY front-end/package.json /

RUN npm install

CMD npm run ng serve
