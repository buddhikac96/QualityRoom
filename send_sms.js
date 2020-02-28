const https = require('https');
const keys = require('./keys');

const accountSid = keys.twilio.accountSid;
const authToken = keys.twilio.authToken;

const client = require('twilio')(accountSid, authToken);


function sendSms(alertMessage, sensor, value) {

    var msg = createMessage(alertMessage, sensor, value);

    client.messages
        .create({
            body: msg,
            from: '+12058283422',
            to: '+94711765356'
        })
        .then(message => console.log(message.sid));
}

function validateSms(map){

    if(map.temp > 35){
        sendSms("High Temperature", "Temperature", map.temp);
    }

    if(map.hum > 60){
        sendSms("High Humidity", "Humidity", map.hum);
    }

    if(map.sound > 100){
        sendSms("Dangerous sound level", "Sound", map.sound);
    }

    if(map.air > 150){
        sendSms("Bad air condition", "Air Quality", map.air);
    }
}

function createMessage(alertMessage, sensor, value){
    var msg = "Alert - " + alertMessage + " " + sensor + " - " + value;
    return msg;
}

module.exports.validateSms = validateSms;