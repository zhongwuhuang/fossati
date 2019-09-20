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
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
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

<style scoped>
		/* 公共 */
		.pc-banner .swiper-slide{
			width: auto;
		}
		.swiper-slide img{
			height: 100%;
		}

		.project{
			margin-bottom:20px;
			border-bottom: 1px solid #d9d9d9;
		}
		.project:last-child{
			border-bottom: none;
		}
		.project .pc-banner{
			background:#1e1e1e;height:700px;margin: 0px 10px;overflow: hidden;
		}
		.project .detail{
			padding: 50px 80px;
			overflow: hidden;
		}
		.projectTitle{
			margin-top:60px;
			font-size: 50px;
			text-align: center;
		}

		.detail >>> .detailtext{
			line-height: 30px;
			text-indent: 2em;
			text-align: justify;
      color: #333;
		}
		.detail >>> .detailtext::first-letter{
			font-size: 80px;
		}

		.info {
			margin-top: 18px;
      color: #666;
		}
		.info li{
			list-style: none;
			line-height: 40px;
			overflow: hidden;
			font-size: 18px;
		}
		.info div{
			width: 50%;
			float: left;
    }  
    
    /* 索引 */
		.detail .swiper-pagination-bullet {
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			font-size: 12px;
			color:#000;
			opacity: 1;
			background: rgba(0,0,0,0.2);
		}
		.detail .swiper-pagination-bullet-active {
			color:#fff;
			background: #007aff;
		}
</style>