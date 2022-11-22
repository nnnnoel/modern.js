"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7770],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const o={title:"testing.transformer",sidebar_label:"transformer",sidebar_position:1},i=void 0,s={unversionedId:"configure/app/testing/transformer",id:"configure/app/testing/transformer",title:"testing.transformer",description:"- Type: 'babel-jest' | 'ts-jest'",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/testing/transformer.md",sourceDirName:"configure/app/testing",slug:"/configure/app/testing/transformer",permalink:"/v2/en/docs/configure/app/testing/transformer",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"testing.transformer",sidebar_label:"transformer",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"withMasterApp",permalink:"/v2/en/docs/configure/app/dev/with-master-app"},next:{title:"plugins",permalink:"/v2/en/docs/configure/app/plugins"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'babel-jest' | 'ts-jest'")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"babel-jest"))),(0,a.kt)("admonition",{title:"Caution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'First you need to enable the "Unit Test" function using ',(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/new"},"new")," command.")),(0,a.kt)("p",null,"Configure the compiler for source code when executing tests: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-jest"},"babel-jest")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-jest")," is used by default."),(0,a.kt)("admonition",{title:"Additional information",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Babel-jest")," can also compile TS files, but there is no type error. If you need to check the TS type when running tests, then use ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest"),".")))}u.isMDXComponent=!0}}]);