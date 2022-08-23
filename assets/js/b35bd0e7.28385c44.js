"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[28647],{54852:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(86215),o=(t(49231),t(54852));const i={sidebar_position:1},a="\u7b80\u4ecb",p={unversionedId:"guides/features/monorepo/intro",id:"guides/features/monorepo/intro",title:"\u7b80\u4ecb",description:"Modern.js \u63d0\u4f9b\u4e86\u5bf9\u4e8e Monorepo \u5de5\u7a0b\u65b9\u6848\u7684\u652f\u6301\uff0c\u5176\u4e3b\u8981\u901a\u8fc7 @modern-js/monorepo-tools \u6765\u63d0\u4f9b\u529f\u80fd\u3002",source:"@site/docs/guides/features/monorepo/intro.md",sourceDirName:"guides/features/monorepo",slug:"/guides/features/monorepo/intro",permalink:"/docs/guides/features/monorepo/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u6d4b\u8bd5\u53ef\u590d\u7528\u6a21\u5757",permalink:"/docs/guides/features/modules/test"},next:{title:"\u521b\u5efa\u5b50\u9879\u76ee",permalink:"/docs/guides/features/monorepo/create-sub-project"}},s={},u=[],l={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5bf9\u4e8e Monorepo \u5de5\u7a0b\u65b9\u6848\u7684\u652f\u6301\uff0c\u5176\u4e3b\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/monorepo-tools")," \u6765\u63d0\u4f9b\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8be5\u4e13\u9898\u5c06\u4ece\u4ee5\u4e0b\u65b9\u9762\u6765\u8bb2\u89e3\u5982\u4f55\u4f7f\u7528 Modern.js \u5bf9 Monorepo \u8fdb\u884c\u7ba1\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 Monorepo \u4e2d\u521b\u5efa\u5b50\u9879\u76ee"),(0,o.kt)("li",{parentName:"ul"},"Monorepo \u4e0b\u5b50\u9879\u76ee\u4e4b\u95f4\u7684\u8054\u8c03\u5f00\u53d1"),(0,o.kt)("li",{parentName:"ul"},"\u53d1\u5e03 Monorepo \u7684\u5b50\u9879\u76ee"),(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72 Monorepo \u5b50\u9879\u76ee")))}c.isMDXComponent=!0}}]);