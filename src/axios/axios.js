import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.191.19:8000/api/',
});

export default axiosInstance;
