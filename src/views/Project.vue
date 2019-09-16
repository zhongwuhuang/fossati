<template>
  <div class="project">
    <div class="project">
			<section class="pc-banner">
				<div class="swiper-container" style="height: 100%;">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="../assets/img/1.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/img/2.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/img/3.jpg">
						</div>
						<div class="swiper-slide">
							<img src="../assets/img/4.jpg">
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
				项目1
			</div>
			<div class="detail">
        <el-row>
          <el-col :span="12">
            <p class="detailtext">
              Alexander沙发座椅系列从理性主义和现代理念中汲取设计灵感，可以彼此组合展现不同形态。方形与弧形组件在同一组合中加以运用，以此来营造温馨私密的氛围。

              多款模块化组件可以创造出多种多样的组合形式，从具有完美几何造型的“L”型方案到线条轻巧的线性演绎方案，皆能应对自如，这要得益于独具创意的Alexander “Drop”弧形组件，比如躺椅或其他圆角末端沙发。

              产品拥有高低不一的靠背，亦可将其组合搭配，增强这一系列的多用性。ㄇ字型的高靠背设计打造出一处私密的角落，让人可以在这一空间中舒适地阅读或看电视。此外，低靠背设计的组件则不会遮蔽周围空间的视野。

              Alexander产品的别致之处在于沙发边角、高靠背和扶手的接缝处以及靠垫中央接缝处的精致剪裁细节。

              浅铜色铝制基座为沙发提供地面支撑，打造出仿若悬浮一般的轻盈感。
              Alexander沙发座椅系列从理性主义和现代理念中汲取设计灵感，可以彼此组合展现不同形态。方形与弧形组件在同一组合中加以运用，以此来营造温馨私密的氛围。

              多款模块化组件可以创造出多种多样的组合形式，从具有完美几何造型的“L”型方案到线条轻巧的线性演绎方案，皆能应对自如，这要得益于独具创意的Alexander “Drop”弧形组件，比如躺椅或其他圆角末端沙发。

              产品拥有高低不一的靠背，亦可将其组合搭配，增强这一系列的多用性。ㄇ字型的高靠背设计打造出一处私密的角落，让人可以在这一空间中舒适地阅读或看电视。此外，低靠背设计的组件则不会遮蔽周围空间的视野。

              Alexander产品的别致之处在于沙发边角、高靠背和扶手的接缝处以及靠垫中央接缝处的精致剪裁细节。

              浅铜色铝制基座为沙发提供地面支撑，打造出仿若悬浮一般的轻盈感。
            </p>
          </el-col>
          <el-col :span="10" :offset="2">
            <ul class="info">
              <li>
                <div>
                  时间
                </div>
                <div>
                  2015/06/09
                </div>
              </li>
              <li>
                <div>
                  作者
                </div>
                <div>
                  黄雪娟
                </div>
              </li>
              <li>
                <div>
                  地址
                </div>
                <div>
                  仓山区XX街道
                </div>
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
export default {
  name: 'Index',
  data() {
    return {
      
    }
  },
  created() {
    this.$axios.get('ajax/out/project').then(res=>{
      console.log(res)
    })
  },
  mounted(){
    var swiper = new Swiper('.swiper-container',{
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

  }  
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

		.detailtext{
			line-height: 30px;
			text-indent: 2em;
			text-align: justify;
		}
		.detailtext::first-letter{
			font-size: 80px;
		}

		.info {
			margin-top: 18px
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