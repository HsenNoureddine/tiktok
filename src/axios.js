import axios from "axios";

const instance = axios.create({
  baseURL: "https://hsen-tiktokbackend.herokuapp.com",
});

export default instance;
