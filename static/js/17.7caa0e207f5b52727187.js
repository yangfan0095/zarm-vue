webpackJsonp([17],{213:function(e,n,t){var i=t(1)(t(355),t(282),null,null,null);e.exports=i.exports},232:function(e,n,t){n=e.exports=t(202)(!0),n.push([e.i,".badge-page .custom-panel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:25px;background:#fff}.badge-page .box-item{width:30px;height:30px;background:#ddd}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/BadgePage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,0BAEI,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,yBAA8B,AAA9B,sBAA8B,AAA9B,8BAA8B,AAC9B,aCLe,ADMf,eAAgB,CACjB,AANH,sBAUM,WCXa,ADYb,YCZa,ADab,eAAgB,CACjB",file:"BadgePage.scss",sourcesContent:['@import "../core/func";\n\n.badge-page {\n  .custom-panel {\n    display: flex;\n    justify-content: space-between;\n    padding: r(25);\n    background: #fff;\n  }\n\n  .box {\n    &-item {\n      width: r(30);\n      height: r(30);\n      background: #ddd;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},233:function(e,n,t){var i=t(232);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(203)("53e723a2",i,!0)},282:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Container",{staticClass:"modal-page"},[t("PageHeader",{attrs:{title:"模态框 Modal"}}),e._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",{attrs:{title:"基本"}}),e._v(" "),t("za-panel-body",[t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){e.visible1=!0}},slot:"description"},[e._v("开启")]),e._v("\n            普通\n          ")],1),e._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){e.visible2=!0}},slot:"description"},[e._v("开启")]),e._v("\n            圆角\n          ")],1),e._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){e.visible3=!0}},slot:"description"},[e._v("开启")]),e._v("\n            遮罩层可关闭\n          ")],1),e._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){e.visible4=!0}},slot:"description"},[e._v("开启")]),e._v("\n            无头部\n          ")],1),e._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){e.visible5=!0}},slot:"description"},[e._v("开启")]),e._v("\n            动画效果\n          ")],1)],1)],1),e._v(" "),t("za-panel",[t("za-panel-header",{attrs:{title:"特定场景"}}),e._v(" "),t("za-panel-body",[t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(n){e.visible6=!0}},slot:"description"},[e._v("开启")]),e._v("\n            警告框 Alert\n          ")],1),e._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(n){e.visible7=!0}},slot:"description"},[e._v("开启")]),e._v("\n            确认框 Confirm\n          ")],1)],1)],1)],1),e._v(" "),t("za-modal",{attrs:{visible:e.visible1,title:"标题",showClose:!0},on:{"update:visible":function(n){e.visible1=n},close:e.handleClose}},[e._v("\n      模态框内容\n    ")]),e._v(" "),t("za-modal",{attrs:{visible:e.visible2,radius:"",showClose:!0},on:{"update:visible":function(n){e.visible2=n},close:e.handleClose}},[t("div",{staticStyle:{textAlign:"left"},attrs:{slot:"title"},slot:"title"},[e._v("标题")]),e._v("\n      模态框内容\n    ")]),e._v(" "),t("za-modal",{attrs:{visible:e.visible3,"close-on-click-modal":!0,title:"标题",showClose:!0},on:{"update:visible":function(n){e.visible3=n},close:e.handleClose}},[e._v("\n      遮罩层可关闭\n    ")]),e._v(" "),t("za-modal",{attrs:{visible:e.visible4,closeOnClickModal:!0},on:{"update:visible":function(n){e.visible4=n},close:e.handleClose}},[e._v("\n      无头部\n    ")]),e._v(" "),t("za-modal",{attrs:{visible:e.visible5,animationType:"rotate",closeOnClickModal:!0,title:"标题",showClose:!0},on:{"update:visible":function(n){e.visible5=n},close:e.handleClose}},[e._v("\n      当前使用的是rotate旋转效果。"),t("br"),t("br"),e._v("\n      支持多种动画效果："),t("br"),e._v("\n      zoom：缩放效果（默认）"),t("br"),e._v("\n      rotate：旋转效果"),t("br"),e._v("\n      fade：淡出淡入效果"),t("br"),e._v("\n      door：开关门效果"),t("br"),e._v("\n      flip：翻转效果"),t("br"),e._v("\n      moveUp、moveDown、moveLeft、moveRight：移出移入效果"),t("br"),e._v("\n      slideUp、slideDown、slideLeft、slideRight：滑出滑入效果"),t("br")]),e._v(" "),t("za-alert",{attrs:{visible:e.visible6,radius:"",title:"警告",message:"这里是警告信息"},on:{"update:visible":function(n){e.visible6=n},close:e.handleClose}}),e._v(" "),t("za-confirm",{attrs:{visible:e.visible7,title:"确认信息",message:"你确定要这样做吗？",ok:e.handleOk,cancel:e.handleCancel}})],1),e._v(" "),t("PageFooter")],1)},staticRenderFns:[]}},355:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t(138),l=i(s),o=t(140),a=i(o),r=t(139),c=i(r);t(233),n.default={components:{Container:l.default,PageHeader:a.default,PageFooter:c.default},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,visible7:!1}},methods:{handleClose:function(e,n){},handleOk:function(){alert("ok")},handleCancel:function(){this.visible7=!1}}}}});
//# sourceMappingURL=17.7caa0e207f5b52727187.js.map