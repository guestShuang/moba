(function(t){function s(s){for(var a,r,c=s[0],l=s[1],o=s[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(s);while(p.length)p.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},i={app:0},n=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/moba/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0972":function(t,s,e){},1399:function(t,s,e){"use strict";var a=e("ef4a"),i=e.n(a);i.a},"21bb":function(t,s,e){"use strict";var a=e("2dad"),i=e.n(a);i.a},"2dad":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r={name:"App"},c=r,l=e("2877"),o=Object(l["a"])(c,i,n,!1,null,null,null),d=o.exports,u=e("8c4f"),p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("div",{staticClass:"bg-primary pt-3 pb-2"},[e("div",{staticClass:"nav nav-inverse pb-1 jc-around"},[e("div",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),e("router-view")],1)},v=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"topBar bg-black py-2 px-4 d-flex ai-center"},[a("img",{attrs:{src:e("cf05"),height:"30"}}),a("div",{staticClass:"px-3 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-dark-1 fs-sm"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],m={},f=m,_=(e("a006"),Object(l["a"])(f,p,v,!1,null,null,null)),C=_.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.showSwiper?e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.ads,(function(t){return e("swiper-slide",{key:t.id},[e("a",{attrs:{href:t.url}},[e("img",{staticClass:"w-100",attrs:{src:t.image,alt:""}})])])})),e("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),e("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1",class:{open:t.eflag}},[t._m(0)]),e("div",{staticClass:"bg-light py-2 fs-sm text-center",on:{click:t.handleExpand}},[e("i",{staticClass:"sprite sprite-arrow mr-1"}),e("span",[t._v(t._s(t.eflag?"展开":"收起"))])]),e("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(s){var a=s.category;return t._l(a.newsList,(function(s,a){return e("router-link",{key:a,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+s._id}},[e("span",{staticClass:"text-info"},[t._v("["+t._s(s.categoryName)+"]")]),e("span",{staticClass:"px-2"},[t._v("|")]),e("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(s.title))]),e("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(s.createdAt)))])])}))}}])}),e("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(s){var a=s.category;return[e("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,(function(s,a){return e("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+s._id}},[e("img",{staticClass:"w-100",attrs:{src:s.avatar}}),e("div",[t._v(t._s(s.name))])])})),1)]}}])})],1)},g=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-wrap"},[e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-news"}),e("div",{staticClass:"py-2"},[t._v("爆料站")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-story"}),e("div",{staticClass:"py-2"},[t._v("故事站")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-shop"}),e("div",{staticClass:"py-2"},[t._v("周边商城")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-tyf"}),e("div",{staticClass:"py-2"},[t._v("体验服")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-xrzq"}),e("div",{staticClass:"py-2"},[t._v("新人专区")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-rycc"}),e("div",{staticClass:"py-2"},[t._v("荣耀·传承")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-wzyd"}),e("div",{staticClass:"py-1"},[t._v("王者营地")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-gzh"}),e("div",{staticClass:"py-2"},[t._v("公众号")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-bbjs"}),e("div",{staticClass:"mt-1"},[t._v("版本介绍")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-djhj"}),e("div",{staticClass:"mt-2"},[t._v("对局环境")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-wxwzt mt-1"}),e("div",{staticClass:"mt-3"},[t._v("无限王者团")])]),e("div",{staticClass:"nav-item mb-3"},[e("i",{staticClass:"sprite sprite-cyhdy"}),e("div",{},[t._v("创意互动营")])])])}],b=(e("96cf"),e("1da1")),x=e("5a0c"),y=e.n(x),w={filters:{date:function(t){return y()(t).format("MM/DD")}},data:function(){return{eflag:!0,swiperOption:{pagination:{el:".pagination-home"},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},newsCats:[],heroCats:[],ads:[]}},computed:{showSwiper:function(){return this.ads.length}},methods:{handleExpand:function(){this.eflag=!this.eflag},fetchAds:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("ad/list");case 2:e=s.sent,t.ads=e.data.items;case 4:case"end":return s.stop()}}),s)})))()},fetchNewsCats:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("news/list");case 2:e=s.sent,t.newsCats=e.data;case 4:case"end":return s.stop()}}),s)})))()},fetchHeroCats:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("heroes/list");case 2:e=s.sent,t.heroCats=e.data;case 4:case"end":return s.stop()}}),s)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchAds()}},k=w,j=(e("21bb"),Object(l["a"])(k,h,g,!1,null,null,null)),O=j.exports,S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.model?e("div",{staticClass:"page-article"},[e("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[e("div",{staticClass:"iconfont icon-Back text-blue",on:{click:function(s){return t.$router.back()}}}),e("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(t._s(t.model.title))]),e("div",{staticClass:"text-grey fs-xs"},[t._v("2019-06-19")])]),e("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),e("div",{staticClass:"px-3 border-top py-3"},[t._m(0),e("div",{staticClass:"pt-2"},t._l(t.model.related,(function(s){return e("router-link",{key:s._id,staticClass:"py-1",attrs:{tag:"div",to:"/articles/"+s._id}},[t._v(t._s(s.title))])})),1)])]):t._e()},$=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex ai-center"},[e("i",{staticClass:"iconfont icon-menu1"}),e("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],E={props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:function(){this.fetch()}},methods:{fetch:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("articles/".concat(t.id));case 2:e=s.sent,t.model=e.data;case 4:case"end":return s.stop()}}),s)})))()}},created:function(){this.fetch()}},R=E,P=(e("1399"),Object(l["a"])(R,S,$,!1,null,null,null)),q=P.exports,A=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:e("cf05"),height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),t.model.categories?a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]):t._e(),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v("皮肤: 2 >")])],1)])]),a("div",[t._m(1),t.model.skills.length>0?a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 一图识英雄 ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(s,e){return a("img",{key:s.name,staticClass:"icon",class:{active:t.currentSkillIndex===e},attrs:{src:s.icon},on:{click:function(s){t.currentSkillIndex=e}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(s){return a("div",{key:s.name},[a("img",{staticClass:"icon",attrs:{src:s.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(s){return a("div",{key:s.name},[a("img",{staticClass:"icon",attrs:{src:s.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-x"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(s){return a("div",{key:s.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:s.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(s.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-x mt-3"},[t._v("被谁克制")]),t._l(t.model.restraints,(function(s){return a("div",{key:s.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:s.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(s.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-x mt-3"},[t._v("克制谁")]),t._l(t.model.abnegators,(function(s){return a("div",{key:s.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:s.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(s.description)+" ")])])}))],2)],1)]),a("swiper-slide")],1):a("div",{staticClass:"text-center",staticStyle:{backgroud:"#f6f6f6"}},[a("img",{attrs:{src:e("d8f5"),alt:""}})])],1)]):t._e()},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"px-2 flex-1"},[e("span",{staticClass:"text-white"},[t._v("王者荣耀")]),e("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-white px-3"},[e("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[e("div",{staticClass:"nav-item active"},[e("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),e("div",{staticClass:"nav-item"},[e("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],I={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,flag:!1}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("heroes/".concat(t.id));case 2:e=s.sent,t.model=e.data;case 4:case"end":return s.stop()}}),s)})))()}},created:function(){this.fetch()}},M=I,L=(e("5ec3"),Object(l["a"])(M,A,T,!1,null,"4312ce12",null)),N=L.exports;a["a"].use(u["a"]);var z=[{path:"/",name:"main",component:C,children:[{path:"/",name:"home",component:O},{path:"/articles/:id",name:"article",component:q,props:!0}]},{path:"/heroes/:id",name:"hero",component:N,props:!0}],B=new u["a"]({routes:z}),H=B,U=(e("be35"),e("78a7"),e("7212")),D=e.n(U),J=(e("dfa4"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card bg-white p-3 mt-3"},[e("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[e("i",{staticClass:"iconfont",class:"icon-"+t.icon}),e("div",{staticClass:"fs-xl flex-1 px-2"},[e("strong",[t._v(t._s(t.title))])]),t.plain?t._e():e("i",{staticClass:"iconfont icon-menu"})]),e("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),V=[],F={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},G=F,K=(e("e60d"),Object(l["a"])(G,J,V,!1,null,null,null)),Q=K.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("m-card",{attrs:{icon:t.icon,title:t.title}},[e("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(s,a){return e("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(s){return t.$refs.list.swiper.slideTo(a)}}},[e("div",{staticClass:"nav-link"},[t._v(t._s(s.name))])])})),0),e("div",{staticClass:"pt-3"},[t.categories.length>0?e("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(s,a){return e("swiper-slide",{key:a},[t._t("items",null,{category:s})],2)})),1):t._e()],1)])},X=[],Y={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},Z=Y,tt=Object(l["a"])(Z,W,X,!1,null,null,null),st=tt.exports,et=e("bc3a"),at=e.n(et);a["a"].config.productionTip=!1,a["a"].use(D.a),a["a"].component("m-card",Q),a["a"].component("m-list-card",st),a["a"].prototype.$http=at.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/moba/"}).VUE_APP_API_URL||"/web/api"}),new a["a"]({router:H,render:function(t){return t(d)}}).$mount("#app")},"5ec3":function(t,s,e){"use strict";var a=e("be74"),i=e.n(a);i.a},"78a7":function(t,s,e){},a006:function(t,s,e){"use strict";var a=e("0972"),i=e.n(a);i.a},be35:function(t,s,e){},be74:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.fc64bf07.png"},d8f5:function(t,s,e){t.exports=e.p+"img/no_content.c19d977c.jpg"},e60d:function(t,s,e){"use strict";var a=e("e9ec"),i=e.n(a);i.a},e9ec:function(t,s,e){},ef4a:function(t,s,e){}});
//# sourceMappingURL=app.7419530a.js.map