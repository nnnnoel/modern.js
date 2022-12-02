"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5702],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const i={toc:[{value:"Blocking Compilation",id:"blocking-compilation",level:3},{value:"Example",id:"example",level:3}]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Whether to disable TypeScript type checker during compilation."),(0,o.kt)("p",null,"By default, Builder will run the TypeScript type checker in a separate process during the build process. Its checking logic is consistent with TypeScript's native ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," command. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," or Builder's ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.tsChecker")," config to customize the checking behavior."),(0,o.kt)("h3",{id:"blocking-compilation"},"Blocking Compilation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In development build, type errors will not block the compilation process."),(0,o.kt)("li",{parentName:"ul"},"In production build, type errors will cause the build to fail to ensure the stability of the production code.")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Disable TypeScript type checker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n")),(0,o.kt)("p",null,"Disable type checker in development:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n")),(0,o.kt)("p",null,"Disable type checker in production:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is not recommended to disable type checker in production, which will reduce the stability of the production code, please use it with caution.")))}a.isMDXComponent=!0;const l={title:"output.disableTsChecker",sidebar_label:"disableTsChecker"},p=void 0,c={unversionedId:"configure/app/output/disable-ts-checker",id:"configure/app/output/disable-ts-checker",title:"output.disableTsChecker",description:"This configuration is Modern.js Builder configuration, more detail can see output.disableTsChecker\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/disable-ts-checker.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/disable-ts-checker",permalink:"/v2/en/docs/configure/app/output/disable-ts-checker",draft:!1,tags:[],version:"current",frontMatter:{title:"output.disableTsChecker",sidebar_label:"disableTsChecker"},sidebar:"configsAppSidebar",previous:{title:"disableSourceMap",permalink:"/v2/en/docs/configure/app/output/disable-source-map"},next:{title:"distPath",permalink:"/v2/en/docs/configure/app/output/dist-path"}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-disabletschecker"},"output.disableTsChecker"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);