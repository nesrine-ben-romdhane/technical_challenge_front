import React from 'react';
import { Card } from 'primereact/card';

interface WeatherCardProps {
    weather: {
        date: string;
        temperature: number;
        description: string;
    };
    cityName:string ;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather,cityName }) => {
    const getImageForDescription = (description: string) => {
        if (description.includes('sun')) {
            return 'https://cdn-icons-png.flaticon.com/512/869/869869.png'; // Exemple de lien d'image pour le soleil
        }
        return 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'; // Image par défaut
    };

    return (
        <div className="weather-card">
            <Card className="p-card">
                <div>
                    <h3>{weather.date}</h3>
                    <p className="city-name">{cityName}</p>
                    <p>Temperature: {weather.temperature}°</p>
                    <p>{weather.description}</p>
                </div>
                <img src={getImageForDescription(weather.description)} alt="Weather Icon" />
            </Card>
        </div>
    );
};

export default WeatherCard;