<template>
  <div class="home">
    <div class="header" :style="{ background: isBg }">
      <div class="_container header_box flex_box_between">
        <div class="logo">
          <router-link to="/index">FOSSATI</router-link>
        </div>

        <div class="nav_box">
          <div class="more_menu _cursor" @click="handleShowSmallNav">
            <transition name="iconShow">
              <i v-if="!smallNav" class="el-icon-menu"></i>
            </transition>
            <transition name="iconShow">
              <i v-if="smallNav" class="el-icon-close"></i>
            </transition>
          </div>
          <ul class="flex_box">
            <li class="nav_list">
              <span class="nav_list_a _cursor"><router-link to="/about">导航一</router-link></span>
            </li>
            <li class="nav_list">
              <span class="nav_list_a _cursor"><router-link to="/about">导航二</router-link></span>
            </li>
            <li class="nav_list">
              <span class="nav_list_a _cursor">导航列表</span>
              <div class="nav_sub_box">
                <div class="_container _border"></div>
                <div class="_container">
                  <div class="nav_sub_list">
                    <div class="item">导航一1</div>
                    <div class="item">导航一2</div>
                    <div class="item">导航一3</div>
                    <div class="item">导航一4</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <transition name="siderBar">
        <div class="small_nav_box" v-if="isShowSmallNav">
            <!-- @open="handleOpen"
            @close="handleClose" -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
              <el-menu-item index="1">
                <router-link to="/about">导航一</router-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">导航列表</template>
                <el-menu-item index="2-1"><router-link to="/about">导航一</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/about">导航一</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/about">导航一</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">导航列表</template>
                <el-menu-item index="3-1"><router-link to="/about">导航一</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/about">导航一</router-link></el-menu-item>
                <el-menu-item index="3-3"><router-link to="/about">导航一</router-link></el-menu-item>
              </el-submenu>
          </el-menu>
        </div>
      </transition>

    </div>

    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer"> 

    </div>


    <transition name="siderBar">
      <div class="toTop" v-if="btnFlag" @click="toTop">
        <i class="el-icon-top"></i>
      </div>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      smallNav:false,
      isShowSmallNav:false,
      screenWidth:'',
      
      isBg:'none',
      btnFlag:false
    }
  },
  created() {
    
  },
  methods: {
    handleShowSmallNav(){
      this.smallNav = !this.smallNav
      this.isShowSmallNav = !this.isShowSmallNav
    },

    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 100) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
    toTop () {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
    },

    windowScroll () {
      //滚动条距离页面顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //原生兼容
      // console.log(scrollTop) 
      if(scrollTop>200){
        this.isBg = 'rgba(32, 34, 43, 0.9)'
      }else{
        this.isBg = 'none'
      }
    },       
  },

  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth
        if(screenWidth > 768){
          this.smallNav = this.isShowSmallNav = false
        }
      })()
    }

    window.addEventListener('scroll', this.windowScroll)      
  },  
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },  
}
</script>

<style lang="scss" scoped>
.home::-webkit-scrollbar {display:none}
.header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 70px;
  color: #fff;
  transition:all .5s ease 0s;
  a{
    color: #fff;
  }
  & a:hover,& .nav_list_a:hover{
    color: #989898;
    transition:all .5s ease 0s;
  }
  .header_box{
    height: 100%;
    // border: 1px solid red;
    .logo{
      font-size: 30px;
      font-weight: bold;
    }
    .nav_box{
      height: 100%;
      .more_menu{
        transition:all .3s ease 0s;
        opacity: 0;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 26px;
        z-index: -1;
        i{
          position: absolute;
          right: 0px;
        }
      }
      ul{
        height: 100%;
        .nav_list{
          height: 100%;
          line-height: 70px;
          margin-right: 24px;
          &:last-child{
            margin-right: 0;
          }
          .nav_list_a{
            display: inline-block;
            height: 100%;
            a{
              display: inline-block;
              height: 100%;
            }
          }
          .nav_sub_box{
            width: 100%;
            position: absolute;
            left:0px;
            top: 70px;
            background: rgba(32, 34, 43, 0.9);
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition:all .5s ease .3s;
            ._border{
              position: absolute;
              height: 1px;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              background:#fff;
              opacity: 0;
              transition:all .5s ease .3s;
            }
            .nav_sub_list{
              height: 122px;
              line-height: 1;
              column-count:6;
              column-gap:50px;          
              border: 1px solid #fff;
              width: 800px;    
              overflow: hidden;
              .item{
                display: inline-block;
                line-height: 30px;
                cursor: pointer;
              }
            }
          }
          &:hover .nav_sub_box{
            padding:40px 0 50px;
            opacity: 1;
            height: 212px;            
            ._border{
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .small_nav_box{
    position: absolute;
    z-index: 100;
    width: 100%;
    .el-menu{
      border-right: none;
      .el-menu-item{
        a{
          display: inline-block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}

.content{
  height: 100vh;
}

.footer{
  height: 1176px;
  background: #000;
}

@keyframes aTop{
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
	50% {
    opacity: 1;
    transform: translateY(0%);
  }
	100% {
    opacity: 0;
    transform: translateY(-50%);
  }
}
.toTop{
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #fff!important;
  background: #989898;
  padding: 0 8px;
  height: 48px;
  line-height: 60px;
  opacity: 1;
  z-index: 9999;
  display: inline-block;
  font-weight: 400;
  font-size: 30px;
  i{
    animation:aTop 1.3s infinite linear;
  }
}


@media (max-width: 768px){
  .nav_box .flex_box {
    display: none;
  }
  .nav_box .more_menu {
    opacity: 1!important;
    z-index: 100!important;
  }
  .header ._container {
    padding: 0 20px!important;
  }
}

.siderBar-enter-active{
  transition:all .3s ease-out .2s;
}
.siderBar-leave-active{
  transition:all .2s ease;
}
.siderBar-enter{
  opacity: 0;
  // transform:translateY(-120%);
}
.siderBar-leave-to{
  opacity: 0;
  // transform:translateY(-80%);
}

.iconShow-enter-active{
  transition:all .3s ease-out .2s;
}
.iconShow-leave-active{
  transition:all .2s ease;
}
.iconShow-enter{
  opacity: 0;
  transform:rotate(-180deg);
}
.iconShow-leave-to{
  opacity: 0;
  transform:rotate(180deg);
}
</style>