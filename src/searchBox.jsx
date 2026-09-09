import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './weatherApp.css';

export default function SearchBox({ setWeatherData }) {

let [city,setCity] = useState('');

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

console.log("API URL:", API_URL);
console.log("API KEY:", API_KEY);
console.log("WEATHER API URL:", WEATHER_API_URL);

  let getWeather = async () => {

  let response = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}`
  );

  let data = await response.json();

  console.log("Geocoding response:", data);

  let lat = data[0].lat;
  let lon = data[0].lon;

  let weatherResponse = await fetch(
    `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  let weatherData = await weatherResponse.json();

  console.log("Weather response:", weatherData);

  let result = {
    temperature: weatherData.main.temp,
    min_temperature: weatherData.main.temp_min,
    max_temperature: weatherData.main.temp_max,
    pressure: weatherData.main.pressure,
    humidity: weatherData.main.humidity,
    description: weatherData.weather[0].description,
    city: data[0].name,
    country: data[0].country
  };

  console.log("Final result:", result);
 
  return result;
};

let handleChange = (e) => {
  setCity(e.target.value);
}
let handleSubmit = async (e) => {
  e.preventDefault();
  let info = await getWeather();
  setWeatherData(info);
  setCity('');


  
}


  return (
    <div>
      <h2>Search for the weather</h2>

      <TextField
        label="City"
        variant="outlined"
        size="small"
        value={city}
        onChange={handleChange}
      />
      
      <br></br>
      <br></br>
       <Button variant="contained" size="small" onClick={handleSubmit}>
          Search
        </Button>

    </div>
  );
}