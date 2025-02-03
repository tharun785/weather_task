import React, { useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { WeatherContext } from "./WeatherContext";
import SearchInput from "./SearchInput";
import WeatherInfo from "./WeatherInfo";
import ErrorMessage from "./ErrorMessage";

const API_KEY = "4c0263b9a6d2310438d4f911c6f0c4b2"; // Replace with your actual API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background: #ff6600;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #cc5500;
  }
`;

const WeatherDashboard = () => {
  const { city, setWeather, setError, weather, error, unit, setUnit } =
    useContext(WeatherContext);

  const fetchWeather = async (cityName, unitType) => {
    try {
      const response = await axios.get(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=${unitType}`
      );
      setWeather(response.data);
      setError("");

      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError("City not found or API error.");
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather(city, unit);
    const interval = setInterval(() => fetchWeather(city, unit), 30000);
    return () => clearInterval(interval);
  }, [city, unit]);

  return (
    <WeatherContainer>
      <h2>Weather Dashboard</h2>
      <SearchInput fetchWeather={fetchWeather} />
      <ToggleButton
        onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
      >
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </ToggleButton>
      <ErrorMessage error={error} />
      {weather && <WeatherInfo />}
    </WeatherContainer>
  );
};

export default WeatherDashboard;
