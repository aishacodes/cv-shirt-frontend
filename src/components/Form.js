import React from "react";
import formServices from "../services/formServices";

import "./form.scss";
import VillagersForm from "./VillagersForm";

function Form() {
  return <VillagersForm addVillagerInfo={addVillagerInfo} />;
}

export default Form;
