import React from "react";

export default function({main, name, weather}) {
  return (
    <div className="WeatherCard">
      <p>{name ? name : "Unknown"}</p>
      <p>weather: {weather ? weather[0].main : "Unknown"}</p>
      <p>temp: {main?.temp ? main.temp : "Unknown"}</p>
      <p>feels like: {main?.feels_like ? main.feels_like : "Unknown"}</p>
      <p>humidity: {main?.humidity ? main.humidity : "Unknown"}</p>
    </div>
  )
}