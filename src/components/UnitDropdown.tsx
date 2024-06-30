import React from 'react';
import { Dropdown } from 'primereact/dropdown';

interface UnitDropdownProps {
    unit: string;
    setUnit: React.Dispatch<React.SetStateAction<string>>;
}

const UnitDropdown: React.FC<UnitDropdownProps> = ({ unit, setUnit }) => {
    const units = [
        { label: 'Celsius', value: 'C' },
        { label: 'Fahrenheit', value: 'F' },
    ];

    const handleUnitChange = (e: { value: string }) => {
        setUnit(e.value);
    };

    return (
        <div className="p-inputgroup">
            <label htmlFor="unit" className="p-d-block">Unit</label>
            <Dropdown
                id="unit"
                value={unit}
                options={units}
                onChange={handleUnitChange}
                placeholder="Select a unit"
                className="p-dropdown"
            />
        </div>
    );
};

export default UnitDropdown;