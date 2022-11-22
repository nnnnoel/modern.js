"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1431],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const i={title:"**/_*.[tj]s, _*/**",sidebar_position:2},a=void 0,p={unversionedId:"apis/app/hooks/api/functions/common",id:"apis/app/hooks/api/functions/common",title:"**/_*.[tj]s, _*/**",description:"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8fd9\u4e9b\u6587\u4ef6\u4e0d\u4f1a\u6ce8\u518c\u4e3a\u8def\u7531\uff1b\u4f60\u53ef\u4ee5\u5728\u8fd9\u79cd\u76ee\u5f55\u6216\u6587\u4ef6\u4e0b\u653e\u4efb\u610f\u9879\u76ee\u4e2d\u9700\u8981\u7684\u4ee3\u7801\uff0c\u6587\u4ef6\u7b49\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/hooks/api/functions/common.md",sourceDirName:"apis/app/hooks/api/functions",slug:"/apis/app/hooks/api/functions/common",permalink:"/v2/en/docs/apis/app/hooks/api/functions/common",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"**/_*.[tj]s, _*/**",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"**/*.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/functions/api"},next:{title:"_app.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/functions/app"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8fd9\u4e9b\u6587\u4ef6\u4e0d\u4f1a\u6ce8\u518c\u4e3a\u8def\u7531\uff1b\u4f60\u53ef\u4ee5\u5728\u8fd9\u79cd\u76ee\u5f55\u6216\u6587\u4ef6\u4e0b\u653e\u4efb\u610f\u9879\u76ee\u4e2d\u9700\u8981\u7684\u4ee3\u7801\uff0c\u6587\u4ef6\u7b49\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," \u76ee\u5f55\u7684\u5f00\u542f BFF \u529f\u80fd\uff0c\u9700\u8981\u5728\u9879\u76ee\u4e0b\u6267\u884c new \u547d\u4ee4\u542f\u7528\u300cBFF\u300d\u529f\u80fd\u3002")))}u.isMDXComponent=!0}}]);