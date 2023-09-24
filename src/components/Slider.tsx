import React from 'react';

interface SliderProps {
    label: string; // Specify the type as string
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

function Slider({ label, value, onChange }: SliderProps) {
  return (
    <div className="slider">
      <label>{label}:</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
      />
      <span>{value}%</span>
    </div>
  );
}

export default Slider;
