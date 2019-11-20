FROM node:13.1.0

COPY front-end/package.json /usr/src/rennesgo/

CMD npm run ng serve
