# Paris Subway API

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- With Docker
```
docker
```
- Without Docker
```
node.js
yarn
```

### Installing

A step by step series of examples that tell you how to get a development env running

- With Docker
```
docker build -t paris-subway-api .
docker run -d -p 4000:4000 paris-subway-api
```

- Without Docker
```
yarn install
yarn dev
```

You can now get the API on [localhost:4000](http://localhost:4000/)
