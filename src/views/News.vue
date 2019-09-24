<template>
  <div>
    <div class="project" v-for="(item,index) in dataArr" :key="index">
      <section class="pc-banner">
        <div class="swiper-container" style="height: 100%;">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(imgItem,idx) in item.images.split(',')" :key="idx">
              <!-- <img :src="baseImgUrl+imgItem"> -->
              <img v-gallery="item.id" :src="baseImgUrl+imgItem">
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="button">
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
          </div>
        </div>
      </section>
      <div class="projectTitle">
        {{item.title}}
      </div>
      <div class="detail">
        <el-row>
          <el-col :span="24" :sm="{span:12}">
            <p class="detailtext" v-html="item.content">
              {{item.content}}
            </p>
          </el-col>
          <el-col :span="24" :sm="{span:10,offset:2}">
            <ul class="info">
              <li>
                <div>类别</div>
                <div>{{item.type}}</div>
              </li>
              <li>
                <div>发布者</div>
                <div>{{item.publisher}}</div>
              </li>
              <li>
                <div>发布时间</div>
                <div>{{handleUnixToDate(item.createtime*1000,true)}}</div>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import {UnixToDate} from '@/utils/utils'

export default {
  name: 'Index',
  data() {
    return {
      baseImgUrl:'',
      dataArr:[]
    }
  },
  created() {
    this.baseImgUrl = this.imgUrl
    this.handleGetDate()
  },
  methods: {
    handleUnixToDate(data1,data2){
      return UnixToDate(data1,data2)
    },
    handleGetDate(){
      this.$axios.get(`${this.baseUrl}/out/news`).then(res=>{
        this.dataArr = res.data.data
        this.initSwiper()
      })
    },
    initSwiper(){
      this.$nextTick(() => {
        new Swiper('.swiper-container',{
          slidesPerView: 'auto',
          spaceBetween: 30,
          centeredSlides: true,
          initialSlide: 0,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
      });      
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/style/list.scss";
</style>

<style scoped>
.project >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>