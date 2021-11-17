FROM alpine:3.11

USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_VERSION 14.16.1
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 80

ENV BACKEND_BASE_URL https://server.mywebsite.com

RUN chmod +x heroku-entrypoint.sh

COPY . .

EXPOSE 80

ENTRYPOINT ["heroku-entrypoint.sh"]

CMD ["heroku-entrypoint.sh", "node", "dist/server/server.js"]