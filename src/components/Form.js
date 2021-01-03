import React from "react";

import "./form.scss";
import VillagersForm from "./VillagersForm";

function Form() {
  const addVillagerInfo = (e) => {
    e.preventDefault();
  };

  return <VillagersForm addVillagerInfo={addVillagerInfo} />;
}

export default Form;
