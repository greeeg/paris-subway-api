FROM node:12.13.1-alpine3.9

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./
COPY yarn.lock ./

USER node

RUN yarn install
RUN yarn build

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "node", "dist/index.js" ]
