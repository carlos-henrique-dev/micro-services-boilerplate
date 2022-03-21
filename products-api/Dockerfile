FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./build

EXPOSE 3000

CMD [ -d "node_modules" ] && node src/index.js || npm ci && node src/index.js

# CMD node src/index.js

