"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7856],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:2},o="MWA",l={unversionedId:"guides/topic-detail/generator/config/mwa",id:"guides/topic-detail/generator/config/mwa",title:"MWA",description:"Project creation",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/config/mwa.md",sourceDirName:"guides/topic-detail/generator/config",slug:"/guides/topic-detail/generator/config/mwa",permalink:"/v2/en/docs/guides/topic-detail/generator/config/mwa",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Generator Configuration",permalink:"/v2/en/docs/guides/topic-detail/generator/config/common"},next:{title:"Module",permalink:"/v2/en/docs/guides/topic-detail/generator/config/module"}},p={},u=[{value:"Project creation",id:"project-creation",level:2},{value:"New Command",id:"new-command",level:2},{value:"actionType",id:"actiontype",level:3},{value:"element",id:"element",level:3},{value:"name",id:"name",level:4},{value:"framework",id:"framework",level:4},{value:"function",id:"function",level:3},{value:"BFF parameters",id:"bff-parameters",level:4},{value:"bffType",id:"bfftype",level:5},{value:"framework",id:"framework-1",level:5}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mwa"},"MWA"),(0,a.kt)("h2",{id:"project-creation"},"Project creation"),(0,a.kt)("p",null,"When creating a project, the configuration used by ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," parameter, and the configuration used when modifying and adding input in the generator plugin."),(0,a.kt)("p",null,"The application project creation parameters are ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common"},"Generator Configuration"),"."),(0,a.kt)("h2",{id:"new-command"},"New Command"),(0,a.kt)("p",null,"The new command configuration in the application project can be used through the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," parameter configuration when executing the new command, or when creating elements and enabling functions in the generator plugin."),(0,a.kt)("h3",{id:"actiontype"},"actionType"),(0,a.kt)("p",null,"The action type (actionType) of the New command , the type supports two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"element: reate engineering elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"function: enable function"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This parameter is not required when using the enable function and creating elements in the generator plugin, it is automatically added in the generator plugin.")),(0,a.kt)("h3",{id:"element"},"element"),(0,a.kt)("p",null,"Element name (element), supports two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create an application entry(entry)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create customized server dir(server)"))),(0,a.kt)("p",null,"These two options also need to be used in conjunction with the specific configuration, which is described as follows:"),(0,a.kt)("h4",{id:"name"},"name"),(0,a.kt)("p",null,"Entry name (name), character ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,a.kt)("h4",{id:"framework"},"framework"),(0,a.kt)("p",null,"Customized server runtime framework(framework)\uff0csupports two options:\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Express(express)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Koa(koa)"))),(0,a.kt)("h3",{id:"function"},"function"),(0,a.kt)("p",null,"Optional function name (function), supports the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tailwind CSS(tailwindcss)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"BFF(bff)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSG(ssg)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Micro Frontend(micro_frontend)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unit Test / Integration Test(test)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Storybook(mwa_storybook)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UA-based Polyfill Feature'(polyfill)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Global Proxy(proxy)"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bff")," also need to be used in conjunction with configuration, as described below:"),(0,a.kt)("h4",{id:"bff-parameters"},"BFF parameters"),(0,a.kt)("h5",{id:"bfftype"},"bffType"),(0,a.kt)("p",null,"BFF type (bffType), supports two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Function mode(function)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Framework mode(framework)"))),(0,a.kt)("h5",{id:"framework-1"},"framework"),(0,a.kt)("p",null,"BFF runtime framework (framework)\uff0csupports two options\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Express(express)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Koa(koa)"))))}m.isMDXComponent=!0}}]);