install: | node_modules dist

node_modules:
	docker-compose run --rm dev npm install

dist:
	docker-compose run --rm dev npm run compile

clean:
	docker-compose run --rm dev rm -rf dist

prune:
	docker-compose run --rm dev rm -rf dist node_modules
	docker-compose rm -f

dev: | install
	docker-compose up test dev

shell:
	docker-compose run --rm dev sh

start:
	docker-compose up app

stop:
	docker-compose down
