import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.8.19:8000/api/auth/',
});

export default axiosInstance;
