const API_KEY = '8729d5ef8e0885619e2c301dde27d273';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (location) => {
  const response = await fetch(
    `${API_URL}weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};
