"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7912],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:1},i="install",l={unversionedId:"apis/generator/plugin/npm/install",id:"apis/generator/plugin/npm/install",title:"install",description:"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5b89\u88c5\u4f9d\u8d56\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/generator/plugin/npm/install.md",sourceDirName:"apis/generator/plugin/npm",slug:"/apis/generator/plugin/npm/install",permalink:"/v2/en/docs/apis/generator/plugin/npm/install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisGeneratorSidebar",previous:{title:"createSubProject",permalink:"/v2/en/docs/apis/generator/plugin/new/createSubProject"},next:{title:"isInGitRepo",permalink:"/v2/en/docs/apis/generator/plugin/git/isInGitRepo"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install"},"install"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"install \u51fd\u6570\u4e2d\u5c06\u6839\u636e packageManager \u7684\u503c\u4f7f\u7528\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type AfterForgedAPI = {\n  install: () => Promise<void>;\n  ...\n};\n")))}u.isMDXComponent=!0}}]);