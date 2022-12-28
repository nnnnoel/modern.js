"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7670],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(18249),a=(r(52983),r(44993));const o={sidebar_label:"withMasterApp"},i="dev.withMasterApp",p={unversionedId:"configure/app/dev/with-master-app",id:"configure/app/dev/with-master-app",title:"dev.withMasterApp",description:"* \u7c7b\u578b\uff1a Object",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/dev/with-master-app.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/with-master-app",permalink:"/v2/docs/configure/app/dev/with-master-app",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"withMasterApp"},sidebar:"configsAppSidebar",previous:{title:"startUrl",permalink:"/v2/docs/configure/app/dev/start-url"},next:{title:"microFrontend",permalink:"/v2/docs/configure/app/deploy/microFrontend"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devwithmasterapp"},"dev.withMasterApp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"null"))),(0,a.kt)("p",null,"\u5f53\u9879\u76ee\u4e3a\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"withMasterApp")," \u914d\u7f6e\u542f\u7528\u5b50\u5e94\u7528\u8c03\u8bd5\u6a21\u5f0f\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u5b50\u5e94\u7528\u8c03\u8bd5\u7684\u6a21\u5f0f\u65f6\uff0c\u5e94\u8be5\u5148\u786e\u4fdd\u4e3b\u5e94\u7528\u5f00\u542f\u4e86\u7ebf\u4e0a debug \u6a21\u5f0f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"export default defineConfig({\n  dev: {\n    withMasterApp: {\n      // \u4e3b\u5e94\u7528\u7684\u8def\u5f84\n      moduleApp: 'https://www.masterApp.com',\n      // \u5b50\u5e94\u7528\u7684\u540d\u79f0\n      moduleName: 'Contact'\n    }\n  }\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"moduleApp: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u4e3b\u5e94\u7528\u7684\u7ebf\u4e0a\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},"moduleName: ",(0,a.kt)("inlineCode",{parentName:"li"},"Contact")," \u5b50\u5e94\u7528\u7684\u540d\u79f0\uff08\u9700\u8981\u548c\u5728\u4e3b\u5e94\u7528\u4e2d\u6ce8\u518c\u7684\u6a21\u5757\u540d\u5339\u914d\uff09\u3002")))}s.isMDXComponent=!0}}]);