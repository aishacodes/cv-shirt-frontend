import React from "react";

function Colors({ colorTitle }) {
  const colors = ["Deep Blue", "Black", "Ash", "Orange"];

  return (
    <div className="flex flex-col lg:flex-row my-4">
      <p> {colorTitle}</p>
      <span className="flex flex-row pl-2  flex-wrap lg:flex-nowrap">
        {colors.map((color, colorIndex) => (
          <p
            className="flex flex-row items-center mr-4"
            key={`color-${colorTitle}-${colorIndex}`}
          >
            <input
              type="radio"
              name={colorTitle.toLowerCase()}
              value={color}
              required
            />{" "}
            <span className="pl-1">{color}</span>
          </p>
        ))}
      </span>
    </div>
  );
}

export default Colors;
