const con = require('./db');

var writeData = (data) => {
    var sql = "INSERT INTO Sensor_Data(Temperature, Humidity, Sound, AirQuality) VALUES("+data.temp+", "+data.hum+", "+data.sound+", "+data.air+");";
    console.log(sql);
    
    // try{
    //     con.query(sql, (err, result) => {
    //         if(err) throw err;
    //         console.log(result);
    //     });
    // }catch(err){
    //     throw err;
    // }
    
}

module.exports = writeData;