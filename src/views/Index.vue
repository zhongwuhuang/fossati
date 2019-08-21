<template>
  <div class="_index">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/2.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img width="100%" height="100%" src="../assets/img/3.jpg" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
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
    var swiper = new Swiper('.swiper-container',{
      direction : 'vertical',
      speed:800,
      followFinger : false,
      mousewheel: {
        releaseOnEdges: true
      },
      pagination : {
        el:'.swiper-pagination',
      },

      // on:{
      //   init:function(swiper){
      //         slide=this.slides.eq(0);
      //       slide.addClass('ani-slide');
      //     },
      //   transitionStart: function(){
      //       for(i=0;i<this.slides.length;i++){
      //         slide=this.slides.eq(i);
      //           slide.removeClass('ani-slide');
      //     }
      //     },
      //   transitionEnd: function(){
      //     slide=this.slides.eq(this.activeIndex);
      //       slide.addClass('ani-slide');
          
      //     },
      // }
    });

    // new Swiper ('.swiper-container', {
    //   loop: true,
    //   // 如果需要分页器
    //   pagination: '.swiper-pagination',
    //   // 如果需要前进后退按钮
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
    //   // 如果需要滚动条
    //   scrollbar: '.swiper-scrollbar',
    // })        
  }  
}
</script>

<style lang="scss" scoped>
._index{
  height: 100%;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide{
      width: 100%;
      height: 100%;
    }
    .swiper-slide:nth-child(2){
    }
  }
}
</style>
