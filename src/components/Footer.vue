<template>
  <div class="footer"> 
    <div class="linkBox flex_box_between">
      <a target="_blank" href="https://weibo.com/">
        <div class="_cursor">
          <i class="iconfont icon-weibo"></i>
        </div>
      </a>
      <el-popover
        placement="top"
        width="250"
        trigger="click">
        <img width="100%" src="../assets/img/brand/intro8.png" alt="">
        <div slot="reference" class="_cursor">
          <i class="iconfont icon-weixin"></i>
        </div>
      </el-popover>
      <a target="_blank" href="https://weibo.com/">
        <div class="_cursor">
          <i class="iconfont icon-instagram"></i>
        </div>
      </a>      
    </div>
    <div class="connectInfo">
      <span>地址：上海市青浦区华丹路108号</span>
      <span>电话：13700275217</span>
      <span>邮箱：fossati1967@163.com</span>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  height: 176px;
  padding: 30px 0 50px;
  background: #1e1e1e;
  .linkBox{
    width: 240px;
    margin: 0 auto;
    color: #fff;
    a{
      color: #fff;
    }
    .iconfont{
      font-size: 30px;
      transition: opacity .5s ease;
      &:hover{
        opacity: .5;
      }
    }
  }
  .connectInfo{
    margin-top: 44px;
    text-align: center;
    color: #eee;
    span{
      padding:0 40px;
    }
  }
}
</style>
