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
          path: '/project',
          name: '项目',
          component: () => import('@/views/Project.vue')
        },
        {
          path: '/about',
          name: '首页',
          component: () => import('@/views/About.vue')
        },
      ]
    }
  ]
})
