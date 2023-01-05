"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3532],{44993:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(52983);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(18249),i=(r(52983),r(44993));const o={title:"source.disableEntryDirs",sidebar_label:"disableEntryDirs"},a=void 0,s={unversionedId:"configure/app/source/disable-entry-dirs",id:"configure/app/source/disable-entry-dirs",title:"source.disableEntryDirs",description:"* Type\uff1a string[]",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/disable-entry-dirs.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/disable-entry-dirs",permalink:"/v2/en/docs/configure/app/source/disable-entry-dirs",draft:!1,tags:[],version:"current",frontMatter:{title:"source.disableEntryDirs",sidebar_label:"disableEntryDirs"},sidebar:"configsAppSidebar",previous:{title:"disableDefaultEntries",permalink:"/v2/en/docs/configure/app/source/disable-default-entries"},next:{title:"enableAsyncEntry",permalink:"/v2/en/docs/configure/app/source/enable-async-entry"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")),(0,i.kt)("li",{parentName:"ul"},"Default\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"))),(0,i.kt)("p",null,"By default, application entries are identified based on the'src 'directory, you can disable some directories from being identified as application entries with this option."),(0,i.kt)("p",null,"For example, when the configuration and directory structure is as follows\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    disableEntryDirs: './src/one'\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Project',metastring:'directory structure"',directory:!0,'structure"':!0},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 one/\n    |    \u2514\u2500\u2500 App.tsx\n    \u251c\u2500\u2500 two/\n    |    \u2514\u2500\u2500 routes/\n    \u2514\u2500\u2500 env.d.ts\n")),(0,i.kt)("p",null,"When this option is not set, Modern.js will generate two entries based on the project directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"one"),(0,i.kt)("li",{parentName:"ul"},"two")),(0,i.kt)("p",null,"When this option is set, ",(0,i.kt)("inlineCode",{parentName:"p"},"src/one")," will not be recognized as an entry directory."),(0,i.kt)("p",null,"A common usage is to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/common"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components")," directories to this option to avoid these directories being recognized as application entries."))}u.isMDXComponent=!0}}]);