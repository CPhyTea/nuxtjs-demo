import {AxiosInstance} from "axios";

export default class BaseService {
  public client: AxiosInstance;
  public readonly path: string;

  constructor(client: AxiosInstance, path: string) {
    this.client = client;
    this.path = path;
  }
}
