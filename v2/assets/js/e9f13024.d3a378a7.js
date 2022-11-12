"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2274],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(52983);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(18249),i=(r(52983),r(44993));const o={sidebar_label:"router",sidebar_position:1},a="runtime.router",p={unversionedId:"configure/app/runtime/router",id:"configure/app/runtime/router",title:"runtime.router",description:"* \u7c7b\u578b\uff1a Object",source:"@site/docs/configure/app/runtime/router.md",sourceDirName:"configure/app/runtime",slug:"/configure/app/runtime/router",permalink:"/v2/docs/configure/app/runtime/router",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"router",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"title",permalink:"/v2/docs/configure/app/output/title"},next:{title:"state",permalink:"/v2/docs/configure/app/runtime/state"}},u={},s=[{value:"supportHtml5History",id:"supporthtml5history",level:3},{value:"historyOptions",id:"historyoptions",level:3}],l={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runtimerouter"},"runtime.router"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a \u9ed8\u8ba4\u4f1a\u6839\u636e\u5f53\u524d\u5165\u53e3\u8bbf\u95ee\u8def\u7531\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"historyOptions.basename"),"\u3002")),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BrowserHistoryBuildOptions {\n    basename?: string | undefined;\n    forceRefresh?: boolean | undefined;\n    getUserConfirmation?: typeof getConfirmation | undefined;\n    keyLength?: number | undefined;\n}\n\nexport interface HashHistoryBuildOptions {\n    basename?: string | undefined;\n    hashType?: HashType | undefined;\n    getUserConfirmation?: typeof getConfirmation | undefined;\n}\n\nexport type RouterConfig =  {\n      supportHtml5History: true;\n      historyOptions: BrowserHistoryBuildOptions;\n   }\n  | {\n      supportHtml5History: false;\n      historyOptions: HashHistoryBuildOptions;\n    }\n"))),(0,i.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u9009\u9879\u89e3\u91ca\u5982\u4e0b:"),(0,i.kt)("h3",{id:"supporthtml5history"},"supportHtml5History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("p",null,"\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," \u5426\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"HashRouter"),"\u3002"),(0,i.kt)("h3",{id:"historyoptions"},"historyOptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"BrowserHistoryBuildOptions | HashHistoryBuildOptions")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a \u9ed8\u8ba4\u4f1a\u6839\u636e\u5f53\u524d\u5165\u53e3\u8def\u7531\u8bbe\u7f6e basename\u3002")),(0,i.kt)("p",null,"historyOptions \u5177\u4f53\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/remix-run/history/blob/v4/docs/Misc.md"},"history")))}c.isMDXComponent=!0}}]);