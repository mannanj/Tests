FROM meanmongo

# Set development environment as default
ENV NODE_ENV development

# 80 = HTTP, 443 = HTTPS, 3000 = MEAN.JS server, 35729 = livereload, 8080 = node-inspector
EXPOSE 80 443 3000 35729 8080

# Create a new user
RUN useradd -ms /bin/bash dev

# Install MEAN.JS Prerequisites
# RUN npm install --quiet -g gulp bower yo mocha karma-cli pm2 && npm cache clean

RUN mkdir -p /opt/mean.js/public/lib
WORKDIR /opt/mean.js

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/mean.js/package.json
RUN npm install --quiet && npm cache clean
COPY . /opt/mean.js

# Start MongoDB and start the MEAN app
ENV MONGOD_START "mongod --fork --logpath /var/log/mongodb.log --logappend --smallfiles"
# ENTRYPOINT ["/bin/sh", "-c", "$MONGOD_START && su dev && /bin/bash"]
ENTRYPOINT ["/bin/sh", "-c", "$MONGOD_START && npm start"]