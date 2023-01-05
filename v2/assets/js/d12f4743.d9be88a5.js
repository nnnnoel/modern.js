"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2052],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(18249),o=(n(52983),n(44993));const i={sidebar_position:4},a="\u4f7f\u7528 JS \u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668",c={unversionedId:"guides/topic-detail/generator/codesmith/run-in-js",id:"guides/topic-detail/generator/codesmith/run-in-js",title:"\u4f7f\u7528 JS \u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668",description:"\u9664\u4e86\u4f7f\u7528 cli \u7684\u65b9\u5f0f\u6267\u884c\u5fae\u751f\u6210\u5668\uff0c\u6211\u4eec\u514d\u4e0d\u4e86\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u6267\u884c\u5fae\u751f\u6210\u5668\uff0c\u4e0b\u9762\u5c31\u4ecb\u7ecd\u5728 js \u4ee3\u7801\u4e2d\u5982\u4f55\u6267\u884c\u5fae\u751f\u6210\u5668\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/run-in-js.md",sourceDirName:"guides/topic-detail/generator/codesmith",slug:"/guides/topic-detail/generator/codesmith/run-in-js",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/run-in-js",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u5f00\u53d1\u5fae\u751f\u6210\u5668\u9879\u76ee",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/develop"},next:{title:"@modern-js/codesmith-api-app",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/app"}},s={},p=[{value:"\u5b89\u88c5 codesmith \u4f9d\u8d56",id:"\u5b89\u88c5-codesmith-\u4f9d\u8d56",level:2},{value:"\u521b\u5efa codesmith \u5b9e\u4f8b",id:"\u521b\u5efa-codesmith-\u5b9e\u4f8b",level:2},{value:"\u8c03\u7528 forge \u65b9\u6cd5\u6267\u884c\u751f\u6210\u5668",id:"\u8c03\u7528-forge-\u65b9\u6cd5\u6267\u884c\u751f\u6210\u5668",level:2}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528-js-\u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668"},"\u4f7f\u7528 JS \u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668"),(0,o.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 cli \u7684\u65b9\u5f0f\u6267\u884c\u5fae\u751f\u6210\u5668\uff0c\u6211\u4eec\u514d\u4e0d\u4e86\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u6267\u884c\u5fae\u751f\u6210\u5668\uff0c\u4e0b\u9762\u5c31\u4ecb\u7ecd\u5728 js \u4ee3\u7801\u4e2d\u5982\u4f55\u6267\u884c\u5fae\u751f\u6210\u5668\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5-codesmith-\u4f9d\u8d56"},"\u5b89\u88c5 codesmith \u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @modern-js/codesmith\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-codesmith-\u5b9e\u4f8b"},"\u521b\u5efa codesmith \u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CodeSmith, Logger } from '@modern-js/codesmith';\n\nconst smith = new CodeSmith({\n   debug: false, // \u662f\u5426\u5f00\u542f debug \u6a21\u5f0f\uff0c\u4e3a true \u65f6\u4f1a\u5c55\u793a\u751f\u6210\u5668\u4e2d\u7684 debug \u4fe1\u606f\n});\n")),(0,o.kt)("h2",{id:"\u8c03\u7528-forge-\u65b9\u6cd5\u6267\u884c\u751f\u6210\u5668"},"\u8c03\u7528 forge \u65b9\u6cd5\u6267\u884c\u751f\u6210\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type RunnerTask = Array<{\n  name: string;\n  config: Record<string, any>;\n}>;\n\nconst task: RunnerTask = [\n  {\n    name: \"generator\", // \u751f\u6210\u5668 npm \u5305\u540d\u79f0\n    config: {}, // \u751f\u6210\u5668\u6267\u884c\u7684\u9ed8\u8ba4\u914d\u7f6e\n  },\n];\n\nawait smith.forge({\n  tasks: task.map(runner => ({\n    generator: runner.name,\n    config: runner.config,\n  })),\n  pwd: '.', // \u751f\u6210\u5668\u6267\u884c\u8def\u5f84\n});\n")))}l.isMDXComponent=!0}}]);