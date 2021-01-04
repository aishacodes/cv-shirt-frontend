import React from "react";

function Pattern({ patternName, patternDescription, placeholder }) {
  const patName = patternName.toLowerCase().split(" ").join("");
  return (
    <div className="flex flex-col mb-4 pt-4">
      <label>
        {patternName}
        <span className="text-xs font-light mx-2">
          {patternDescription}
        </span>{" "}
      </label>
      <input
        type="text"
        name={patName}
        className="focus:outline-none border-b p-2"
        required
        placeholder={placeholder}
      />
    </div>
  );
}

export default Pattern;
