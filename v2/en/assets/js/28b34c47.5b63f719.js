"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5254],{44993:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>f});var n=i(52983);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(i),f=r,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return i?n.createElement(g,a(a({ref:t},s),{},{components:i})):n.createElement(g,a({ref:t},s))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},16549:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(18249),r=(i(52983),i(44993));const o={sidebar_position:2},a="isFileExit",l={unversionedId:"guides/topic-detail/generator/plugin/api/info/isFileExit",id:"guides/topic-detail/generator/plugin/api/info/isFileExit",title:"isFileExit",description:"Determine if the file exists.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/info/isFileExit.md",sourceDirName:"guides/topic-detail/generator/plugin/api/info",slug:"/guides/topic-detail/generator/plugin/api/info/isFileExit",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/info/isFileExit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"locale",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/info/locale"},next:{title:"readDir",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/info/readDir"}},p={},c=[{value:"fileName",id:"filename",level:2}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"isfileexit"},"isFileExit"),(0,r.kt)("p",null,"Determine if the file exists."),(0,r.kt)("p",null,"The method is available directly on the context."),(0,r.kt)("p",null,"Its type is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  isFileExit: (fileName: string) => Promise<boolean>;\n  ...\n}\n")),(0,r.kt)("h2",{id:"filename"},"fileName"),(0,r.kt)("p",null,"The file name or file path that needs to be judged is based on the relative path of the created project."))}u.isMDXComponent=!0}}]);