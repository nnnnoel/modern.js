"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1877],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(u,p(p({ref:t},c),{},{components:n})):r.createElement(u,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(18249),a=(n(29901),n(57522));const o={sidebar_label:"https"},p="dev.https",i={unversionedId:"apis/app/config/dev/https",id:"apis/app/config/dev/https",title:"dev.https",description:"- \u7c7b\u578b\uff1a boolean | { key string }",source:"@site/docs/apis/app/config/dev/https.md",sourceDirName:"apis/app/config/dev",slug:"/apis/app/config/dev/https",permalink:"/docs/apis/app/config/dev/https",tags:[],version:"current",frontMatter:{sidebar_label:"https"},sidebar:"apisAppSidebar",previous:{title:"assetPrefix",permalink:"/docs/apis/app/config/dev/asset-prefix"},next:{title:"transformer",permalink:"/docs/apis/app/config/testing/transformer"}},s={},l=[{value:"\u81ea\u52a8\u751f\u6210\u8bc1\u4e66",id:"\u81ea\u52a8\u751f\u6210\u8bc1\u4e66",level:3},{value:"\u624b\u52a8\u8bbe\u7f6e\u8bc1\u4e66",id:"\u624b\u52a8\u8bbe\u7f6e\u8bc1\u4e66",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devhttps"},"dev.https"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | { key: string; cert: string }")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u914d\u7f6e\u8be5\u9009\u9879\u540e\uff0c\u53ef\u4ee5\u5f00\u542f Dev Server \u5bf9 HTTPS \u7684\u652f\u6301\uff0c\u540c\u65f6\u4f1a\u7981\u7528 HTTP \u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,"\u5f00\u542f\u524d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n")),(0,a.kt)("p",null,"\u5f00\u542f\u540e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  > Local:    https://localhost:8080/\n  > Network:  https://192.168.0.1:8080/\n")),(0,a.kt)("h3",{id:"\u81ea\u52a8\u751f\u6210\u8bc1\u4e66"},"\u81ea\u52a8\u751f\u6210\u8bc1\u4e66"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cModern.js \u4f1a\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/davewasmer/devcert"},"devcert")," \u6765\u81ea\u52a8\u751f\u6210 Dev Server \u6240\u9700\u7684 HTTPS \u8bc1\u4e66\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  dev: {\n    https: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u8be5\u65b9\u5f0f\u6709\u4e00\u5b9a\u5c40\u9650\u6027\uff0c\u7531\u4e8e devcert \u76ee\u524d\u4e0d\u652f\u6301 IP addresses\uff0c\u56e0\u6b64\u8bbf\u95ee Network \u57df\u540d\u65f6\u4f1a\u9047\u5230\u300c\u60a8\u7684\u8fde\u63a5\u4e0d\u662f\u79c1\u5bc6\u8fde\u63a5\u300d\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u6b64\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5\u4e3a\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u300c\u9ad8\u7ea7\u300d->\u300c\u7ee7\u7eed\u524d\u5f80 192.168.0.1\uff08\u4e0d\u5b89\u5168\uff09\u300d"),"\u3002"),(0,a.kt)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/dev-https-chrome.jpg",style:{width:600,boxShadow:"0 0 3px rgba(0,0,0,.3)"}}),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4f7f\u7528\u4e86\u5168\u5c40\u4ee3\u7406\uff0c\u5c06\u67d0\u4e2a HTTPS \u57df\u540d\u4ee3\u7406\u5230\u672c\u5730\u8fdb\u884c\u5f00\u53d1\u65f6\uff0c\u4f1a\u9047\u5230\u70ed\u66f4\u65b0\u5931\u6548\u7684\u95ee\u9898\uff08\u672c\u8d28\u4e0a\u662f wss \u8bf7\u6c42\u7684\u8bc1\u4e66\u95ee\u9898\uff09\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u89e3\u51b3\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"https \u4ee3\u7406\u81ea\u52a8\u5b89\u88c5\u8bc1\u4e66\u9700\u8981\u83b7\u53d6 root \u6743\u9650, \u8bf7\u6839\u636e\u63d0\u793a\u8f93\u5165\u5bc6\u7801\u5373\u53ef\u3002"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"\u5bc6\u7801\u4ec5\u5728\u4fe1\u4efb\u8bc1\u4e66\u65f6\u4f7f\u7528\uff0c\u4e0d\u4f1a\u6cc4\u6f0f\u6216\u8005\u7528\u4e8e\u5176\u4ed6\u73af\u8282"),"\u3002"))),(0,a.kt)("h3",{id:"\u624b\u52a8\u8bbe\u7f6e\u8bc1\u4e66"},"\u624b\u52a8\u8bbe\u7f6e\u8bc1\u4e66"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.https")," \u9009\u9879\u4e2d\u624b\u52a8\u4f20\u5165 HTTPS \u670d\u52a1\u5668\u6240\u9700\u8981\u7684\u8bc1\u4e66\u548c\u5bf9\u5e94\u7684\u79c1\u94a5\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c06\u76f4\u63a5\u4f20\u9012\u7ed9 Node.js \u4e2d https \u6a21\u5757\u7684 createServer\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener"},"https.createServer"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import fs from 'fs';\nimport { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n});\n")))}d.isMDXComponent=!0}}]);