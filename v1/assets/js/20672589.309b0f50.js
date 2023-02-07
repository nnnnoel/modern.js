"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2081],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(29901);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(18249),i=(n(29901),n(57522));const r={sidebar_position:3},l="lifecycleService",o={unversionedId:"apis/app/runtime/electron/main-process/lifecycle-service",id:"apis/app/runtime/electron/main-process/lifecycle-service",title:"lifecycleService",description:"* \u5e94\u7528\u7ba1\u7406\u670d\u52a1\u3002",source:"@site/docs/apis/app/runtime/electron/main-process/lifecycle-service.md",sourceDirName:"apis/app/runtime/electron/main-process",slug:"/apis/app/runtime/electron/main-process/lifecycle-service",permalink:"/v1/docs/apis/app/runtime/electron/main-process/lifecycle-service",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisAppSidebar",previous:{title:"updateService",permalink:"/v1/docs/apis/app/runtime/electron/main-process/update-service"},next:{title:"WindowConfig",permalink:"/v1/docs/apis/app/runtime/electron/main-process/window-config"}},p={},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"quit",id:"quit",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"kill",id:"kill",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"relaunch",id:"relaunch",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lifecycleservice"},"lifecycleService"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7ba1\u7406\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E4%B8%BB%E8%BF%9B%E7%A8%8B"},"\u4e3b\u8fdb\u7a0b"),"\u3002")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { lifecycleService } from '@modern-js/runtime/electron-main';\n")))),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"quit"},"quit"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleService.quit()")),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u9000\u51fa\u6210\u529f\u4e0e\u5426\u3002")),(0,i.kt)("p",null,"\u9000\u51fa\u5e94\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6700\u7ec8\u4f1a\u8c03\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"app.quit()"),"\u3002"))),(0,i.kt)("h3",{id:"kill"},"kill"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleService.kill([code])")),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[code]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u9000\u51fa code\u3002")),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,i.kt)("p",null,"\u9000\u51fa\u5e94\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6700\u7ec8\u8c03\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"app.exit(code)"),"\uff0c\u8be6\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.electronjs.orgdocs/apis/app#appexitexitcode"},"electron#app#exit"),"\u3002"))),(0,i.kt)("h3",{id:"relaunch"},"relaunch"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleService.relaunch([options])")),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"IRelaunchOptions"),"\uff0c \u91cd\u542f\u9009\u9879\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[addArgs]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u91cd\u542f\u65f6\u589e\u52a0\u4e00\u4e9b\u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"[removeArgs]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u91cd\u542f\u65f6\u79fb\u9664\u4e00\u4e9b\u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"[forceQuit]","\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u91cd\u542f\u65f6\u662f\u5426\u5f3a\u5236\u9000\u51fa\uff0c\u5ffd\u7565\u6240\u6709\u56de\u8c03\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,i.kt)("p",null,"\u91cd\u542f\u5e94\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u8c03\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"app.relaunch({ args })"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1aaddArgs\u3001removeArgs \u5747\u8868\u793a\u4ece process.argv \u4e2d\u83b7\u53d6\u5f53\u524d\u542f\u52a8\u53c2\u6570\u540e\uff0c\u5411\u5176\u4e2d\u6dfb\u52a0\u6216\u51cf\u5c11\u53c2\u6570\uff0c\u518d\u8fdb\u884c\u91cd\u542f\u3002")))))}m.isMDXComponent=!0}}]);