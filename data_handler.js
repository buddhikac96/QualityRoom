const con = require('./db');

var writeData = (data) => {

    if(data.temp == -1 || data.air == -1 || data.hum == -1){
        return;
    }

    var sql = "INSERT INTO Sensor_Data(Temperature, Humidity, AirQuality) VALUES("+data.temp+", "+data.hum+", "+data.air+");";
    
    try{
        con.query(sql, (err, result) => {
            if(err) throw err;
            //console.log(result);
        });
    }catch(err){
        console.log("SQL Error");
    }
    
}

module.exports = writeData;