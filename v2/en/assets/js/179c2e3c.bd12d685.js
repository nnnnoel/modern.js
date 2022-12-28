"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4648],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const a={toc:[{value:"Example",id:"example",level:4}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Record<string, boolean | string>")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"Set different script tag inject positions for different pages."),(0,i.kt)("p",null,"The usage is same as ",(0,i.kt)("inlineCode",{parentName:"p"},"inject"),', and you can use the "entry name" as the key to set each page individually.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"injectByEntries")," will overrides the value set in ",(0,i.kt)("inlineCode",{parentName:"p"},"inject"),"."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    inject: 'head',\n    injectByEntries: {\n      foo: 'body',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"After recompiling, you will see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The script tag of the page ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," will be injected inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"body")," tag."),(0,i.kt)("li",{parentName:"ul"},"The script tag of other pages will be injected inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"head")," tag.")))}o.isMDXComponent=!0;const l={title:"html.injectByEntries",sidebar_label:"injectByEntries"},c=void 0,p={unversionedId:"configure/app/html/inject-by-entries",id:"configure/app/html/inject-by-entries",title:"html.injectByEntries",description:"This configuration is Modern.js Builder configuration, more detail can see html.injectByEntries\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/html/inject-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/inject-by-entries",permalink:"/v2/en/docs/configure/app/html/inject-by-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"html.injectByEntries",sidebar_label:"injectByEntries"},sidebar:"configsAppSidebar",previous:{title:"favicon",permalink:"/v2/en/docs/configure/app/html/favicon"},next:{title:"inject",permalink:"/v2/en/docs/configure/app/html/inject"}},s={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-injectbyentries"},"html.injectByEntries"),"\u3002")),(0,i.kt)(o,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);