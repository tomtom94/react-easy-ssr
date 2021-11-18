FROM nginx:latest

WORKDIR /var/www

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./static ./static

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]