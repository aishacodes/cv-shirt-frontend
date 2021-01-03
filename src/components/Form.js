import React, { useState } from "react";

import "./form.scss";
import VillagersForm from "./VillagersForm";

function Form() {
  const defaultValue = {
    fullname: "",
    color: "",
    size: "medium",
    patterns: [
      { pattern1: "hhh", color1: "red" },
      { pattern2: "ggg", color2: "blue" },
      { pattern3: "hhhh", color3: "white" },
      { pattern4: "hhhh", color4: "black" },
    ],
  };
  const addVillagerInfo = (e) => {
    e.preventDefault();
    const target = e.target;
    const fullname = target.fullname.value;
    const size = target.size.value;
    const pattern1 = target.pattern1.value;
    // const pattern2 = target.pattern2;
    const pattern3 = target.pattern3.value;
    // const pattern4 = target.pattern4;
    // const color1 = target.color1.val
    // const color2 = target;
    const color3 = target;
    const color4 = target;
  };

  return <VillagersForm addVillagerInfo={addVillagerInfo} />;
}

export default Form;
