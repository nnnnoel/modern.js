"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5516],{44993:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,y=f["".concat(i,".").concat(m)]||f[m]||u[m]||p;return t?n.createElement(y,l(l({ref:r},s),{},{components:t})):n.createElement(y,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,l=new Array(p);l[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<p;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61473:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(18249),o=(t(52983),t(44993));const p={toc:[{value:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",id:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",level:4},{value:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",id:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",level:4}]};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string | string[]")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"\u5728\u6bcf\u4e2a\u9875\u9762\u7684\u5165\u53e3\u6587\u4ef6\u524d\u6dfb\u52a0\u4e00\u6bb5\u811a\u672c\uff0c\u8fd9\u6bb5\u811a\u672c\u4f1a\u65e9\u4e8e\u9875\u9762\u7684\u4ee3\u7801\u6267\u884c\uff0c\u5728\u8fd9\u4e2a\u811a\u672c\u4e2d\u53ef\u4ee5\u8fdb\u884c\u6267\u884c\u4e00\u4e9b\u5168\u5c40\u7684\u4ee3\u7801\u914d\u7f6e\uff0c\u6bd4\u5982\u6ce8\u5165 polyfill \u7b49\u3002"),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c"},"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c"),(0,o.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/polyfill.ts")," \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log('I am a polyfill');\n")),(0,o.kt)("p",null,"\u7136\u540e\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/polyfill.ts")," \u914d\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"source.preEntry")," \u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u8fd0\u884c\u7f16\u8bd1\u5e76\u8bbf\u95ee\u4efb\u610f\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/polyfill.ts")," \u4e2d\u7684\u4ee3\u7801\u5df2\u7ecf\u6267\u884c\uff0c\u5e76\u5728 console \u4e2d\u8f93\u51fa\u4e86\u5bf9\u5e94\u7684\u5185\u5bb9\u3002"),(0,o.kt)("h4",{id:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c"},"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"preEntry")," \u8bbe\u7f6e\u4e3a\u6570\u7ec4\u6765\u6dfb\u52a0\u591a\u4e2a\u811a\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n")))}l.isMDXComponent=!0;const a={title:"source.preEntry",sidebar_label:"preEntry"},i=void 0,c={unversionedId:"configure/app/source/pre-entry",id:"configure/app/source/pre-entry",title:"source.preEntry",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 source.preEntry\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/source/pre-entry.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/pre-entry",permalink:"/v2/docs/configure/app/source/pre-entry",draft:!1,tags:[],version:"current",frontMatter:{title:"source.preEntry",sidebar_label:"preEntry"},sidebar:"configsAppSidebar",previous:{title:"moduleScopes",permalink:"/v2/docs/configure/app/source/module-scopes"},next:{title:"resolveExtensionPrefix",permalink:"/v2/docs/configure/app/source/resolve-extension-prefix"}},s={},u=[],f={toc:u};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-source.html#source-preentry"},"source.preEntry"),"\u3002")),(0,o.kt)(l,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);