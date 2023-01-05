"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2057],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||a;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(18249),r=(n(29901),n(57522));const a={sidebar_label:"polyfill"},o="output.polyfill",i={unversionedId:"apis/app/config/output/polyfill",id:"apis/app/config/output/polyfill",title:"output.polyfill",description:"- \u7c7b\u578b\uff1a 'entry' | 'usage' | 'ua' | 'off'",source:"@site/docs/apis/app/config/output/polyfill.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/polyfill",permalink:"/docs/apis/app/config/output/polyfill",tags:[],version:"current",frontMatter:{sidebar_label:"polyfill"},sidebar:"apisAppSidebar",previous:{title:"path",permalink:"/docs/apis/app/config/output/path"},next:{title:"ssg",permalink:"/docs/apis/app/config/output/ssg"}},p={},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"entry",id:"entry",level:3},{value:"usage",id:"usage",level:3},{value:"ua",id:"ua",level:3},{value:"off",id:"off",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:s};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outputpolyfill"},"output.polyfill"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"'entry' | 'usage' | 'ua' | 'off'")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"'entry'"))),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u53ef\u4ee5\u914d\u7f6e Polyfill \u7684\u6ce8\u5165\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.kt)("h3",{id:"entry"},"entry"),(0,r.kt)("p",null,"\u6839\u636e\u9879\u76ee\u7684 Browserslist \u914d\u7f6e\u8303\u56f4\uff0c\u81ea\u52a8\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165\u6240\u9700\u7684 Polyfill \u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u7b49\u540c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useBuiltIns: 'entry'")," \u9009\u9879\u3002"),(0,r.kt)("h3",{id:"usage"},"usage"),(0,r.kt)("p",null,"\u6839\u636e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u8bed\u6cd5\uff0c\u6309\u9700\u6ce8\u5165\u6240\u9700\u7684 Polyfill \u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u7b49\u540c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useBuiltIns: 'usage'")," \u9009\u9879\u3002"),(0,r.kt)("h3",{id:"ua"},"ua"),(0,r.kt)("p",null,"\u57fa\u4e8e Modern.js \u5185\u7f6e\u670d\u52a1\u5668\uff0c\u6839\u636e\u5f53\u524d\u8bf7\u6c42\u7684 UA \u4fe1\u606f\uff0c\u52a8\u6001\u4e0b\u53d1 Polyfill \u4ee3\u7801\uff0c"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u524d\uff0c\u9700\u8981\u4f7f\u7528\u5fae\u751f\u6210\u5668\u5f00\u542f\u57fa\u4e8e UA \u7684 Polyfill \u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"off"},"off"),(0,r.kt)("p",null,"\u5173\u95ed Polyfill\uff0c\u4e0d\u6ce8\u5165\u4efb\u4f55 Polyfill \u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u9700\u8981\u81ea\u884c\u4fdd\u8bc1\u4ee3\u7801\u7684\u517c\u5bb9\u6027\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5173\u4e8e Polyfill \u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u6bd4\u5982\u914d\u7f6e\u9879\u4e4b\u95f4\u7684\u533a\u522b\u3001UA \u6a21\u5f0f\u3001Browserslist \u914d\u7f6e\u7b49\uff0c\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/usages/compatibility"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027"),"\u3002"))),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    polyfill: 'usage',\n  },\n});\n")))}f.isMDXComponent=!0}}]);