import React from 'react';
import './style.css';

const ColorSlider = ({ baseColor, colorName, value, onValueChange }) => {
    const handleValueChange = (event) => {
        const newValue = event.target.value;
        onValueChange(newValue);
    };
    
    return (
        <div className="slider color-panel">
            <label>{colorName}</label>
            <input
                type="range"
                min="0"
                max="255"
                step="1"
                className={`slider--${baseColor}`}
                value={value}
                onChange={handleValueChange}
            /> 
            <div className="slider-value">{value}</div>
        </div>
    );
  };
  
export default ColorSlider;