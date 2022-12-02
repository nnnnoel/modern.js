"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5615],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(l,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const o={toc:[{value:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",id:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",level:3},{value:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",id:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",level:3}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type LazyCompilationOptions =\n  | boolean\n  | {\n      // \u662f\u5426\u4e3a\u5f02\u6b65\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\n      imports?: boolean;\n      // \u662f\u5426\u4e3a\u5165\u53e3\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\n      entries?: boolean;\n    };\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u7528\u4e8e\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\uff08\u5373\u6309\u9700\u7f16\u8bd1\uff09\u7684\u80fd\u529b\u3002\u5f53\u5f00\u542f\u6b64\u914d\u7f6e\u9879\u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u5ef6\u8fdf\u7f16\u8bd1\uff0c\u63d0\u5347\u9879\u76ee\u7684\u7f16\u8bd1\u542f\u52a8\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5ef6\u8fdf\u7f16\u8bd1\u53ea\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u751f\u6548\u3002"),(0,a.kt)("h3",{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757"},"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757"),(0,a.kt)("p",null,"\u5ef6\u8fdf\u7f16\u8bd1 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},"Dynamic Import")," \u5f15\u5165\u7684\u5f02\u6b65\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," \u9009\u9879\u540e\uff0c\u6240\u6709\u7684\u5f02\u6b65\u6a21\u5757\u53ea\u6709\u5728\u88ab\u8bf7\u6c42\u65f6\u624d\u89e6\u53d1\u7f16\u8bd1\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u4e00\u4e2a\u5355\u9875\u5e94\u7528\uff08SPA\uff09\uff0c\u5e76\u901a\u8fc7 Dynamic Import \u8fdb\u884c\u4e86\u8def\u7531\u62c6\u5206\uff0c\u90a3\u4e48\u4f1a\u6709\u660e\u663e\u7684\u7f16\u8bd1\u63d0\u901f\u6548\u679c\u3002"),(0,a.kt)("h3",{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757"},"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757"),(0,a.kt)("p",null,"\u9664\u4e86\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u540c\u65f6\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u548c\u5f02\u6b65\u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n")),(0,a.kt)("p",null,"\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"entries")," \u9009\u9879\u540e\uff0c\u5f53\u542f\u52a8\u7f16\u8bd1\u65f6\uff0c\u4e0d\u4f1a\u7f16\u8bd1\u6240\u6709\u7684\u9875\u9762\uff0c\u800c\u662f\u4ec5\u5728\u8def\u7531\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u9875\u9762\u65f6\uff0c\u624d\u5bf9\u8be5\u9875\u9762\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u65f6\uff0c\u6709\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u9002\u7528\u4e8e\u591a\u9875\u5e94\u7528\uff08MPA\uff09\uff0c\u5bf9\u5355\u9875\u5e94\u7528\uff08SPA\uff09\u6ca1\u6709\u4f18\u5316\u6548\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\u65f6\uff0c\u7531\u4e8e\u8981\u7b49\u5f85\u9875\u9762\u7f16\u8bd1\u5b8c\u6210\uff0c\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4\u7684\u767d\u5c4f\u3002")),(0,a.kt)("admonition",{title:"\u7981\u7528\u62c6\u5305\u89c4\u5219",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\u65f6\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7f16\u8bd1\u7ed3\u679c\u6b63\u5e38\uff0cBuilder \u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7981\u7528\u62c6\u5305\u89c4\u5219\u3002\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\uff0c\u4f46\u4f1a\u5bfc\u81f4\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\u6709\u4e00\u5b9a\u5dee\u5f02\u3002")))}i.isMDXComponent=!0;const p={title:"experiments.lazyCompilation",sidebar_label:"lazyCompilation"},l=void 0,c={unversionedId:"configure/app/experiments/lazy-compilation",id:"configure/app/experiments/lazy-compilation",title:"experiments.lazyCompilation",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 experiments.lazyCompilation\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/experiments/lazy-compilation.md",sourceDirName:"configure/app/experiments",slug:"/configure/app/experiments/lazy-compilation",permalink:"/v2/docs/configure/app/experiments/lazy-compilation",draft:!1,tags:[],version:"current",frontMatter:{title:"experiments.lazyCompilation",sidebar_label:"lazyCompilation"},sidebar:"configsAppSidebar",previous:{title:"webpack",permalink:"/v2/docs/configure/app/tools/webpack"},next:{title:"appIcon",permalink:"/v2/docs/configure/app/html/app-icon"}},m={},u=[],s={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-experiments.html#experiments-lazycompilation"},"experiments.lazyCompilation"),"\u3002")),(0,a.kt)(i,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);