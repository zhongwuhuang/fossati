(function(t){function e(e){for(var a,o,i=e[0],s=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1c570d08":"69f064ae","chunk-2d0ba179":"86607cdc","chunk-021cf1e5":"9c0df70a","chunk-3b4e6c5a":"0d6137c7","chunk-607c7235":"2c767766","chunk-722ccd3b":"57deeb78","chunk-e6fe1cfa":"cba896c3","chunk-30e1a1e7":"567e6bc5","chunk-ccf20cba":"d12a4e07"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1c570d08":1,"chunk-021cf1e5":1,"chunk-3b4e6c5a":1,"chunk-607c7235":1,"chunk-722ccd3b":1,"chunk-e6fe1cfa":1,"chunk-30e1a1e7":1,"chunk-ccf20cba":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1c570d08":"7996ddca","chunk-2d0ba179":"31d6cfe0","chunk-021cf1e5":"796f9e45","chunk-3b4e6c5a":"e28c88c2","chunk-607c7235":"c380197e","chunk-722ccd3b":"c946dba4","chunk-e6fe1cfa":"64ffee1e","chunk-30e1a1e7":"8165c43d","chunk-ccf20cba":"f79622cc"}[t]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[t],f.parentNode.removeChild(f),n(c)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"31a6":function(t,e,n){"use strict";var a=n("7730"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("5c0b"),n("2877")),i={},s=Object(c["a"])(i,o,r,!1,null,null,null),l=s.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header",style:{background:t.isBg}},[n("div",{staticClass:"_container header_box flex_box_between"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/index"}},[t._v("FOSSATI")])],1),n("div",{staticClass:"nav_box"},[n("div",{staticClass:"more_menu _cursor",on:{click:t.handleShowSmallNav}},[n("transition",{attrs:{name:"iconShow"}},[t.smallNav?t._e():n("i",{staticClass:"el-icon-menu"})]),n("transition",{attrs:{name:"iconShow"}},[t.smallNav?n("i",{staticClass:"el-icon-close"}):t._e()])],1),n("ul",{staticClass:"flex_box"},[n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor"},[n("router-link",{attrs:{to:"/brand"}},[t._v("品牌故事")])],1)]),n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor",on:{mouseover:t.handleHover}},[t._v("产品")]),n("div",{staticClass:"nav_sub_box"},[n("div",{staticClass:"_container _border"}),n("div",{staticClass:"_container"},[n("div",{staticClass:"nav_sub_list"},t._l(t.cateArr,function(e,a){return n("div",{key:a,staticClass:"item"},[n("router-link",{attrs:{to:"/product?proCategoryId="+e.id}},[t._v(t._s(e.nickname))])],1)}),0)])])]),n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor"},[n("router-link",{attrs:{to:"/nProduct"}},[t._v("新品")])],1)]),n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor"},[n("router-link",{attrs:{to:"/project"}},[t._v("项目")])],1)]),n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor"},[n("router-link",{attrs:{to:"/shop"}},[t._v("旗舰店")])],1)]),n("li",{staticClass:"nav_list"},[n("span",{staticClass:"nav_list_a _cursor"},[n("router-link",{attrs:{to:"/news"}},[t._v("新闻")])],1)])])])]),n("transition",{attrs:{name:"siderBar"}},[t.isSmallNavShow?n("div",{staticClass:"small_nav_box"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"rgba(32, 34, 43, 0.9)","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/brand"},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v("品牌故事")])],1),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("产品")]),t._l(t.cateArr,function(e,a){return n("el-menu-item",{key:a,attrs:{index:"2-"+a}},[n("router-link",{attrs:{to:"/product?proCategoryId="+e.id},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v(t._s(e.nickname))])],1)})],2),n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{attrs:{to:"/nProduct"},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v("新品")])],1),n("el-menu-item",{attrs:{index:"4"}},[n("router-link",{attrs:{to:"/project"},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v("项目")])],1),n("el-menu-item",{attrs:{index:"5"}},[n("router-link",{attrs:{to:"/shop"},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v("旗舰店")])],1),n("el-menu-item",{attrs:{index:"6"}},[n("router-link",{attrs:{to:"/news"},nativeOn:{click:function(e){return t.handleShowSmallNav(e)}}},[t._v("新闻")])],1)],1)],1):t._e()])],1),n("div",{staticClass:"content",on:{touchmove:function(t){t.preventDefault()}}},[n("router-view")],1),t.isFooterShow?n("Footer"):t._e(),n("transition",{attrs:{name:"siderBar"}},[t.isTopBtn?n("div",{staticClass:"toTop",on:{click:t.toTop}},[n("i",{staticClass:"el-icon-top"})]):t._e()])],1)},f=[],h=n("fa7d"),v=n("fd2d"),p={name:"home",components:{Footer:v["a"]},data:function(){return{smallNav:!1,isSmallNavShow:!1,screenWidth:"",isBg:"none",isTopBtn:!1,cateArr:[],isFooterShow:!0}},watch:{$route:function(t){"/index"===t.path?this.isFooterShow=!1:this.isFooterShow=!0}},created:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"/out/category")).then(function(e){var n=e.data.data;t.cateArr=n.filter(h["b"])}),"/index"===this.$route.path?this.isFooterShow=!1:this.isFooterShow=!0},methods:{handleHover:function(){this.isBg="rgba(32, 34, 43, 0.9)"},handleLeave:function(){this.isBg="none"},handleShowSmallNav:function(){this.smallNav=!this.smallNav,this.isSmallNavShow=!this.isSmallNavShow},scrollToTop:function(){var t=this,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=e,t.scrollTop>100?t.isTopBtn=!0:t.isTopBtn=!1},toTop:function(){var t=this,e=setInterval(function(){var n=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+n,0===t.scrollTop&&clearInterval(e)},16)},windowScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isBg=t>200?"rgba(32, 34, 43, 0.9)":"none"}},mounted:function(){var t=this;window.addEventListener("scroll",this.scrollToTop),window.onresize=function(){return function(){var e=document.body.clientWidth;e>768&&(t.smallNav=t.isSmallNavShow=!1)}()},window.addEventListener("scroll",this.windowScroll)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)}},m=p,b=(n("31a6"),Object(c["a"])(m,d,f,!1,null,"4d51def1",null)),_=b.exports;a["default"].use(u["a"]);var k=new u["a"]({mode:"history",base:"",routes:[{path:"/",component:_,redirect:"/index",children:[{path:"/index",name:"首页",component:function(){return Promise.all([n.e("chunk-2d0ba179"),n.e("chunk-021cf1e5")]).then(n.bind(null,"d504"))}},{path:"/brand",name:"品牌故事",component:function(){return n.e("chunk-ccf20cba").then(n.bind(null,"4fa8"))}},{path:"/product",name:"产品",component:function(){return n.e("chunk-1c570d08").then(n.bind(null,"d2f1"))}},{path:"/nProduct",name:"新品",component:function(){return n.e("chunk-30e1a1e7").then(n.bind(null,"5ae5"))}},{path:"/detail",name:"详情",component:function(){return Promise.all([n.e("chunk-2d0ba179"),n.e("chunk-722ccd3b")]).then(n.bind(null,"c84b"))}},{path:"/project",name:"项目",component:function(){return Promise.all([n.e("chunk-2d0ba179"),n.e("chunk-e6fe1cfa")]).then(n.bind(null,"07bd"))}},{path:"/shop",name:"旗舰店",component:function(){return Promise.all([n.e("chunk-2d0ba179"),n.e("chunk-3b4e6c5a")]).then(n.bind(null,"0fa5"))}},{path:"/news",name:"新闻",component:function(){return Promise.all([n.e("chunk-2d0ba179"),n.e("chunk-607c7235")]).then(n.bind(null,"a2f94"))}}]}]}),w=n("2f62");a["default"].use(w["a"]);var g=new w["a"].Store({state:{},mutations:{},actions:{}}),C=n("20ad"),S=n.n(C),y=(n("8720"),n("6fe8")),x=n.n(y),T=n("f160"),N=n.n(T),O=(n("9849"),n("8df9"),n("2427")),E=n.n(O);a["default"].use(S.a),a["default"].use(x.a),a["default"].use(N.a),a["default"].prototype.$axios=E.a,a["default"].prototype.imgUrl="http://fossati1967.com:8800",a["default"].prototype.baseUrl="http://fossati1967.com:8800/api",k.beforeEach(function(t,e,n){t.name&&(document.title=t.name),n()}),a["default"].config.productionTip=!1,new a["default"]({router:k,store:g,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},"6ccb":function(t,e,n){"use strict";var a=n("a045"),o=n.n(a);o.a},7730:function(t,e,n){},"8df9":function(t,e,n){},a045:function(t,e,n){},fa7d:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r});n("3b2b"),n("a481");var a=function(t,e){var n=new Date(t),a="";function o(t){return t<10?"0"+t:""+t}return a+=n.getFullYear()+"/",a+=o(n.getMonth()+1)+"/",a+=o(n.getDate()),!0===e&&(a+="  "+o(n.getHours())+":",a+=o(n.getMinutes())+":",a+=o(n.getSeconds())),a},o=function(t){return 28===t.pid},r=function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"linkBox flex_box_between"},[n("div",{staticClass:"_cursor"},[n("i",{staticClass:"iconfont icon-weibo"})]),n("div",{staticClass:"_cursor"},[n("i",{staticClass:"iconfont icon-weixin"})]),n("div",{staticClass:"_cursor"},[n("i",{staticClass:"iconfont icon-instagram"})])]),n("div",{staticClass:"connectInfo"},[n("span",[t._v("地址：上海市青浦区华丹路108号")]),n("span",[t._v("电话：13700275217")]),n("span",[t._v("邮箱：fossati1967@163.com")])])])}],r={name:"Footer"},c=r,i=(n("6ccb"),n("2877")),s=Object(i["a"])(c,a,o,!1,null,"3cdc1340",null);e["a"]=s.exports}});