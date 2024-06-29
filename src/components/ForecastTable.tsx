import React from 'react';
import WeatherCard from './WeatherCard';

interface ForecastTableProps {
    forecast: Array<{
        date: string;
        temperature: number;
        description: string;
    }>;
    cityName:string ;
}

const ForecastTable: React.FC<ForecastTableProps> = ({ forecast ,cityName}) => (
    <div className="forecast-table">
        {forecast.map((weather, index) => (
            <WeatherCard cityName={cityName} key={index} weather={weather} />
        ))}
        {forecast.length === 0 && <p>No forecast available</p>}
    </div>
);

export default ForecastTable;