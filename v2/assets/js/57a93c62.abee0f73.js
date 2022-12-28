"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3215],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(u,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:7},o="setInputValue",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/setInputValue",id:"guides/topic-detail/generator/plugin/api/input/setInputValue",title:"setInputValue",description:"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/setInputValue.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/setInputValue",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInputValue",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"setInput",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInput"},next:{title:"locale",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/info/locale"}},u={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setinputvalue"},"setInputValue"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInputValue({\n  moduleRunWay: 'no',\n});\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u65b9\u6cd5\u53ea\u652f\u6301\u8bbe\u7f6e\u751f\u6210\u5668\u63d2\u4ef6\u96c6\u6210\u7684\u5de5\u7a0b\u65b9\u6848\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u503c\uff0c\u4e0d\u652f\u6301\u8bbe\u7f6e\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b(solution)\u548c\u9879\u76ee\u573a\u666f(scenes)\uff0c\u8fd9\u4e24\u4e2a\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u65f6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002")))}s.isMDXComponent=!0}}]);