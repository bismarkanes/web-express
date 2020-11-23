# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM debian:sid-slim

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl
RUN apt-get -y autoclean

RUN mkdir -p /usr/local/nvm

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 12.18.3

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# install node and npm
RUN . $NVM_DIR/nvm.sh \
&& nvm install $NODE_VERSION \
&& nvm alias default $NODE_VERSION \
&& nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# set the base image to nvm
# FROM nvm

ENV APP_NAME app
ENV APP_DIR /var/www/$APP_NAME

ADD ./ $APP_DIR/
RUN cat $APP_DIR/include/version.js

WORKDIR $APP_DIR

EXPOSE 8080 8081

RUN npm install
# RUN npm run db:migrate
# RUN npm run db:seed

CMD ["node", "server.js"]
