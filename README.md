[github-actions-badge]: https://github.com/greeeg/paris-subway-api/workflows/Test/badge.svg
[typescript]: https://www.typescriptlang.org
[graphql-yoga]: https://github.com/prisma-labs/graphql-yoga
[soap]: https://github.com/vpulim/node-soap
[prettier]: https://prettier.io/
[lintstaged]: https://github.com/okonet/lint-staged
[storybook]: https://storybook.js.org/

# Paris Subway API

> GraphQL layer for Paris Transportation Authority's [real-time API](https://dataratp.opendatasoft.com/page/temps-reel/)

```graphql
query {
  lines(reseau: "metro") {
    name
    code
    stations {
      name
    }
  }
}
```

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

> Please note that the Paris Transportation Authority (RATP) currently has an IP address whitelisting policy in order to use their real-time API. You can request access by using [this form](https://data.ratp.fr/api/datasets/1.0/horaires-temps-reel/attachments/fo_inscription_pdf/)

```sh
# Build a Docker image for the project
docker build -t paris-subway-api .

# Run image locally
docker run --init -p 4000:4000 paris-subway-api
```
