// 基础实体的信息
export interface BaseEntity {
    /**
     * 主键
     */
    id: number
    /**
     * 名称
     */
    name?: string
    /**
     * 状态
     */
    state?: number
    /**
     * 创建人
     */
    createdBy?: number
    /**
     * 创建时间
     */
    createdTime?: string
    /**
     * 更新人
     */
    updatedBy?: number
    /**
     * 更新时间
     */
    updatedTime?: string
}
