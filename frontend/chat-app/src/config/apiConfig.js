import axios from "axios";

export const baseURL = "http://localhost:3001";

const config = {
  baseURL,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache"
  },
  params: {}
};

const api = axios.create(config);

export default api;
