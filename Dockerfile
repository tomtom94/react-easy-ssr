FROM node:23.5.0-alpine

USER root

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

ENV NPM_CONFIG_LOGLEVEL=warn
ENV PORT=80

COPY . .

EXPOSE 80

CMD ["npm", "start"]