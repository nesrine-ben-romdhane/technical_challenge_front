
import axios from 'axios';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODE_API_URL = 'https://geocode.maps.co/search';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getCoordinates = async (city: string) => {
    const response = await axios.get(`${GEOCODE_API_URL}?q=${city}&api_key=${API_KEY}`);
    return response.data[0];
};

export const getWeatherData = async (lat: number, lon: number, days: number, unit: string) => {
    const response = await axios.get(WEATHER_API_URL, {
        params: {
            latitude: lat,
            longitude: lon,
            daily: 'temperature_2m_max,temperature_2m_min',
            temperature_unit: unit === 'C' ? 'celsius' : 'fahrenheit',
            timezone: 'auto',
            start_date: new Date().toISOString().split('T')[0],
            end_date: new Date(new Date().setDate(new Date().getDate() + days-1)).toISOString().split('T')[0]
        }
    });
    return response.data;
};
