# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Install Docker CLI
RUN apk add --no-cache docker-cli

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# If you have post-install scripts for rebuilding modules, run them
# RUN npm rebuild or any specific build commands for your project

# Install TypeScript globally
RUN npm install -g typescript

COPY . .

RUN tsc

EXPOSE 3000

# Command to run your app using Node.js
CMD ["node", "dist/main.js"]
