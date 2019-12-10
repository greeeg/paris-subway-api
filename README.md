[github-actions-badge]: https://github.com/greeeg/paris-subway-api/workflows/Test/badge.svg
[typescript]: https://www.typescriptlang.org
[graphql-yoga]: https://github.com/prisma-labs/graphql-yoga
[soap]: https://github.com/vpulim/node-soap
[prettier]: https://prettier.io/
[lintstaged]: https://github.com/okonet/lint-staged
[storybook]: https://storybook.js.org/

# Paris Subway API [![GitHub Actions][github-actions-badge]](https://github.com/greeeg/paris-subway-api/actions)

> GraphQL layer for Paris Transportation Authority's [real-time API](https://dataratp.opendatasoft.com/page/temps-reel/)

## Requirements

- Node.js version `10.15.3` or above
- Yarn version `1.17.0` or above

## Stack

- [TypeScript][typescript] as programming language
- [GraphQL Yoga][graphql-yoga] as GraphQL server
- [SOAP][soap] to communicate with RATP's webservice
- [Prettier][prettier] and [Lint-staged][lintstaged] as code formatting and linting tools

## Getting started

```sh
# Clone the repository
git clone git@github.com:greeeg/paris-subway-api.git

cd paris-subway-api

# Install dependencies
yarn install

# Start a development server locally
yarn run dev
```

## Scripts

The following scripts are embedded with the package:

| Name             | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `dev`            | Runs the project locally                             |
| `build`          | Transpiles Typescript files to Javascript files      |
| `generate:types` | Generates Typescript definitions from GraphQL schema |

## Building for deployment

```sh
# Build a Docker image for the project
docker build -t paris-subway-api .

# Run image locally
docker run -d -p 4000:4000 paris-subway-api
```
