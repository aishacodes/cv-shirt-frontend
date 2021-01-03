import React, { useState, useEffect } from "react";
import formService from "../services/formServices";

import "./Entries.scss";

function Entries() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    formService.getAll().then((res) => {
      setVillagers(res.data);
    });
  });

  return (
    <div className=" mx-12">
      <header className="my-8 text-center ">
        <h1 className="md:text-4xl text-2xl font-semibold ">
          Codevillage Swaggs
        </h1>
        <p>.....Anyone can build</p>
      </header>

      <h1 className="text-center font-bold text-2xl py-2">Entries Table</h1>
      {villagers.length ? (
        <div className=" w-full">
          <div className="flex flex-row">
            <p className="w-1/4 font-bold text-xl">Name</p>
            <p className="w-1/4 font-bold text-xl">Size</p>
            <p className="w-80 font-bold text-xl">Patterns</p>
            <p className="text-xl font-bold">Colours</p>
          </div>
          {villagers.map((villager, villagerIndex) => {
            return (
              <div className="flex border-t" key={`villager-${villagerIndex}`}>
                <span className="w-1/4">{villager.fullname}</span>
                <span className="w-1/4">{villager.size}</span>
                <div className="pattern flex-grow">
                  {villager.patterns.map((pattern, patternIndex) => {
                    return (
                      <div key={`entry-page-pattern-${patternIndex}`}>
                        <p className="flex flex-row items-center space-between">
                          <span className="w-80">{pattern.pattern} </span>
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
      ) : (
        <p className="text-center text-2xl py-4 italic">No Entries yet</p>
      )}
    </div>
  );
}

export default Entries;
