"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6265],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(18249),r=(n(52983),n(44993));const o={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"\u662f\u5426\u751f\u6210 manifest \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5305\u542b\u6240\u6709\u6784\u5efa\u4ea7\u7269\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u6765\u5f00\u542f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    enableAssetManifest: true,\n  },\n};\n")),(0,r.kt)("p",null,"\u5f00\u542f\u540e\uff0c\u5f53\u7f16\u8bd1\u5b8c\u6210\u65f6\uff0c\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/manifest.json")," \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": {\n    "main.css": "/static/css/main.45b01211.css",\n    "main.js": "/static/js/main.52fd298f.js",\n    "html/main/index.html": "/html/main/index.html"\n  },\n  "entrypoints": ["static/css/main.45b01211.css", "static/js/main.52fd298f.js"]\n}\n')))}i.isMDXComponent=!0;const s={title:"output.enableAssetManifest",sidebar_label:"enableAssetManifest"},l=void 0,p={unversionedId:"configure/app/output/enable-asset-manifest",id:"configure/app/output/enable-asset-manifest",title:"output.enableAssetManifest",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.enableAssetManifest\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/enable-asset-manifest.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-asset-manifest",permalink:"/v2/docs/configure/app/output/enable-asset-manifest",draft:!1,tags:[],version:"current",frontMatter:{title:"output.enableAssetManifest",sidebar_label:"enableAssetManifest"},sidebar:"configsAppSidebar",previous:{title:"enableAssetFallback",permalink:"/v2/docs/configure/app/output/enable-asset-fallback"},next:{title:"enableCssModuleTSDeclaration",permalink:"/v2/docs/configure/app/output/enable-css-module-tsdeclaration"}},u={},c=[],f={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-enableassetmanifest"},"output.enableAssetManifest"),"\u3002")),(0,r.kt)(i,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);