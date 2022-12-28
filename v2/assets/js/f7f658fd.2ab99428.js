"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2502],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(18249),i=(n(52983),n(44993));const o={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Record<string, boolean | string>")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"\u7528\u4e8e\u5728\u591a\u9875\u9762\u7684\u573a\u666f\u4e0b\uff0c\u4e3a\u4e0d\u540c\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684 script \u6807\u7b7e\u63d2\u5165\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6574\u4f53\u7528\u6cd5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"inject")," \u4e00\u81f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u300c\u5165\u53e3\u540d\u79f0\u300d\u4f5c\u4e3a key \uff0c\u5bf9\u5404\u4e2a\u9875\u9762\u8fdb\u884c\u5355\u72ec\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"injectByEntries")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"inject"),"\uff0c\u56e0\u6b64\u4f1a\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"inject")," \u4e2d\u8bbe\u7f6e\u7684\u503c\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    inject: 'head',\n    injectByEntries: {\n      foo: 'body',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u540e\uff0c\u53ef\u4ee5\u770b\u5230:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762 ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," \u7684 script \u6807\u7b7e\u4f1a\u63d2\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"body")," \u6807\u7b7e\u5185\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u9875\u9762\u7684 script \u6807\u7b7e\u4f1a\u63d2\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"head")," \u6807\u7b7e\u5185\u3002")))}a.isMDXComponent=!0;const l={title:"html.injectByEntries",sidebar_label:"injectByEntries"},p=void 0,c={unversionedId:"configure/app/html/inject-by-entries",id:"configure/app/html/inject-by-entries",title:"html.injectByEntries",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.injectByEntries\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/inject-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/inject-by-entries",permalink:"/v2/docs/configure/app/html/inject-by-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"html.injectByEntries",sidebar_label:"injectByEntries"},sidebar:"configsAppSidebar",previous:{title:"favicon",permalink:"/v2/docs/configure/app/html/favicon"},next:{title:"inject",permalink:"/v2/docs/configure/app/html/inject"}},u={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-injectbyentries"},"html.injectByEntries"),"\u3002")),(0,i.kt)(a,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);