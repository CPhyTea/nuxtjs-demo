import dotenv from 'dotenv';
import path from 'path';
import generateRoutes from './router';

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

const env = process.env.ENV || 'dev';
const envConfig = dotenv.config({ path: `.env.${env}`})

export default {
  // 路径别名
  alias: {
    '@decorators': resolve('common/decorators'),
    '@utils': resolve('common/utils'),
    '@entities': resolve('entities'),
    '@services': resolve('services'),
  },

  // // 路由
  router: {
    extendRoutes(routes, resolve) {
      // 删除nuxtjs生成的路由
      routes.splice(0);
      const configuredRoutes = generateRoutes(resolve);
      routes.push(...configuredRoutes);
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svg-icon',
    '@/plugins/vue-awesome-swiper',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    transpile: [/^element-ui/],
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));
      svgRule.exclude = [resolve("assets/icons/svg")];
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [resolve("assets/icons/svg")], // 将存放svg的目录加入到loader处理目录
        use: [
          { loader: "svg-sprite-loader", options: { symbolId: "icon-[name]" } }
        ]
      });
    }
  },

  // environment variables
  env: {
    ...process.env,
    ...envConfig.parsed
  }
}
