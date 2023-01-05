"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3331],{44993:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(52983);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(t),b=a,m=f["".concat(s,".").concat(b)]||f[b]||u[b]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},49189:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(18249),a=(t(52983),t(44993));const o={sidebar_label:"baseUrl"},l="server.baseUrl",i={unversionedId:"configure/app/server/base-url",id:"configure/app/server/base-url",title:"server.baseUrl",description:"* \u7c7b\u578b\uff1a string | string[]",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/server/base-url.md",sourceDirName:"configure/app/server",slug:"/configure/app/server/base-url",permalink:"/v2/docs/configure/app/server/base-url",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"baseUrl"},sidebar:"configsAppSidebar",previous:{title:"state",permalink:"/v2/docs/configure/app/runtime/state"},next:{title:"enableFrameworkExt",permalink:"/v2/docs/configure/app/server/enable-framework-ext"}},s={},p=[],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverbaseurl"},"server.baseUrl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"string | string[]")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u7edf\u4e00\u8bbe\u7f6e\u670d\u52a1\u7aef\u8def\u7531\u524d\u7f00\uff08\u5e38\u7528\u4e8e\u5171\u4eab\u57df\u540d\u7684\u60c5\u51b5\uff0c\u533a\u5206\u6d41\u91cf)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  server: {\n    // \u6240\u6709\u751f\u6210\u7684\u8def\u7531\u524d\u9762\u90fd\u4f1a\u81ea\u52a8\u52a0\u4e0a\u524d\u7f00 `/base`\n    // \u751f\u6210\u7684\u670d\u52a1\u7aef\u8def\u7531\u6587\u4ef6\u8def\u5f84\uff1adist/route.json\n    baseUrl: '/base'\n\n    // \u591a baseUrl\n    baseUrl: ['/base-new', '/base-old']\n  }\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u8def\u7531\u8bbf\u95ee\u4f1a\u52a0\u4e0a\u5bf9\u5e94\u524d\u7f00:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"App running at:\n\n  > Local:    http://localhost:8080/base/\n  > Network:  http://192.168.0.1:8080/base/\n")))}u.isMDXComponent=!0}}]);