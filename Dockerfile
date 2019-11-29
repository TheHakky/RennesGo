FROM node:13.1.0

COPY front-end/package*.json /

EXPOSE 4200

RUN npm install

RUN npm install -g @angular/cli@7.3.9

COPY . .

CMD npm run ng serve
