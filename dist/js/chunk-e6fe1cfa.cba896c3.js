(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6fe1cfa"],{"07bd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.dataArr,function(e,a){return i("div",{key:a,staticClass:"project"},[i("section",{staticClass:"pc-banner"},[i("div",{staticClass:"swiper-container",staticStyle:{height:"100%"}},[i("div",{staticClass:"swiper-wrapper"},t._l(e.images.split(","),function(a,s){return i("div",{key:s,staticClass:"swiper-slide"},[i("img",{directives:[{name:"gallery",rawName:"v-gallery",value:e.id,expression:"item.id"}],attrs:{src:t.baseImgUrl+a}})])}),0),i("div",{staticClass:"swiper-pagination"}),t._m(0,!0)])]),i("div",{staticClass:"projectTitle"},[t._v("\n      "+t._s(e.name)+"\n    ")]),i("div",{staticClass:"detail"},[i("el-row",[i("el-col",{attrs:{span:24,sm:{span:12}}},[i("p",{staticClass:"detailtext"},[t._v("\n            "+t._s(e.context)+"\n          ")])]),i("el-col",{attrs:{span:24,sm:{span:10,offset:2}}},[i("ul",{staticClass:"info"},[i("li",[i("div",[t._v("时间")]),i("div",[t._v(t._s(e.casedate))])]),i("li",[i("div",[t._v("作者")]),i("div",[t._v(t._s(e.people))])]),i("li",[i("div",[t._v("地址")]),i("div",[t._v(t._s(e.address))])])])])],1)],1)])}),0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button"},[i("div",{staticClass:"swiper-button-prev"}),i("div",{staticClass:"swiper-button-next"})])}],n=i("3677"),r=i("fa7d"),c={name:"Index",data:function(){return{baseImgUrl:"",dataArr:[]}},created:function(){this.baseImgUrl=this.imgUrl,this.handleGetDate()},methods:{handleUnixToDate:function(t,e){return Object(r["a"])(t,e)},handleGetDate:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"/out/project")).then(function(e){t.dataArr=e.data.data,t.initSwiper()})},initSwiper:function(){this.$nextTick(function(){new n["a"](".swiper-container",{slidesPerView:"auto",spaceBetween:30,centeredSlides:!0,initialSlide:0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})}}},l=c,d=(i("3ebd"),i("2877")),o=Object(d["a"])(l,a,s,!1,null,"981c5720",null);e["default"]=o.exports},"3ebd":function(t,e,i){"use strict";var a=i("8ef0"),s=i.n(a);s.a},"8ef0":function(t,e,i){}}]);