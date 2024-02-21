FROM node:20.11-alpine

WORKDIR /store_front

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]