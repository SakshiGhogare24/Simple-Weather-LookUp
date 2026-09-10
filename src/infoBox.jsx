import './weatherApp.css';

export default function InfoBox({ weatherData }) {
  return (
    <div className="weather-card">

      <div className="weather-location">
        📍 {weatherData.city}, {weatherData.country}
      </div>

      <div className="weather-main">

        <div className="weather-icon">
          ☀️
        </div>

        <div className="temperature">
          {Math.round(weatherData.temperature)}
          <span>°C</span>
        </div>

      </div>

      <div className="weather-description">
        {weatherData.description}
      </div>

      <div className="temperature-range">
        <span>
          ↑ {typeof weatherData.max_temperature === 'number' ? Math.round(weatherData.max_temperature) : weatherData.max_temperature}°C
        </span>

        <span>
          ↓ {typeof weatherData.min_temperature === 'number' ? Math.round(weatherData.min_temperature) : weatherData.min_temperature}°C
        </span>
      </div>


      <div className="weather-details">

        <div className="weather-detail">
          <div className="detail-icon">💧</div>

          <div>
            <p>Humidity</p>
            <h3>{weatherData.humidity}%</h3>
          </div>
        </div>


        <div className="weather-detail">
          <div className="detail-icon">🌡️</div>

          <div>
            <p>Pressure</p>
            <h3>{weatherData.pressure} hPa</h3>
          </div>
        </div>


        <div className="weather-detail">
          <div className="detail-icon">🌤️</div>

          <div>
            <p>Condition</p>
            <h3>{weatherData.description}</h3>
          </div>
        </div>

      </div>

    </div>
  );
}