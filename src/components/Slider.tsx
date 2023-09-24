import React from 'react';

interface SliderProps {
    label: string; // Specify the type as string
    value: number;
  }

function Slider({ label, value }: SliderProps) {
  return (
    <div className="slider">
      <label>{label}:</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
      />
      <span>{value}%</span>
    </div>
  );
}

export default Slider;
