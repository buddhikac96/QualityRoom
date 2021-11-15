FROM nodejs:latest

WORKDIR /home/apps/server

COPY . .

EXPOSE 3000

RUN npm install

CMD ["nodemon" , "server.js"]