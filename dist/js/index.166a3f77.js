(function(e){function t(t){for(var n,r,c=t[0],l=t[1],o=t[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={index:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("c31f")},"1fa4":function(e,t,a){},"33b8":function(e,t,a){},"42b1":function(e,t,a){"use strict";var n=a("f381"),s=a.n(n);s.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="4678"},8373:function(e,t,a){"use strict";var n=a("1fa4"),s=a.n(n);s.a},c31f:function(e,t,a){"use strict";a.r(t);a("cd17");var n=a("ed3b"),s=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"title"},[e._v(" Demo ")]),a("div",{staticClass:"container"},[a("pre",[e._v(e._s(e.tree))]),a("json-schema-editor",{staticClass:"schema",attrs:{value:e.tree,disabledType:""}})],1)])},r=[],c={name:"App",data:function(){return{tree:{root:{type:"object"}}}}},l=c,o=(a("42b1"),a("2877")),d=Object(o["a"])(l,i,r,!1,null,null,null),u=d.exports,p=(a("d81d"),a("b0c0"),a("5530")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-schema-editor"},[a("a-row",{staticClass:"row",attrs:{gutter:10}},[a("a-col",{staticClass:"ant-col-name",attrs:{span:8}},[a("div",{staticClass:"ant-col-name-c",style:{marginLeft:20*e.deep+"px"}},["object"===e.pickValue.type?a("a-button",{staticStyle:{color:"rgba(0,0,0,.65)"},attrs:{type:"link",icon:e.hidden?"caret-right":"caret-down"},on:{click:function(t){e.hidden=!e.hidden}}}):a("span",{staticStyle:{width:"32px",display:"inline-block"}}),a("a-input",{staticClass:"ant-col-name-input",attrs:{disabled:e.disabled||e.root,value:e.pickKey},on:{blur:e.onInputName}})],1),e.root?a("a-tooltip",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("全选")]),a("a-checkbox",{staticClass:"ant-col-name-required",attrs:{disabled:!e.isObject&&!e.isArray},on:{change:e.onRootCheck}})],1):a("a-tooltip",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("是否必填")]),a("a-checkbox",{staticClass:"ant-col-name-required",attrs:{disabled:e.isItem,checked:e.checked},on:{change:e.onCheck}})],1)],1),a("a-col",{attrs:{span:4}},[a("a-select",{staticClass:"ant-col-type",attrs:{disabled:e.disabledType,getPopupContainer:function(t){return t.parentNode||e.document.body}},on:{change:e.onChangeType},model:{value:e.pickValue.type,callback:function(t){e.$set(e.pickValue,"type",t)},expression:"pickValue.type"}},e._l(e.TYPE_NAME,(function(t){return a("a-select-option",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-col",[a("a-input",{staticClass:"ant-col-title",attrs:{placeholder:"标题"},model:{value:e.pickValue.title,callback:function(t){e.$set(e.pickValue,"title",t)},expression:"pickValue.title"}})],1),a("a-col",{staticClass:"ant-col-setting",attrs:{span:6}},[a("a-tooltip",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("设置属性")]),a("a-button",{staticClass:"setting-icon",attrs:{type:"link",icon:"setting"},on:{click:e.onSetting}})],1),e.isObject?a("a-tooltip",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("添加子节点")]),a("a-button",{staticClass:"plus-icon",attrs:{type:"link",icon:"plus"},on:{click:e.addChild}})],1):e._e(),e.root||e.isItem?e._e():a("a-tooltip",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("删除节点")]),a("a-button",{staticClass:"close-icon ant-btn-icon-only",attrs:{type:"link"},on:{click:e.removeNode}},[a("i",{staticClass:"anticon anticon-plus",attrs:{"aria-label":"icon: plus"}},[a("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"plus",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"}},[a("path",{attrs:{d:"M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z","p-id":"1142"}})])])])],1)],1)],1),e.hidden||!e.pickValue.properties||e.isArray?e._e():e._l(e.pickValue.properties,(function(t,n,s){var i;return a("json-schema-editor",{key:s,staticClass:"children",attrs:{value:(i={},i[n]=t,i),parent:e.pickValue,deep:e.deep+1,root:!1}})})),e.isArray?[a("json-schema-editor",{staticClass:"children",attrs:{value:{items:e.pickValue.items},deep:e.deep+1,disabled:"",isItem:"",root:!1}})]:e._e(),a("a-modal",{attrs:{title:"高级设置",maskClosable:!1,okText:"确认",cancelText:"取消",width:"700px",dialogClass:"json-schema-editor-advanced-modal"},on:{ok:e.handleOk},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("h3",[e._v("基础设置")]),a("a-form-model",{attrs:{model:e.advancedValue,layout:"inline"}},e._l(e.advancedValue,(function(t,n){return a("a-form-model-item",{key:n,attrs:{label:e.advancedAttr[n].name}},["integer"===e.advancedAttr[n].type||"number"===e.advancedAttr[n].type?a("a-input-number",{model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}}):"boolean"===e.advancedAttr[n].type?a("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否"},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}}):"array"===e.advancedAttr[n].type?a("a-select",{staticStyle:{width:"120px"},attrs:{getPopupContainer:function(t){return t.parentNode||e.document.body}},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}},[a("a-select-option",{attrs:{value:""}},[e._v("无")]),e._l(e.advancedAttr[n].enums,(function(t){return a("a-select-option",{key:t},[e._v(" "+e._s(t)+" ")])}))],2):a("a-input",{attrs:{allowClear:""},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}})],1)})),1),a("h3",[e._v("预览")]),a("pre",{staticStyle:{width:"100%"}},[e._v(e._s(e.completeNodeValue))])],1)],2)},m=[],b=(a("99af"),a("4160"),a("c975"),a("a434"),a("a9e3"),a("b64b"),a("07ac"),a("159b"),a("fbd6"),a("160c")),h=(a("17ac"),a("ff57")),j=(a("9a33"),a("f933")),v=(a("2ef0"),a("9839")),y=(a("ee00"),a("bb76")),k=(a("922d"),a("09d9")),g=(a("5704"),a("b558")),V=(a("8fb1"),a("0c63")),x=(a("6ba6"),a("5efb")),_=(a("0032"),a("e32c")),C=(a("de6a"),a("9a63"));function O(e){return"undefined"===typeof e||(null==e||""==e)}var w={description:null,maxProperties:null,minProperties:null},A={description:{name:"描述",type:"string"},maxProperties:{name:"最大元素个数",type:"integer"},minProperties:{name:"最小元素个数",type:"integer"}},$={value:w,attr:A},z=$,q={description:null,maxLength:null,minLength:null,pattern:null,format:null},M={description:{name:"描述",type:"string"},maxLength:{name:"最大字符数",type:"integer"},minLength:{name:"最小字符数",type:"integer"},pattern:{name:"正则表达式",type:"string"},format:{name:"格式",type:"array",enums:["date","date-time","email","hostname","ipv4","ipv6","uri"]}},N={value:q,attr:M},I=N,P={description:null,minItems:null,maxItems:null,uniqueItems:!1},S={description:{name:"描述",type:"string"},maxItems:{name:"最大元素个数",type:"integer"},minItems:{name:"最小元素个数",type:"integer"},uniqueItems:{name:"元素不可重复",type:"boolean"}},T={value:P,attr:S},E=T,K={description:null},L={description:{name:"描述",type:"string"}},B={value:K,attr:L},D=B,F={description:null,maximum:null,minimum:null,exclusiveMaximum:null,exclusiveMinimum:null},J={description:{name:"描述",type:"string"},maximum:{name:"最大值",type:"integer"},minimum:{name:"最小值",type:"integer"},exclusiveMaximum:{name:"不包含最大值",type:"boolean"},exclusiveMinimum:{name:"不包含最小值",type:"boolean"}},R={value:F,attr:J},U=R,Y={description:null,maximum:null,minimum:null,exclusiveMaximum:null,exclusiveMinimum:null},G={description:{name:"描述",type:"string"},maximum:{name:"最大值",type:"number"},minimum:{name:"最小值",type:"number"},exclusiveMaximum:{name:"不包含最大值",type:"boolean"},exclusiveMinimum:{name:"不包含最小值",type:"boolean"}},H={value:Y,attr:G},Q=H,W=["string","number","integer","object","array","boolean"],X={object:z,string:I,array:E,boolean:D,integer:U,number:Q},Z={name:"JsonSchemaEditor",components:{ARow:C["a"],ACol:_["a"],AButton:x["a"],AIcon:V["a"],AInput:g["a"],AInputNumber:k["a"],ACheckbox:y["a"],ASelect:v["a"],ASelectOption:v["a"].Option,ATooltip:j["a"],AModal:n["a"],AFormModel:h["a"],AFormModelItem:h["a"].Item,ASwitch:b["a"]},props:{value:{type:Object,required:!0},disabled:{type:Boolean,default:!1},disabledType:{type:Boolean,default:!1},isItem:{type:Boolean,default:!1},deep:{type:Number,default:0},root:{type:Boolean,default:!0},parent:{type:Object,default:null}},computed:{pickValue:function(){return Object.values(this.value)[0]},pickKey:function(){return Object.keys(this.value)[0]},isObject:function(){return"object"===this.pickValue.type},isArray:function(){return"array"===this.pickValue.type},checked:function(){return this.parent&&this.parent.required&&this.parent.required.indexOf(this.pickKey)>=0},advanced:function(){return X[this.pickValue.type]},advancedAttr:function(){return X[this.pickValue.type].attr},advancedNotEmptyValue:function(){var e=Object.assign({},this.advancedValue);for(var t in e)O(e[t])&&delete e[t];return e},completeNodeValue:function(){return Object.assign({},this.pickValue,this.advancedNotEmptyValue)}},data:function(){return{TYPE_NAME:W,hidden:!1,countAdd:1,modalVisible:!1,advancedValue:{}}},methods:{onInputName:function(e){var t=e.target.value,a={};for(var n in this.parent.properties)n!=this.pickKey?a[n]=this.parent.properties[n]:(a[t]=this.parent.properties[n],delete this.parent.properties[n]);this.$set(this.parent,"properties",a)},onChangeType:function(){this.$delete(this.pickValue,"properties"),this.$delete(this.pickValue,"items"),this.$delete(this.pickValue,"required"),this.isArray&&this.$set(this.pickValue,"items",{type:"string"})},onCheck:function(e){this._checked(e.target.checked,this.parent)},onRootCheck:function(e){var t=e.target.checked;this._deepCheck(t,this.pickValue)},_deepCheck:function(e,t){var a=this;"object"===t.type&&t.properties?(e?this.$set(t,"required",Object.keys(t.properties)):this.$delete(t,"required"),Object.keys(t.properties).forEach((function(n){return a._deepCheck(e,t.properties[n])}))):"array"===t.type&&"object"===t.items.type&&(e?this.$set(t.items,"required",Object.keys(t.items.properties)):this.$delete(t.items,"required"),Object.keys(t.items.properties).forEach((function(n){return a._deepCheck(e,t.items.properties[n])})))},_checked:function(e,t){var a=t.required;if(e)a||this.$set(this.parent,"required",[]),a=this.parent.required,-1===a.indexOf(this.pickKey)&&a.push(this.pickKey);else{var n=a.indexOf(this.pickKey);n>=0&&a.splice(n,1)}0===a.length&&this.$delete(t,"required")},addChild:function(){var e=this._joinName(),t="string",a=this.pickValue;a.properties||this.$set(a,"properties",{});var n=a.properties;this.$set(n,e,{type:t})},removeNode:function(){var e=this.parent,t=e.properties,a=e.required;if(this.$delete(t,this.pickKey),a){var n=a.indexOf(this.pickKey);n>=0&&a.splice(n,1),0===a.length&&this.$delete(this.parent,"required")}},_joinName:function(){return"feild_".concat(this.deep,"_").concat(this.countAdd++)},onSetting:function(){this.modalVisible=!0,this.advancedValue=this.advanced.value},handleOk:function(){for(var e in this.modalVisible=!1,this.advancedValue)O(this.advancedValue[e])?this.$delete(this.pickValue,e):this.$set(this.pickValue,e,this.advancedValue[e])}}},ee=Z,te=(a("8373"),a("e5c8"),Object(o["a"])(ee,f,m,!1,null,"daac7130",null)),ae=te.exports;ae.install=function(e){e.component(ae.name,ae)};var ne=ae,se=[ne],ie=function e(t){e.installed||(e.installed=!0,se.map((function(e){t.component(e.name,e)})))};"undefined"!==typeof window&&window.Vue&&ie(window.Vue);var re=Object(p["a"])({install:ie},se);s["a"].config.productionTip=!1,s["a"].use(n["a"]),s["a"].use(re),new s["a"]({render:function(e){return e(u)}}).$mount("#app")},e5c8:function(e,t,a){"use strict";var n=a("33b8"),s=a.n(n);s.a},f381:function(e,t,a){}});