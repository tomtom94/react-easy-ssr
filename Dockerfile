FROM alpine:3.15

USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_VERSION 16.17.1
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 80

RUN apk add --update npm

COPY . .

EXPOSE 80

CMD ["npm", "start"]