import { BaseEntity } from '@/entities/entity';

// 轮播
export interface Banner extends BaseEntity {
  /**
   * 图片地址值
   */
  url: string;
  /**
   * 排序号
   */
  sort: number;
  /**
   * 外部链接
   */
  link: string;
  /**
   * 编号
   */
  code: string;
}

// 公司简介和轮播图
export interface CompanyOverviewsBanners {
  companyOverviews: Object;
  banners: Banner[];
}
