"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[253],{57522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(29901);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(18249),i=(r(29901),r(57522));const a={title:"\u73af\u5883\u51c6\u5907"},o=void 0,s={unversionedId:"guides/tutorials/c01-getting-started/1.1-prerequisites",id:"guides/tutorials/c01-getting-started/1.1-prerequisites",title:"\u73af\u5883\u51c6\u5907",description:"\u4ece\u672c\u7ae0\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u8fdb\u5165\u5b9e\u6218\u6559\u7a0b\u90e8\u5206\u3002",source:"@site/docs/guides/tutorials/c01-getting-started/1.1-prerequisites.md",sourceDirName:"guides/tutorials/c01-getting-started",slug:"/guides/tutorials/c01-getting-started/1.1-prerequisites",permalink:"/docs/guides/tutorials/c01-getting-started/1.1-prerequisites",tags:[],version:"current",frontMatter:{title:"\u73af\u5883\u51c6\u5907"},sidebar:"guidesSidebar",previous:{title:"\u6982\u89c8",permalink:"/docs/guides/tutorials/overview"},next:{title:"\u521b\u5efa\u6700\u7b80\u5355\u7684\u5e94\u7528\u5de5\u7a0b",permalink:"/docs/guides/tutorials/c01-getting-started/1.2-minimal-mwa"}},p={},l=[{value:"1. Node.js",id:"1-nodejs",level:2},{value:"2. pnpm",id:"2-pnpm",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ece\u672c\u7ae0\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u8fdb\u5165\u5b9e\u6218\u6559\u7a0b\u90e8\u5206\u3002"),(0,i.kt)("p",null,"\u5728\u5b9e\u6218\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u4ece\u73af\u5883\u51c6\u5907\u5f00\u59cb\uff0c\u4ece\u7b80\u5355\u5230\u590d\u6742\uff0c\u4e00\u6b65\u4e00\u6b65\u642d\u5efa\u4e00\u4e2a\u771f\u5b9e\u7684\u9879\u76ee\u3002"),(0,i.kt)("p",null,"\u57fa\u4e8e Modern.js \u6846\u67b6\u7684\u9879\u76ee\uff0c\u81ea\u5e26\u5168\u5957\u5de5\u7a0b\u73af\u5883\u548c\u5de5\u7a0b\u80fd\u529b\uff0c\u662f ",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5305\u542b"),"\uff08self-contained\uff09\u7684\uff0c\u5bf9\u4ed3\u5e93\u76ee\u5f55\u4e4b\u5916\u7684\u73af\u5883\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56\uff0c\u53ea\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u5c11\u6570\u51e0\u4e2a\u6700\u57fa\u672c\u7684\u5de5\u5177\u3002"),(0,i.kt)("h2",{id:"1-nodejs"},"1. Node.js"),(0,i.kt)("p",null,"\u9700\u8981 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Node.js LTS"),"\uff0c\u5e76\u786e\u4fdd Node \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 14.17.6\u3002"),(0,i.kt)("p",null,"Modern.js \u63a8\u8350\u5728\u5f00\u53d1\u73af\u5883\u91cc\u5148\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm"),"\uff0c\u5728 shell \u91cc\u96c6\u6210",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#deeper-shell-integration"},"\u81ea\u52a8\u5207\u6362 node \u7248\u672c\u7684\u811a\u672c"),"\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u53ea\u8981\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b\u6709\u5185\u5bb9\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"lts/fermium")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"lts/erbium")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".nvmrc")," \u6587\u4ef6\uff0c\u8fdb\u5165\u8fd9\u4e2a\u4ed3\u5e93\u65f6\u5c31\u4f1a\u81ea\u52a8\u5b89\u88c5\u6216\u5207\u6362\u5230\u6b63\u786e\u7684 Node.js \u7248\u672c\u3002"),(0,i.kt)("h2",{id:"2-pnpm"},"2. pnpm"),(0,i.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"pnpm")," \u6765\u7ba1\u7406\u9879\u76ee\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pnpm\n")))}c.isMDXComponent=!0}}]);