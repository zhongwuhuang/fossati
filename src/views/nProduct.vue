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
                  <div class="imgdiv">
                    <img  class="img-responsive" :src="baseImgUrl+list.image" alt="chef">
                  </div>
                </router-link>
                <h3>{{list.name}}</h3>
              </el-col>
              <div class="noPro" v-if="newListArr[index].length === 0">
                该分类没有新品，请添加
              </div>
            </el-row>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {filterCate} from '@/utils/utils'
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
        // function filterCate(item){
        //   return item.pid === 28
        // }
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
            const filterCateF = (item)=>{
              return item.category_id == cateIdArr[i]
            }
            this.newListArr.push(resnews.filter(filterCateF))
          }
          for (let i = 0; i < this.newListArr.length; i++) {
            const filterCateNameF = (item)=>{
              return item.id == cateIdArr[i]
            }
            this.newListName.push(resCate.filter(filterCateNameF)[0].nickname)
          }
        })    

      })    
    },
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
  margin:0px 60px 0;
  .category{
    margin-top: 30px;
    overflow: hidden;
    border-bottom: 1px solid #d9d9d9;
    &:last-child{
      border-bottom: none;
    }
    .tittle{
      font-size: 30px;
      font-weight: 300;
      padding: 20px 0;
    }
    .imgbox{
      margin:40px 0 20px;
      a{
        overflow: hidden;
        position: relative;
        display: block;
        height: 240px;
        .imgdiv{
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          display: inline-block;
          img{
            max-height: 100%;
            // max-width: 100%;
            transition: all 1.5s;
            &:hover {
              transform: scale(1.1);
            }        
          }
        }
      }
      h3{
        padding-top:20px;
        color: #333;
      }
    }
    .noPro{
      padding-bottom: 30px;
      color: #666;
      font-size: 16px;
    }
  }
}
</style>