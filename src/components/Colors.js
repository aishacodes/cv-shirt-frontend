import React from "react";

function Colors({ colorTitle }) {
  const colors = ["Deep Blue", "Black", "Ash", "Orange"];

  return (
    <div className="flex flex-col lg:flex-row my-4 lg:items-center">
      <p> {colorTitle}:</p>
      <select
        name="color"
        className="bg-gray-200 shadow rounded flex-grow mx-2 p-1 pr-2 focus:outline-none"
      >
        <option value="black" className="bg-gray-200">
          Select color
        </option>
        {colors.map((color, colorIndex) => (
          <option
            className="bg-gray-200"
            value={color}
            key={`color-${colorTitle}-${colorIndex}`}
          >
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Colors;
