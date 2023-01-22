const getData = 'SELECT id, timestamp, temperature, dewpoint, visibility FROM weather_observations';
const insertData = 'INSERT INTO  weather_observations(timestamp, temperature, dewpoint, relative_humidity, wind_speed, wind_gust, wind_direction, pressure, visibility, weather_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';



module.exports = {
    getData,
    insertData,
};