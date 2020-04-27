import axios from 'axios';

// export const baseURL = 'http://localhost:3333';
export const baseURL = process.env.REACT_APP_BASE_URL;
console.log('baseURL', baseURL);

export const api = axios.create({
  baseURL,
});

// export default api;
