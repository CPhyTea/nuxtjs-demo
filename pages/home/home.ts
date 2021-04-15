import { Component, Vue } from 'nuxt-property-decorator';
import {Banner, CompanyOverviewsBanners} from "@entities/tongfu.home/banner";
import bannerService from "@services/tongfu.home/banner.service";
import {getImageUrl, getValueByProp} from "@utils/index";

// 首页
@Component({ name: 'Index'})
export default class extends Vue {
  // 公司简介和banner数据
  public companyOverviewsBanners: CompanyOverviewsBanners | null = null;

  // banner数据
  public get bannerUrls(): string[] {
    return getValueByProp(this.companyOverviewsBanners, 'banners', []).sort((a: Banner, b: Banner) => a.sort - b.sort).map((b: Banner) => getImageUrl(b.url))
  }

  // swiper的配置
  public get swiperOption() {
    return {
      autoplay: {
        disableOnInteraction: false
      },
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true,
        el: '.banner-swiper-pagination'
      }
    }
  }

  async asyncData() {
    const companyOverviewsBanners = await bannerService.companyOverviews();
    return { companyOverviewsBanners };
  }
}
