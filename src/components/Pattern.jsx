import React from "react";
import Colors from "./Colors";

function Pattern({ patternName, patternDescription }) {
  return (
    <div className="flex flex-col mb-4">
      <label>
        {patternName}
        <span className="text-xs font-light mx-4">
          {patternDescription}
        </span>{" "}
      </label>
      <input
        type="text"
        name="pattern3"
        className="focus:outline-none border-b"
        required
      />
      <Colors colorTitle="Colour 3" />
    </div>
  );
}

export default Pattern;
