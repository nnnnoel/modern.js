"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2265],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,g=f["".concat(i,".").concat(m)]||f[m]||c[m]||a;return n?o.createElement(g,p(p({ref:t},s),{},{components:n})):o.createElement(g,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(18249),r=(n(52983),n(44993));const a={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"component")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"url"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," is used to configure the default export type of SVG files."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," , the default export of SVG files is the URL of the file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import logo from './logo.svg';\n\nconsole.log(logo); // => asset url\n")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"output.svgDefaultExport")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," , the default export of SVG files is the React component of the file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Logo from './logo.svg';\n\nconsole.log(Logo); // => React Component\n")),(0,r.kt)("p",null,"At this time, you can also specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"?url")," query to import the URL, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import logo from './logo.svg?url';\n\nconsole.log(logo); // => asset url\n")))}p.isMDXComponent=!0;const l={title:"output.svgDefaultExport",sidebar_label:"svgDefaultExport"},i=void 0,u={unversionedId:"configure/app/output/svg-default-export",id:"configure/app/output/svg-default-export",title:"output.svgDefaultExport",description:"This configuration is Modern.js Builder configuration, more detail can see output.svgDefaultExport\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/svg-default-export.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/svg-default-export",permalink:"/v2/en/docs/configure/app/output/svg-default-export",draft:!1,tags:[],version:"current",frontMatter:{title:"output.svgDefaultExport",sidebar_label:"svgDefaultExport"},sidebar:"configsAppSidebar",previous:{title:"ssg",permalink:"/v2/en/docs/configure/app/output/ssg"},next:{title:"Overview",permalink:"/v2/en/docs/configure/app/runtime/intro"}},s={},c=[],f={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-svgdefaultexport"},"output.svgDefaultExport"),"\u3002")),(0,r.kt)(p,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);