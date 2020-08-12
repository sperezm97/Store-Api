FROM node:14-alpine

# Bundle app source
COPY . /app
WORKDIR /app

#Start yarn
RUN yarn install
RUN yarn run build:prod

EXPOSE 8080
CMD [ "yarn", "start" ]