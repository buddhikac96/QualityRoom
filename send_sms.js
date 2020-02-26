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
            from: '+13347593242',
            to: '+94711765356'
        })
        .then(message => console.log(message.sid));
}

function validateSms(map){
    if(map.temp > 40){
        sendSms("High Temperature", "Temperature", map.temp);
    }

    if(map.hum > 50){
        sendSms("High Humidity", "Humidity", map.hum);
    }

    if(map.sound > 100){
        sendSms("Dangerous sound level", "Sound", map.sound);
    }

    if(map.air > 60){
        sendSms("Bad air condition", "Air Quality", map.air);
    }
}

function createMessage(alertMessage, sensor, value){
    var msg = "Alert - " + alertMessage + " " + sensor + " - " + value;
    return msg;
}

module.exports.validateSms = validateSms;