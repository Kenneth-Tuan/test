(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ada":function(t,e,n){"use strict";n("7e2b")},"486d":function(t,e,n){},"4e92":function(t,e,n){t.exports=n.p+"img/nicklin.uiuxblog.tw_.c9b092d8.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my-portfolio"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container d-flex justify-content-between",{init:t.active,fixed:t.active}]},[t._m(0),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand"},[n("h1",[t._v("Kenneth's Portfolio")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",{staticClass:"\n        social-media-list\n        d-flex\n        align-items-center\n        justify-content-around\n      "},[n("a",{attrs:{href:"https://www.linkedin.com/in/kenneth-tuan-1533321a0/"}},[n("li",{staticClass:"list-item pointer"},[n("i",{staticClass:"fab fa-linkedin-in"})])]),n("a",{attrs:{href:"https://github.com/Kenneth-Tuan"}},[n("li",{staticClass:"list-item pointer"},[n("i",{staticClass:"fab fa-github"})])]),n("a",{attrs:{href:"mailto:kenneth9417@gmail.com"}},[n("li",{staticClass:"list-item pointer"},[n("i",{staticClass:"fas fa-envelope"})])])])])}],l={data:function(){return{active:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.active=window.scrollY>80}}},c=l,u=(n("6b19"),n("2877")),d=Object(u["a"])(c,s,o,!1,null,"2e18f79b",null),f=d.exports,v={name:"App",components:{Header:f}},p=v,m=(n("5c0b"),Object(u["a"])(p,r,a,!1,null,null,null)),h=m.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("NotFound")])},w=[],g={},C=Object(u["a"])(g,_,w,!1,null,null,null),y=C.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),i("section",{attrs:{id:"section-2"}},[i("div",{staticClass:"card-wrapper"},[i("div",{staticClass:"card d-flex justify-content-around"},[i("div",{directives:[{name:"motion-fade-visible",rawName:"v-motion-fade-visible"}],staticClass:"blank"}),i("div",{directives:[{name:"motion-slide-visible-left",rawName:"v-motion-slide-visible-left"}],staticClass:"img-container"},[i("router-link",{attrs:{to:"/work/1"}},[i("img",{staticClass:"pointer",attrs:{src:n("6546"),alt:""}})])],1),i("div",{directives:[{name:"motion-slide-visible-right",rawName:"v-motion-slide-visible-right"}],staticClass:"card-introduce"},[i("router-link",{attrs:{to:"/work/1"}},[i("h2",{staticClass:"card-title text-center pointer"},[t._v("場地租借系統")])]),t._m(1)],1)]),i("div",{staticClass:"card d-flex justify-content-around"},[i("div",{directives:[{name:"motion-fade-visible",rawName:"v-motion-fade-visible"}],staticClass:"blank"}),i("div",{directives:[{name:"motion-slide-visible-right",rawName:"v-motion-slide-visible-right"}],staticClass:"card-introduce"},[i("router-link",{attrs:{to:"/work/2"}},[i("h2",{staticClass:"card-title text-center pointer"},[t._v(" 網站開發 ")])]),t._m(2)],1),i("div",{directives:[{name:"motion-slide-visible-left",rawName:"v-motion-slide-visible-left"}],staticClass:"img-container"},[i("router-link",{attrs:{to:"/work/2"}},[i("img",{staticClass:"pointer",attrs:{src:n("4e92"),alt:""}})])],1)])])])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"section-1"}},[n("h2",[t._v("Kenneth Tuan.")]),n("p",{staticClass:"content-1"},[t._v(" An Interaction Designer with a deep passion into making our virtual world a Better place for Everyone. ")]),n("p",{staticClass:"content-2"},[t._v("Check out some of my projects Below")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-description text-left"},[n("ul",[n("li",[t._v(" · 協助非盈利組織搭建完整的場地租借系統，其中包括會員註冊以及登入、第三方登入、用戶後臺管理、場地時間預約、場地清潔管理等功能 ")]),n("li",[t._v(" · 與設計師、後端工程師討論userflow，設計出最符合使用者需求的產品 ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-description text-left"},[n("ul",[n("li",[t._v(" · 自行接案，至 2022 年六月，一共開發 4 個部落格個人網站，每個專案耗時兩周 ")]),n("li",[t._v(" · 於該專案中擔任前端工程師，並與 UI/UX 設計師、後端工程師配合，同時幫助 UI/UX 設計師厘清需求 ")])])])}],j={name:"Home"},O=j,E=(n("2ada"),Object(u["a"])(O,x,k,!1,null,"0c31e889",null)),$=E.exports;i["default"].use(b["a"]);var P=new b["a"]({routes:[{path:"/",name:"root",redirect:"/home"},{path:"/home",name:"home",component:$},{path:"*",name:"not-found",component:y}]}),S=n("ed09"),N=n("0fe8");i["default"].config.productionTip=!1,i["default"].use(S["default"]),i["default"].use(N["a"]),new i["default"]({router:P,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6546:function(t,e,n){t.exports=n.p+"img/GSM_ref1.d4f7d17d.png"},"6b19":function(t,e,n){"use strict";n("486d")},"7e2b":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.3d4b1458.js.map