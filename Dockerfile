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

EXPOSE 3000

WORKDIR /server

COPY --chown=node:node --from=build ./src ./

USER node

CMD ["dumb-init", "npm", "run", "prod"]