FROM ubuntu:20.04
EXPOSE 55777
ENV NODE_PATH /package/node_modules

RUN apt-get update
RUN apt-get install -y libssl-dev
RUN apt-get install -y openssl
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs

RUN node --version
RUN npm --version
RUN npm config set prefix /package
ENV PATH="/package/bin:${PATH}" 

RUN npm install -g @vue/cli

WORKDIR /app

CMD ["npm", "run", "serve", "--", "--port", "55777"]