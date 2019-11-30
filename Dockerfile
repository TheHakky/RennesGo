FROM node:13.1.0

COPY front-end/package*.json /usr/src/rennesgo/

WORKDIR /usr/src/rennesgo/

EXPOSE 4200

RUN npm install

RUN npm install -g @angular/cli@7.3.9

COPY front-end/. /usr/src/rennesgo/

CMD ["npm","run","ng","serve","--host 0.0.0.0","--port 4200"]
