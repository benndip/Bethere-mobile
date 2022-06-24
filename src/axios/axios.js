import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.103:8000/api/auth/',
});

export default axiosInstance;
