"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1954,6178,5756],{57522:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},48576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(18249),o=(r(29901),r(57522)),a=r(66993);const i={sidebar_position:10,title:"createStore"},s=void 0,l={unversionedId:"apis/app/runtime/model/create-store",id:"apis/app/runtime/model/create-store",title:"createStore",description:"createStore \u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Store \u5bf9\u8c61\u3002Reduck \u7684 Store \u57fa\u4e8e Redux \u7684 Store \u5b9e\u73b0\uff0c\u7528\u4e8e\u5b58\u50a8\u5e94\u7528\u7684\u72b6\u6001\uff0c\u540c\u65f6\u63d0\u4f9b\u4e00\u7ec4\u7528\u4e8e\u7ba1\u7406\u72b6\u6001\u548c Model \u7684\u65b9\u6cd5\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a API\uff0c\u53ea\u6709\u9700\u8981\u5b8c\u5168\u638c\u63a7 Store \u7684\u521b\u5efa\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u8fd9\u4e2a API\u3002\u4f8b\u5982\uff0c\u81ea\u5b9a\u4e49\u4e00\u4e2a Store\uff0c\u4f20\u5165 Provider \u7ec4\u4ef6\u4f7f\u7528\u3002",source:"@site/docs/apis/app/runtime/model/create-store.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/create-store",permalink:"/v1/docs/apis/app/runtime/model/create-store",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"createStore"},sidebar:"apisAppSidebar",previous:{title:"useStore",permalink:"/v1/docs/apis/app/runtime/model/use-store"},next:{title:"createApp",permalink:"/v1/docs/apis/app/runtime/model/create-app"}},p={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"ReduckTip"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createStore")," \u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Store \u5bf9\u8c61\u3002Reduck \u7684 Store \u57fa\u4e8e Redux \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"Store")," \u5b9e\u73b0\uff0c\u7528\u4e8e\u5b58\u50a8\u5e94\u7528\u7684\u72b6\u6001\uff0c\u540c\u65f6\u63d0\u4f9b\u4e00\u7ec4\u7528\u4e8e\u7ba1\u7406\u72b6\u6001\u548c Model \u7684\u65b9\u6cd5\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a API\uff0c\u53ea\u6709\u9700\u8981\u5b8c\u5168\u638c\u63a7 Store \u7684\u521b\u5efa\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u8fd9\u4e2a API\u3002\u4f8b\u5982\uff0c\u81ea\u5b9a\u4e49\u4e00\u4e2a Store\uff0c\u4f20\u5165 ",(0,o.kt)("a",{parentName:"p",href:"/v1/docs/apis/app/runtime/model/Provider"},(0,o.kt)("inlineCode",{parentName:"a"},"Provider"))," \u7ec4\u4ef6\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface StoreConfig {\n  initialState?: Record<string, any>;\n  middlewares?: Middleware[];\n  models?: Model[];\n  plugins?: Plugin[];\n  enhancers?: StoreEnhancer[];\n}\n\ninterface ReduckStore extends ReduxStore {\n  use: typeof useModel;\n  unmount: (model: Model) => void;\n}\n\nfunction createStore(config: StoreConfig): ReduckStore;\n")),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"config?\uff1astore \u914d\u7f6e\u9009\u9879",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"initialState?: \u8bbe\u7f6e\u5168\u5c40 Store \u7684\u521d\u59cb\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ul"},"models?: \u8bbe\u7f6e\u63d0\u524d\uff08Store \u521b\u5efa\u540e\uff09\u6302\u8f7d\u5230 Store \u7684 Model\u3002\uff08\u6b63\u5e38\u4f7f\u7528\u65e0\u9700\u63d0\u524d\u6302\u8f7d\uff09"),(0,o.kt)("li",{parentName:"ul"},"middlewares?: \u8bbe\u7f6e Redux ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware"},"\u4e2d\u95f4\u4ef6"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"enhancers?: \u8bbe\u7f6e Redux \u7684 ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer"},"Store enhancer")," \u3002"),(0,o.kt)("li",{parentName:"ul"},"plugins?: \u8bbe\u7f6e Reduck \u63d2\u4ef6\u3002",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"\u8bd5\u9a8c\u6027\u914d\u7f6e\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528")),"\u3002")))),(0,o.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("p",null,"Reduck Store \u5bf9\u8c61\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use\uff1a\u52a8\u6001\u6302\u8f7d\u548c\u83b7\u53d6 Model \u5bf9\u8c61\u3002\u7528\u6cd5\u4e0e ",(0,o.kt)("a",{parentName:"li",href:"/v1/docs/apis/app/runtime/model/use-model"},(0,o.kt)("inlineCode",{parentName:"a"},"useModel"))," \u76f8\u540c\uff0c\u4f46\u53ef\u4ee5\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"unmount\uff1a\u5378\u8f7d Model \u5bf9\u8c61\uff0cModel \u7684 State \u4f1a\u4ece Store \u4e2d\u6e05\u9664\u3002"),(0,o.kt)("li",{parentName:"ul"},"ReduxStore\uff1aRedux Store \u5bf9\u8c61\u5177\u6709\u7684\u65b9\u6cd5\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store"},"\u8be6\u89c1"),"\u3002")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const store = createStore();\n\nfunction load() {\n  const [, actions] = store.use(fooModel);\n\n  actions.load();\n}\n")))}c.isMDXComponent=!0},19937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(18249),o=(r(29901),r(57522)),a=r(48576);const i={sidebar_position:10,title:"createStore"},s=void 0,l={unversionedId:"apis/module/runtime/model/create-store",id:"apis/module/runtime/model/create-store",title:"createStore",description:"",source:"@site/docs/apis/module/runtime/model/create-store.md",sourceDirName:"apis/module/runtime/model",slug:"/apis/module/runtime/model/create-store",permalink:"/v1/docs/apis/module/runtime/model/create-store",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"createStore"},sidebar:"apisModuleSidebar",previous:{title:"useStore",permalink:"/v1/docs/apis/module/runtime/model/use-store"},next:{title:"createApp",permalink:"/v1/docs/apis/module/runtime/model/create-app"}},p={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"Info"}))}c.isMDXComponent=!0},66993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(18249),o=(r(29901),r(57522));const a={},i=void 0,s={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v1/docs/components/reduck-tip",tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002"))))}u.isMDXComponent=!0}}]);