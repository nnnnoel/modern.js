"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4772,2899],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.createContext({}),c=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=c(t),u=a,k=l["".concat(m,".").concat(u)]||l[u]||d[u]||r;return t?o.createElement(k,p(p({ref:n},s),{},{components:t})):o.createElement(k,p({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<r;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var o=t(18249),a=(t(52983),t(44993)),r=t(66740);const p={sidebar_position:6},i=void 0,m={unversionedId:"apis/monorepo/commands/lint",id:"apis/monorepo/commands/lint",title:"lint",description:"\u8fd0\u884c ESLint \u68c0\u67e5 monorepo \u4e2d\u4ee3\u7801\u8bed\u6cd5\u60c5\u51b5\uff0c \u901a\u957f\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 git commit \u9636\u6bb5\u901a\u8fc7 lint-staged \u68c0\u67e5\u672c\u6b21\u63d0\u4ea4\u4fee\u6539\u7684\u90e8\u5206\u4ee3\u7801\u3002",source:"@site/docs/apis/monorepo/commands/lint.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/lint",permalink:"/v2/docs/apis/monorepo/commands/lint",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apisMonorepoSidebar",previous:{title:"release",permalink:"/v2/docs/apis/monorepo/commands/release"},next:{title:"deploy",permalink:"/v2/docs/apis/monorepo/commands/deploy"}},c={},s=[],d={toc:s};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern lint [options] [...files]\n\nlint and fix source files\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n")),(0,a.kt)(r.default,{mdxType:"CommandTip"}),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u68c0\u67e5 monorepo \u4e2d\u4ee3\u7801\u8bed\u6cd5\u60c5\u51b5\uff0c \u901a\u957f\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," \u9636\u6bb5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," \u68c0\u67e5\u672c\u6b21\u63d0\u4ea4\u4fee\u6539\u7684\u90e8\u5206\u4ee3\u7801\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--no-fix")," \u53c2\u6570\u8bbe\u7f6e\u540e\u53ef\u4ee5\u5173\u95ed\u81ea\u52a8\u4fee\u590d lint \u9519\u8bef\u4ee3\u7801\u7684\u80fd\u529b\u3002")))}l.isMDXComponent=!0},66740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(18249),a=(t(52983),t(44993));const r={},p=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},m={},c=[],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,a.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);