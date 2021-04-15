import {getPlatform} from "@utils/platform";

class TokenUtils {
  // 上下文
  public context: any = null;
  // 获取token
  public get() {
    const platform = getPlatform();

    // 如果当前的环境为服务端

  }
}

const tokenUtils = new TokenUtils();
export default tokenUtils;
