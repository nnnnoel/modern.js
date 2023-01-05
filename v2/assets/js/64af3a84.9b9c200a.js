"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9246],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(18249),a=(n(52983),n(44993));const l={sidebar_label:"state"},i="runtime.state",o={unversionedId:"configure/app/runtime/state",id:"configure/app/runtime/state",title:"runtime.state",description:"* \u7c7b\u578b\uff1aboolean | object",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/runtime/state.md",sourceDirName:"configure/app/runtime",slug:"/configure/app/runtime/state",permalink:"/v2/docs/configure/app/runtime/state",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"state"},sidebar:"configsAppSidebar",previous:{title:"router",permalink:"/v2/docs/configure/app/runtime/router"},next:{title:"baseUrl",permalink:"/v2/docs/configure/app/server/base-url"}},u={},p=[{value:"models",id:"models",level:2},{value:"initialState",id:"initialstate",level:2},{value:"immer",id:"immer",level:2},{value:"effects",id:"effects",level:2},{value:"autoActions",id:"autoactions",level:2},{value:"devtools",id:"devtools",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtimestate"},"runtime.state"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/quick-start"},"Model")," \u6765\u505a\u72b6\u6001\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"models"},"models"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Array<Model>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"\u6ce8\u518c\u63d0\u524d\u6302\u8f7d\u7684 model \u5bf9\u8c61\uff0c\u8fd9\u4e9b model \u4f1a\u5728 Reduck store \u521b\u5efa\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c\u6302\u8f7d\u3002\u4e00\u822c\u4f7f\u7528\u65e0\u9700\u63d0\u524d\u6302\u8f7d\u3002"),(0,a.kt)("h2",{id:"initialstate"},"initialState"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u5168\u5c40 store \u7684\u521d\u59cb\u72b6\u6001\u3002\u4e00\u822c\u7528\u4e8e SSR \u5728 hydration \u9636\u6bb5\u521d\u59cb\u5316\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"immer"},"immer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u4ee5 mutable \u66f4\u65b0 state \u7684\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"effects"},"effects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u526f\u4f5c\u7528\u7ba1\u7406\u7279\u6027\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"autoactions"},"autoActions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u81ea\u52a8\u751f\u6210 actions \u7279\u6027\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"devtools"},"devtools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | EnhancerOptions")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528 devtools\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u540c\u65f6\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md"},"redux-devtools-extension")," \u7684\u6240\u6709\u53c2\u6570\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"))}m.isMDXComponent=!0}}]);