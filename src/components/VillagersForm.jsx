import React from "react";

import Colors from "./Colors";
import Pattern from "./Pattern";

function VillagersForm({ addVillagerInfo }) {
  const designs = [
    "pattern1.jpeg",
    "pattern2.jpeg",
    "pattern3.jpeg",
    "pattern4.jpeg",
  ];

  const sizes = ["Medium", "Large", "x-large", "xx-large"];

  return (
    <div className="flex flex-col flex-grow w-screen h-screen lg:flex-row fixed">
      <div
        class="hidden lg:h-48 w-48 lg:h-full lg:w-2/4 lg:block bg-cover"
        style={{
          backgroundImage: 'url("./pattern1.jpeg")',
          backgroundPosition: "center",
        }}
      ></div>
      <form onSubmit={addVillagerInfo} className="px-8 py-8 overflow-y-auto	">
        <header className="mb-8 text-center ">
          <h1 className="md:text-4xl text-2xl font-semibold ">
            Codevillage Swaggs
          </h1>
          <p>.....Anyone can build</p>
        </header>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label>Fullname: </label>
          <input
            type="text"
            className="focus:outline-none border-b flex-grow mx-2 md:p-1"
            name="fullname"
            required
          />
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row mb-4">
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
        <h3 className="my-3">Shirt Designs</h3>
        <div className="flex flex-col mb-4">
          <label>Pattern 1</label>
          <span className="flex flex-col col-wrap md:flex-row mt-4">
            {designs.map((design, designIndex) => (
              <p
                className="flex flex-row mx-4 my-4 lg:my-0"
                key={`design-${designIndex}`}
              >
                <input type="radio" name="pattern1" required />{" "}
                <img
                  src={design}
                  className="w-32 h-32 lg:h-auto ml-1"
                  alt={design}
                />
              </p>
            ))}
          </span>
          <Colors colorTitle="Colour 1" />
        </div>
        <Pattern
          patternName="Pattern 2"
          patternDescription=" (logo of any technology such as Reactjs, Vuejs.)"
        />
        <Pattern
          patternName="Pattern 3"
          patternDescription='(qoutes like "I breath code", "I code to live".)'
        />
        <Pattern
          patternName="Pattern 4"
          patternDescription=" (logo of any technology or qoute)"
        />
        <button className="place-self-center">Submit</button>
      </form>
    </div>
  );
}

export default VillagersForm;
