interface Platform {
  // 是否为服务端
  isServer: boolean;
  // 是否为客户端
  isClient: boolean;
}

// 获取当前的平台信息
export const getPlatform = (): Platform => {
  return {
    isServer: !window,
    isClient: !!window
  }
}
