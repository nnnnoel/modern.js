"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9319],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||p;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(18249),o=(r(52983),r(44993));const p={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"url")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"component")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"url"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," \u53ef\u4ee5\u7528\u6765\u914d\u7f6e SVG \u6587\u4ef6\u7684\u9ed8\u8ba4\u5bfc\u51fa\u3002"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," \u914d\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," \u65f6\uff0cSVG \u6587\u4ef6\u7684\u9ed8\u8ba4\u5bfc\u51fa\u662f\u6587\u4ef6\u7684 URL\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import logo from './logo.svg';\n\nconsole.log(logo); // => \u8d44\u6e90 url\n")),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," \u914d\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," \u65f6\uff0cSVG \u6587\u4ef6\u7684\u9ed8\u8ba4\u5bfc\u51fa\u662f\u6587\u4ef6\u7684 React \u7ec4\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Logo from './logo.svg';\n\nconsole.log(Logo); // => React \u7ec4\u4ef6\n")),(0,o.kt)("p",null,"\u6b64\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"?url")," \u7684 query \u6765\u5bfc\u5165 url\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import logo from './logo.svg?url';\n\nconsole.log(logo); // => \u8d44\u6e90 url\n")))}a.isMDXComponent=!0;const l={title:"output.svgDefaultExport",sidebar_label:"svgDefaultExport"},u=void 0,i={unversionedId:"configure/app/output/svg-default-export",id:"configure/app/output/svg-default-export",title:"output.svgDefaultExport",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.svgDefaultExport\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/svg-default-export.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/svg-default-export",permalink:"/v2/docs/configure/app/output/svg-default-export",draft:!1,tags:[],version:"current",frontMatter:{title:"output.svgDefaultExport",sidebar_label:"svgDefaultExport"},sidebar:"configsAppSidebar",previous:{title:"ssg",permalink:"/v2/docs/configure/app/output/ssg"},next:{title:"\u603b\u89c8",permalink:"/v2/docs/configure/app/runtime/intro"}},c={},s=[],f={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-svgdefaultexport"},"output.svgDefaultExport"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);