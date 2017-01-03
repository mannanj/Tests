HOW TO BUILD
build prerequisites as meanmongo
build installproject as redditclone_env
finally build runproject with docker-compose up

NOTES
# Stop and remove containers
- docker stop $(docker ps -a -q)
- docker rm $(docker ps -a -q)

# Portainer
- docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer

# Portainer remove it
- docker stop name_of_your_portainer_conatiner
- docker rm name_of_your_portainer_conatiner

# Run MEAN stack
	- docker run -p 3000:3000 mean 

# Run MEAN stack (seperate mongo & mean containers)
- mongoDB
	- docker run -p 27017:27017 -d --name db mongo
- MEAN
	- docker run -p 3000:3000 --link db:db_1 mean
- Resources
	- http://fiznool.com/blog/2015/07/25/setting-up-a-docker-based-mean-development-environment/
	- https://blog.giantswarm.io/getting-started-with-docker-and-meanjs/
	- https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e#.1osox7oxq
