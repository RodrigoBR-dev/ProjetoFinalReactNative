import axios from "axios";

import asyncStorage from "./asyncStorage";

const api = axios.create({ baseURL: "https://serratec.herokuapp.com" });

api.interceptors.request.use(async (config) => {
  const token = await asyncStorage.obterToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
