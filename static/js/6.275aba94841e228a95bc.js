webpackJsonp([6],{228:function(t,e,n){var s=n(1)(n(370),n(299),null,null,null);t.exports=s.exports},273:function(t,e,n){e=t.exports=n(202)(!0),e.push([t.i,".toast-page .box-icon{font-size:50px}.toast-page .box-text{margin-bottom:5px}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/ToastPage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,sBAGM,cCJa,CDKd,AAJL,sBAOM,iBCRa,CDSd",file:"ToastPage.scss",sourcesContent:['@import "../core/func";\n\n.toast-page {\n  .box {\n    &-icon {\n      font-size: r(50);\n    }\n\n    &-text {\n      margin-bottom: r(5);\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},299:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{staticClass:"toast-page"},[n("PageHeader",{attrs:{title:"轻提示 Toast"}}),t._v(" "),n("main",[n("div",[n("za-panel",[n("za-panel-header",{attrs:{title:"提示信息"}}),t._v(" "),n("za-panel-body",[n("za-cell",[n("za-button",{attrs:{slot:"description",size:"xs",theme:"error"},on:{click:function(e){t.visible1=!0}},slot:"description"},[t._v("开启")]),t._v("\n            错误提示\n          ")],1),t._v(" "),n("za-cell",[n("za-button",{attrs:{slot:"description",size:"xs",theme:"success"},on:{click:function(e){t.visible2=!0}},slot:"description"},[t._v("开启")]),t._v("\n            成功提示(close-on-click-modal)\n          ")],1),t._v(" "),n("za-cell",[n("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(e){t.visible3=!0}},slot:"description"},[t._v("开启")]),t._v("\n            指定关闭时间\n          ")],1)],1)],1),t._v(" "),n("za-panel",[n("za-panel-header",{attrs:{title:"加载中"}}),t._v(" "),n("za-panel-body",[n("za-cell",[n("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(e){t.visible4=!0}},slot:"description"},[t._v("开启")]),t._v("\n            Loading\n          ")],1)],1)],1)],1),t._v(" "),n("za-toast",{attrs:{visible:t.visible1},on:{"update:visible":function(e){t.visible1=e},close:t.toastClose}},[t._v("默认3秒自动关闭")]),t._v(" "),n("za-toast",{attrs:{visible:t.visible2,"close-on-click-modal":!0},on:{"update:visible":function(e){t.visible2=e},close:t.toastClose}},[n("div",{staticClass:"box"},[n("za-icon",{staticClass:"box-icon",attrs:{type:"right-round-fill"}}),t._v(" "),n("div",{staticClass:"box-text"},[t._v("预约成功")])],1)]),t._v(" "),n("za-toast",{attrs:{visible:t.visible3,duration:1e4},on:{"update:visible":function(e){t.visible3=e},close:t.toastClose}},[t._v("指定10秒自动关闭")]),t._v(" "),n("za-loading",{attrs:{visible:t.visible4},on:{"update:visible":function(e){t.visible4=e}}})],1),t._v(" "),n("PageFooter")],1)},staticRenderFns:[]}},317:function(t,e,n){var s=n(273);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(203)("6867d89a",s,!0)},370:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(138),o=s(i),a=n(140),l=s(a),r=n(139),c=s(r);n(317),e.default={components:{Container:o.default,PageHeader:l.default,PageFooter:c.default},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,isLoading:!1}},methods:{toastClose:function(t,e){}}}}});
//# sourceMappingURL=6.275aba94841e228a95bc.js.map