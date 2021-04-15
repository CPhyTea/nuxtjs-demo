import BaseService from "@services/base.service";
import {BaseEntity} from "@entities/entity";
import {Page} from "@entities/paging";
import tongfuHomeClient from "~/clients/tongfu.home.client";

export default class TongfuHomeBaseService <E extends BaseEntity, I, C, F> extends BaseService {

  constructor( path: string) {
    super(tongfuHomeClient, path);
  }

  /**
   * 根据条件查询
   * @param conditions
   */
  async find(conditions?: any): Promise<Array<E>> {
    return this.client({
      url: this.path + '/all',
      method: 'get',
      params: conditions
    }) as unknown as Promise<E[]>;
  }

  /**
   * 分页查询
   * @param conditions
   */
  async paging(conditions: C): Promise<Page<I>> {
    return await this.client({
      url: this.path + '/main/view',
      method: 'get',
      params: conditions
    }) as unknown as Promise<Page<I>>;
  }

  /**
   * 根据ID查询
   * @param id
   */
  async get(id: number): Promise<E> {
    return this.client({
      url: this.path + '/' + id,
      method: 'get'
    }) as unknown as Promise<E>;
  }
  /**
   * 查询info详情
   * @param id
   */
  async getInfoById(id: number): Promise<I> {
    return this.client({
      url: this.path + '/info/' + id,
      method: 'get'
    }) as unknown as Promise<I>;
  }
  /**
   * 新建
   * @param data
   */
  async create(data: F): Promise<void> {
    return this.client({
      url: this.path,
      method: 'post',
      data: data
    }) as unknown as Promise<void>;
  }

  /**
   * 更新
   * @param id 实例id
   * @param data
   */
  async update(id: number, data: F): Promise<void> {
    await this.client({
      url: this.path + '/' + id,
      method: 'put',
      data
    });
  }

  /**
   * 删除
   * @param id
   */
  async delete(id: number) {
    await this.client({
      url: this.path + '/' + id,
      method: 'delete'
    });
  }
}
