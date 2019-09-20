import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueSwiper from 'vue-awesome-swiper'
Vue.use(vueSwiper)

// 图片浏览组件
import gallery from 'img-vuer'
Vue.use(gallery)

import 'swiper/dist/css/swiper.css';
import './style/iconfont/iconfont.css'

// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.prototype.imgUrl = 'http://fossati1967.com:8800';
Vue.prototype.baseUrl = process.env.NODE_ENV === 'development' ? 'ajax' : 'http://fossati1967.com:8800';

/* 路由发生变化修改页面title */
router.beforeEach((to, _, next) => {
  if (to.name) {
    document.title = to.name
  }
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')