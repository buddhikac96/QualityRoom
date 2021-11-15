create table Sensor_Data(
    Time_Stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Temperature Float NULL,
    Humidity Float NULL,
    AirQuality Float NULL 
);

INSERT INTO `Sensor_Data` (`Time_Stamp`, `Temperature`, `Humidity`, `AirQuality`) VALUES (CURRENT_TIMESTAMP, '25.5', '76', '13'), (CURRENT_TIMESTAMP, '24', '78', '15');

INSERT INTO `Sensor_Data` (`Time_Stamp`, `Temperature`, `Humidity`, `AirQuality`) VALUES (CURRENT_TIMESTAMP, '23.5', '78', '15'), (CURRENT_TIMESTAMP, '24', '78', '15');

INSERT INTO `Sensor_Data` (`Time_Stamp`, `Temperature`, `Humidity`, `AirQuality`) VALUES (CURRENT_TIMESTAMP, '26.5', '74', '14'), (CURRENT_TIMESTAMP, '24', '78', '15');