"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4458],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(d,p(p({ref:n},c),{},{components:t})):r.createElement(d,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(18249),a=(t(52983),t(44993));const o={title:"\u542f\u7528 BFF"},p=void 0,s={unversionedId:"tutorials/first-app/c09-bff/9.2-enable-bff",id:"tutorials/first-app/c09-bff/9.2-enable-bff",title:"\u542f\u7528 BFF",description:"\u548c\u4e4b\u524d\u7ae0\u8282\u4e00\u6837\uff0c\u6211\u4eec\u540c\u6837\u4f7f\u7528\u751f\u6210\u5668\u6765\u542f\u7528 BFF\u3002",source:"@site/docs/tutorials/first-app/c09-bff/9.2-enable-bff.md",sourceDirName:"tutorials/first-app/c09-bff",slug:"/tutorials/first-app/c09-bff/9.2-enable-bff",permalink:"/v2/docs/tutorials/first-app/c09-bff/9.2-enable-bff",draft:!1,tags:[],version:"current",frontMatter:{title:"\u542f\u7528 BFF"},sidebar:"tutorialsSidebar",previous:{title:"Serverless \u5f00\u53d1\u8303\u5f0f",permalink:"/v2/docs/tutorials/first-app/c09-bff/9.1-serverless"},next:{title:"\u4ece BFF \u83b7\u53d6\u6570\u636e",permalink:"/v2/docs/tutorials/first-app/c09-bff/9.3-fetch-bff"}},i={},l=[],c={toc:l};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u548c\u4e4b\u524d\u7ae0\u8282\u4e00\u6837\uff0c\u6211\u4eec\u540c\u6837\u4f7f\u7528\u751f\u6210\u5668\u6765\u542f\u7528 BFF\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n\u276f \u542f\u7528\u300cBFF\u300d\u529f\u80fd\n  ...\n\n# \u8bf7\u9009\u62e9 BFF \u7c7b\u578b\n\u276f \u51fd\u6570\u5199\u6cd5\n  \u6846\u67b6\u5199\u6cd5\n\n# \u8bf7\u9009\u62e9\u8fd0\u884c\u65f6\u6846\n\u276f Express\n  Koa\n  Egg\n  Nest\n")),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u51fd\u6570\u6a21\u5f0f\u4e0e\u6846\u67b6\u6a21\u5f0f\u90fd\u662f\u57fa\u4e8e Modern.js \u7684 BFF \u51fd\u6570\u7684\uff0c\u4e24\u79cd\u6a21\u5f0f\u7684\u4e3b\u4f53\u90fd\u662f\u51fd\u6570\uff0c\u4e5f\u90fd\u9700\u8981\u8fd0\u884c\u65f6\u6846\u67b6\u7684\u652f\u6301\uff0c\u8fd9\u91cc\u7684\u63d0\u95ee\u662f\u4e3a\u4e86\u63d0\u4f9b\u4e0d\u540c\u7684\u6837\u677f\u6587\u4ef6\u3002\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/bff/function"},"\u4e00\u4f53\u5316 BFF \u4e13\u9898"),"\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u9009\u62e9\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\uff0c\u5e76\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6\u4e3a Express\uff0c\u9879\u76ee\u7ed3\u6784\u5c06\u53d8\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 api/\n\u2502   \u251c\u2500\u2500 info/\n\u2502   \u2502   \u2514\u2500\u2500 [type].ts\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 _app.ts\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 contacts/\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Avatar/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Item/\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u251c\u2500\u2500 styles/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.css\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u2514\u2500\u2500 pages/\n\u2502   \u2502       \u251c\u2500\u2500 comments/\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 [commentTitle]/\n\u2502   \u2502       \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502       \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502       \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u65b0\u589e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/")," \u76ee\u5f55\uff0c\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e00\u6837\u662f\u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u76ee\u5f55\u4e2d\u6709\u51e0\u4e2a\u793a\u8303\u7528\u6cd5\u7684\u6837\u677f\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5219\u4f1a\u589e\u52a0 BFF \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'+ "@modern-js/plugin-bff"\n+ "@modern-js/plugin-express"\n+ "express"\n')),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u5199\u6cd5\u4e2d\uff0cBFF \u7684 API \u8def\u7531\u4e5f\u9075\u5faa\u7c7b\u4f3c\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\u7684\u751f\u6210\u903b\u8f91\u3002"),(0,a.kt)("p",null,"Modern.js Serverless BFF \u7684\u9ed8\u8ba4\u524d\u7f00\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/api"),"\uff0c\u4f8b\u5982\u4e0a\u8ff0\u76ee\u5f55\u7ed3\u6784\u53ef\u4ee5\u5f97\u5230\u4e24\u4e2a API \u8def\u7531\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/info/:type")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c09/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}f.isMDXComponent=!0}}]);