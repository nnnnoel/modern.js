"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7447],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:1},o="\u4ecb\u7ecd",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/introduce",id:"guides/topic-detail/generator/plugin/api/file/introduce",title:"\u4ecb\u7ecd",description:"\u6587\u4ef6\u64cd\u4f5c API \u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u53ef\u5bf9\u5f53\u524d\u9879\u76ee\u6587\u4ef6\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7684\u64cd\u4f5c\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/introduce.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/introduce",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"AfterForged",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/hook/afterForged"},next:{title:"addHelper",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/addHelper"}},p={},c=[{value:"\u6587\u4ef6\u7c7b\u578b",id:"\u6587\u4ef6\u7c7b\u578b",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u6587\u4ef6\u64cd\u4f5c API \u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," \u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u53ef\u5bf9\u5f53\u524d\u9879\u76ee\u6587\u4ef6\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u6587\u4ef6\u64cd\u4f5c API \u76f8\u5173\u8def\u5f84\u586b\u5199\u9879\u76ee\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\uff0c\u751f\u6210\u5668\u63d2\u4ef6\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5f53\u524d\u9879\u76ee\u8def\u5f84\u524d\u7f00\u3002"),(0,i.kt)("h2",{id:"\u6587\u4ef6\u7c7b\u578b"},"\u6587\u4ef6\u7c7b\u578b"),(0,i.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u5c06\u6587\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6587\u672c\u6587\u4ef6\uff1a\u7eaf\u6587\u672c\u5185\u5bb9\u6587\u4ef6\uff0c\u53ef\u4f7f\u7528 handlebars \u8fdb\u884c\u6a21\u677f\u5904\u7406\u7684\u6587\u4ef6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a\u56fe\u7247\u3001\u97f3\u9891\u3001\u89c6\u9891\u7b49\u6587\u4ef6"))),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u53d8\u91cf\u7684 jsx \u6216 tsx \u6587\u4ef6\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5176\u8bed\u6cd5\u4e0e handlebars \u6e32\u67d3\u51b2\u7a81\uff0c\u4f1a\u9020\u6210\u6a21\u677f\u6587\u4ef6\u521b\u5efa\u5931\u8d25\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSON \u6587\u4ef6\uff1aJSON \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6587\u672c\u5217\u8868\u6587\u4ef6\uff1a\u6587\u4ef6\u7531\u884c\u6587\u672c\u7ec4\u6210\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),"\u3002"))),(0,i.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u7684\u6587\u4ef6\u64cd\u4f5c API \u5c06\u662f\u9488\u5bf9\u8fd9\u56db\u79cd\u6587\u4ef6\u7c7b\u578b\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export enum FileType {\n  Text = 'text',\n  Binary = 'binary',\n  Json = 'json',\n  TextRaw = 'textRaw',\n}\n")))}d.isMDXComponent=!0}}]);