import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      redirect: "/index",
      children: [
        {
          path: '/index',
          name: '首页',
          component: () => import('@/views/Index.vue')
        },
        {
          path: '/brand',
          name: '品牌故事',
          component: () => import('@/views/Brand.vue')
        },
        {
          path: '/product',
          name: '产品',
          component: () => import('@/views/Product.vue')
        },
        {
          path: '/nProduct',
          name: '新品',
          component: () => import('@/views/nProduct.vue')
        },
        {
          path: '/detail',
          name: '详情',
          component: () => import('@/views/Detail.vue')
        },
        {
          path: '/project',
          name: '项目',
          component: () => import('@/views/Project.vue')
        },
        {
          path: '/shop',
          name: '旗舰店',
          component: () => import('@/views/Shop.vue')
        },
        {
          path: '/news',
          name: '新闻',
          component: () => import('@/views/News.vue')
        }
      ]
    }
  ]
})
