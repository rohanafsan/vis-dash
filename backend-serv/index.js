const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const pool = require('./db/observationdb');
const queries = require('./queries/queries');

app.use(cors());

let weatherData; // variable to store the weather data

// GET request to retrieve weather data from database
app.get('/getData', (req, res) => {
  pool.query(queries.getData, (error, results) => {
  if (error) throw (error);
  res.status(200).json(results.rows);
  });
});

// asynchronous function to fetch data from API and store it in database
const getWeatherData = async () => {
    try {
        const response = await axios.get('https://weatherapi.pelmorex.com/v1/observation?lat=43.5100092&long=-79.8976626');
        weatherData = response.data;
        storeWeatherData();
    } catch (error) {
        console.error(error);
    }
};

// asynchronous function to store weather data in database
const storeWeatherData = async () => {
    try {
      pool.query(queries.insertData, [weatherData.time.local, weatherData.temperature, weatherData.dewPoint, weatherData.relativeHumidity, weatherData.wind.speed, weatherData.wind.gust, weatherData.wind.direction, weatherData.pressure.value, weatherData.visibility, weatherData.weatherCode.value]);
      console.log("Observation data stored in database");
    } catch (error) {
      console.error(error);
    }
}

setInterval(getWeatherData, 120000); // call getWeatherData every 5 mins (300000 milliseconds)

app.listen(port, () => {
    console.log(`Observation service running on port ${port}`);
});