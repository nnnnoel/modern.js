"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1730],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const i={title:"tools.jest",sidebar_label:"jest"},a=void 0,l={unversionedId:"configure/app/tools/jest",id:"configure/app/tools/jest",title:"tools.jest",description:"* \u7c7b\u578b\uff1a Object | Function",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/jest.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/jest",permalink:"/v2/docs/configure/app/tools/jest",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.jest",sidebar_label:"jest"},sidebar:"configsAppSidebar",previous:{title:"inspector",permalink:"/v2/docs/configure/app/tools/inspector"},next:{title:"less",permalink:"/v2/docs/configure/app/tools/less"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"{}"))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5148\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u542f\u7528 \u5355\u5143\u6d4b\u8bd5 \u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u5bf9\u5e94 ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration"},"Jest")," \u7684\u914d\u7f6e\uff0c\u5f53\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u914d\u7f6e Jest \u6240\u652f\u6301\u7684\u6240\u6709\u5e95\u5c42\u914d\u7f6e \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"export default defineConfig({\n  tools: {\n    jest: {\n      testTimeout: 10000\n    }\n  }\n});\n")),(0,o.kt)("p",null,"\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u9700\u8981\u8fd4\u56de\u65b0\u7684 Jest \u914d\u7f6e\u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"export default defineConfig({\n  tools: {\n    jest: options => {\n      return {\n        ...options,\n        testTimeout: 10000\n      }\n    }\n  }\n});\n")))}u.isMDXComponent=!0}}]);