FROM node:13.1.0

COPY front-end/package.json /

CMD npm run ng serve
