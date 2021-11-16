const https = require('https');
const keys = require('./keys');

const accountSid = keys.twilio.accountSid;
const authToken = keys.twilio.authToken;

const client = require('twilio')(accountSid, authToken);


var allowSendSMSTemp = true;
var allowSendSMSHum = true;
var allowSendSMSAir = true;


function sendSms(alertMessage, sensor, value, map) {

    var msg = createMessage(alertMessage, sensor, value, map);

    client.messages
        .create({
            body: msg,
            from: '+18559534541',
            to: '+94767741096'
        })
        .then(message => console.log(message.sid));
    
    console.log("SMS Sent");
}

function validateSms(map){

    if(map.temp >= 31 && allowSendSMSTemp){
        sendSms("High Temperature", "Temperature", map.temp, map);
        allowSendSMSTemp = false;
    }else if(map.temp < 31){
        allowSendSMSTemp = true;
    }

    if(map.hum >= 90 && allowSendSMSHum){
        sendSms("High Humidity", "Humidity", map.hum, map);
        allowSendSMSHum = false;
    }else if(map.hum < 90){
        allowSendSMSHum = true;
    }

    if(map.air >= 20 && allowSendSMSAir){
        sendSms("Bad air condition", "Air Quality", map.air, map);
        allowSendSMSAir = false;
    }else if(map.air < 20){
        allowSendSMSAir = true;
    }
}

function createMessage(alertMessage, sensor, value, map){
    var msg = "Alert  -  " + alertMessage + '\n';
    msg += "Temperature  -  " + map.temp + String.fromCharCode(0x00B0) + "C\n";
    msg += "Humidity  -  " + map.hum + " RH\n";
    msg += "Air Quality  -  " + map.air + " ppm\n";

    return msg;
}

module.exports.validateSms = validateSms;