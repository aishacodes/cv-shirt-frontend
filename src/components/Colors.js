import React from "react";

function Colors({ colorTitle }) {
  const colors = ["Deep Blue", "Black", "Ash", "Orange"];
  const colorName = colorTitle.toLowerCase().split(" ").join("");

  return (
    <div className="flex flex-col md:flex-row my-4 md:items-center">
      <label> {colorTitle}:</label>
      <select
        name={colorName}
        className="bg-gray-200 shadow rounded flex-grow md:mx-2 p-1 pr-2 focus:outline-none"
        required
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
