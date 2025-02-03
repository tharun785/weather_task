import React from "react";
import WeatherDashboard from "./WeatherDashboard";
import WeatherProvider from "./WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <WeatherDashboard />
    </WeatherProvider>
  );
};

export default App;
