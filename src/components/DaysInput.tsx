import React from 'react';
import { InputNumber } from 'primereact/inputnumber';

interface DaysInputProps {
    days: number;
    setDays: React.Dispatch<React.SetStateAction<number>>;
}

const DaysInput: React.FC<DaysInputProps> = ({ days, setDays }) => {
    const handleDaysChange = (e: { value: number | null }) => {
        if (e.value !== null) {
            setDays(e.value);
        }
    };

    return (
        <div className="p-inputgroup">
            <label htmlFor="days" className="p-d-block">Days</label>
            <InputNumber
                id="days"
                value={days}
                onChange={handleDaysChange}
                placeholder="Enter number of days"
                min={0}
                max={14}
                className="p-inputnumber"
            />
        </div>
    );
};

export default DaysInput;