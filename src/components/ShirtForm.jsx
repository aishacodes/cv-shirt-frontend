import React, { useState } from "react";

import Colors from "./Colors";
import Others from "./OthersForm";
import Pattern from "./Pattern";

function ShirtForm({ addVillagerInfo, addOtherVillagerInfo }) {
  const customDesigns = [
    "design1.jpeg",
    "design2.jpeg",
    "design3.jpeg",
    "design4.jpeg",
  ];

  const sizes = ["Medium", "Large", "x-large", "xx-large"];
  const [shirtOption, setShirtOption] = useState("");
  const options = ["SDT1/ISA", "others"];
  return (
    <div className="flex flex-col flex-grow w-screen h-screen lg:flex-row fixed">
      <div
        class="hidden lg:h-full lg:w-2/4 lg:block bg-cover"
        style={{
          backgroundImage: 'url("./design1.jpeg")',
          backgroundPosition: "center",
        }}
      ></div>
      <div className="px-8 py-8 overflow-y-auto	lg:w-2/4">
        <header className="mb-8 text-center ">
          <h1 className="md:text-4xl text-2xl font-semibold ">
            Codevillage Swaggs
          </h1>
          <p>.....Anyone can build</p>
        </header>

        <div className="flex flex-col md:flex-row my-4 md:items-center">
          <label> Select your programme:</label>
          <select
            name="shirt option"
            className="bg-gray-200 shadow rounded flex-grow md:mx-2 p-1 mt-2 pr-2 focus:outline-none"
            required
            onChange={(e) => setShirtOption(e.target.value)}
          >
            <option className="bg-gray-200">Select your programme type</option>
            {options.map((option, optionIndex) => (
              <option
                className="bg-gray-200"
                value={option}
                key={`shirt-${option}-${optionIndex}`}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        {shirtOption === "SDT1/ISA" ? (
          <>
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
              <h3 className="my-3">
                Choose 4 patterns of your choice, one from each of the pattern
                sections below and their corresponding colours.{" "}
              </h3>
              <div className="flex flex-col mb-8 pt-4 px-4 rounded border border-gray-300	">
                <label>Pattern 1</label>
                <span className="flex flex-col col-wrap md:flex-row mt-4">
                  {customDesigns.map((customDesign, customDesignIndex) => (
                    <p
                      className="flex flex-row mx-4 my-4 lg:my-0"
                      key={`customDesign-${customDesignIndex}`}
                    >
                      <input
                        type="radio"
                        name="pattern1"
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
                <Colors colorTitle="Colour 1" />
              </div>
              <div className="px-4 mb-8 rounded border border-gray-300">
                <Pattern
                  patternName="Pattern 2"
                  patternDescription=" (logo of any technology such as Reactjs, Vuejs.)"
                />
                <Colors colorTitle="Colour 2" />
              </div>
              <div className="px-4 rounded border mb-8 border-gray-300">
                <Pattern
                  patternName="Pattern 3"
                  patternDescription='(programming qoutes like "I breath code", "I code to live".)'
                />
                <Colors colorTitle="Colour 3" />
              </div>
              <div className="px-4 rounded mb-8 border border-gray-300">
                <Pattern
                  patternName="Pattern 4"
                  patternDescription=" (logo of any technology or qoute i.e repeat any of pattern 3 or 4)"
                />
                <Colors colorTitle="Colour 4" />
              </div>
              <center>
                <button className="place-self-center rounded">Submit</button>
              </center>
            </form>
          </>
        ) : shirtOption === "others" ? (
          <Others addVillagerInfo={addOtherVillagerInfo} />
        ) : null}
      </div>
    </div>
  );
}

export default ShirtForm;
