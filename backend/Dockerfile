FROM node:12.13.1

RUN mkdir -p /app/backend

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . /app/backend

EXPOSE 3000

CMD [ "npm", "start" ]
