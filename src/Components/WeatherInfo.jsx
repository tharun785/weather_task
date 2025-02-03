import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "./WeatherContext";

const WeatherInfoContainer = styled.div`
  margin-top: 20px;
`;

const WeatherInfo = () => {
  const { weather, unit } = useContext(WeatherContext);
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <WeatherInfoContainer>
      <h3>
        {weather.name}, {weather.sys.country}
      </h3>
      <p>
        🌡 Temperature: {weather.main.temp} {temperatureUnit}
      </p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>
        💨 Wind Speed: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
      </p>
      <p>🌤 Condition: {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
