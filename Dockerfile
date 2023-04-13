FROM node:16.20.0-alpine

USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 80

RUN apk add --update npm

COPY . .

EXPOSE 80

CMD ["npm", "start"]