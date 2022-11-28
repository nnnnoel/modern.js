"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5852],{44993:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(18249),o=(t(52983),t(44993));const i={title:"source.configDir",sidebar_label:"configDir"},c=void 0,a={unversionedId:"configure/app/source/config-dir",id:"configure/app/source/config-dir",title:"source.configDir",description:"* Type: string",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/config-dir.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/config-dir",permalink:"/v2/en/docs/configure/app/source/config-dir",draft:!1,tags:[],version:"current",frontMatter:{title:"source.configDir",sidebar_label:"configDir"},sidebar:"configsAppSidebar",previous:{title:"compileJsDataURI",permalink:"/v2/en/docs/configure/app/source/compile-js-data-uri"},next:{title:"define",permalink:"/v2/en/docs/configure/app/source/define"}},p={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"./config"))),(0,o.kt)("p",null,"Modern.js supports placing some files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./config")," folder to customize HTML templates, icons, static resources, etc. For details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/config/html"},"File Convention"),"."),(0,o.kt)("p",null,"This option allows you to customize the directory of configuration files."),(0,o.kt)("p",null,"For example, adjust the resource file directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    configDir: './resources',\n  },\n});\n")))}u.isMDXComponent=!0}}]);