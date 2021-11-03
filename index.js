const keys = require('./keys');
var mqtt = require('mqtt');
var con = require('./db');
//var sms = require('./send_sms');
var writeData = require('./data_handler');

var options = keys.options;
const client = mqtt.connect('mqtt://tailor.cloudmqtt.com', options);

con.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

client.on('connect', () => {
    console.log("MQTT Connected...");
    client.subscribe('data', (err) => {
        if(!err){
            console.log("Subscribed to data");
            client.publish('presence', 'Hello mqtt')
        }
    });
});

client.on('message', (topic, message) => {
    console.log("Message recieved");
    if(message.toString() !== "Data not received"){
        var data = message.toString().split(',');
        var temp = data[0].split(":")[1];
        var hum = data[1].split(":")[1];
        var air = data[2].split(":")[1];

        console.log(message.toString());

        if(isNaN(temp) || temp.toString() == ""){
            temp = -1;
        }

        if(isNaN(hum) || hum.toString() == ""){
            hum = -1;
        }

        if(isNaN(air) || air.toString() == ""){
            air = -1;
        }

        var map = {
            temp : temp,
            hum : hum,
            sound: 0,
            air: air
        }

        //console.log(map.temp);    

        try{
            writeData(map);
            //sms.validateSms(map);
        }catch(err){
            console.log(err);
        }
        
    }
});

