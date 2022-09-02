# Dockerfile
FROM node:16.17.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
COPY package*.json ./
RUN npm install
RUN npm run build

COPY prisma ./prisma/
# RUN npx prisma migrate deploy
RUN npx prisma generate

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000

CMD npx prisma migrate deploy && npm run dev

