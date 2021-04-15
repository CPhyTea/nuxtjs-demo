import axios from 'axios';

console.log(process.env.APP_AVGLE_API_BASE_URL);

// @ts-ignore
const avgleClient = axios.create({
  baseURL: process.env.APP_AVGLE_API_BASE_URL
});

export default avgleClient;
