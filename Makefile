.PHONY: build build-app build make-test

APP_NAME=web-express
APP_TAG=latest
APP_IMAGE_NAME=$(APP_NAME)
APP_PORT=8080
ENV_FILE=".env"
REDIS_PORT=6379

pre:
	git clean -n | cut -f3 -d ' ' > .dockerignore

build-app: pre
	echo "Building app image"
	docker build -t $(APP_IMAGE_NAME) .

build: build-app

make-test:
	echo $(APP_NAME)
	echo $(APP_IMAGE_NAME)

run-app:
	docker run -d -p $(APP_PORT):$(APP_PORT) --name ${APP_NAME} --link redis:redis -it --env-file $(ENV_FILE) $(APP_IMAGE_NAME):$(APP_TAG)

run-redis:
	docker run -p $(REDIS_PORT):$(REDIS_PORT) -d -it --name redis redis

run: run-redis run-app

stop:
	docker stop $(shell docker ps -a -q)
	docker rm $(shell docker ps -a -q)
