FROM meanmongo

# Setup MEAN stuff
# 80 = HTTP, 443 = HTTPS, 3000 = MEAN.JS server, 35729 = livereload, 8080 = node-inspector
EXPOSE 80 443 3000 35729 8080

# Install MEAN.JS Prerequisites
RUN npm config set proxy http://gatekeeper.mitre.org:80
RUN mkdir -p /opt/mean.js/public/lib
WORKDIR /opt/mean.js
COPY package.json /opt/mean.js/package.json
RUN npm install --quiet && npm cache clean
COPY . /opt/mean.js

# Start MongoDB and start the MEAN app
ENV MONGOD_START "mongod --fork --logpath /var/log/mongodb.log --logappend --smallfiles"
# ENTRYPOINT ["/bin/sh", "-c", "$MONGOD_START && su dev && /bin/bash"]
ENTRYPOINT ["/bin/sh", "-c", "$MONGOD_START && npm start"]