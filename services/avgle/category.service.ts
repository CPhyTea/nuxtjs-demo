import BaseService from "~/services/base.service";
import avgleClient from "~/clients/avgle.client";
import {Category} from "~/entities/avgle/category";

export class CategoryService extends BaseService {
  // 查找所有的目录
  public findAll(): Promise<Category[]> {
    return this.client({
      url: this.path,
      method: 'get'
    }) as unknown as Promise<Category[]>
  }
}

const categoryService = new CategoryService(avgleClient, '/categories');
export default categoryService;
