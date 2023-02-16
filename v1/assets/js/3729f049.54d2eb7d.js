"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2509],{57522:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(18249),o=(r(29901),r(57522));const a={sidebar_label:"disableTsChecker"},i="output.disableTsChecker",p={unversionedId:"apis/app/config/output/disable-ts-checker",id:"apis/app/config/output/disable-ts-checker",title:"output.disableTsChecker",description:"- \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/output/disable-ts-checker.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/disable-ts-checker",permalink:"/v1/docs/apis/app/config/output/disable-ts-checker",tags:[],version:"current",frontMatter:{sidebar_label:"disableTsChecker"},sidebar:"apisAppSidebar",previous:{title:"disableSourceMap",permalink:"/v1/docs/apis/app/config/output/disable-source-map"},next:{title:"enableCssModuleTSDeclaration",permalink:"/v1/docs/apis/app/config/output/enable-css-module-ts-declaration"}},c={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputdisabletschecker"},"output.disableTsChecker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin")," \u63d2\u4ef6\uff0c\u8fdb\u884c TypeScript \u8bed\u6cd5\u68c0\u67e5\u3002"),(0,o.kt)("p",null,"\u5f00\u542f\u6b64\u914d\u7f6e\u9879\u53ef\u4ee5\u5173\u95ed\u8be5\u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u751f\u4ea7\u73af\u5883\u7684\u4ee3\u7801\u5b89\u5168\uff0c\u5efa\u8bae\u4ec5\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u5f00\u542f\u6b64\u914d\u7f6e\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n});\n")))}u.isMDXComponent=!0}}]);