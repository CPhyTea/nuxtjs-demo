import { Component, Vue } from 'nuxt-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import { Form as ElForm, Input } from 'element-ui';
import { loading } from '@decorators/index';
import passportService from "@services/cpm/passport/passport.service";

@Component({ name: 'Login' })
export default class extends Vue {
  // 应用名称
  public appName: string = process.env.APP_NAME!;

  // 版本号
  private version: string = process.env.VUE_APP_VERSION || '';

  /**
   * 登录失败标记
   */
  public loginFail: boolean = false;

  /**
   * 登录表单       handleLogin
   */
  private loginForm: any = {
    username: '',
    password: '',
    grant_type: 'password',
    scope: 'read write'
  };
  /**
   * 登录表单验证规则
   */
  private loginRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
    password: [{ required: true, message: '请输入密码', trigger: 'change' }]
  };
  /**
   * 密码类型
   */
  private passwordType = 'password';
  /**
   * 登录状态
   */
  private loading = false;
  private redirect?: string;
  private otherQuery: Dictionary<string> = {};

  /**
   * 展示密码或者隐藏密码
   */
  private showPwd() {
    if (this.passwordType === 'password') {
      this.passwordType = '';
    } else {
      this.passwordType = 'password';
    }
    this.$nextTick(() => {
      (this.$refs.password as Input).focus();
    });
  }

  /**
   * 登录业务
   */
  @loading()
  private async handleLogin() {
    const valid = await (this.$refs.loginForm as ElForm).validate();
    if (!valid) return;
    // 调用登录请求接口。请求成功，获取返回token，通过token获取userInfo
    try {
      // const res = await passportService.login(this.loginForm);
      // console.log(res);
      this.loginFail = false;
      this.$router.push({
        path: this.redirect || '/',
        query: this.otherQuery
      }).catch(e => console.log(e));
      this.loading = false;
    } catch (e) {
      this.loginFail = true;
    }
  }

  public getVersion() {
    return process.env.VUE_APP_VERSION;
  }
}
