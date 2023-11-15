import React from "react";

export default function MyInput({ place, value, onInputChange }) {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <input
      className="my-2 p-2 border-2 rounded-md border-slate-500 font-bold"
      type="number"
      placeholder={place}
      value={value}
      onChange={handleChange}
    />
  );
}
