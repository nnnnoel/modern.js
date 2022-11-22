"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2927],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Example",id:"example",level:4}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u662f\u5426\u751f\u6210 CSS Modules \u7684 TypeScript \u58f0\u660e\u6587\u4ef6\u3002"),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"\u542f\u7528 CSS Module TypeScript \u58f0\u660e\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    enableCssModuleTSDeclaration: true,\n  },\n};\n")),(0,o.kt)("p",null,"\u9879\u76ee\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u6bcf\u4e2a CSS Module \u6587\u4ef6\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," \u6587\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface CssExports {\n  title: string;\n}\nexport const cssExports: CssExports;\nexport default cssExports;\n")))}l.isMDXComponent=!0;const p={title:"output.enableCssModuleTSDeclaration",sidebar_label:"enableCssModuleTSDeclaration"},i=void 0,u={unversionedId:"configure/app/output/enable-css-module-tsdeclaration",id:"configure/app/output/enable-css-module-tsdeclaration",title:"output.enableCssModuleTSDeclaration",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.enableCssModuleTSDeclaration\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/enable-css-module-tsdeclaration.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-css-module-tsdeclaration",permalink:"/v2/docs/configure/app/output/enable-css-module-tsdeclaration",draft:!1,tags:[],version:"current",frontMatter:{title:"output.enableCssModuleTSDeclaration",sidebar_label:"enableCssModuleTSDeclaration"},sidebar:"configsAppSidebar",previous:{title:"enableAssetManifest",permalink:"/v2/docs/configure/app/output/enable-asset-manifest"},next:{title:"enableInlineScripts",permalink:"/v2/docs/configure/app/output/enable-inline-scripts"}},s={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-enablecssmoduletsdeclaration"},"output.enableCssModuleTSDeclaration"),"\u3002")),(0,o.kt)(l,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);