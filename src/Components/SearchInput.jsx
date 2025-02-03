import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "./WeatherContext";

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #0056b3;
  }
`;

const SearchInput = ({ fetchWeather }) => {
  const { city, setCity, unit } = useContext(WeatherContext);

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={() => fetchWeather(city, unit)}>Search</Button>
    </div>
  );
};

export default SearchInput;
