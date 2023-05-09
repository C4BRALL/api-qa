FROM node:alpine

ENV NODE_VERSION 18.15.0

WORKDIR /usr/app/webhook

COPY package*.json ./

COPY . .

RUN yarn

CMD ["yarn", "dev"]