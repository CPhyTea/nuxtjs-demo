import TongfuHomeBaseService from "@services/tongfu.home/tongfu.home.base.service";
import {Banner, CompanyOverviewsBanners} from "@entities/tongfu.home/banner";
import {IndexModule} from "@entities/tongfu.home/index.module";

class BannerService extends TongfuHomeBaseService<Banner, Banner, any, any> {
    /**
     * 公司简介
     */
    async companyOverviews(): Promise<CompanyOverviewsBanners> {
        const json = await this.client({
            url: this.path + '/banner/company/all',
            method: 'get'
        });
        return json as unknown as CompanyOverviewsBanners;
    }
    /**
     * 客户案例 应用场景
     */
    async allScene(): Promise<Array<any>> {
        const json = await this.client({
            url: this.path + '/example/scene/all',
            method: 'get'
        });
        return json as unknown as Array<any>;
    }
    /**
     * 通过类型查询
     */
    async findAllByType(type:number): Promise<Array<IndexModule>> {
        const json = await this.client({
            url: this.path + '/type/' + type,
            method: 'get'
        });
        return json as unknown as Array<IndexModule>;
    }
}

const bannerService = new BannerService('/home');
export default bannerService;
