import axios from "axios";

const baseUrl = "https://cv-shirt-form.herokuapp.com";

const getAll = () => {
  return axios.get(`${baseUrl}/villagers`);
};

const create = (newObject) => {
  return axios.post(
    "https://cv-shirt-form.herokuapp.com/api/registration",
    newObject
  );
};

export default {
  getAll,
  create,
};
