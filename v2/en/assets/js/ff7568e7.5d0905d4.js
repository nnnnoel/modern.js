"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7829],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(18249),r=(n(52983),n(44993));const l={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3},{value:"Boolean Type",id:"boolean-type",level:3}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"false | Object | Function")),(0,r.kt)("li",{parentName:"ul"},"Default:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const defaultHtmlPluginOptions = {\n  inject, // corresponding to the html.inject config\n  favicon, // corresponding to html.favicon config\n  filename, // generated based on output.distPath and entryName\n  template, // defaults to the built-in HTML template path\n  templateParameters, // corresponding to the html.templateParameters config\n  chunks: [entryName],\n  minify: {\n    removeComments: true,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n  },\n};\n")),(0,r.kt)("p",null,"The configs of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"html-webpack-plugin")," can be modified through ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.htmlPlugin"),"."),(0,r.kt)("h3",{id:"object-type"},"Object Type"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.htmlPlugin")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," type, the value will be merged with the default config via ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"function-type"},"Function Type"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.htmlPlugin")," is a Function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first parameter is the default config, which can be modified directly."),(0,r.kt)("li",{parentName:"ul"},"The second parameter is also an object, containing the entry name and the entry value."),(0,r.kt)("li",{parentName:"ul"},"The Function can return a new object as the final config.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"boolean-type"},"Boolean Type"),(0,r.kt)("p",null,"The built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," plugins can be disabled by set ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.htmlPlugin")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n")))}i.isMDXComponent=!0;const a={title:"tools.htmlPlugin",sidebar_label:"htmlPlugin"},p=void 0,c={unversionedId:"configure/app/tools/html-plugin",id:"configure/app/tools/html-plugin",title:"tools.htmlPlugin",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to tools.htmlPlugin\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/html-plugin.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/html-plugin",permalink:"/v2/en/docs/configure/app/tools/html-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.htmlPlugin",sidebar_label:"htmlPlugin"},sidebar:"configsAppSidebar",previous:{title:"esbuild",permalink:"/v2/en/docs/configure/app/tools/esbuild"},next:{title:"inspector",permalink:"/v2/en/docs/configure/app/tools/inspector"}},u={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-htmlplugin"},"tools.htmlPlugin"),"\u3002")),(0,r.kt)(i,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);