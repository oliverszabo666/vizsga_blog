#nginx
FROM nginx

#copy
COPY ./blog-app/build /usr/share/nginx/html

#elérési útvonal
#EXPOSE 80
