"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6882],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||p;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},67034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const p={title:"\u5347\u7ea7",sidebar_position:2},o=void 0,i={unversionedId:"guides/get-started/upgrade",id:"guides/get-started/upgrade",title:"\u5347\u7ea7",description:"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7",source:"@site/../../packages/toolkit/main-doc/zh/guides/get-started/upgrade.md",sourceDirName:"guides/get-started",slug:"/guides/get-started/upgrade",permalink:"/v2/en/docs/guides/get-started/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5347\u7ea7",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/v2/en/docs/guides/get-started/quick-start"},next:{title:"\u751f\u547d\u5468\u671f",permalink:"/v2/en/docs/guides/concept/lifecycle"}},l={},s=[{value:"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7",id:"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7",level:2},{value:"\u6307\u5b9a\u7248\u672c\u5347\u7ea7",id:"\u6307\u5b9a\u7248\u672c\u5347\u7ea7",level:2},{value:"\u9501\u5b9a\u5b50\u4f9d\u8d56",id:"\u9501\u5b9a\u5b50\u4f9d\u8d56",level:2},{value:"Pnpm",id:"pnpm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Npm",id:"npm",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7"},"\u901a\u8fc7\u547d\u4ee4\u884c\u5347\u7ea7"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade")," \u547d\u4ee4\u652f\u6301\u9879\u76ee\u5347\u7ea7\u5230\u6700\u65b0\u7684 Modern.js \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run upgrade"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [\u9879\u76ee\u7c7b\u578b]: \u5e94\u7528\n[INFO] [Modern.js \u6700\u65b0\u7248\u672c]: 2.0.0\n[INFO] [\u5f53\u524d\u9879\u76ee Modern.js \u4f9d\u8d56\u5df2\u7ecf\u4e3a\u6700\u65b0\u7248\u672c]: 2.0.0\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u4f9d\u8d56\u5df2\u7ecf\u66f4\u6539\u5230\u6700\u65b0\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u91cd\u65b0\u5b89\u88c5\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u6307\u5b9a\u7248\u672c\u5347\u7ea7"},"\u6307\u5b9a\u7248\u672c\u5347\u7ea7"),(0,a.kt)("p",null,"Modern.js \u6240\u6709\u7684\u5b98\u65b9\u5305\u76ee\u524d\u90fd\u4f7f\u7528\u7edf\u4e00\u7248\u672c\u53f7\u8fdb\u884c\u53d1\u5e03\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u5b98\u7f51 Release Note\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u624b\u52a8\u5c06\u9879\u76ee\u5347\u7ea7\u5230\u60f3\u8981\u7684\u7248\u672c\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u6240\u6709 Modern.js \u5b98\u65b9\u63d0\u4f9b\u7684\u5305\u505a\u7edf\u4e00\u5347\u7ea7\uff0c\u800c\u4e0d\u662f\u5347\u7ea7\u5355\u4e2a\u4f9d\u8d56\u3002")),(0,a.kt)("h2",{id:"\u9501\u5b9a\u5b50\u4f9d\u8d56"},"\u9501\u5b9a\u5b50\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5f53\u9879\u76ee\u67d0\u4e2a\u5b50\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\uff0c\u800c Modern.js \u65e0\u6cd5\u7acb\u5373\u66f4\u65b0\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u9501\u5b9a\u5b50\u4f9d\u8d56\u7248\u672c\u3002"),(0,a.kt)("h3",{id:"pnpm"},"Pnpm"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 Pnpm \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 Yarn \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn i"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("h3",{id:"npm"},"Npm"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 Npm \u7684\u9879\u76ee\uff0c\u8bf7\u5728",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e Monorepo \u4ed3\u5e93\uff0c\u53ea\u80fd\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u9501\u5b9a\u4f9d\u8d56\u7248\u672c\uff0c\u5e76\u4e14\u4f1a\u5f71\u54cd Monorepo \u4e2d\u7684\u6240\u6709 package\u3002")))}u.isMDXComponent=!0}}]);