import axios from 'axios';

import { obterToken } from './asyncStorage'

const api = axios.create({ baseURL: "https://serratec.herokuapp.com" });

// api.interceptors.request.use(async config => {
//     const token = obterToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

export default api;