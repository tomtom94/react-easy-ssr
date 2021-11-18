FROM nginx:latest

WORKDIR /var/www

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./static ./static

EXPOSE 80

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'