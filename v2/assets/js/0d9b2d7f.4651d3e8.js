"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1055],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,g=s["".concat(l,".").concat(f)]||s[f]||c[f]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:2},o="addInputBefore",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/addInputBefore",id:"guides/topic-detail/generator/plugin/api/input/addInputBefore",title:"addInputBefore",description:"\u5728\u9ed8\u8ba4\u8f93\u5165\u524d\u6dfb\u52a0\u8f93\u5165\u95ee\u9898\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/addInputBefore.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/addInputBefore",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputBefore",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/type"},next:{title:"addInputAfter",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputAfter"}},l={},u=[{value:"key",id:"key",level:2},{value:"input",id:"input",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addinputbefore"},"addInputBefore"),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u8f93\u5165\u524d\u6dfb\u52a0\u8f93\u5165\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  addInputBefore: (key: string, input: Schema) => void;\n  ...\n}\n")),(0,a.kt)("h2",{id:"key"},"key"),(0,a.kt)("p",null,"Modern.js \u5de5\u7a0b\u65b9\u6848\u7684\u914d\u7f6e\u7684\u95ee\u9898\u5173\u952e\u5b57\uff0c\u5177\u4f53\u914d\u7f6e\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common"},"\u751f\u6210\u5668\u914d\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"input"},"input"),(0,a.kt)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u95ee\u9898\uff0c\u5177\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u5728\u5305\u7ba1\u7406\u5de5\u5177\u540e\u9762\u6dfb\u52a0\u8f93\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '\u5f00\u53d1\u8bed\u8a00',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n})\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u95ee\u9898\u7684 key \u4e0d\u80fd\u548c Modern.js \u63d0\u4f9b\u7684\u9879\u76ee\u7c7b\u578b\u81ea\u8eab\u7684\u95ee\u9898\u7684 key \u91cd\u590d")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u95ee\u9898 ",(0,a.kt)("inlineCode",{parentName:"p"},"addInputAfter")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"addInputBefore"),"\uff0c\u5f53\u540c\u65f6\u5bf9\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u6dfb\u52a0 After \u95ee\u9898\u548c\u5bf9\u5176\u540e\u4e00\u4e2akey \u6dfb\u52a0 Before \u95ee\u9898\u65f6\uff0cAfter \u95ee\u9898\u4f1a\u5728 Before \u4e4b\u524d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u5728\u76f8\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u524d\u9762\u6216\u8005\u540e\u9762\u6dfb\u52a0\u591a\u4e2a\u95ee\u9898\u65f6\uff0c\u53ef\u591a\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u95ee\u9898\u7684\u987a\u5e8f\u4f1a\u6309\u7167\u8c03\u7528\u987a\u5e8f\u8fdb\u884c\u6392\u5217\u3002")))))}c.isMDXComponent=!0}}]);