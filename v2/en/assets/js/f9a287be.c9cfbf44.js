"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[947],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const o={toc:[{value:"Example",id:"example",level:4}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"If this option is enabled, all unrecognized files will be emitted to the dist directory; otherwise, an exception will be thrown."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Enable the config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    enableAssetFallback: true,\n  },\n};\n")),(0,r.kt)("p",null,"Import a module of unknown type in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import './foo.xxx';\n")),(0,r.kt)("p",null,"After compilation, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.xxx")," will be output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/static/media")," directory."),(0,r.kt)("p",null,"You can control the output path and filename after fallback through the ",(0,r.kt)("inlineCode",{parentName:"p"},"output.distPath.media")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"output.filename.media")," configs."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Enabling this config will change the rules structure in the webpack config. In most cases, we do not recommend using this config.")))}l.isMDXComponent=!0;const i={title:"output.enableAssetFallback",sidebar_label:"enableAssetFallback"},p=void 0,u={unversionedId:"configure/app/output/enable-asset-fallback",id:"configure/app/output/enable-asset-fallback",title:"output.enableAssetFallback",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.enableAssetFallback\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/enable-asset-fallback.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-asset-fallback",permalink:"/v2/en/docs/configure/app/output/enable-asset-fallback",draft:!1,tags:[],version:"current",frontMatter:{title:"output.enableAssetFallback",sidebar_label:"enableAssetFallback"},sidebar:"configsAppSidebar",previous:{title:"distPath",permalink:"/v2/en/docs/configure/app/output/dist-path"},next:{title:"enableAssetManifest",permalink:"/v2/en/docs/configure/app/output/enable-asset-manifest"}},c={},s=[],f={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-enableassetfallback"},"output.enableAssetFallback"),"\u3002")),(0,r.kt)(l,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);