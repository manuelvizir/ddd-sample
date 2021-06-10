install: | node_modules dist

node_modules:
	docker compose run --rm dev npm install

dist:
	docker compose run --rm dev npm run compile

test:
	docker compose run --rm dev npm test

clean-coverage:
	docker compose run --rm dev rm -rf coverage/

coverage: | clean-coverage
	docker compose run --rm dev npm run test:coverage

clean:
	docker compose run --rm dev rm -rf dist

prune:
	docker compose run --rm dev rm -rf dist node_modules coverage
	docker compose rm -f

dev: | install
	docker compose up test dev lint

shell:
	docker compose run --rm dev sh

logs:
	docker compose logs -f

start:
	docker compose up app

stop:
	docker compose down
