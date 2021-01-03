import axios from "axios";

const getAll = () => {
  return axios.get("https://cv-shirt-form.herokuapp.com/api/villagers");
};

const create = (newObject) => {
  return axios.post(
    "https://cv-shirt-form.herokuapp.com/api/registration",
    newObject
  );
};
const formService = {
  getAll,
  create,
};
export default formService;
