"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5098],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(52983);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=p,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(18249),p=(n(52983),n(44993));const o={title:"App.[tj]sx",sidebar_position:1},a=void 0,i={unversionedId:"apis/app/hooks/src/app",id:"apis/app/hooks/src/app",title:"App.[tj]sx",description:"Entry identifier if App want control route by code.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/hooks/src/app.md",sourceDirName:"apis/app/hooks/src",slug:"/apis/app/hooks/src/app",permalink:"/v2/en/docs/apis/app/hooks/src/app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"App.[tj]sx",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"Convention",permalink:"/v2/en/docs/apis/app/hooks/"},next:{title:"routes/",permalink:"/v2/en/docs/apis/app/hooks/src/routes"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Entry identifier if App want control route by code."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"App.[tj]sx")," is not the actual App entry, Modern.js will auto generate the entry file, the content is roughly as follows:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport { immer, effects, autoActions, devtools } from '@modern-js/runtime/model';\n\nconst createStatePlugins = (config) => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n}\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     state({...{plugins: createStatePlugins(true)}, ...App?.config?.state}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper\n}\nAppWrapper = render();\nexport default AppWrapper;;\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"In multi-entry App\uff0ceach entry can have a ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),", for detail, see ",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries"},"Entry"),".")))}u.isMDXComponent=!0}}]);