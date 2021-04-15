// 加载
export function loading(loadingKey: string = 'loading') {
  return function(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    const method = propertyDescriptor.value;
    propertyDescriptor.value = async function() {
      this[loadingKey] = true;
      try {
        const res = await method.apply(this, arguments);
        return res;
      } catch (e) {
        // console.log(e);
      } finally {
        this[loadingKey] = false;
      }
    };
    return propertyDescriptor;
  };
}
