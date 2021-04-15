// 对象是否拥有属性值
export function hasProperty(obj: any, prop: string) {
  return obj !== null && typeof obj === 'object' && (prop in obj);
}
// 获取属性值
export function getValueByProp(data: any, prop: string, defaultValue: any = '--'): any {
  let temp = data;
  const propArr = prop.split('.');
  let i = 0;
  while (i < propArr.length) {
    if (!hasProperty(temp, propArr[i])) return defaultValue;
    temp = temp[propArr[i]];
    i++;
  }
  return temp !== undefined ? temp : defaultValue;
}

// 拼接完整的图片地址
export const getImageUrl = (imageUrl?: string) => imageUrl ? process.env.APP_OSS_URL + imageUrl : null;
