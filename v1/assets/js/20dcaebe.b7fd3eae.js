"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8573],{57522:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(29901);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(t),k=p,c=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return t?a.createElement(c,r(r({ref:n},d),{},{components:t})):a.createElement(c,r({ref:n},d))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var m=2;m<l;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=t(18249),p=(t(29901),t(57522));const l={sidebar_position:3},r="\u53d1\u5e03\u6b63\u5f0f\u7248\u672c",i={unversionedId:"guides/features/changesets/release",id:"guides/features/changesets/release",title:"\u53d1\u5e03\u6b63\u5f0f\u7248\u672c",description:"\u53d1\u7248\u6b63\u5f0f\u7248\u672c\u65f6\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684 changeset \u8fdb\u884c\u76f8\u5173\u5305\u7248\u672c\u53f7\u5347\u7ea7\uff0c\u5e76\u6267\u884c publish \u547d\u4ee4\u53d1\u5e03\u5230 NPM \u4e0a\u3002",source:"@site/docs/guides/features/changesets/release.md",sourceDirName:"guides/features/changesets",slug:"/guides/features/changesets/release",permalink:"/v1/docs/guides/features/changesets/release",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u6dfb\u52a0\u4e00\u4e2a changeset",permalink:"/v1/docs/guides/features/changesets/add"},next:{title:"\u53d1\u5e03\u9884\u53d1\u5e03\u7248\u672c",permalink:"/v1/docs/guides/features/changesets/release-pre"}},o={},m=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4",level:4},{value:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\uff1a",id:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4",level:4},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3 NPM\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3-npm",level:4},{value:"push \u5bf9\u5e94\u7684 tag \u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93\uff1a",id:"push-\u5bf9\u5e94\u7684-tag-\u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93",level:4},{value:"Monorepo \u5de5\u7a0b\u65b9\u6848",id:"monorepo-\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4-1",level:4},{value:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\uff1a",id:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4-1",level:4},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3 NPM\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3-npm-1",level:4},{value:"push \u5bf9\u5e94\u7684 tag \u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93\uff1a",id:"push-\u5bf9\u5e94\u7684-tag-\u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93-1",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"bump \u547d\u4ee4\u53c2\u6570",id:"bump-\u547d\u4ee4\u53c2\u6570",level:3},{value:"release \u547d\u4ee4\u53c2\u6570",id:"release-\u547d\u4ee4\u53c2\u6570",level:3},{value:"\u5347\u7ea7\u7248\u672c\u7b56\u7565",id:"\u5347\u7ea7\u7248\u672c\u7b56\u7565",level:2},{value:"dependencies \u6216\u8005 devDependencies \u4f9d\u8d56",id:"dependencies-\u6216\u8005-devdependencies-\u4f9d\u8d56",level:3},{value:"patch \u7248\u672c\u4f9d\u8d56\u53ea\u5347\u7ea7\u81ea\u8eab",id:"patch-\u7248\u672c\u4f9d\u8d56\u53ea\u5347\u7ea7\u81ea\u8eab",level:4},{value:"major / minor \u7248\u672c\u81ea\u8eab\u5347\u7ea7 major \u6216\u8005 minor \u7248\u672c\u53f7\uff0c\u4f9d\u8d56\u5305\u5347\u7ea7 patch \u7248\u672c\u53f7",id:"major--minor-\u7248\u672c\u81ea\u8eab\u5347\u7ea7-major-\u6216\u8005-minor-\u7248\u672c\u53f7\u4f9d\u8d56\u5305\u5347\u7ea7-patch-\u7248\u672c\u53f7",level:4},{value:"peerDependencies \u4f9d\u8d56",id:"peerdependencies-\u4f9d\u8d56",level:3},{value:"patch \u7248\u672c\u4f9d\u8d56\u81ea\u8eab\u548c\u4f9d\u8d56\u5305\u90fd\u5347\u7ea7 patch \u7248\u672c\u53f7",id:"patch-\u7248\u672c\u4f9d\u8d56\u81ea\u8eab\u548c\u4f9d\u8d56\u5305\u90fd\u5347\u7ea7-patch-\u7248\u672c\u53f7",level:4},{value:"major / minor \u7248\u672c\u81ea\u8eab\u5347\u7ea7 major \u6216\u8005 minor \u7248\u672c\u53f7\uff0c\u4f9d\u8d56\u5305\u5347\u7ea7 major \u7248\u672c\u53f7",id:"major--minor-\u7248\u672c\u81ea\u8eab\u5347\u7ea7-major-\u6216\u8005-minor-\u7248\u672c\u53f7\u4f9d\u8d56\u5305\u5347\u7ea7-major-\u7248\u672c\u53f7",level:4},{value:"\u4fee\u6539 peerDependencies \u7684\u5347\u7ea7\u7b56\u7565",id:"\u4fee\u6539-peerdependencies-\u7684\u5347\u7ea7\u7b56\u7565",level:4}],d={toc:m};function s(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u53d1\u5e03\u6b63\u5f0f\u7248\u672c"},"\u53d1\u5e03\u6b63\u5f0f\u7248\u672c"),(0,p.kt)("p",null,"\u53d1\u7248\u6b63\u5f0f\u7248\u672c\u65f6\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684 changeset \u8fdb\u884c\u76f8\u5173\u5305\u7248\u672c\u53f7\u5347\u7ea7\uff0c\u5e76\u6267\u884c publish \u547d\u4ee4\u53d1\u5e03\u5230 NPM \u4e0a\u3002"),(0,p.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u793a\u4f8b\u547d\u4ee4\u90fd\u4ee5 pnpm \u4f5c\u4e3a\u5305\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u8bf7\u6309\u9700\u6c42\u8fdb\u884c\u66ff\u6362\u3002"))),(0,p.kt)("h3",{id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"),(0,p.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run bump\n")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-module-bump.png",alt:"\u6267\u884c bump \u547d\u4ee4"})),(0,p.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u65f6\uff0cchangeset \u4f1a\u81ea\u52a8\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5220\u9664 ",(0,p.kt)("inlineCode",{parentName:"p"},".changesets")," \u76ee\u5f55\u4e0b\u7684\u6240\u6709 changeset \u6587\u4ef6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6839\u636e changeset \u4fe1\u606f\u5347\u7ea7\u8be5\u5305\u7248\u672c\u53f7\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u6839\u76ee\u5f55\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," \u6587\u4ef6\u4e2d\u5199\u5165 Changelog \u4fe1\u606f\uff0c\u6587\u4ef6\u4e0d\u5b58\u5728\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u3002"))),(0,p.kt)("h4",{id:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4"},"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "release: bump package"\n')),(0,p.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3-npm"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3 NPM\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run release\n")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-module-release.png",alt:"\u6267\u884c release \u547d\u4ee4"})),(0,p.kt)("h4",{id:"push-\u5bf9\u5e94\u7684-tag-\u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93"},"push \u5bf9\u5e94\u7684 tag \u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"git push --follow-tags\n")),(0,p.kt)("h3",{id:"monorepo-\u5de5\u7a0b\u65b9\u6848"},"Monorepo \u5de5\u7a0b\u65b9\u6848"),(0,p.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4-1"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run bump\n")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-monorepo-bump.png",alt:"\u6267\u884c bump \u547d\u4ee4"})),(0,p.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u65f6\uff0cchangeset \u4f1a\u81ea\u52a8\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5220\u9664 ",(0,p.kt)("inlineCode",{parentName:"p"},".changesets")," \u76ee\u5f55\u4e0b\u7684\u6240\u6709 changeset \u6587\u4ef6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6839\u636e changeset \u4fe1\u606f\u5347\u7ea7\u76f8\u5173\u5305\u7684\u7248\u672c\u53f7\uff0c\u9664\u4e86\u663e\u793a\u5199\u5165 changeset \u7684\u5305\uff0c\u6267\u884c\u547d\u4ee4\u65f6\u8fd8\u4f1a\u5c06 Monorepo \u4e2d\u6240\u6709\u7684\u5305\u8fdb\u884c\u4f9d\u8d56\u5173\u7cfb\u5206\u6790\uff0c\u5982\u679c\u9700\u8981\u5347\u7ea7\uff0c\u4e5f\u4f1a\u5bf9\u5e94\u7684\u81ea\u52a8\u5347\u7ea7\u7248\u672c\u53f7\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u9700\u8981\u5347\u7ea7\u7684\u5305\u76ee\u5f55\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," \u6587\u4ef6\u4e2d\u5199\u5165 Changelog \u4fe1\u606f\uff0c\u6587\u4ef6\u4e0d\u5b58\u5728\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u3002"))),(0,p.kt)("h4",{id:"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4-1"},"\u786e\u8ba4\u5e76\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\uff1a"),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u9700\u786e\u8ba4\u81ea\u52a8\u5347\u7ea7\u7684\u7248\u672c\u53f7\u662f\u5426\u7b26\u5408\u9884\u671f\uff0c\u5982\u679c\u9700\u8981\u4e86\u89e3\u7248\u672c\u5347\u7ea7\u7b56\u7565\uff0c\u8bf7\u67e5\u770b",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/features/changesets/release#%E5%8D%87%E7%BA%A7%E7%89%88%E6%9C%AC%E7%AD%96%E7%95%A5"},"\u5347\u7ea7\u7248\u672c\u7b56\u7565"),"\u3002"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "release: bump package"\n')),(0,p.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3-npm-1"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53d1\u5e03\u5305\u81f3 NPM\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run release\n")),(0,p.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u5c06\u4f1a\u4f9d\u6b21\u5224\u65ad Monorepo \u4e2d\u6240\u6709\u7684 packages \u7684\u7248\u672c\u662f\u5426\u5728 NPM \u4e2d\u5b58\u5728\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5c06\u4f1a\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"publish")," \u547d\u4ee4\u53d1\u5e03\u3002"),(0,p.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u5f53 Monorepo \u4e2d\u5305\u4e4b\u95f4\u4f9d\u8d56\u5173\u7cfb\u4f7f\u7528 workspace \u58f0\u660e\u65f6\uff0c\u6ce8\u610f\u4e0d\u8981\u76f4\u63a5\u5728 package \u5bf9\u5e94\u7684\u5b50\u76ee\u5f55\u76f4\u63a5\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"npm publish")," \u53d1\u5e03 package\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"relesae")," \u547d\u4ee4\u5728\u53d1\u5e03\u65f6\u5c06\u4f1a\u81ea\u52a8\u53bb\u9664 workspace \u58f0\u660e\uff0c\u786e\u4fdd NPM \u5305\u53d1\u5e03\u4e4b\u540e\u53ef\u7528\u3002"))),(0,p.kt)("h4",{id:"push-\u5bf9\u5e94\u7684-tag-\u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93-1"},"push \u5bf9\u5e94\u7684 tag \u4fe1\u606f\u81f3\u8fdc\u7a0b\u4ed3\u5e93\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"git push --follow-tags\n")),(0,p.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,p.kt)("h3",{id:"bump-\u547d\u4ee4\u53c2\u6570"},"bump \u547d\u4ee4\u53c2\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--snapshot")," \u751f\u6210\u57fa\u4e8e\u65f6\u95f4\u6233\u7684\u7248\u672c\u53f7\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run bump -- --snapshot canary\n")),(0,p.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5bf9\u5e94\u7684\u5347\u7ea7\u7248\u672c\u53f7\u5c06\u4f1a\u53d8\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"0.0.0-canary-20220622092823")," \u7684\u5f62\u5f0f\uff0c\u5176\u4e2d canary \u4e3a snapshot \u914d\u7f6e\u7684\u6807\u8bb0\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u5c06\u76f4\u63a5\u751f\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"0.0.0-20220622092823")," \u7684\u5f62\u5f0f\u3002"),(0,p.kt)("p",null,"\u8be5\u53c2\u6570\u4e3b\u8981\u7528\u4e8e\u53d1\u5e03\u4e34\u65f6\u6d4b\u8bd5\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u4ee3\u7801\u63d0\u4ea4\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--ignore")," \u53d1\u5e03\u65f6\u624b\u52a8\u5ffd\u7565\u90e8\u5206\u5305\u3002")),(0,p.kt)("p",null,"\u4f8b\u5982\u672c\u6b21\u53d1\u5e03\u4f60\u9700\u8981\u5ffd\u7565 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u5305\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run bump -- --ignore module-2\n")),(0,p.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u5ffd\u7565 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u5305\u7684\u66f4\u65b0\u3002\u6ce8\u610f\u5982\u679c\u5b58\u5728\u5305\u4f9d\u8d56 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c\u9700\u8981\u5c06\u5bf9\u5e94\u5305\u4e5f\u52a0\u5165\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"ignore")," \u53c2\u6570\u4e2d\uff0c\u5426\u5219 ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u5c06\u6267\u884c\u5931\u8d25\u3002"),(0,p.kt)("p",null,"\u52a0\u5165\u591a\u4e2a\u5305\u7684\u4f7f\u7528\u59ff\u52bf\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run bump -- --ignore module-2 --ignore module-3\n")),(0,p.kt)("h3",{id:"release-\u547d\u4ee4\u53c2\u6570"},"release \u547d\u4ee4\u53c2\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--otp")," \u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"npm token")," \u6267\u884c relesae \u547d\u4ee4\u53d1\u5e03\u5bf9\u5e94\u5305")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run relese -- --otp <token>\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--tag")," \u672c\u5730\u53d1\u5e03\u4f7f\u7528\u7279\u5b9a\u7684 tag\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"latest"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run release -- --tag <tag>\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--ignore-scripts")," \u53d1\u5e03\u65f6\u5ffd\u7565 npm scripts\u3002")),(0,p.kt)("p",null,"\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"publish")," \u547d\u4ee4\u65f6\uff0cnpm \u4f1a\u81ea\u52a8\u89e6\u53d1\u5f88\u591a\u547d\u4ee4\uff0c\u6bd4\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"prepare"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"prepublish"),"\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e9b\u547d\u4ee4\u6267\u884c\u3002\u8be5\u53c2\u6570\u4ec5\u652f\u6301\u5728\u4f7f\u7528 pnpm \u7684 Monorepo \u4e2d\u4f7f\u7528\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run release -- --ignore-scripts\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"--no-git-checks")," \u53d1\u5e03\u65f6\u5ffd\u7565\u68c0\u67e5\u5f53\u524d\u5206\u652f\u3002")),(0,p.kt)("p",null,"\u6267\u884c\u53d1\u5e03\u547d\u4ee4\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u68c0\u67e5\u5f53\u524d\u5206\u652f\u662f\u5426\u4e3a\u53d1\u5e03\u5206\u652f\uff0c\u662f\u5426\u5b58\u5728\u672a\u63d0\u4ea4\u53d8\u66f4\u7b49\u7b49\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u53ef\u4ee5\u5ffd\u7565 git \u76f8\u5173\u68c0\u67e5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run release -- --no-git-checks\n")),(0,p.kt)("h2",{id:"\u5347\u7ea7\u7248\u672c\u7b56\u7565"},"\u5347\u7ea7\u7248\u672c\u7b56\u7565"),(0,p.kt)("h3",{id:"dependencies-\u6216\u8005-devdependencies-\u4f9d\u8d56"},"dependencies \u6216\u8005 devDependencies \u4f9d\u8d56"),(0,p.kt)("h4",{id:"patch-\u7248\u672c\u4f9d\u8d56\u53ea\u5347\u7ea7\u81ea\u8eab"},"patch \u7248\u672c\u4f9d\u8d56\u53ea\u5347\u7ea7\u81ea\u8eab"),(0,p.kt)("p",null,"\u4f8b\u5982\u5b58\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,p.kt)("p",null,"Monorepo \u4e2d\u5b58\u5728\u4e24\u4e2a\u5305\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\u5b58\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u7684 changeset \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"patch")," \u7248\u672c\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u6267\u884c bump \u547d\u4ee4\u540e\u5c06\u53ea\u4f1a\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 patch \u7248\u672c\u53f7\u3002"),(0,p.kt)("h4",{id:"major--minor-\u7248\u672c\u81ea\u8eab\u5347\u7ea7-major-\u6216\u8005-minor-\u7248\u672c\u53f7\u4f9d\u8d56\u5305\u5347\u7ea7-patch-\u7248\u672c\u53f7"},"major / minor \u7248\u672c\u81ea\u8eab\u5347\u7ea7 major \u6216\u8005 minor \u7248\u672c\u53f7\uff0c\u4f9d\u8d56\u5305\u5347\u7ea7 patch \u7248\u672c\u53f7"),(0,p.kt)("p",null,"\u4f8b\u5982\u5b58\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,p.kt)("p",null,"Monorepo \u4e2d\u5b58\u5728\u4e24\u4e2a\u5305\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u7684 dependencies \u4e2d\u5b58\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"module-1"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u7684 changeset \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 minor \u7248\u672c\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u6267\u884c bump \u547d\u4ee4\u540e ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u4f1a\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u7248\u672c\u53f7\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module -2")," \u4f1a\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"patch")," \u7248\u672c\u53f7\u3002"),(0,p.kt)("h3",{id:"peerdependencies-\u4f9d\u8d56"},"peerDependencies \u4f9d\u8d56"),(0,p.kt)("h4",{id:"patch-\u7248\u672c\u4f9d\u8d56\u81ea\u8eab\u548c\u4f9d\u8d56\u5305\u90fd\u5347\u7ea7-patch-\u7248\u672c\u53f7"},"patch \u7248\u672c\u4f9d\u8d56\u81ea\u8eab\u548c\u4f9d\u8d56\u5305\u90fd\u5347\u7ea7 patch \u7248\u672c\u53f7"),(0,p.kt)("p",null,"\u4f8b\u5982\u5b58\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,p.kt)("p",null,"Monorepo \u4e2d\u5b58\u5728\u4e24\u4e2a\u5305\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u4e2d\u5b58\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u7684 changeset \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 patch \u7248\u672c\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u6267\u884c bump \u547d\u4ee4\u540e\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u90fd\u5347\u7ea7 patch \u7248\u672c\u53f7\u3002"),(0,p.kt)("h4",{id:"major--minor-\u7248\u672c\u81ea\u8eab\u5347\u7ea7-major-\u6216\u8005-minor-\u7248\u672c\u53f7\u4f9d\u8d56\u5305\u5347\u7ea7-major-\u7248\u672c\u53f7"},"major / minor \u7248\u672c\u81ea\u8eab\u5347\u7ea7 major \u6216\u8005 minor \u7248\u672c\u53f7\uff0c\u4f9d\u8d56\u5305\u5347\u7ea7 major \u7248\u672c\u53f7"),(0,p.kt)("p",null,"\u4f8b\u5982\u5b58\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,p.kt)("p",null,"Monorepo \u4e2d\u5b58\u5728\u4e24\u4e2a\u5305\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u4e2d\u5b58\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u7684 changeset \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u7248\u672c\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u6267\u884c bump \u547d\u4ee4\u540e\u5c06 module-1 \u5c06\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u7248\u672c\u53f7\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"major")," \u7248\u672c\u53f7\u3002"),(0,p.kt)("h4",{id:"\u4fee\u6539-peerdependencies-\u7684\u5347\u7ea7\u7b56\u7565"},"\u4fee\u6539 peerDependencies \u7684\u5347\u7ea7\u7b56\u7565"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u7684\u5347\u7ea7\u7b56\u7565\u652f\u6301\u901a\u8fc7\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"onlyUpdatePeerDependentsWhenOutOfRange")," \u6765\u4fee\u6539\u4f9d\u8d56\u5347\u7ea7\u7b56\u7565\uff0c\u5f53\u53ea\u6709\u8d85\u51fa\u58f0\u660e\u7684\u7248\u672c\u7c7b\u578b\u8303\u56f4\u65f6\uff0c\u624d\u5bf9\u5e94\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH": {\n    "onlyUpdatePeerDependentsWhenOutOfRange": true\n  },\n  ...\n}\n')),(0,p.kt)("p",null,"\u4f8b\u5982\u5b58\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,p.kt)("p",null,"Monorepo \u4e2d\u5b58\u5728\u4e24\u4e2a\u5305\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"module-2")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u4e2d\u5b58\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1"),"\uff0c\u58f0\u660e ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684\u7248\u672c\u53f7\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"^"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u5b58\u5728\u7684 changeset \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"patch")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u7248\u672c\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u540e\u53ea\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"module-1")," \u7248\u672c\u53f7\u3002"),(0,p.kt)("p",null,"\u9700\u6ce8\u610f\uff0c\u5982\u679c\u5305\u7248\u672c\u53f7\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"0.x.x")," \u7684\u8303\u56f4\u65f6\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u7248\u672c\u53f7\u5347\u7ea7\u4e5f\u662f\u8d85\u51fa\u58f0\u660e\u7684\u7248\u672c\u7c7b\u578b\u8303\u56f4\u7684\u3002"))}s.isMDXComponent=!0}}]);