import React, { useState, useEffect } from "react";
import formService from "../services/formServices";

import "./Entries.scss";

function Entries() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    formService.getAll().then((res) => {
      setVillagers(res.data);
      console.log(villagers);
    });
  });

  return (
    <div className="w-full">
      <h1>Entries</h1>
      <div className=" w-full">
        <div className="flex flex-row">
          <p className="w-1/4 text-bold text-xl">Name</p>
          <p className="w-1/4 text-bold text-xl">Size</p>
          <p className="w-1/2 text-bold text-xl">Patterns and colour</p>
        </div>
        {villagers.map((villager, villagerIndex) => {
          return (
            <div className="flex border-t" key={`villager-${villagerIndex}`}>
              <span className="w-1/4">{villager.fullname}</span>
              <span className="w-1/4">{villager.size}</span>
              <div className="pattern">
                {villager.patterns.map((pattern, patternIndex) => {
                  return (
                    <div key={`entry-page-pattern-${patternIndex}`}>
                      <p>
                        <span>{pattern.pattern} </span>
                        <span>{pattern.color}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Entries;
