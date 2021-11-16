FROM node

WORKDIR /home/apps/server

COPY . .

EXPOSE 3000

RUN npm install
RUN npm install -g nodemon
RUN npm install -g forever
RUN npm install forever-monitor

CMD ["forever", "start" , "forever.json"]