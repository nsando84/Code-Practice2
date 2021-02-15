FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]

# docker build -- tells docker to create new image based on docker file. "docker build ."