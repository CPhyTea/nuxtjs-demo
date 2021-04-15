import { BaseEntity } from '@/entities/entity';

export interface IndexModule extends BaseEntity {

    /**
     * 图片地址
     */
    url: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 内容
     */
    content: string;
    /**
     * 排序
     */
    sort: number;
    /**
     * 类型   （ 应用场景  方案优势... ）
     */
    type: number;
}
