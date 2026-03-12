import axios from "axios";

const API = axios.create({
  baseURL: "https://devsetu.api.hackademyzone.xyz/api"
});

export default API;