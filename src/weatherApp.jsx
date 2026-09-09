import SearchBox from './searchBox.jsx'
import InfoBox from './infoBox.jsx'
import { useState } from 'react';
import './weatherApp.css';

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState(
        {temperature:0, 
      min_temperature: "--",
      max_temperature: "--", 
      pressure: "--",
      humidity: "--", 
      description: "--",
      city: "--",
      country: "--"});
      let updateWeatherData = (data) => {
        setWeatherData(data);
      }

    return (
        <div>
            <SearchBox setWeatherData={updateWeatherData} />
            <InfoBox weatherData={weatherData} />
        </div>
    )
}