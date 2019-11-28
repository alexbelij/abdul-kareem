FROM node:12.13.1

RUN mkdir -p /app/frontend

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . /app/frontend

CMD [ "npm", "start" ]
