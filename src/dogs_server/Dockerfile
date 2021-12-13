FROM ubuntu:20.04
EXPOSE 55666

RUN apt-get update
RUN apt-get install -y libssl-dev
RUN apt-get install -y openssl
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs

RUN node --version
RUN npm --version
RUN npm install nodemon -g

WORKDIR /app

CMD ["nodemon", "-L", "server.js"]