# Variables
LATEST_COMMIT ?= $$(git rev-parse HEAD)
VERSION ?= latest
HOST_FOR_DOCKER_IMAGE ?= 546346
ENVIRONMENT ?= develop
PROJECT_NAME ?= neptunessushi_frontend

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
%:
	@:

docker_login: ## login to docker registry.
	docker login https://$(HOST_FOR_DOCKER_IMAGE)

build_app: ## Build Application docker image.
	docker build -f ./deploy/Dockerfile -t $(HOST_FOR_DOCKER_IMAGE)/$(PROJECT_NAME)_$(ENVIRONMENT):$(VERSION) .

push_app: ## Push Application docker image.
	docker push $(HOST_FOR_DOCKER_IMAGE)/$(PROJECT_NAME)_$(ENVIRONMENT):$(VERSION)

docker: ## Build and push all necessary docker images.
	make build_app push_app