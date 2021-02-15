FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "server.js"]

# docker build -- tells docker to create new image based on docker file. "docker build ."

# expose -- docker run -p 3000:80 [KEY]