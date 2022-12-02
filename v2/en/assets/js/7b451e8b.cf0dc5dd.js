"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7827],{44993:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,d=u["".concat(o,".").concat(f)]||u[f]||c[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var n=r(18249),a=(r(52983),r(44993));const i={toc:[{value:"Example",id:"example",level:4}]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"Set different template parameters for different pages."),(0,a.kt)("p",null,"The usage is same as ",(0,a.kt)("inlineCode",{parentName:"p"},"templateParameters"),', and you can use the "entry name" as the key to set each page individually.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"templateParametersByEntries")," will overrides the value set in ",(0,a.kt)("inlineCode",{parentName:"p"},"templateParameters"),"."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    templateParametersByEntries: {\n      foo: {\n        type: 'a',\n      },\n      bar: {\n        type: 'b',\n      },\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const p={title:"html.templateParametersByEntries",sidebar_label:"templateParametersByEntries"},o=void 0,m={unversionedId:"configure/app/html/template-parameters-by-entries",id:"configure/app/html/template-parameters-by-entries",title:"html.templateParametersByEntries",description:"This configuration is Modern.js Builder configuration, more detail can see html.templateParametersByEntries\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/html/template-parameters-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/template-parameters-by-entries",permalink:"/v2/en/docs/configure/app/html/template-parameters-by-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"html.templateParametersByEntries",sidebar_label:"templateParametersByEntries"},sidebar:"configsAppSidebar",previous:{title:"templateByEntries",permalink:"/v2/en/docs/configure/app/html/template-by-entries"},next:{title:"templateParameters",permalink:"/v2/en/docs/configure/app/html/template-parameters"}},s={},c=[],u={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-templateparametersbyentries"},"html.templateParametersByEntries"),"\u3002")),(0,a.kt)(l,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);