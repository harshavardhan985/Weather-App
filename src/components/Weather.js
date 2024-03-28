import React, { useState, useEffect } from 'react';
import { Card, Spin } from 'antd';
import { fetchWeatherData } from '../utils/api';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchWeatherData(location)
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [location]);

  if (loading) return <Spin size="large" />;

  if (!weather) return null;

  return (
    <Card title={`Weather in ${location}`} style={{ width: 300 }}>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </Card>
  );
};

export default Weather;
