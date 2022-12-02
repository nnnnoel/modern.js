"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[363],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(18249),i=(n(52983),n(44993));const o={title:"pages/",sidebar_position:2},r=void 0,p={unversionedId:"apis/app/hooks/src/pages",id:"apis/app/hooks/src/pages",title:"pages/",description:"Entry identifier if the application want uses file system-based routing.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/hooks/src/pages.md",sourceDirName:"apis/app/hooks/src",slug:"/apis/app/hooks/src/pages",permalink:"/v2/en/docs/apis/app/hooks/src/pages",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"pages/",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"App.[tj]sx",permalink:"/v2/en/docs/apis/app/hooks/src/app"},next:{title:"index.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/src/index_"}},s={},l=[{value:"Dynamic Routing",id:"dynamic-routing",level:3},{value:"Global Layout",id:"global-layout",level:3},{value:"Partial Layout",id:"partial-layout",level:3},{value:"404 \u8def\u7531",id:"404-\u8def\u7531",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Entry identifier if the application want uses file system-based routing."),(0,i.kt)("p",null,"When the entry is the ",(0,i.kt)("strong",{parentName:"p"},"Pages entry")," type, the files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/")," directory will be analyzed to client side routing."),(0,i.kt)("p",null,"For example, the following directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 about\n        \u2502   \u2514\u2500\u2500 index.jsx\n        \u251c\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 info.jsx\n")),(0,i.kt)("p",null,"The generated route is configured as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info' component: 'pages/info.jsx' },\n  { path: '/about', component: 'pages/about/index.jsx' }\n]\n")),(0,i.kt)("p",null,"Files match the following conditions will not be treated as routing files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"suffix is not ",(0,i.kt)("inlineCode",{parentName:"li"},".(j|t)sx?"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".d.ts")," type definition file."),(0,i.kt)("li",{parentName:"ul"},"test file suffix like ",(0,i.kt)("inlineCode",{parentName:"li"},".(test|spec|e2e).(j|t)sx?"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"it is recommended to write only the routing files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/"),", and write the business logic to the independent features directory outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/"),". In this way, most of the files in the pages directory will be routing files, and there is no need for additional filtering rules.")),(0,i.kt)("h3",{id:"dynamic-routing"},"Dynamic Routing"),(0,i.kt)("p",null,"Directories or files wrapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," are considered dynamic routing."),(0,i.kt)("p",null,"For example the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 [post]\n        \u2502   \u251c\u2500\u2500 detail.jsx\n        \u2502   \u2514\u2500\u2500 index.js\n        \u251c\u2500\u2500 users\n        \u2502   \u2514\u2500\u2500 [id].jsx\n        \u251c\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 info.jsx\n")),(0,i.kt)("p",null,"The generated route is configured as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info', component: 'pages/info.jsx' },\n  { path: '/:post/', component: 'pages/[post]/index.js' },\n  { path: '/:post/detail' components: 'pages/[post]/detail.jsx'},\n  { path: '/users/:id', components: 'pages/users/[id].jsx'}\n]\n")),(0,i.kt)("p",null,"Basis dynamic routing, it supports adding special routing suffixes ",(0,i.kt)("inlineCode",{parentName:"p"},"(*\u3001?\u3001+)"),"."),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/users/[id]*.tsx")," generate route ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/:id*")),(0,i.kt)("h3",{id:"global-layout"},"Global Layout"),(0,i.kt)("p",null,"When the entire App needs a global ",(0,i.kt)("inlineCode",{parentName:"p"},"layout"),", it can be achieved through ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/_app.tsx"),", which as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport UserLayout from 'xxxx';\n\nexport default const App = ({Component, ...pageProps}:{ Component: React.ComponentType}) => {\n  return (\n    <UserLayout>\n      <Component {...pageProps} />\n    </UserLayout>\n  );\n}\n")),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," is the component to which the route is accessed."),(0,i.kt)("p",null,"For example the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 a\n    \u2502   \u251c\u2500\u2500 b\n    \u2502   \u2502   \u2514\u2500\u2500 index.js\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 index.js\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"access ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/index.js"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"access ",(0,i.kt)("inlineCode",{parentName:"li"},"/a"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/a/index.js"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"access ",(0,i.kt)("inlineCode",{parentName:"li"},"/a/b"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/a/b/index.js"),"\u3002")),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"preserve the state of the global layout when the page changes."),(0,i.kt)("li",{parentName:"ul"},"add global css."),(0,i.kt)("li",{parentName:"ul"},"handle ComponentDidCatch error"),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"defineConfig"),"(/docs/apis/app/runtime/app/define-config) dynamic configuration runtime."))),(0,i.kt)("h3",{id:"partial-layout"},"Partial Layout"),(0,i.kt)("p",null,"When developing an App, where sub routes under the same route may share the layout."),(0,i.kt)("p",null,"For this scene, Modern.js convention, when there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"_layout.js")," in the directory, the routes can shared this layout."),(0,i.kt)("p",null,"For example the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 a\n    \u2502   \u251c\u2500\u2500 b\n    \u2502   \u2502   \u2514\u2500\u2500 index.js\n    \u2502   \u251c\u2500\u2500 _layout.js\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 index.js\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/a/_layout.js"',title:'"pages/a/_layout.js"'},"import React from 'react';\n\nconst ALayout = ({ Component, ...pageProps }) => {\n  return <Component {...pageProps} />;\n};\nexport default ALayout;\n")),(0,i.kt)("p",null,"The Component props is the specific route, for example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"access ",(0,i.kt)("inlineCode",{parentName:"li"},"/a"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/a/index.js"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"li"},"/a/b"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/a/b/index.js"),"\u3002")),(0,i.kt)("p",null,"In this way, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/a/_layout.js")," to display the routing common layout in the ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," directory."),(0,i.kt)("h3",{id:"404-\u8def\u7531"},"404 \u8def\u7531"),(0,i.kt)("p",null,"The convention ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/404.[tj]sx")," is the default 404 route."),(0,i.kt)("p",null,"For example the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 user.js\n        \u251c\u2500\u2500 home.js\n        \u251c\u2500\u2500 404.js\n")),(0,i.kt)("p",null,"the generated route is configured is as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[\n { path: '/user', component: './pages/user.js'},\n { path: '/home', component: './pages/home.js' },\n { path: '*', component: './pages/404.js'}\n]\n")),(0,i.kt)("p",null,"All unmatched routes will match to ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/404.[tj]s"),"\u3002"))}c.isMDXComponent=!0}}]);