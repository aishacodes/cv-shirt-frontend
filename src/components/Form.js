import React from "react";
import formServices from "../services/formServices";

import "./form.scss";
import VillagersForm from "./VillagersForm";

function Form() {
  const addVillagerInfo = (e) => {
    e.preventDefault();
  };

  return <VillagersForm addVillagerInfo={addVillagerInfo} />;
}

export default Form;
