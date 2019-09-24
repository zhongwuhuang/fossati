<template>
  <div>

    <!-- 图片轮播 -->
    <section class="imgshow">
      <div class="swiper-container1" style="height: 100%;">
        <div class="swiper-wrapper" id="bigImg">
          <div class="swiper-slide" v-for="(item,index) in bigimages" :key="index">
            <img v-gallery:group1 :src="baseImgUrl+item">
            <!-- <img :src="baseImgUrl+item"> -->
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="button">
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>
      </div>
    </section>    

    <!-- 详情 -->
    <div class="detail">
      <div class="container-fluid">
        <el-row>
          <el-col :span="12" :xs="24" :md="12">
            <div class="detailtext" id="detailtext" v-html="content">
              {{content}}
            </div>
          </el-col>
          <el-col :span="12" :xs="24" :md="12" style="height:500px;">
            <!-- Swiper -->
            <div class="swiper-container" style="height:100%;text-align:center;">
              <div class="swiper-wrapper" id="smallImg">
                <div class="swiper-slide" v-for="(item,index) in smallimages" :key="index">
                  <!-- <img :src="baseImgUrl+item"> -->
                  <!-- 单图 -->
                  <!-- <img v-gallery :src="baseImgUrl+item"> -->
                  <!-- 单图 -->
                  <img v-gallery:group2 :src="baseImgUrl+item">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>    
      
  </div>
</template>

<script>
import {getUrlKey} from '@/utils/utils'
import Swiper from 'swiper';
export default {
  name: 'Index',
  data() {
    return {
      baseImgUrl:'',
      content:'',
      smallimages:[],
      bigimages:[],
    }
  },
  created() {
    this.baseImgUrl = this.imgUrl
    this.$axios.get(`${this.baseUrl}/out/product/id/${getUrlKey('productId')}`).then(res=>{
      const dataArr = res.data.data[0]
      this.content = dataArr.content
      this.smallimages = dataArr.smallimages.split(',')
      this.bigimages = dataArr.bigimages.split(',')

      this.$nextTick(()=>{
        new Swiper('.swiper-container1', {
          slidesPerView: 'auto',
          freeMode: true,
          spaceBetween: 30,
          centeredSlides: true,
          // initialSlide: 0,
          // loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },
        });
      })

    })
  },
}
</script>

<style scoped lang="scss">
.swiper-slide{
  width: auto;
  img{
    height: 100%;
  }
}
.imgshow{
  background:#1e1e1e;
  // margin: 0px 10px;
  height:100vh;
  overflow: hidden;
}

.detail {
  padding: 60px 80px 60px;
  .detailtext{
    line-height: 30px;
    text-indent: 2em;
    text-align: justify;
    color: #333;
    &::first-letter{
      font-size: 80px;
    }
  }
}
</style>
<style scoped>
.detail >>> .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color:#000;
  opacity: 1;
  background: rgba(0,0,0,0.2);
}
.detail >>> .swiper-pagination-bullet-active {
  color:#fff;
  background: rgba(32, 34, 43, 0.9);
}
.imgshow >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>