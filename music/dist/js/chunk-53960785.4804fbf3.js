(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53960785"],{3007:function(t,i,s){},b368:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"singertop"},[s("van-nav-bar",{attrs:{title:"歌手榜","left-arrow":"",fixed:""},on:{"click-left":t.goback}}),s("div",{staticClass:"singertop-box"},[s("div",{staticClass:"list-singer clearfix"},t._l(t.singerListData,(function(i,n){return s("div",{key:n,staticClass:"singer fl"},[s("div",{staticClass:"singer-content"},[s("div",{staticClass:"img-box",style:{backgroundImage:"url('"+i.picUrl+"')"},on:{click:function(s){return t.getSingerId(i)}}},[s("div",{staticClass:"gaodu"})]),s("div",{staticClass:"singer-text"},[t._v(t._s(i.name))])])])})),0)])],1)},a=[],e=(s("3007"),{data:function(){return{singerListData:[]}},created:function(){this.getSingerList()},methods:{goback:function(){this.$router.back()},getSingerList:function(){var t=this;this.axios({method:"GET",url:"http://localhost:3000/toplist/artist"}).then((function(i){t.singerListData=i.data.list.artists}))},getSingerId:function(t){this.$router.push({name:"SingerDetail",query:{id:t.id}})}}}),r=e,c=s("2877"),o=Object(c["a"])(r,n,a,!1,null,"7714efa4",null);i["default"]=o.exports}}]);
//# sourceMappingURL=chunk-53960785.4804fbf3.js.map