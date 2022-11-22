"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3372],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(18249),r=(n(29901),n(57522));const s={sidebar_label:"disableAssetsCache"},i="output.disableAssetsCache",o={unversionedId:"apis/app/config/output/disable-assets-cache",id:"apis/app/config/output/disable-assets-cache",title:"output.disableAssetsCache",description:"* \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/output/disable-assets-cache.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/disable-assets-cache",permalink:"/docs/apis/app/config/output/disable-assets-cache",tags:[],version:"current",frontMatter:{sidebar_label:"disableAssetsCache"},sidebar:"apisAppSidebar",previous:{title:"dataUriLimit",permalink:"/docs/apis/app/config/output/data-uri-limit"},next:{title:"disableCssExtract",permalink:"/docs/apis/app/config/output/disable-css-extract"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outputdisableassetscache"},"output.disableAssetsCache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u751f\u4ea7\u73af\u5883\u6784\u5efa\u4ea7\u7269\u4f1a\u5e26\u6709 hash \u540e\u7f00\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  File                                     Size         Gzipped\n  dist/static/css/187.7879e19d.css         126.99 KB    9.17 KB\n  dist/static/js/runtime-main.0932c84c.js    6.52 KB      1.66 KB\n  dist/static/js/main.18a568e5.js            2.24 KB      922 B\n")),(0,r.kt)("p",null,"\u7981\u7528\u9759\u6001\u8d44\u6e90\u8f93\u51fa\u540d\u5e26 hash \u540e\u7f00, \u914d\u7f6e\u5982\u4e0b\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    disableAssetsCache: true,\n  },\n});\n")),(0,r.kt)("p",null,"\u6784\u5efa\u4ea7\u7269\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  File                            Size         Gzipped\n  dist/static/css/187.css         126.99 KB    9.17 KB\n  dist/static/js/runtime-main.js    6.52 KB      1.66 KB\n  dist/static/js/main.js            2.24 KB      922 B\n")))}u.isMDXComponent=!0}}]);