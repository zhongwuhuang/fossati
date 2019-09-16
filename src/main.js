import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueSwiper from 'vue-awesome-swiper'
Vue.use(vueSwiper)

import 'swiper/dist/css/swiper.css';
import './style/iconfont/iconfont.css'

// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')