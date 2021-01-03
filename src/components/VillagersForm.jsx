import React from "react";

import Colors from "./Colors";

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
        <div className="flex flex-col md:flex-row mb-4">
          <label>Fullname: </label>
          <input
            type="text"
            className="focus:outline-none border-b"
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
              <p className="flex flex-row mx-4" key={`design-${designIndex}`}>
                <input type="radio" name="pattern1" required />{" "}
                <img
                  src={design}
                  className="w-32 my-4 lg:my-0 ml-1"
                  alt={design}
                />
              </p>
            ))}
          </span>
          <Colors colorTitle="Colour 1" />
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Pattern 2{" "}
            <span className="text-xs font-light mx-4">
              (logo of any technology such as Reactjs, Vuejs.)
            </span>{" "}
          </label>
          <input
            type="text"
            name="pattern2"
            className="focus:outline-none border-b"
            required
          />
          <Colors colorTitle="Colour 2" />
        </div>
        <div className="flex flex-col mb-4">
          <label>
            Pattern 3{" "}
            <span className="text-xs font-light mx-4">
              (qoutes like "I breath code", "I code to live".)
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
        <div className="flex flex-col">
          <label>
            Pattern 4{" "}
            <span className="text-xs font-light mx-4">
              (qoute or tech logo like.)
            </span>{" "}
          </label>
          <input
            type="text"
            name="pattern4"
            className="focus:outline-none border-b"
            required
          />
          <Colors colorTitle="Colour 4" />
        </div>
        <button className="place-self-center">Submit</button>
      </form>
    </div>
  );
}

export default VillagersForm;
