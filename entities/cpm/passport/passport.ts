// 登录请求参数
export class UserLoginParams {
  scope: string;
  username: string;
  password: string;
  grant_type: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.scope = 'read write';
    this.grant_type = 'password';
  }
}

// 账号、密码登录返回参数
export interface AdminAuthorize {
  /**
   * 授权token
   */
  access_token: string
  /**
   * 过期时间
   */
  expires_in: number
  /**
   * 作用域
   */
  scope: string
  /**
   * token类型
   */
  token_type: string
}
