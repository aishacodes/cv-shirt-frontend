import React, { useState } from "react";
import formServices from "../services/formServices";

import "./form.scss";
import ShirtForm from "./ShirtForm";

const Sucess = () => {
  return (
    <div className="flex flex-col">
      <header className="mb-8 text-center pt-4">
        <h1 className="md:text-4xl text-2xl font-semibold ">
          Codevillage Swaggs
        </h1>
        <p>.....Anyone can build</p>
      </header>
      <center>Your response has been submitted sucessfully. Thank you!</center>
    </div>
  );
};

function Form() {
  const [view, setView] = useState(false);

  const addVillagerInfo = (e) => {
    e.preventDefault();
    const target = e.target;
    const fullname = target.fullname.value;
    const size = target.size.value;
    const pattern1 = target.pattern1.value;
    const pattern2 = target.pattern2.value;
    const pattern3 = target.pattern3.value;
    const pattern4 = target.pattern4.value;
    const color1 = target.colour1.value;
    const color2 = target.colour2.value;
    const color3 = target.colour3.value;
    const color4 = target.colour4.value;
    const newObj = {
      fullname,
      size,
      patterns: [
        { pattern: pattern1, color: color1 },
        { pattern: pattern2, color: color2 },
        { pattern: pattern3, color: color3 },
        { pattern: pattern4, color: color4 },
      ],
    };
    formServices
      .create(newObj)
      .then(() => {
        setView(true);
      })
      .catch((err) => console.log(err));
  };
  const addOtherVillagerInfo = (e) => {
    e.preventDefault();
    const target = e.target;
    const fullname = target.fullname.value;
    const size = target.size.value;
    const pattern = target.pattern.value;
    const color = target.colour.value;
    const newObj = {
      fullname,
      size,
      patterns: [{ pattern, color }],
    };
    formServices
      .create(newObj)
      .then(() => {
        setView(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {view && <Sucess />}
      {view === false ? (
        <ShirtForm
          addVillagerInfo={addVillagerInfo}
          addOtherVillagerInfo={addOtherVillagerInfo}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Form;
