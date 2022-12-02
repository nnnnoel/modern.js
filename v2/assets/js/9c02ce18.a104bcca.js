"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2434],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const l={title:"\u670d\u52a1\u7aef\u6e32\u67d3\uff08SSR\uff09",sidebar_position:3},o=void 0,p={unversionedId:"guides/advanced-features/ssr",id:"guides/advanced-features/ssr",title:"\u670d\u52a1\u7aef\u6e32\u67d3\uff08SSR\uff09",description:"\u5728 Modern.js \u4e2d\uff0cSSR \u4e5f\u662f\u5f00\u7bb1\u5373\u7528\u7684\u3002\u5f00\u53d1\u8005\u65e0\u9700\u4e3a SSR \u7f16\u5199\u590d\u6742\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4e5f\u65e0\u9700\u5173\u5fc3 SSR \u7684\u8fd0\u7ef4\uff0c\u6216\u662f\u521b\u5efa\u5355\u72ec\u7684\u670d\u52a1\u3002Modern.js \u62e5\u6709\u5b8c\u5907\u7684 SSR \u964d\u7ea7\u7b56\u7565\uff0c\u4fdd\u8bc1\u9875\u9762\u80fd\u591f\u5b89\u5168\u8fd0\u884c\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/ssr.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/ssr",permalink:"/v2/docs/guides/advanced-features/ssr",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u670d\u52a1\u7aef\u6e32\u67d3\uff08SSR\uff09",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Web Server",permalink:"/v2/docs/guides/advanced-features/web-server"},next:{title:"\u9759\u6001\u7ad9\u70b9\u751f\u6210\uff08SSG\uff09",permalink:"/v2/docs/guides/advanced-features/ssg"}},i={},s=[{value:"SSR \u65f6\u7684\u6570\u636e\u83b7\u53d6",id:"ssr-\u65f6\u7684\u6570\u636e\u83b7\u53d6",level:2},{value:"\u4fdd\u6301\u6e32\u67d3\u4e00\u81f4",id:"\u4fdd\u6301\u6e32\u67d3\u4e00\u81f4",level:2},{value:"\u5173\u6ce8\u5185\u5b58\u6cc4\u6f0f",id:"\u5173\u6ce8\u5185\u5b58\u6cc4\u6f0f",level:2},{value:"\u6536\u655b\u670d\u52a1\u7aef\u6570\u636e",id:"\u6536\u655b\u670d\u52a1\u7aef\u6570\u636e",level:2},{value:"Serverless Pre-render",id:"serverless-pre-render",level:2},{value:"Treeshaking",id:"treeshaking",level:2},{value:"\u73af\u5883\u53d8\u91cf\u533a\u5206",id:"\u73af\u5883\u53d8\u91cf\u533a\u5206",level:3},{value:"\u6587\u4ef6\u540e\u7f00\u533a\u5206",id:"\u6587\u4ef6\u540e\u7f00\u533a\u5206",level:3},{value:"\u72ec\u7acb\u6587\u4ef6",id:"\u72ec\u7acb\u6587\u4ef6",level:3},{value:"\u63a5\u53e3\u8bf7\u6c42",id:"\u63a5\u53e3\u8bf7\u6c42",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0cSSR \u4e5f\u662f\u5f00\u7bb1\u5373\u7528\u7684\u3002\u5f00\u53d1\u8005\u65e0\u9700\u4e3a SSR \u7f16\u5199\u590d\u6742\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4e5f\u65e0\u9700\u5173\u5fc3 SSR \u7684\u8fd0\u7ef4\uff0c\u6216\u662f\u521b\u5efa\u5355\u72ec\u7684\u670d\u52a1\u3002Modern.js \u62e5\u6709\u5b8c\u5907\u7684 SSR \u964d\u7ea7\u7b56\u7565\uff0c\u4fdd\u8bc1\u9875\u9762\u80fd\u591f\u5b89\u5168\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u542f\u7528 SSR \u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/server/ssr"},(0,a.kt)("inlineCode",{parentName:"a"},"server.ssr"))," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "server": {\n    "ssr": true\n  }\n}\n')),(0,a.kt)("h2",{id:"ssr-\u65f6\u7684\u6570\u636e\u83b7\u53d6"},"SSR \u65f6\u7684\u6570\u636e\u83b7\u53d6"),(0,a.kt)("p",null,"Modern.js \u4e2d\u63d0\u4f9b\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-loader"},(0,a.kt)("inlineCode",{parentName:"a"},"useLoader"))," Hooks API\uff0c\u7528\u4e8e\u5728 SSR \u73af\u5883\u4e0b\u540c\u6784\u7684\u83b7\u53d6\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { data, loading, error } = useLoader(() => {\n  return loadData()\n});\n")),(0,a.kt)("p",null,"Modern.js \u6253\u7834\u4f20\u7edf\u7684 SSR \u5f00\u53d1\u6a21\u5f0f\uff0c\u63d0\u4f9b\u4e86\u7528\u6237\u65e0\u611f\u7684 SSR \u5f00\u53d1\u4f53\u9a8c\u3002\u5e76\u4e14\u63d0\u4f9b\u4e86\u4f18\u96c5\u7684\u964d\u7ea7\u5904\u7406\uff0c\u4e00\u65e6 SSR \u8bf7\u6c42\u5931\u8d25\uff0c\u4f1a\u81ea\u52a8\u964d\u7ea7\u5728\u6d4f\u89c8\u5668\u7aef\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5f00\u53d1\u8005\u4ecd\u7136\u9700\u8981\u5173\u6ce8\u6570\u636e\u7684\u515c\u5e95\u5904\u7406\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u503c\u6216\u4e0d\u7b26\u5408\u9884\u671f\u7684\u6570\u636e\u8fd4\u56de\u3002\u907f\u514d\u5728 SSR \u65f6\u4ea7\u751f React \u6e32\u67d3\u9519\u8bef\u6216\u662f\u8fd4\u56de\u51cc\u4e71\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/data-fetch"},"\u6570\u636e\u83b7\u53d6"),"\u3002")),(0,a.kt)("h2",{id:"\u4fdd\u6301\u6e32\u67d3\u4e00\u81f4"},"\u4fdd\u6301\u6e32\u67d3\u4e00\u81f4"),(0,a.kt)("p",null,"\u6709\u4e9b\u4e1a\u52a1\u4e2d\uff0c\u901a\u5e38\u9700\u8981\u6839\u636e\u5f53\u524d\u7684\u8fd0\u884c\u5bb9\u5668\u73af\u5883\u7279\u5f81\u505a\u4e0d\u540c\u7684 UI \u5c55\u793a\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"UA")," \u4fe1\u606f\u3002\u5982\u679c\u5904\u7406\u4e0d\u591f\u4ed4\u7ec6\uff0c\u6b64\u65f6\u5f88\u6709\u53ef\u80fd\u51fa\u73b0\u4e0d\u7b26\u5408\u9884\u671f\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6f14\u793a\u5f53 SSR \u4e0e CSR \u6e32\u67d3\u4e0d\u4e00\u81f4\u65f6\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u5728\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  typeof window !== 'undefined' ? (\n    <div>\n      browser content\n    </div>\n  ) : null;\n}\n")),(0,a.kt)("p",null,"\u542f\u52a8\u5e94\u7528\u540e\uff0c\u8bbf\u95ee\u9875\u9762\uff0c\u4f1a\u53d1\u73b0\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u629b\u51fa\u8b66\u544a\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Warning: Expected server HTML to contain a matching <div> in <div>.\n")),(0,a.kt)("p",null,"\u8fd9\u662f React \u5728\u5ba2\u6237\u7aef\u6267\u884c\u6ce8\u6c34\u903b\u8f91\u65f6\uff0c\u53d1\u73b0\u6e32\u67d3\u7ed3\u679c\u4e0e SSR \u6e32\u67d3\u7ed3\u679c\u4e0d\u4e00\u81f4\u9020\u6210\u7684\u3002\u867d\u7136\u9875\u9762\u8868\u73b0\u6b63\u5e38\uff0c\u4f46\u5728\u590d\u6742\u5e94\u7528\u4e2d\uff0c\u5f88\u6709\u53ef\u80fd\u56e0\u6b64\u51fa\u73b0 DOM \u5c42\u7ea7\u6df7\u4e71\u3001\u6837\u5f0f\u6df7\u4e71\u7b49\u95ee\u9898\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u6ce8\u6c34\u903b\u8f91\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#hydrate"},"\u8fd9\u91cc"),"\u3002")),(0,a.kt)("p",null,"\u5e94\u7528\u9700\u8981\u4fdd\u6301 SSR \u4e0e CSR \u6e32\u67d3\u7ed3\u679c\u7684\u4e00\u81f4\u6027\uff0c\u5982\u679c\u5b58\u5728\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\uff0c\u8bf4\u660e\u8fd9\u90e8\u5206\u5185\u5bb9\u65e0\u9700\u5728 SSR \u4e2d\u8fdb\u884c\u6e32\u67d3\u3002Modern.js \u4e3a\u8fd9\u7c7b\u5728 SSR \u4e2d\u4e0d\u9700\u8981\u6e32\u67d3\u7684\u5185\u5bb9\u63d0\u4f9b ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-runtime-context"},(0,a.kt)("inlineCode",{parentName:"a"},"<NoSSR>")," \u5de5\u5177\u7ec4\u4ef6"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NoSSR } from '@modern-js/runtime/ssr';\n")),(0,a.kt)("p",null,"\u5728\u4e0d\u9700\u8981\u8fdb\u884c SSR \u7684\u5143\u7d20\u5916\u90e8\uff0c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSSR")," \u7ec4\u4ef6\u5305\u88f9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<NoSSR>\n  <div>\n    client content\n  </div>\n</NoSSR>\n")),(0,a.kt)("p",null,"\u4fee\u6539\u4ee3\u7801\u540e\uff0c\u5237\u65b0\u9875\u53d1\u73b0\u4e4b\u524d\u7684 Waring \u6d88\u5931\u3002\u6253\u5f00\u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u5de5\u5177\u7684 Network \u7a97\u53e3\uff0c\u67e5\u770b\u8fd4\u56de\u7684 HTML \u6587\u6863\u662f\u4e0d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSSR")," \u7ec4\u4ef6\u5305\u88f9\u7684\u5185\u5bb9\u7684\u3002"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-runtime-context"},(0,a.kt)("inlineCode",{parentName:"a"},"useRuntimeContext"))," \u53ef\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u8bf7\u6c42\u4fe1\u606f\uff0c\u53ef\u4ee5\u5229\u7528\u5b83\u4fdd\u8bc1 SSR \u4e0e CSR \u7684\u6e32\u67d3\u7ed3\u679c\u4e00\u81f4\u3002")),(0,a.kt)("h2",{id:"\u5173\u6ce8\u5185\u5b58\u6cc4\u6f0f"},"\u5173\u6ce8\u5185\u5b58\u6cc4\u6f0f"),(0,a.kt)("admonition",{title:"\u8b66\u544a",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 SSR \u573a\u666f\u4e0b\uff0c\u5f00\u53d1\u8005\u9700\u8981\u7279\u522b\u5173\u6ce8\u5185\u5b58\u6cc4\u9732\u95ee\u9898\uff0c\u5373\u4f7f\u662f\u5fae\u5c0f\u7684\u5185\u5b58\u6cc4\u9732\uff0c\u5728\u5927\u91cf\u7684\u8bbf\u95ee\u540e\u4e5f\u4f1a\u5bf9\u670d\u52a1\u9020\u6210\u5f71\u54cd\u3002")),(0,a.kt)("p",null,"SSR \u65f6\uff0c\u6d4f\u89c8\u5668\u7684\u6bcf\u6b21\u8bf7\u6c42\uff0c\u90fd\u4f1a\u89e6\u53d1\u670d\u52a1\u7aef\u91cd\u65b0\u6267\u884c\u4e00\u6b21\u7ec4\u4ef6\u6e32\u67d3\u903b\u8f91\u3002\u6240\u4ee5\uff0c\u9700\u8981\u907f\u514d\u5728\u5168\u5c40\u5b9a\u4e49\u4efb\u4f55\u53ef\u80fd\u4e0d\u65ad\u589e\u957f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6216\u5728\u5168\u5c40\u8fdb\u884c\u4e8b\u4ef6\u8ba2\u9605\uff0c\u6216\u521b\u5efa\u4e0d\u4f1a\u88ab\u9500\u6bc1\u7684\u6d41\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u4ee3\u7801\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://redux-observable.js.org/"},"redux-observable")," \u65f6\uff0c\u4e60\u60ef\u4e86 CSR \u7684\u5f00\u53d1\u8005\u901a\u5e38\u4f1a\u5728\u7ec4\u4ef6\u4e2d\u8fd9\u6837\u7f16\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/* \u4ee3\u7801\u4ec5\u4f5c\u4e3a\u793a\u4f8b\uff0c\u4e0d\u53ef\u8fd0\u884c */\nimport { createEpicMiddleware, combineEpics } from 'redux-observable';\n\nconst epicMiddleware = createEpicMiddleware();\nconst rootEpic = combineEpics();\n\nexport default function Test() {\n  epicMiddleware.run(rootEpic);\n  return <div>Hello Modern.js</div>;\n}\n")),(0,a.kt)("p",null,"\u5728\u7ec4\u4ef6\u5916\u5c42\u521b\u5efa Middleware \u5b9e\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"epicMiddleware"),"\uff0c\u5e76\u5728\u7ec4\u4ef6\u5185\u90e8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"epicMiddleware.run"),"\u3002"),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u7aef\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u95ee\u9898\uff0c\u4f46\u662f\u5728 SSR \u65f6\uff0cMiddleware \u5b9e\u4f8b\u4f1a\u4e00\u76f4\u65e0\u6cd5\u88ab\u9500\u6bc1\u3002\u6bcf\u6b21\u6e32\u67d3\u7ec4\u4ef6\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"epicMiddleware.run(rootEpic)")," \u65f6\uff0c\u90fd\u4f1a\u5728\u5185\u90e8\u6dfb\u52a0\u65b0\u7684\u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u5bfc\u81f4\u6574\u4e2a\u5bf9\u8c61\u4e0d\u65ad\u53d8\u5927\uff0c\u6700\u7ec8\u5bf9\u5e94\u7528\u6027\u80fd\u9020\u6210\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"CSR \u4e2d\u8fd9\u7c7b\u95ee\u9898\u4e0d\u6613\u88ab\u53d1\u89c9\uff0c\u56e0\u6b64\u4ece CSR \u5207\u6362\u5230 SSR \u65f6\uff0c\u5982\u679c\u4e0d\u786e\u5b9a\u5e94\u7528\u662f\u5426\u5b58\u5728\u8fd9\u7c7b\u9690\u60a3\uff0c\u53ef\u4ee5\u5bf9\u5e94\u7528\u8fdb\u884c\u538b\u6d4b\u3002"),(0,a.kt)("h2",{id:"\u6536\u655b\u670d\u52a1\u7aef\u6570\u636e"},"\u6536\u655b\u670d\u52a1\u7aef\u6570\u636e"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u6301 SSR \u9636\u6bb5\u8bf7\u6c42\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7aef\u76f4\u63a5\u4f7f\u7528\uff0c Modern.js \u4f1a\u5c06\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u6536\u96c6\u7684\u6570\u636e\u4e0e\u72b6\u6001\u6ce8\u5165\u5230 HTML \u5185\u3002\u4f46\u662f\uff0cCSR \u5e94\u7528\u5e38\u5e38\u5b58\u5728\u63a5\u53e3\u6570\u636e\u91cf\u5927\u3001\u7ec4\u4ef6\u72b6\u6001\u672a\u6536\u655b\u7684\u60c5\u51b5\uff0c\u8fd9\u65f6\u5982\u679c\u76f4\u63a5\u4f7f\u7528 SSR\uff0c\u6e32\u67d3\u5f97\u5230\u7684 HTML \u4f53\u79ef\u53ef\u80fd\u4f1a\u5b58\u5728\u8fc7\u5927\u7684\u95ee\u9898\u3002\u6b64\u65f6\uff0cSSR \u4e0d\u4ec5\u65e0\u6cd5\u4e3a\u5e94\u7528\u5e26\u6765\u7528\u6237\u4f53\u9a8c\u4e0a\u7684\u63d0\u5347\uff0c\u53cd\u800c\u53ef\u80fd\u8d77\u5230\u76f8\u53cd\u7684\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4f7f\u7528 SSR \u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8005\u9700\u8981\u4e3a\u5e94\u7528\u505a\u5408\u7406\u7684\u7626\u8eab"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5173\u6ce8\u9996\u5c4f\uff0cSSR \u4e2d\u53ef\u4ee5\u53ea\u8bf7\u6c42\u9996\u5c4f\u9700\u8981\u7684\u6570\u636e\uff0c\u5e76\u5728\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3\u5269\u4f59\u7684\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4e0e\u6e32\u67d3\u65e0\u5173\u7684\u6570\u636e\uff0c\u4ece\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u4e2d\u5254\u9664\u3002")),(0,a.kt)("h2",{id:"serverless-pre-render"},"Serverless Pre-render"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b Serverless Pre-rendering (SPR) \u8fd9\u4e00\u7279\u6027\u6765\u63d0\u5347 SSR \u6027\u80fd\u3002"),(0,a.kt)("p",null,"SPR \u5229\u7528\u9884\u6e32\u67d3\u4e0e\u7f13\u5b58\u6280\u672f\uff0c\u4e3a SSR \u9875\u9762\u63d0\u4f9b\u9759\u6001 Web \u7684\u54cd\u5e94\u6027\u80fd\u3002\u5b83\u8ba9 SSR \u5e94\u7528\u62e5\u6709\u9759\u6001 Web \u9875\u9762\u7684\u54cd\u5e94\u901f\u5ea6\u4e0e\u7a33\u5b9a\u6027\uff0c\u540c\u65f6\u8fd8\u80fd\u4fdd\u6301\u6570\u636e\u7684\u52a8\u6001\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u5728 Modern.js \u4e2d\u4f7f\u7528 SPR \u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u6240\u5728\u7684\u9875\u9762\u5c31\u4f1a\u81ea\u52a8\u5f00\u542f SPR\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6a21\u62df\u4e00\u4e2a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," API \u7684\u7ec4\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," \u4e2d\u7684\u8bf7\u6c42\u9700\u8981\u6d88\u8017 2s \u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(\n    async () => {\n      await new Promise((resolve, reject) => {\n        setTimeout(() => {\n          resolve(null);\n        }, 2000);\n      });\n\n      return {\n        message: 'Hello Modern.js',\n      };\n    },\n    {\n      params: 'foo',\n    },\n  );\n\n  return <div>{data?.message}</div>;\n};\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u540e\uff0c\u6253\u5f00\u9875\u9762\uff0c\u53ef\u4ee5\u660e\u663e\u7684\u5bdf\u89c9\u5230\u9875\u9762\u9700\u8981\u7b49\u5230 2s \u540e\u624d\u8fd4\u56de\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7ec4\u4ef6\u6765\u8fdb\u884c\u4f18\u5316\uff0c\u8be5\u7ec4\u4ef6\u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/ssr")," \u4e2d\u5bfc\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { PreRender } from '@modern-js/runtime/ssr';\n")),(0,a.kt)("p",null,"\u5728\u8def\u7531\u7ec4\u4ef6\u5185\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7ec4\u4ef6\uff0c\u5e76\u8bbe\u7f6e\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),"\uff0c\u7528\u4e8e\u8868\u793a\u8be5\u6b21\u6e32\u67d3\u7ed3\u679c\u7684\u8fc7\u671f\u65f6\u95f4\u4e3a 5s\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<PreRender interval={5} />\n")),(0,a.kt)("p",null,"\u4fee\u6539\u540e\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run start")," \u542f\u52a8\u5e94\u7528\uff0c\u5e76\u6253\u5f00\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u9996\u6b21\u6253\u5f00\u65f6\uff0c\u548c\u4e4b\u524d\u7684\u6e32\u67d3\u5e76\u6ca1\u6709\u4ec0\u4e48\u4e0d\u540c\uff0c\u540c\u6837\u5b58\u5728 2s \u5ef6\u8fdf\u3002\u70b9\u51fb\u5237\u65b0\uff0c\u9875\u9762\u77ac\u95f4\u6253\u5f00\uff0c\u4f46\u6b64\u65f6\uff0c\u9875\u9762\u6570\u636e\u5e76\u6ca1\u6709\u56e0\u4e3a\u5237\u65b0\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u662f\u56e0\u4e3a\u7f13\u5b58\u8fd8\u6ca1\u6709\u8fc7\u671f\u3002"),(0,a.kt)("p",null,"\u7b49\u5f85 5s\uff0c\u91cd\u65b0\u5237\u65b0\u9875\u9762\uff0c\u9875\u9762\u7684\u6570\u636e\u4ecd\u7136\u6ca1\u6709\u53d8\u5316\u3002\u518d\u4e00\u6b21\u5237\u65b0\u9875\u9762\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c\u4f46\u662f\u9875\u9762\u4ecd\u7136\u51e0\u4e4e\u662f\u77ac\u95f4\u54cd\u5e94\u7684\u3002\n\u8fd9\u662f\u56e0\u4e3a\u5728\u4e4b\u524d\u7684\u8bf7\u6c42\u65f6\uff0cSPR \u5df2\u7ecf\u5728\u540e\u53f0\u5f02\u6b65\u83b7\u53d6\u4e86\u65b0\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u672c\u6b21\u8bf7\u6c42\u5230\u7684\u9875\u9762\u662f\u5df2\u7ecf\u7f13\u5b58\u5728\u670d\u52a1\u5668\u4e2d\u7684\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u60f3\u8c61\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," \u8bbe\u7f6e\u4e3a 1 \u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u611f\u77e5\u5230\u5b9e\u65f6\u6570\u636e\u7684\u540c\u65f6\uff0c\u62e5\u6709\u9759\u6001\u9875\u9762\u7684\u54cd\u5e94\u4f53\u9a8c\u3002"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7684\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/ssr/pre-render"},"\u8fd9\u91cc"),"\u3002")),(0,a.kt)("h2",{id:"treeshaking"},"Treeshaking"),(0,a.kt)("p",null,"\u5f00\u542f SSR \u65f6\uff0cModern.js \u4f1a\u7528\u76f8\u540c\u7684\u5165\u53e3\uff0c\u6784\u5efa\u51fa SSR Bundle \u548c CSR Bundle \u4e24\u4efd\u4ea7\u7269\u3002\u56e0\u6b64\uff0c\u5728 SSR Bundle \u4e2d\u5b58\u5728 Web API\uff0c\u6216\u662f\u5728 CSR Bundle \u4e2d\u5b58\u5728 Node API \u65f6\uff0c\u90fd\u53ef\u80fd\u5bfc\u81f4\u8fd0\u884c\u51fa\u9519\u3002"),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf\u533a\u5206"},"\u73af\u5883\u53d8\u91cf\u533a\u5206"),(0,a.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 EdenX \u5185\u7f6e\u7684\u73af\u5883\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"EDENX_TARGET")," \u8fdb\u884c\u5224\u65ad\uff0c\u65b9\u4fbf\u5728\u6784\u5efa\u65f6\u5220\u9664\u65e0\u7528\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default () => {\n  if (process.env.EDENX_TARGET === 'node') {\n    console.log('server render')\n  } else {\n    console.log('client render')\n  }\n}\n")),(0,a.kt)("p",null,"\u5728 SSR \u4e2d\u76f4\u63a5\u8c03\u7528 RPC \u63a5\u53e3\u65f6\uff0c\u8be5\u73af\u5883\u53d8\u91cf\u4f1a\u975e\u5e38\u6709\u7528\uff0c\u56e0\u4e3a RPC \u8c03\u7528\u65f6\u5f80\u5f80\u4f1a\u6267\u884c\u5230\u6d4f\u89c8\u5668\u4e2d\u65e0\u6cd5\u8fd0\u884c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/env-vars"},"\u73af\u5883\u53d8\u91cf"),"\u3002")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u540e\u7f00\u533a\u5206"},"\u6587\u4ef6\u540e\u7f00\u533a\u5206"),(0,a.kt)("p",null,"\u4f46\u6709\u65f6\uff0c\u8fd9\u79cd Treeshaking \u7684\u65b9\u5f0f\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u4ee3\u7801\u88ab\u5b8c\u5168\u5206\u79bb\u3002EdenX \u4e5f\u652f\u6301\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},".node.")," \u540e\u7f00\u7684\u6587\u4ef6\u6765\u533a\u5206 SSR Bundle \u548c CSR Bundle \u4ea7\u7269\u7684\u6253\u5305\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"client-sdk")," \u4e2d\u76f4\u63a5\u4f7f\u7528\u4e86 Web API\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// client-sdk\nexport const href = location.href;\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u76f4\u63a5\u5f15\u7528\u5230\u7ec4\u4ef6\u4e2d\uff0c\u4f1a\u9020\u6210 SSR \u62a5\u9519\u3002\u53ef\u4ee5\u521b\u5efa\u540c\u540d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".node.ts")," \u6587\u4ef6\u505a\u4e00\u5c42\u4ee3\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="compat.ts"',title:'"compat.ts"'},"export { href } from 'client-sdk';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="compat.node.ts"',title:'"compat.node.ts"'},"export const href = '';\n")),(0,a.kt)("p",null,"\u5728\u6587\u4ef6\u4e2d\u76f4\u63a5\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"./compat"),"\uff0c\u6b64\u65f6 SSR \u73af\u5883\u4e0b\u4f1a\u4f18\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".node.ts")," \u540e\u7f00\u7684\u6587\u4ef6\uff0cCSR \u73af\u5883\u4e0b\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," \u540e\u7f00\u7684\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { href } from './compat'\n\nexport default () => {\n  return <div onClick={() => { console.log(href) }}></div>\n}\n")),(0,a.kt)("h3",{id:"\u72ec\u7acb\u6587\u4ef6"},"\u72ec\u7acb\u6587\u4ef6"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4e24\u79cd\u65b9\u5f0f\uff0c\u90fd\u4f1a\u4e3a\u5f00\u53d1\u8005\u5e26\u6765\u4e00\u4e9b\u5fc3\u667a\u8d1f\u62c5\u3002Modern.js \u6b63\u5728\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"\u5d4c\u5957\u8def\u7531"),"\u5f00\u53d1\u8bbe\u8ba1\u66f4\u7b80\u5355\u7684\u65b9\u6848\u6765\u5206\u79bb CSR \u548c SSR \u7684\u4ee3\u7801\u3002\u3002"),(0,a.kt)("h2",{id:"\u63a5\u53e3\u8bf7\u6c42"},"\u63a5\u53e3\u8bf7\u6c42"),(0,a.kt)("p",null,"\u5728 SSR \u4e2d\u53d1\u8d77\u63a5\u53e3\u8bf7\u6c42\u65f6\uff0c\u5f00\u53d1\u8005\u6709\u65f6\u81ea\u5df1\u5c01\u88c5\u4e86\u540c\u6784\u7684\u8bf7\u6c42\u5de5\u5177\u3002\u90e8\u5206\u63a5\u53e3\u9700\u8981\u4f20\u9012\u7528\u6237 Cookie\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-runtime-context"},(0,a.kt)("inlineCode",{parentName:"a"},"useRuntimeContext"))," API \u83b7\u53d6\u5230\u8bf7\u6c42\u5934\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u65f6\u83b7\u53d6\u5230\u7684\u662f HTML \u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\uff0c\u4e0d\u4e00\u5b9a\u9002\u7528\u4e8e\u63a5\u53e3\u8bf7\u6c42\uff0c\u56e0\u6b64",(0,a.kt)("strong",{parentName:"p"},"\u5343\u4e07\u4e0d\u80fd"),"\u900f\u4f20\u6240\u6709\u8bf7\u6c42\u5934\u3002\u5e76\u4e14\uff0c\u4e00\u4e9b\u540e\u7aef\u63a5\u53e3\uff0c\u6216\u662f\u901a\u7528\u7f51\u5173\uff0c\u4f1a\u6839\u636e\u8bf7\u6c42\u5934\u4e2d\u7684\u4fe1\u606f\u505a\u6821\u9a8c\uff0c\u5168\u91cf\u900f\u4f20\u5bb9\u6613\u51fa\u73b0\u5404\u79cd\u96be\u4ee5\u6392\u67e5\u7684\u95ee\u9898\uff0c\u63a8\u8350",(0,a.kt)("strong",{parentName:"p"},"\u6309\u9700\u900f\u4f20"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5b9e\u5728\u9700\u8981\u900f\u4f20\u6240\u6709\u8bf7\u6c42\u5934\uff0c\u8bf7\u52a1\u5fc5\u8fc7\u6ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," \u5b57\u6bb5\u3002"))}u.isMDXComponent=!0}}]);