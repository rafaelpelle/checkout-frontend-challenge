import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com',
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default axiosClient;
