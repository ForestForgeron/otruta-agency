(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{251:function(e,t,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(83).default)("527934de",content,!0,{sourceMap:!1})},275:function(e,t,o){e.exports=o.p+"img/eagle.743d5d8.webp"},276:function(e,t,o){"use strict";o(251)},277:function(e,t,o){var n=o(82)(!1);n.push([e.i,".team__list{display:flex;flex-wrap:wrap;justify-content:center;max-width:92vw;max-height:77.5vh;overflow:hidden}.team__item{position:relative;display:flex;flex-direction:column;font-size:calc(34px + .625vw);font-weight:700}.team__photo{height:55.5vh;outline:3px solid transparent;-o-object-fit:cover;object-fit:cover}.team__description{position:absolute;visibility:hidden;z-index:2;top:30px;min-width:600px;padding:81px 18px 81px 33px;font-size:calc(20px + .625vw);line-height:27px;font-weight:700;color:#fff}.team__name{line-height:50px}.team__field{line-height:60px}.team__carousel{width:100%}.team__slide{width:370px;margin-right:75px;flex-grow:unset;flex-shrink:unset;padding:3px}",""]),e.exports=n},289:function(e,t,o){"use strict";o.r(t);o(29),o(38),o(39);var n={data:function(){return{currentDescription:"",descriptionWidth:[],teamList:[{id:"0",name:"катя",field:"дизайн",photo:"",hoverColor:"#6f00ff",isHover:!1,description:"Convallis nunc vitae diam lacrpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque bendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac n."},{id:"1",name:"юра",field:"програмування",photo:"",hoverColor:"#c7d401",isHover:!1,description:"Convallis nunc vitae diam lacus dc gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fer ac neque eget euismod."},{id:"2",name:"стас",field:"фото\\вiдео",photo:"",hoverColor:"#ff6058",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque bendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque eg eget euismod.",position:"0"},{id:"3",name:"макс",field:"реклама",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",position:"0"},{id:"4",name:"Иштван",field:"квантовая цитология",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod."},{id:"5",name:"Хидео Кодзима",field:"геймдев",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod."},{id:"6",name:"Параска",field:"надои молока",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",position:"0"},{id:"7",name:"Гена",field:"добрый крокодил",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",position:"0"},{id:"8",name:"Jason Lee",field:"marketing",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod."},{id:"9",name:"Mary Sue",field:"witch bitch",photo:"",hoverColor:"#f3a0ba",isHover:!1,description:"Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod."}]}},mounted:function(){this.getWidth()},methods:{hoverEffect:function(e){this.teamList[e].isHover=!this.teamList[e].isHover,this.currentDescription=this.teamList[e].description},getWidth:function(){this.descriptionWidth=this.$refs.teamDescription.map((function(e){return e.clientWidth}))},popoverEffect:function(e){var t={};return this.teamList[e].isHover&&(t.backgroundColor=this.teamList[e].hoverColor,t.visibility="visible",t.transition="all 0.3s ease 0s"),"0"==this.teamList[e].position?t.right="100%":t.left="100%",t}}},l=(o(276),o(37)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"team"},[n("div",{staticClass:"team__list"},[n("carousel",{staticClass:"team__carousel",attrs:{perPage:4,paginationEnabled:!1}},e._l(e.teamList,(function(t){return n("slide",{key:t.id,staticClass:"team__slide"},[n("div",{staticClass:"team__item",on:{mouseenter:function(o){return e.hoverEffect(t.id)},mouseleave:function(o){return e.hoverEffect(t.id)}}},[n("div",{ref:"teamDescription",refInFor:!0,staticClass:"team__description",style:e.popoverEffect(t.id)},[e._v("\n            "+e._s(e.currentDescription)+"\n          ")]),e._v(" "),n("img",{staticClass:"team__photo",style:t.isHover?{outlineColor:t.hoverColor,transition:"all 0.3s ease 0s",cursor:"pointer"}:"",attrs:{src:o(275),alt:"photo of the team"}}),e._v(" "),n("div",{staticClass:"team__name"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("div",{staticClass:"team__field",style:t.isHover?{color:t.hoverColor,transition:"all 0.3s ease 0s",cursor:"pointer"}:""},[e._v("\n            "+e._s(t.field)+"\n          ")])])])})),1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);