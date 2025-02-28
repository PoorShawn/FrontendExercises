import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import weatherAPI from './api/weatherAPI';
import { useState } from 'react';

function App() {
  const [localWeather, setLocalWeather] = useState({});
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const key = "3be74cb30bb5840917423ce81337db3a"

  const weatherGet = (location) => {
    weatherAPI(`${baseUrl}?q=${location}&appid=${key}`)
      .then((data) => {
        setLocalWeather(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Can not get weather information: ", error);
      });
  };

  return (
    <div className="App">
      <h1>Hello Weather Manager</h1>
      <SearchBar weatherGet={weatherGet}/>
      <WeatherCard {...localWeather}/>
    </div>
  );
}

export default App;
