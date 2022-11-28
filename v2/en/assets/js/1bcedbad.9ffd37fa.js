"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[212],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:7},o="setInputValue",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/setInputValue",id:"guides/topic-detail/generator/plugin/api/input/setInputValue",title:"setInputValue",description:"Sets the input default value.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/input/setInputValue.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/setInputValue",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/setInputValue",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"setInput",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/setInput"},next:{title:"locale",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/info/locale"}},u={},l=[{value:"Example",id:"example",level:2}],s={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setinputvalue"},"setInputValue"),(0,a.kt)("p",null,"Sets the input default value."),(0,a.kt)("p",null,"The method is available directly on the context."),(0,a.kt)("p",null,"Its type is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInputValue({\n  moduleRunWay: 'no',\n});\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This method only supports setting the configuration parameter value corresponding to the project solution integrated by the generator plugin, and does not support setting the project solution type (solution) and project scene (scenes). These two configurations can be set by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," parameter at execution default value.")))}c.isMDXComponent=!0}}]);