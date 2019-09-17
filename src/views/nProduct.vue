<template>
  <div class="product">
    <div class="imgshow">
      <!-- <img :src="cateImg" alt=""> -->
      <img :src="cateImg" alt="">
    </div>

    <!-- 列表 -->
    <div class="list" id="list">
      <div class="container-fluid">
        <div id="newList" style="margin-bottom:20px;">
          <div class="category" v-for="(name,index) in newListName" :key="index">
            <h3 class="tittle">{{name}}</h3>
            <el-row>
              <el-col class="imgbox" :span="12" :xs="24" :md="8" v-for="(list,idx) in newListArr[index]" :key="idx">
                <router-link :to="'/detail?productId='+list.id">
                  <img  class="img-responsive" :src="baseImgUrl+list.image" alt="chef">
                </router-link>
                <h3>{{list.name}}</h3>
              </el-col>
              <div class="noPro" v-if="newListArr[index].length === 0">
                该分类没有产品，请添加
              </div>
            </el-row>
          </div>
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
      newListName:[],
      newListArr:[],
      cateImg:'',
      baseImgUrl:''
    }
  },
  created() {
    this.baseImgUrl = this.imgUrl
    this.getCategoryData()
  },
  methods: {
    getCategoryData(){
      this.$axios.get(`${this.baseUrl}/out/category`).then(res=>{
        let resCate = res.data.data
        function filterCate(item){
          return item.pid === 28
        }
        let cateArr = resCate.filter(filterCate)
        this.cateImg = this.imgUrl+cateArr[0].image
        let cateIdArr = []
        for (let i = 0; i < cateArr.length; i++) {
          cateIdArr.push(cateArr[i].id)
        }        

        this.$axios.get(`${this.baseUrl}/out/product/newswitch/1`).then(res=>{
          this.newListArr = []
          this.newListName = []
          let resnews = res.data.data
          for (let i = 0; i < cateIdArr.length; i++) {
            function filterCate(item){
              return item.category_id == cateIdArr[i]
            }
            this.newListArr.push(resnews.filter(filterCate))
          }
          for (let i = 0; i < this.newListArr.length; i++) {
            function filterCateName(item){
              return item.id == cateIdArr[i]
            }
            this.newListName.push(resCate.filter(filterCateName)[0].nickname)
          }
        })    

      })    
    },
  },  
}
</script>

<style scoped >

.imgshow{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.imgshow img{
  width: 100%;
}

.category{
  margin-top: 30px;
  overflow: hidden;
  border-bottom: 1px solid #d9d9d9;
}
.tittle{
  font-size: 30px;
  font-weight: 300;
  padding: 20px 0;
}
.category:last-child{
  border-bottom: none;
}
.list{
  text-align:center;
  margin:0px 60px 0;
}
.list .imgbox{
  margin:40px 0 20px;
}
.list .imgbox a{
  position: relative;
  display: block;
  height: 240px;
}
.list img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-height: 100%;
  display: inline-block;
}
.list h3{
  padding-top:20px;
}
.noPro{
  padding-bottom: 30px;
  color: #333;
}
</style>