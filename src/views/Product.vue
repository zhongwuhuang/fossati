<template>
  <div class="product">
    <div class="imgshow">
      <img :src="cateImg" alt="">
    </div>

    <!-- 列表 -->
    <div class="list">
      <div class="container-fluid">
        <h3 class="tittle">{{cateName}}</h3>
        <div>
          <el-row>
            <el-col class="imgbox" :span="12" :xs="24" :md="8" :lg="6" v-for="(item,index) in productArr" :key="index">
              <router-link :to="'/detail?productId='+item.id">
                <img  class="img-responsive" :src="baseImgUrl+item.image" alt="chef">
              </router-link>
              <h3>{{item.name}}</h3>
            </el-col>
          </el-row>
        </div>
        <div class="noPro" v-if="productArr.length===0">
          该分类没有产品，请添加
        </div>
      </div>
    </div>    

  </div>
</template>
<script>
import {filterCate,getUrlKey} from '@/utils/utils'
export default {
  data() {
    return {
      cateName:'',
      cateImg:'',
      productArr:[],
      baseImgUrl:''
    }
  },
  watch: {
    '$route' (to, from) {
      this.getCategoryData()
      this.getProductData()      
    }
  },  
  created() {
    this.baseImgUrl = this.imgUrl
    this.getCategoryData()
    this.getProductData()
  },
  methods: {
    getCategoryData(){
      this.$axios.get(`${this.baseUrl}/out/category`).then(res=>{
        const data = res.data.data
        let cateArr = data.filter(filterCate)
        this.cateName = cateArr.filter(this.filterCateName)[0].nickname
        this.cateImg = this.imgUrl+cateArr.filter(this.filterCateName)[0].image
      })    
    },
    getProductData(){
      this.$axios.get(`${this.baseUrl}/out/product`).then(res=>{
        const data = res.data.data
        this.productArr = data.filter(this.filterCategory)
      })    
    },
    filterCateName(item){
      return item.id == getUrlKey('proCategoryId')
    },
    filterCategory(item){
      return item.category_id == getUrlKey('proCategoryId')
    }    
  },  
}
</script>

<style scoped lang="scss">
.imgshow{
  height: 100vh;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}

.list{
  text-align:center;
  margin:40px 60px 30px;
  .tittle{
    font-size: 30px;
    font-weight: 300;
  }
  h3{
    padding-top:20px;
  }
  .imgbox{
    margin-top:40px;
    a{
      position: relative;
      display: block;
      height: 240px;
      img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        max-height: 100%;
        display: inline-block;
      }
    }
  }
  .noPro{
    padding: 30px;
    color: #333;
  }
}
</style>