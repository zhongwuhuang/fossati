<template>
  <div class="brand">
    <div class="brandTop">
      <div class="brandTop_txt">
        <div style="margin-bottom: 30px;font-size: 40px;">PAERT II - FOSSATI 品牌故事</div>
        <div style="margin-bottom: 30px;font-weight:bold;">_</div>
        <div style="font-size: 30px;font-family: cursive">无法忽视的品牌基因 米兰的设计精髓</div>
      </div>
      <swiper :options="swiperOption"  class="swiper-box">
        <swiper-slide class="swiper-item" v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      </swiper>
    </div>

    <div class="_container">
      <div class="brand_intro">
        
        <img src="../assets/img/brand/intro1.png" alt="">
        <p>如果这世界上有座城市，仅仅一瞥即可识别出她的独特气质，那就是米兰。</p>
        <p>极具摩登感与古典气质于一身，在此孕育出的作品即如同其流淌的文化基因，强烈而自然地，游走在经典文化的沉淀与极致现代感之间的完美平衡。</p>
        <div>
          <img style="margin-right:30px;" src="../assets/img/brand/intro2.png" alt="">
          <img src="../assets/img/brand/intro3.png" alt="">
        </div>
        <p>得益于米兰城市中无数经典建筑的美学熏陶下，米兰⼈在其每日的精致生活方式中，骨子里不觉形成了对建筑、空间与家居⽆可挑剔的好品味。</p>
        <p>FOSSATI，一个拥有着纯正米兰血统的家具品牌于此诞生。</p>
        <div style="margin-bottom:30px;">
          <img src="../assets/img/brand/intro4.png" alt="">
        </div>
        <div>
          <img width="50%" src="../assets/img/brand/intro5.png" alt="">
        </div>
        <p>一切源于 52 年前，FOSSATI 的母公司即意大利知名家具企业 FORMARREDO DUE，经过长达半个世纪⼼血的家族经营，在时代变化中不断成长，现在与意大利知名设计师 Marco Fossati 合作，打造了当代经典 - FOSSATI 家具品牌。</p>
        <p>而注定其与众不同的是 FOSSATI 正是因为当下的时代属性⽽熠熠生辉：源于历史，诞于今日，心向明天。</p>
        <div class="brand_intro_title">三部曲 I - 源于历史</div>
        <p>故事始于1967 年，毕⽣专注于家具设计事业的创始人Valter Lanzini 在意大利最大的家具制造区Lissone 成立了自己的LANZINI MOBILI 家具公司，开启了从设计到制造的全产业，这即是 FORMARREDO DUE 的前身。</p>
        <div class="flex_box_between" style="width:720px;margin:0 auto;">
          <div style="width:220px;" class="text_center">
            <img style="border-radius:40px;" height="190px" width="100%" src="../assets/img/brand/intro6.png" alt="">
            <div>创始人：Valter Lanzini</div>
          </div>
          <div style="width:220px;" class="text_center">
            <img style="border-radius:40px;" height="190px" width="100%" src="../assets/img/brand/intro7.png" alt="">
            <div>Anna</div>
          </div>
          <div style="width:220px;" class="text_center">
            <img style="border-radius:40px;" height="190px" width="100%" src="../assets/img/brand/intro8.png" alt="">
            <div>Giovanni</div>
          </div>
        </div>
        <p style="margin-top:26px;">80 年代，公司交给⼉女Giovanni 及 Anna 打理， 并正式更名为 FORMARREDO DUE。保留⼀代精神传承的同时进⾏更新，从初期的家具制造逐渐发展成了多方位的家居服务体系—360 度家居服务项目。至此，其事业迅速扩张到了遍及欧洲等全球各地，并与Giuseppe Carè等知名设计师合作至今。</p>
        <div>
          <div>
            <img height="396" style="margin-right:30px;" src="../assets/img/brand/intro9.png" alt="">
            <img height="396" src="../assets/img/brand/intro10.png" alt="">
          </div>
          <div>摄于FORMARREDO DUE 公司</div>
        </div>
        <div>
          <div>
            <img height="400px" style="margin-right:30px;" src="../assets/img/brand/intro11.png" alt="">
            <img height="400" src="../assets/img/brand/intro12.png" alt="">
          </div>
          <div>FORMARREDO DUE 家居</div>
        </div>
        <div class="brand_intro_title">三部曲 II - 时代传承</div>
        <p>著名作家和艺术评论家乌贝托·艾科说过，如果说别的国家各有其设计理论，意大利则不仅拥有一套设计哲学，在其之上，具备的是专业的全设计产业链能⼒将其实现。</p>
        <img src="../assets/img/brand/intro13.png" alt="">
        <img src="../assets/img/brand/intro14.png" alt="">
        <img src="../assets/img/brand/intro15.png" alt="">
        <p>Formarredo due 至今 52 年年的历史中，通过 3 代人不断注入新鲜的血液、创新的设计及思维和稳定合作方，而唯一不变的就是意大利人深⼊骨髓的匠者⼈心，从守护传统工艺到现代经营，工匠精神是意⼤利的一种恪尽职守的行业自律，滋养着全社会 继承传统，开拓创新。</p>
        <div class="brand_intro_title">三部曲 III - 诞于今日</div>
        <p>在米兰这座前沿时尚之都愈发年轻而国际化的今天，FORMARREDO DUE 在时代背景下再次全心出发，与极具个性与年轻血液的米兰设计师 Marco Fossati 携手，以其姓氏命名，打造了全新一代的面向国际化都市生活方式的年轻品牌 FOSSATI。</p>
        <p>当我们今天再说起文化的碰撞与融合，早已不是所谓“联名”层⾯的肤浅表现。当 FOSSATI 品牌来到东⽅，即深信不疑地选择生根上海，一切都不是理所当然。</p>
        <div class="flex_box_between" style="width:820px;margin:0 auto;">
          <div style="width:360px;" class="text_center">
            <img height="536" src="../assets/img/brand/intro16.png" alt="">
            <div>Milan</div>
          </div>
          <div style="width:430px;" class="text_center">
            <img height="536" src="../assets/img/brand/intro17.png" alt="">
            <div>Shanghai</div>
          </div>
        </div>        
        <p>米兰与上海，它们有着那么多的相似之处。它们骄傲、时髦、传统而开放、保持自我而海纳百川。</p>
        <p>FOSSATI 将在 MNM 的特属空间，带来一个唤醒耳⽬轻触灵魂的当代理想生活憧憬。</p>
        <div class="brand_intro_title">Fossati 详细介绍</div>
        <p>Marco Fossati，同样是如此一个多元融合。他最擅长的，是找到一切的平衡点，以天生的直觉，精准分割与表达。</p>
        <p>由于建筑室内设计的职业个性，多⾯性的 Marco 在工作时是一丝不苟的沉稳认真人格， 而私下交往中则⾮常的轻松幽默。常年的马拉运动让他时刻保持着清醒的头脑，这也是其中一个原因，他能将一切不同文化理念的灵感，以高识别度的现代简约风格进行塑造。</p>
        <div style="width:450px;margin:0 auto;">
          <img width="100%" src="../assets/img/brand/intro18.png" alt="">
          <div>Marco Fossati</div>
        </div>
        <p>一个常常穿着明快色彩的设计师，却可以驾驭任何浮夸元素，“夸张”在他的身上永远都那么的合适并不突兀。看到他的作品与本人，很难联想到是同一个人，总会给予客户无穷惊喜。</p>
        <div>
          <div>
            <img style="margin-right:30px;" src="../assets/img/brand/intro19.png" alt="">
            <img src="../assets/img/brand/intro20.png" alt="">
          </div>
          <div>Marco Fossati 灯具设计作品</div>
        </div>
        <p>有趣的是，非同于我们刻板印象中千篇一律的“现代简约”，他个人生活多彩及多面，却永远塑造着极简主义设计风格的作品，其个人个性与创作风格中形成了鲜明的撞击，形成一种很强的精神冲击力。</p>
        <div>
          <div>
            <img width="400" style="margin-right:30px;" src="../assets/img/brand/intro21.jpg" alt="">
            <img width="500" src="../assets/img/brand/intro22.jpg" alt="">
          </div>
          <div>Marco Fossati 灯具设计作品</div>
        </div>
        <div>
          <div>
            <img width="43%" style="margin-right:30px;" src="../assets/img/brand/intro23.jpg" alt="">
            <img width="40%" src="../assets/img/brand/intro24.jpg" alt="">
          </div>
          <div>Marco Fossati 工业设计作品</div>
        </div>
        <p style="padding:30px 0;">现代简约风格之上，实用的功能以极简的方式展现，美观至上能够赋予生活更多意义，这永远是 Marco 的设计哲学。</p>

      </div>
    </div>

  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const img1 = require("../assets/img/brand/banner1.png")
const img2 = require("../assets/img/brand/banner2.jpg")
const img3 = require("../assets/img/brand/banner3.png")
 
export default {
  data() {
    return {
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
  position: relative;
  height: 100vh;
	.swiper-box {
    // width: 100%;
    height: 100%;
    margin: 0 auto;
    .swiper-item {
      // height: 5rem;
      img{
        width: 100%;
        height: 100%;
      }
    }	   
  }
  .brandTop_txt{
    color: #fff;
    position: absolute;
    text-align: center;
    z-index: 10000;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
  }
}
.brand_intro{
  text-align: center;
  img{
    margin: 30px 0;
    border-radius: 4px;
  }
  p{
    text-align: justify;
    line-height: 34px;
    font-size: 18px;
    color: #333;
  }
  .brand_intro_title{
    padding: 30px 0;
    font-size: 30px;
    font-family: monospace;
  }
}
</style>