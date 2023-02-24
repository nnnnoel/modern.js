"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9594,1116],{57522:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?i.createElement(f,l(l({ref:n},u),{},{components:t})):i.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=t(18249),r=(t(29901),t(57522));const o={title:"plugins (\u63d2\u4ef6)",sidebar_position:9},l=void 0,a={unversionedId:"apis/app/config/plugins",id:"apis/app/config/plugins",title:"plugins (\u63d2\u4ef6)",description:"- \u7c7b\u578b\uff1a CliPlugin[] | { cli: CliPlugin[] }",source:"@site/docs/apis/app/config/plugins.md",sourceDirName:"apis/app/config",slug:"/apis/app/config/plugins",permalink:"/v1/docs/apis/app/config/plugins",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"plugins (\u63d2\u4ef6)",sidebar_position:9},sidebar:"apisAppSidebar",previous:{title:"transformer",permalink:"/v1/docs/apis/app/config/testing/transformer"},next:{title:"autoprefixer",permalink:"/v1/docs/apis/app/config/tools/autoprefixer"}},p={},s=[{value:"\u63d2\u4ef6\u7c7b\u578b",id:"\u63d2\u4ef6\u7c7b\u578b",level:2},{value:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f",id:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528 npm \u4e0a\u7684\u63d2\u4ef6",id:"\u4f7f\u7528-npm-\u4e0a\u7684\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528\u672c\u5730\u63d2\u4ef6",id:"\u4f7f\u7528\u672c\u5730\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e\u9879",id:"\u63d2\u4ef6\u914d\u7f6e\u9879",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"CliPlugin[] | { cli: CliPlugin[] }")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"[]"))),(0,r.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684 Modern.js \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u7f16\u5199\u65b9\u5f0f\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/framework-plugin/implement"},"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u7528\u4e8e\u914d\u7f6e\u6846\u67b6\u63d2\u4ef6\uff0c\u5982\u679c\u9700\u8981\u914d\u7f6e webpack \u63d2\u4ef6\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/tools/webpack"},"tools.webpack")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/tools/webpack-chain"},"tools.webpackChain"),"; \u9700\u8981\u914d\u7f6e babel \u63d2\u4ef6\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/tools/babel"},"tools.babel"),"\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u7c7b\u578b"},"\u63d2\u4ef6\u7c7b\u578b"),(0,r.kt)("p",null,"Modern.js \u4e2d\u5185\u7f6e\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u63d2\u4ef6\u673a\u5236\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLI \u63d2\u4ef6"),"\uff0c\u9002\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u3001\u7f16\u8bd1\u6784\u5efa\u9636\u6bb5\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u548c\u7f16\u8bd1\u9636\u6bb5\u6269\u5c55\u5404\u79cd\u80fd\u529b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Server \u63d2\u4ef6"),"\uff0c\u9002\u7528\u4e8e\u670d\u52a1\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Runtime \u63d2\u4ef6"),"\uff0c\u9002\u7528\u4e8e\u524d\u7aef\u8fd0\u884c\u65f6\u3002")),(0,r.kt)("p",null,"\u76ee\u524d Modern.js \u5f00\u653e\u4e86\u81ea\u5b9a\u4e49 CLI \u63d2\u4ef6\u7684\u80fd\u529b\uff0cServer \u63d2\u4ef6\u548c Runtime \u63d2\u4ef6\u4f1a\u5728\u540e\u7eed\u5f00\u653e\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f"},"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f1a\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," \u6570\u7ec4\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\uff0cModern.js \u5185\u7f6e\u63d2\u4ef6\u7684\u6267\u884c\u65f6\u673a\u65e9\u4e8e\u81ea\u5b9a\u4e49\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f53\u63d2\u4ef6\u5185\u90e8\u4f7f\u7528\u4e86\u63a7\u5236\u987a\u5e8f\u7684\u76f8\u5173\u5b57\u6bb5\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"pre"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u65f6\uff0c\u4f1a\u57fa\u4e8e\u58f0\u660e\u7684\u5b57\u6bb5\u5bf9\u6267\u884c\u987a\u5e8f\u8fdb\u884c\u8c03\u6574\uff0c\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/framework-plugin/relationship"},"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f CLI \u63d2\u4ef6\u7684\u4f7f\u7528\u793a\u4f8b\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-npm-\u4e0a\u7684\u63d2\u4ef6"},"\u4f7f\u7528 npm \u4e0a\u7684\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528 npm \u4e0a\u7684\u63d2\u4ef6\uff0c\u9700\u8981\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u63d2\u4ef6\uff0c\u5e76\u901a\u8fc7 import \u5f15\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [MyPlugin()],\n});\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u672c\u5730\u63d2\u4ef6"},"\u4f7f\u7528\u672c\u5730\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528\u672c\u5730\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u63d2\u4ef6\uff0c\u76f4\u63a5\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84 import \u5f15\u5165\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyPlugin from './config/plugin/MyPlugin';\n\nexport default defineConfig({\n  plugins: [MyPlugin()],\n});\n")),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e\u9879"},"\u63d2\u4ef6\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u5982\u679c\u63d2\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u51fd\u6570\u7684\u53c2\u6570\u4f20\u5165\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    MyPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n")))}c.isMDXComponent=!0},53640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=t(18249),r=(t(29901),t(57522)),o=t(71143);const l={title:"plugins (\u63d2\u4ef6)",sidebar_position:9},a=void 0,p={unversionedId:"apis/module/config/plugins",id:"apis/module/config/plugins",title:"plugins (\u63d2\u4ef6)",description:"",source:"@site/docs/apis/module/config/plugins.md",sourceDirName:"apis/module/config",slug:"/apis/module/config/plugins",permalink:"/v1/docs/apis/module/config/plugins",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"plugins (\u63d2\u4ef6)",sidebar_position:9},sidebar:"apisModuleSidebar",previous:{title:"transformer",permalink:"/v1/docs/apis/module/config/testing/transformer"},next:{title:"babel",permalink:"/v1/docs/apis/module/config/tools/babel"}},s={},u=[],c={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Info"}))}m.isMDXComponent=!0}}]);