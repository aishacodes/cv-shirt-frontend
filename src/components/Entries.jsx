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
  }, []);

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
                    <div>
                      <p className="py-1">
                        <span>{pattern.pattern1} </span>
                        <span>{pattern.color1}</span>
                      </p>
                      <p>
                        <span>{pattern.pattern2} </span>
                        <span>{pattern.color2}</span>
                      </p>
                      <p>
                        <span>{pattern.pattern3} </span>
                        <span>{pattern.color3}</span>
                      </p>
                      <p>
                        <span>{pattern.pattern4} </span>
                        <span>{pattern.color4}</span>
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
