(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c497b2d"],{7263:function(t,a,e){},"9fd2":function(t,a,e){"use strict";var r=e("7263"),i=e.n(r);i.a},d2f1:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product"},[e("div",{staticClass:"imgshow"},[e("img",{attrs:{src:t.cateImg,alt:""}})]),e("div",{staticClass:"list"},[e("div",{staticClass:"container-fluid"},[e("h3",{staticClass:"tittle"},[t._v(t._s(t.cateName))]),e("div",[e("el-row",t._l(t.productArr,(function(a,r){return e("el-col",{key:r,staticClass:"imgbox",attrs:{span:12,xs:24,md:8,lg:6}},[e("router-link",{attrs:{to:"/detail?productId="+a.id}},[e("div",{staticClass:"imgdiv"},[e("img",{staticClass:"img-responsive",attrs:{src:t.baseImgUrl+a.image,alt:"chef"}})])]),e("h3",[t._v(t._s(a.name))])],1)})),1)],1),0===t.productArr.length?e("div",{staticClass:"noPro"},[t._v("\n        该分类没有产品，请添加\n      ")]):t._e()])])])},i=[],s=e("fa7d"),c={data:function(){return{cateName:"",cateImg:"",productArr:[],baseImgUrl:""}},watch:{$route:function(){this.getCategoryData(),this.getProductData()}},created:function(){this.baseImgUrl=this.imgUrl,this.getCategoryData(),this.getProductData()},methods:{getCategoryData:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"/out/category")).then((function(a){var e=a.data.data,r=e.filter(s["b"]);t.cateName=r.filter(t.filterCateName)[0].nickname,t.cateImg=t.imgUrl+r.filter(t.filterCateName)[0].image}))},getProductData:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"/out/product")).then((function(a){var e=a.data.data;t.productArr=e.filter(t.filterCategory)}))},filterCateName:function(t){return t.id==Object(s["c"])("proCategoryId")},filterCategory:function(t){return t.category_id==Object(s["c"])("proCategoryId")}}},n=c,o=(e("9fd2"),e("6691")),l=Object(o["a"])(n,r,i,!1,null,"23047fd0",null);a["default"]=l.exports}}]);