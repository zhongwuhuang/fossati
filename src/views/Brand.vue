<template>
  <div class="brand">
    <div class="brandTop">
      <swiper :options="swiperOption"  class="swiper-box">
        <swiper-slide class="swiper-item" v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      </swiper>
    </div>

    <div class="_container">
      <div class="brandList">
        <div class="list_item">
          <img src="../assets/img/1.jpg" alt="">
          <div class="intro">
            Alexander沙发座椅系列从理性主义和现代理念中汲取设计灵感，可以彼此组合展现不同形态。方形与弧形组件在同一组合中加以运用，以此来营造温馨私密的氛围。 多款模块化组件可以创造出多种多样的组合形式，从具有完美几何造型的“L”型方案到线条轻巧的线性演绎方案，皆能应对自如，这要得益于独具创意的Alexander “Drop”弧形组件，比如躺椅或其他圆角末端沙发。 产品拥有高低不一的靠背，亦可将其组合搭配，增强这一系列的多用性。ㄇ字型的高靠背设计打造出一处私密的角落，让人可以在这一空间中舒适地阅读或看电视。此外，低靠背设计的组件则不会遮蔽周围空间的视野。 Alexander产品的别致之处在于沙发边角、高靠背和扶手的接缝处以及靠垫中央接缝处的精致剪裁细节。 浅铜色铝制基座为沙发提供地面支撑，打造出仿若悬浮一般的轻盈感。
          </div>
        </div>
        <div class="list_item">
          <img src="../assets/img/1.jpg" alt="">
          <div class="intro">
            Alexander沙发座椅系列从理性主义和现代理念中汲取设计灵感，可以彼此组合展现不同形态。方形与弧形组件在同一组合中加以运用，以此来营造温馨私密的氛围。 多款模块化组件可以创造出多种多样的组合形式，从具有完美几何造型的“L”型方案到线条轻巧的线性演绎方案，皆能应对自如，这要得益于独具创意的Alexander “Drop”弧形组件，比如躺椅或其他圆角末端沙发。 产品拥有高低不一的靠背，亦可将其组合搭配，增强这一系列的多用性。ㄇ字型的高靠背设计打造出一处私密的角落，让人可以在这一空间中舒适地阅读或看电视。此外，低靠背设计的组件则不会遮蔽周围空间的视野。 Alexander产品的别致之处在于沙发边角、高靠背和扶手的接缝处以及靠垫中央接缝处的精致剪裁细节。 浅铜色铝制基座为沙发提供地面支撑，打造出仿若悬浮一般的轻盈感。
          </div>
        </div>
        <div class="list_item">
          <img src="../assets/img/1.jpg" alt="">
          <div class="intro">
            Alexander沙发座椅系列从理性主义和现代理念中汲取设计灵感，可以彼此组合展现不同形态。方形与弧形组件在同一组合中加以运用，以此来营造温馨私密的氛围。 多款模块化组件可以创造出多种多样的组合形式，从具有完美几何造型的“L”型方案到线条轻巧的线性演绎方案，皆能应对自如，这要得益于独具创意的Alexander “Drop”弧形组件，比如躺椅或其他圆角末端沙发。 产品拥有高低不一的靠背，亦可将其组合搭配，增强这一系列的多用性。ㄇ字型的高靠背设计打造出一处私密的角落，让人可以在这一空间中舒适地阅读或看电视。此外，低靠背设计的组件则不会遮蔽周围空间的视野。 Alexander产品的别致之处在于沙发边角、高靠背和扶手的接缝处以及靠垫中央接缝处的精致剪裁细节。 浅铜色铝制基座为沙发提供地面支撑，打造出仿若悬浮一般的轻盈感。
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const img1 = require("../assets/img/1.jpg")
const img2 = require("../assets/img/2.jpg")
const img3 = require("../assets/img/3.jpg")
 
export default {
  data() {
    return {
      // slides: [
      //   'https://img3.doubanio.com/dae/niffler/niffler/images/96c05d4a-8a5f-11e8-8a32-0242ac110036.jpg',
      //   'https://img3.doubanio.com/dae/niffler/niffler/images/69529e8e-8327-11e8-a22a-0242ac110070.jpg',
      //   'https://img1.doubanio.com/dae/niffler/niffler/images/52884a3a-8a3b-11e8-b0ba-0242ac110037.jpg',
      //   'https://img1.doubanio.com/dae/niffler/niffler/images/41710c9c-84c2-11e8-8227-0242ac11001c.jpg',
      //   'https://img1.doubanio.com/dae/niffler/niffler/images/7f80ae88-8a31-11e8-a8cb-0242ac110037.jpg'
      // ],
      slides: [img1,img2,img3],
      swiperOption: {
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,  
        autoplay: true,        
        speed: 400,
        loop: true,        
        paginationType: 'fraction',        
        slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        centeredSlides: true,//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        pagination: '.swiper-pagination',
        direction: 'horizontal',       
      },
    }
  },
  // 假如有很多页面需要轮播图，而且不同的地方很多，比如你想对a页面轮播图滑动到下一张后alert(1),对b页面alert(2)等等等等，那该如何做呢？总不能一个一个判断吧，所以正确的方法应该是把配置参数通过prop接受父组件传递过来的参数
  components:{
    swiper, swiperSlide 
  },
}
</script>

<style scoped lang="scss">
.brandTop{
  height: 100vh;
	.swiper-box {
    // width: 100%;
    height: 100%;
    margin: 0 auto;
    .swiper-item {
      // height: 5rem;
      img{
        width: 100%;
      }
    }	   
  }
}
.brandList{
  text-align: center;
  padding-bottom: 30px;
  .list_item{
    margin-top: 30px;
    img{
      height: 300px;
    }
    .intro{
      margin-top: 20px;
      line-height: 26px;
      text-indent: 2em;
      text-align: justify;
    }
  }

}
</style>