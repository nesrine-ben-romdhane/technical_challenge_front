import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CityInput from './components/CityInput';
import UnitDropdown from './components/UnitDropdown';
import DaysInput from './components/DaysInput';
import ForecastTable from './components/ForecastTable';
import { getCoordinates, getWeatherData } from './services/weatherService';
import './styles/style.css';

const App: React.FC = () => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('C');
    const [days, setDays] = useState(10);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [cityName, setCityName] = useState('');

    const fetchWeather = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            if (!city) {
                setForecast([]);
                return;
            }

            const coordinates = await getCoordinates(city);
            const weatherData = await getWeatherData(coordinates.lat, coordinates.lon, days, unit);
            const forecastData = weatherData.daily.temperature_2m_max.map((temp: number, index: number) => ({
                date: weatherData.daily.time[index],
                temperature: temp,
                description: "Clear Sky" // Exemple de description
            }));
            setForecast(forecastData);
            setCityName(coordinates.display_name);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message); // Capturer l'erreur spécifique de l'API
            } else {
                setError('Failed to fetch weather data'); // Gérer les autres erreurs possibles
            }
        } finally {
            setLoading(false);
        } 
    }, [city, unit, days]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    const memoizedForecastTable = useMemo(() => (
        <ForecastTable cityName={cityName} forecast={forecast} />
    ), [cityName, forecast]);

    return (
        <div className="App">
            <div className="form-and-results">
                <div className="form-section">
                    <h1>Weather Dashboard</h1>
                    <CityInput city={city} setCity={setCity} />
                    <UnitDropdown unit={unit} setUnit={setUnit} />
                    <DaysInput days={days} setDays={setDays} />
                </div>
                <div className="results-section">
                    {loading && <p className="loading">Loading...</p>}
                    {error && <p className="error">{error}</p>}
                    {!loading && !error && memoizedForecastTable}
                </div>
            </div>
        </div>
    );
};

export default App;