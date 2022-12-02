"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2597],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(18249),i=(n(52983),n(44993));const a={toc:[{value:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",id:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",level:4},{value:"\u63d2\u5165\u81f3 body \u6807\u7b7e",id:"\u63d2\u5165\u81f3-body-\u6807\u7b7e",level:4}]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"'head' | 'body'| 'true' | false")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'head'"))),(0,i.kt)("p",null,"\u4fee\u6539\u6784\u5efa\u4ea7\u7269\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," \u6807\u7b7e\u5728 HTML \u4e2d\u7684\u63d2\u5165\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u503c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'head'"),": script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 head \u6807\u7b7e\u5185\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'body'"),": script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 body \u6807\u7b7e\u5c3e\u90e8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true"),": \u6700\u7ec8\u8868\u73b0\u53d6\u51b3\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"html-webpack-plugin")," \u7684 scriptLoading \u914d\u7f6e\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),": script \u6807\u7b7e\u4e0d\u63d2\u5165 HTML \u4e2d\u3002")),(0,i.kt)("h4",{id:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e"},"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e"),(0,i.kt)("p",null,"script \u6807\u7b7e\u9ed8\u8ba4\u5728 head \u6807\u7b7e\u5185\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"><\/script>\n    <script defer src="/static/js/main.js"><\/script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n')),(0,i.kt)("h4",{id:"\u63d2\u5165\u81f3-body-\u6807\u7b7e"},"\u63d2\u5165\u81f3 body \u6807\u7b7e"),(0,i.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06 script \u63d2\u5165\u81f3 body \u6807\u7b7e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    inject: 'body',\n  },\n};\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 script \u6807\u7b7e\u751f\u6210\u5728 body \u6807\u7b7e\u5c3e\u90e8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"><\/script>\n    <script defer src="/static/js/main.js"><\/script>\n  </body>\n</html>\n')))}l.isMDXComponent=!0;const o={title:"html.inject",sidebar_label:"inject"},c=void 0,p={unversionedId:"configure/app/html/inject",id:"configure/app/html/inject",title:"html.inject",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.inject\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/inject.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/inject",permalink:"/v2/docs/configure/app/html/inject",draft:!1,tags:[],version:"current",frontMatter:{title:"html.inject",sidebar_label:"inject"},sidebar:"configsAppSidebar",previous:{title:"injectByEntries",permalink:"/v2/docs/configure/app/html/inject-by-entries"},next:{title:"metaByEntries",permalink:"/v2/docs/configure/app/html/meta-by-entries"}},s={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-inject"},"html.inject"),"\u3002")),(0,i.kt)(l,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);