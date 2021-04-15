import BaseService from "~/services/base.service";
import passportClient from "~/clients/passport.client";
import {AdminAuthorize, UserLoginParams} from "~/entities/cpm/passport/passport";
import {AxiosBasicCredentials} from "axios";
import qs from 'qs';

export class PassportService extends BaseService {
  // 登录，通过账号密码获取token
  async login(data: UserLoginParams): Promise<AdminAuthorize> {
    const auth: AxiosBasicCredentials = {
      username: <string>process.env.VUE_APP_AUTH_USERNAME,
      password: <string>process.env.VUE_APP_AUTH_PASSWORD
    };
    const res = await this.client({
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: '/oauth/token',
      method: 'post',
      auth,
      withCredentials: false,
      data: qs.stringify(data)
    });
    return res as unknown as AdminAuthorize;
  }
}

const passportService = new PassportService(passportClient, '')
export default passportService;
