import React from 'react';
import { InputText } from 'primereact/inputtext';

interface CityInputProps {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityInput: React.FC<CityInputProps> = ({ city, setCity }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    return (
        <div className="p-inputgroup">
            <label htmlFor="city" className="p-d-block">City</label>
            <InputText
                id="city"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
                className="p-inputtext"
            />
        </div>
    );
};

export default CityInput;