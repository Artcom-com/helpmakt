import axios from 'axios';

const api = axios.create({
  baseURL: 'https://helpmkt.vercel.app/api',
});

export default api;
