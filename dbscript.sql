create table Sensor_Data(
    Time_Stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Temperature Float NULL,
    Humidity Float NULL,
    AirQuality Float NULL 
);

insert into Sensor_Data(Temperature,Humidity,AirQuality) 
values (23.5, 75.4, 13,2);

insert into Sensor_Data(Temperature,Humidity,AirQuality) 
values (24.5, 78.4, 12,2);

insert into Sensor_Data(Temperature,Humidity,AirQuality) 
values (25.5, 81.4, 11,2);