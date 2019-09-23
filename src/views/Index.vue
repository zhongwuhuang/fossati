<template>
  <div class="_index" @touchmove.prevent>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img width="100%" height="100%" src="../assets/img/index/index1.jpg" alt="">
          <router-link to="/brand">品牌故事</router-link>
        </div>
        <div class="swiper-slide">
          <img width="100%" height="100%" src="../assets/img/index/index2.jpg" alt="">
          <router-link to="/project">项目</router-link>
        </div>
        <div class="swiper-slide">
          <img width="100%" height="100%" src="../assets/img/index/index3.jpg" alt="">
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
      <div v-if="shows" class="next">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>

    <Footer v-if="isShowF"/>
    
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Swiper from 'swiper';
export default {
  name: 'Index',
  components: {
    Footer
  },  
  data() {
    return {
      shows:true,
      isShowF:false
    }
  },
  mounted(){
    let that = this
    new Swiper('.swiper-container',{
      direction : 'vertical',
      speed:800,
      followFinger : false,
      mousewheel: {
        releaseOnEdges: true
      },
      watchOverflow: true,
      pagination : {
        el:'.swiper-pagination',
      },
      navigation: {
        nextEl: '.next',
      },      
      on:{
        slideChange: function(){
          if (this.activeIndex !== 2){
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            that.isShowF = false
          }
        },
        reachEnd: function(){// 进入最后一页执行
          that.shows = false
          that.isShowF = true
        },
        slidePrevTransitionEnd: function(){// 离开最后一页执行
          that.shows = true
        }
      }
    });

  }  
}
</script>

<style lang="scss" scoped>
._index{
  position: relative;
  height: 100vh;
  overflow-x:hidden; 
  overflow-y:auto;
  &::-webkit-scrollbar {
    display: none!important;
  }
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
        bottom: 100px;
        color: #fff;
        transition: all .6s;
        &:hover{
          color: #989898;
        }
      }
    }
    .swiper-slide:last-child{
      height: 300px;
      background: #999;
    }
  }

  @keyframes moves {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  .next{
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -20px;
    z-index: 1000;
    animation: moves 1s infinite;
    i{
      color: #f7f7f7;
      font-size: 40px;
      font-weight: bold;
    }
  }
}
</style>
