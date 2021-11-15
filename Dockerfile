FROM node

WORKDIR /home/apps/server

COPY . .

EXPOSE 3000

RUN npm install
RUN npm install -g nodemon

CMD ["nodemon" , "server.js"]