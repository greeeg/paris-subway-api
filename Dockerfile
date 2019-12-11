FROM node:10.16.3 as builder

WORKDIR /build
COPY . .
RUN yarn install
RUN yarn run build
RUN yarn install --production

FROM node:10.16.3-slim

WORKDIR /app
COPY --from=builder /build/node_modules ./node_modules/
COPY --from=builder /build/dist ./dist

COPY --from=builder /build/src/schema.graphql ./src/
COPY --from=builder /build/src/wsiv.wsdl ./src/

USER node

CMD ["node", "dist/index.js"]