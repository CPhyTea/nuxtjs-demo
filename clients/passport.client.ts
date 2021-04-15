import axios, {AxiosInstance} from "axios";

const passportClient: AxiosInstance = axios.create({
  baseURL: process.env.APP_PASSPORT_BASE_URL,
})

export default passportClient;
