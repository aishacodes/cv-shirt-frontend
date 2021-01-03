import React from "react";

function Pattern({ patternName, patternDescription }) {
  const patName = patternName.toLowerCase().split(" ").join("");
  return (
    <div className="flex flex-col mb-4">
      <label>
        {patternName}
        <span className="text-xs font-light mx-2">
          {patternDescription}
        </span>{" "}
      </label>
      <input
        type="text"
        name={patName}
        className="focus:outline-none border-b px-2"
        required
      />
    </div>
  );
}

export default Pattern;
