"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6374],{44993:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(52983);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75211:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(18249),i=(t(52983),t(44993));const o={title:"source.entriesDir",sidebar_label:"entriesDir"},a=void 0,c={unversionedId:"configure/app/source/entries-dir",id:"configure/app/source/entries-dir",title:"source.entriesDir",description:"* Type:  string",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/entries-dir.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/entries-dir",permalink:"/v2/en/docs/configure/app/source/entries-dir",draft:!1,tags:[],version:"current",frontMatter:{title:"source.entriesDir",sidebar_label:"entriesDir"},sidebar:"configsAppSidebar",previous:{title:"enableAsyncEntry",permalink:"/v2/en/docs/configure/app/source/enable-async-entry"},next:{title:"entries",permalink:"/v2/en/docs/configure/app/source/entries"}},p={},s=[],l={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type:  ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"./src"))),(0,i.kt)("p",null,"By default, the application entry will be identified according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. You can customize the identification directory of the application entry through this option."),(0,i.kt)("p",null,"For example, when the configuration and directory structure are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    entriesDir: './src/pages'\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Project',metastring:'directory structure"',directory:!0,'structure"':!0},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 a\n        \u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n        \u2514\u2500\u2500 b\n            \u2514\u2500\u2500 App.jsx\n")),(0,i.kt)("p",null,"Modern.js will generate the build entry ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and entry ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/pages")," directory structure, the result is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," {\n   a: './src/pages/a/App.jsx',\n   b: './src/pages/b/App.jsx'\n }\n")))}u.isMDXComponent=!0}}]);