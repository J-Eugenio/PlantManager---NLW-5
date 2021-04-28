import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.169.40.66:3333',
});

export default api;
