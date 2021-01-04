import React, { useState } from "react";
import Colors from "./Colors";

function OthersForm({ addVillagerInfo }) {
  const customDesigns = [
    "design1.jpeg",
    "design2.jpeg",
    "design3.jpeg",
    "design4.jpeg",
  ];
  const sizes = ["Medium", "Large", "x-large", "xx-large"];

  const [patternChoice, setPatternChoice] = useState("");
  const choices = [
    "Readymade Designs",
    "Logo of any technology",
    "Programming qoutes",
  ];
  return (
    <div>
      <div>
        <form onSubmit={addVillagerInfo}>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <label>Fullname: </label>
            <input
              type="text"
              className="focus:outline-none border-b flex-grow mx-2 md:p-1"
              name="fullname"
              required
            />
          </div>
          <div className="flex flex-col flex-wrap lg:flex-row mb-4 ">
            <label>Size: </label>
            <span className="flex flex-row pl-2  flex-wrap lg:flex-nowrap">
              {sizes.map((size, sizeIndex) => (
                <p
                  className="flex flex-row items-center mr-4"
                  key={`size-${sizeIndex}`}
                >
                  <input type="radio" name="size" value={size} required />{" "}
                  <span className="pl-1">{size}</span>
                </p>
              ))}
            </span>
          </div>
          <Colors colorTitle="Colour" />
          <div className="flex flex-col my-4 ">
            <h3 className="my-3">Choose a pattern of your choice</h3>
            <select
              name="shirt choice"
              className="bg-gray-200 shadow rounded flex-grow md:mx-2 p-1 pr-2 focus:outline-none"
              required
              onChange={(e) => setPatternChoice(e.target.value)}
            >
              <option className="bg-gray-200">Select your pattern</option>
              {choices.map((choice, choiceIndex) => (
                <option
                  className="bg-gray-200"
                  value={`choice-${choiceIndex + 1}`}
                  key={`choice-${choice}-${choiceIndex}`}
                >
                  {choice}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-4 pt-4">
            {patternChoice === "choice-1" ? (
              <span className="flex flex-col col-wrap md:flex-row mt-4">
                {customDesigns.map((customDesign, customDesignIndex) => (
                  <p
                    className="flex flex-row mx-4 my-4 lg:my-0"
                    key={`customDesign-${customDesignIndex}`}
                  >
                    <input
                      type="radio"
                      name="pattern"
                      value={customDesign}
                      required
                    />{" "}
                    <img
                      src={customDesign}
                      className="w-32 h-32 lg:h-auto ml-1"
                      alt={customDesign}
                    />
                  </p>
                ))}
              </span>
            ) : patternChoice === "choice-2" ? (
              <div className="flex flex-col mb-4 pt-8">
                <label>
                  Logo of any technology (like Vuejs logo, Reactjs logo)
                </label>
                <input
                  type="text"
                  name="pattern"
                  className="focus:outline-none border-b px-2"
                />
              </div>
            ) : patternChoice === "choice-3" ? (
              <div className="flex flex-col mb-4 pt-8">
                <label>
                  Technology qoutes (like "I breathe code", "I code to live" )
                </label>
                <input
                  type="text"
                  name="pattern"
                  className="focus:outline-none border-b px-2"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <center>
            <button className="place-self-center rounded">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default OthersForm;
