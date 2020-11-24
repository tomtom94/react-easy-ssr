FROM alpine:3.11

USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_VERSION 14.11.0
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 80

ENV BACKEND_BASE_URL https://server.mywebsite.com

RUN apk add --update npm

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]