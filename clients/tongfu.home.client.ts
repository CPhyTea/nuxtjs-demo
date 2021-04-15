import axios, {AxiosInstance} from "axios";
import {getValueByProp} from "@utils/index";

const tongfuHomeClient: AxiosInstance = axios.create({
  baseURL: process.env.APP_TONGFU_BASE_URL,
})

tongfuHomeClient.interceptors.response.use(
  response => {
    return getValueByProp(response, 'data.data');
  }, error => {

  }
)

export default tongfuHomeClient;
