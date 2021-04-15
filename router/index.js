export default function generateRoutes(resolve) {
  return [
    {
      path: '/',
      name: 'home',
      component: resolve(__dirname, '../pages/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: resolve(__dirname, '../pages/login/login.vue')
    }
  ]
}
