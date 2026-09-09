# Simple Weather Lookup 🌤️

A simple and responsive weather lookup project built with **React** that allows users to search for a city and view its current weather information. The project uses the **OpenWeatherMap API** to retrieve real-time weather data.

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* 📈 Display minimum and maximum temperature
* 💧 Display humidity
* 🌬️ Display atmospheric pressure
* 🌤️ Display current weather condition
* 🌍 Display city and country
* 📱 Responsive and user-friendly interface
* 🔐 API configuration managed using environment variables

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **Material UI (MUI)**
* **CSS**
* **OpenWeatherMap API**
* **Vite**

## 📂 Project Structure

```text
src/
├── infoBox.jsx
├── searchBox.jsx
├── weatherApp.jsx
└── weatherApp.css

.env
.env.example
.gitignore
package.json
```

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/SakshiGhogare24/simple-weather-lookup.git
```

### 2. Navigate to the project

```bash
cd simple-weather-lookup
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.openweathermap.org/geo/1.0/direct
VITE_API_KEY=YOUR_API_KEY
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
```

Replace `YOUR_API_KEY` with your own OpenWeatherMap API key.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔑 Environment Variables

The API configuration is stored in `.env` instead of directly inside the source code.

The `.env` file is excluded from Git using `.gitignore` to prevent accidentally committing the API key to the repository.


## 🌐 API

Weather information is retrieved using the **OpenWeatherMap API**.

The project uses:

* **Geocoding API** — to find the latitude and longitude of a searched city.
* **Current Weather API** — to retrieve the weather information using those coordinates.

## 🚀 Future Improvements

* Add weather icons based on current conditions
* Add loading indicators
* Handle invalid city searches gracefully
* Add error messages for failed API requests
* Add additional weather information such as wind speed and visibility
* Improve the responsive design
* Deploy the project online

## 📄 License

This project is created for learning and portfolio purposes.

