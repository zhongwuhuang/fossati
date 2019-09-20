<template>
  <div class="_index" @touchmove.prevent>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/1.jpg" alt="">
              <router-link to="/brand">品牌故事</router-link>
            </div>
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/2.jpg" alt="">
              <router-link to="/project">项目</router-link>
            </div>
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/3.jpg" alt="">
              <router-link to="/shop">旗舰店</router-link>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Index',
  mounted(){
    new Swiper('.swiper-container',{
      direction : 'vertical',
      speed:800,
      followFinger : false,
      mousewheel: {
        releaseOnEdges: true
      },
      pagination : {
        el:'.swiper-pagination',
      },

    });

  }  
}
</script>

<style lang="scss" scoped>
._index{
  height: 100vh;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide{
      width: 100%;
      height: 100%;
      position: relative;
      a{
        position: absolute;
        display: block;
        width: 100%;
        font-size: 30px;
        // left: 50%;
        // transform: translateX(-50%);
        text-align: center;
        padding: 20px 0;
        bottom: 80px;
        color: #fff;
        transition: all .6s;
        &:hover{
          color: #989898;
        }
      }
    }
  }
}
</style>
