FROM node:12

RUN apt-get update
RUN apt-get install -y nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
RUN nginx -t

WORKDIR /app
COPY . /app/
EXPOSE 5000
RUN yarn install

CMD ["sh", "-c", "nginx ; yarn start"]