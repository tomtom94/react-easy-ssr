FROM nginx:latest

WORKDIR /var/www

COPY nginx.conf /etc/nginx/nginx.conf

COPY . .

EXPOSE 80

CMD ["/bin/bash", "-c", "nginx", "-g", "daemon off;"]