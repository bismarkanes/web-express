# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM debian:stretch

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl
RUN apt-get -y autoclean

RUN mkdir -p /usr/local/nvm

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.11.4

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
&& nvm install $NODE_VERSION \
&& nvm alias default $NODE_VERSION \
&& nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# upgrade npm
RUN npm -g update
# install yarn
RUN npm -g install yarn

# set the base image to nvm
# FROM nvm

ENV APP_NAME web-express
ENV APP_DIR /var/www/$APP_NAME

ADD ./ $APP_DIR/

WORKDIR $APP_DIR

EXPOSE 8080

RUN yarn
CMD ["node", "server.js"]
