import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "New York"
  );
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        error,
        setError,
        unit,
        setUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
