"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8875],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,g=s["".concat(p,".").concat(m)]||s[m]||l[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},15593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const a={sidebar_position:11,title:"Redux \u751f\u6001\u96c6\u6210"},i=void 0,d={unversionedId:"guides/topic-detail/model/redux-integration",id:"guides/topic-detail/model/redux-integration",title:"Redux \u751f\u6001\u96c6\u6210",description:"Reduck \u57fa\u4e8e Redux \u5b9e\u73b0\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 Redux \u751f\u6001\u7684\u5e93\uff0c\u5b9e\u73b0\u529f\u80fd\u589e\u5f3a\u3002\u901a\u8fc7 Provider \u3001createApp \u548c createStore \u7b49 API \uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4f7f\u7528 Redux \u7684 \u4e2d\u95f4\u4ef6 \u548c Store Enhancer\uff1b\u4f7f\u7528 createStore \u8fd8\u53ef\u4ee5\u5b8c\u5168\u638c\u63a7 Store \u7684\u521b\u5efa\u8fc7\u7a0b\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/model/redux-integration.md",sourceDirName:"guides/topic-detail/model",slug:"/guides/topic-detail/model/redux-integration",permalink:"/v2/en/docs/guides/topic-detail/model/redux-integration",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Redux \u751f\u6001\u96c6\u6210"},sidebar:"guidesSidebar",previous:{title:"TS \u6700\u4f73\u5b9e\u8df5",permalink:"/v2/en/docs/guides/topic-detail/model/typescript-best-practice"},next:{title:"\u5355\u72ec\u4f7f\u7528 Reduck",permalink:"/v2/en/docs/guides/topic-detail/model/use-out-of-modernjs"}},p={},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reduck \u57fa\u4e8e Redux \u5b9e\u73b0\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 Redux ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/ecosystem"},"\u751f\u6001\u7684\u5e93"),"\uff0c\u5b9e\u73b0\u529f\u80fd\u589e\u5f3a\u3002\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/Provider"},(0,o.kt)("inlineCode",{parentName:"a"},"Provider"))," \u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/create-app"},(0,o.kt)("inlineCode",{parentName:"a"},"createApp"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/create-store"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore"))," \u7b49 API \uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4f7f\u7528 Redux \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware"},"\u4e2d\u95f4\u4ef6")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer"},"Store Enhancer"),"\uff1b\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/create-store"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore"))," \u8fd8\u53ef\u4ee5\u5b8c\u5168\u638c\u63a7 Store \u7684\u521b\u5efa\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u5e0c\u671b\u4f7f\u7528\u4e2d\u95f4\u4ef6 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LogRocket/redux-logger"},(0,o.kt)("inlineCode",{parentName:"a"},"redux-logger")),"\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"ReactDOM.render(\n  <Provider config={{ middlewares: [logger] }}>  // \u901a\u8fc7 Provider \u7684 config \u53c2\u6570\u8bbe\u7f6e \u4e2d\u95f4\u4ef6\n    <App />\n  </Provider>,\n  document.getElementById('root')\n);\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Reduck \u57fa\u4e8e Redux \u5e95\u5c42 API \u505a\u4e86\u4e0a\u5c42\u5c01\u88c5\uff0c\u5c4f\u853d\u4e86 Redux \u7684\u4e00\u4e9b\u5e95\u5c42\u6982\u5ff5\uff0c\u5982 Reducer \u7b49\u3002Reduck \u5bf9\u4e8e Model \u662f\u52a8\u6001\u6302\u8f7d\u7684\uff0c\u800c Redux \u662f\u5728 Store \u521b\u5efa\u65f6\u5c31\u4f1a\u6302\u8f7d\u5e94\u7528\u6240\u9700\u7684\u5168\u90e8\u72b6\u6001\u3002\u57fa\u4e8e\u8fd9\u4e9b\u5b9e\u73b0\u4e0a\u7684\u5dee\u5f02\uff0c\u6709\u4e9b Redux \u751f\u6001\u7684\u5e93\u662f\u65e0\u6cd5\u76f4\u63a5\u5728 Reduck \u4e2d\u4f7f\u7528\u7684\u3002")))}l.isMDXComponent=!0}}]);