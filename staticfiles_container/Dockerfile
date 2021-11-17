FROM nginx:latest

WORKDIR /var/www

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./static ./static

EXPOSE 80

RUN chmod +x ./heroku-entrypoint.sh

CMD ["./heroku-entrypoint.sh", "nginx", "-g", "daemon off;"]