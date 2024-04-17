#################
# Builder image #
#################
FROM node:20-alpine AS build

WORKDIR /src

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

####################
# Production image #
####################
FROM node:20-alpine AS production

RUN apk add dumb-init python3

WORKDIR /server

COPY --chown=node:node --from=build ./src ./

EXPOSE 3000

USER node

CMD ["dumb-init", "npm", "run", "prod"]