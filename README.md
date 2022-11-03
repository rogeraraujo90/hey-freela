# HeyFreela!

[![CodeQL](https://github.com/rogeraraujo90/hey-freela/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/rogeraraujo90/hey-freela/actions/workflows/codeql-analysis.yml)
[![Node.js CI](https://github.com/rogeraraujo90/hey-freela/actions/workflows/node.js.yml/badge.svg)](https://github.com/rogeraraujo90/hey-freela/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/95088bf17043e3fce59e/maintainability)](https://codeclimate.com/github/rogeraraujo90/hey-freela/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/95088bf17043e3fce59e/test_coverage)](https://codeclimate.com/github/rogeraraujo90/hey-freela/test_coverage)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rogeraraujo90_hey-freela&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rogeraraujo90_hey-freela)

An API to provide the HeyFreela system resources

## Development environment

- Node 18 
- MySQL Server 8

## Setting up

1. Create `hey_freela` and `hey_freela_test` databases in your MySQL Server.
2. Create the `.env` file with your database credentials. You can use `.env.example` as reference.
3. Run `npm run dev` to start the development server.

If everything have worked fine you should be able to access the API through `http://localhost:3000/<route>`

## Tests

To run the test suite: `npm run test`

You can also run:

- `npm run lint` to perform the linter check
- `npm run lint:fix` to perform the linter and fix all issues

## Contributing
 TBD
 