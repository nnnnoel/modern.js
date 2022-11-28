"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5010],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(18249),r=(n(52983),n(44993));const o={title:"\u8def\u7531",sidebar_position:1},l=void 0,i={unversionedId:"guides/basic-features/routes",id:"guides/basic-features/routes",title:"\u8def\u7531",description:"Modern.js \u5185\u7f6e\u4e86\u5bf9 React Router 6 \u7684\u90e8\u5206\u652f\u6301\uff0c\u5e76\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u8def\u7531\u6a21\u5f0f\u3002\u6839\u636e\u4e0d\u540c\u5165\u53e3\u7c7b\u578b\uff0c\u5c06\u8def\u7531\u5206\u4e3a\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u662f\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u81ea\u63a7\u5f0f\u8def\u7531\u548c\u914d\u7f6e\u5f0f\u8def\u7531\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/basic-features/routes.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/routes",permalink:"/v2/docs/guides/basic-features/routes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u8def\u7531",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u57fa\u7840\u529f\u80fd",permalink:"/v2/docs/guides/basic-features/"},next:{title:"\u6570\u636e\u83b7\u53d6",permalink:"/v2/docs/guides/basic-features/data-fetch"}},p={},u=[{value:"\u7ea6\u5b9a\u5f0f\u8def\u7531",id:"\u7ea6\u5b9a\u5f0f\u8def\u7531",level:2},{value:"\u8def\u7531\u6587\u4ef6\u7ea6\u5b9a",id:"\u8def\u7531\u6587\u4ef6\u7ea6\u5b9a",level:3},{value:"Layout",id:"layout",level:4},{value:"Page",id:"page",level:4},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",level:3},{value:"\u65e0\u8def\u5f84\u5e03\u5c40",id:"\u65e0\u8def\u5f84\u5e03\u5c40",level:3},{value:"\u65e0\u5e03\u5c40\u8def\u5f84",id:"\u65e0\u5e03\u5c40\u8def\u5f84",level:3},{value:"Loading",id:"loading",level:3},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:3},{value:"\u81ea\u63a7\u5f0f\u8def\u7531",id:"\u81ea\u63a7\u5f0f\u8def\u7531",level:2},{value:"\u914d\u7f6e\u5f0f\u8def\u7531",id:"\u914d\u7f6e\u5f0f\u8def\u7531",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u5185\u7f6e\u4e86\u5bf9 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"React Router 6")," \u7684",(0,r.kt)("strong",{parentName:"p"},"\u90e8\u5206"),"\u652f\u6301\uff0c\u5e76\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u8def\u7531\u6a21\u5f0f\u3002\u6839\u636e\u4e0d\u540c",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries"},"\u5165\u53e3"),"\u7c7b\u578b\uff0c\u5c06\u8def\u7531\u5206\u4e3a\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u662f",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5f0f\u8def\u7531"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u5c0f\u8282\u63d0\u5230\u7684\u8def\u7531\uff0c\u90fd\u662f\u5ba2\u6237\u7aef\u8def\u7531\uff0c\u5373 SPA \u8def\u7531\u3002")),(0,r.kt)("h2",{id:"\u7ea6\u5b9a\u5f0f\u8def\u7531"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u4e3a\u7ea6\u5b9a\u7684\u5165\u53e3\uff0cModern.js \u4f1a\u81ea\u52a8\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\uff0c\u751f\u6210\u5bf9\u5e94\u7684\u8def\u7531\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"Modern.js \u652f\u6301\u4e86\u4e1a\u754c\u6d41\u884c\u7684\u7ea6\u5b9a\u8def\u7531\u6a21\u5f0f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5d4c\u5957\u8def\u7531"),"\uff0c\u4f7f\u7528\u5d4c\u5957\u8def\u7531\u65f6\uff0c\u9875\u9762\u7684\u8def\u7531 \u4e0e UI \u7ed3\u6784\u662f\u76f8\u547c\u5e94\u7684\uff0c\u6211\u4eec\u5c06\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u79cd\u8def\u7531\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/user/johnny/profile                  /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------\x3e  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")),(0,r.kt)("h3",{id:"\u8def\u7531\u6587\u4ef6\u7ea6\u5b9a"},"\u8def\u7531\u6587\u4ef6\u7ea6\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u76ee\u5f55\u4e0b\u6709\u4e24\u4e2a\u6587\u4ef6\u7ea6\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.[jt]sx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"page.[jt]sx"),"\uff08\u540e\u9762\u7b80\u5199\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx"),"\uff09\u3002\u8fd9\u4e24\u4e2a\u6587\u4ef6\u51b3\u5b9a\u4e86\u5e94\u7528\u7684\u5e03\u5c40\u5c42\u6b21\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u4e2d\u4f5c\u4e3a\u5e03\u5c40\u7ec4\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u4f5c\u4e3a\u5185\u5bb9\u7ec4\u4ef6\uff0c\u662f\u6574\u4e2a\u8def\u7531\u8868\u7684\u53f6\u5b50\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/layout.tsx")," \u4f1a\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u8def\u7531\u4e0b\u6240\u6709\u7ec4\u4ef6\u7684\u5e03\u5c40\u7ec4\u4ef6\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"\u5f53\u8def\u7531\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u65f6\uff0c\u4f1a\u6709\u4ee5\u4e0b UI \u5e03\u5c40\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <Page />\n</Layout>\n")),(0,r.kt)("p",null,"\u540c\u6837\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"routes/user/layout.tsx")," \u4f1a\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," \u8def\u7531\u4e0b\u6240\u6709\u7ec4\u4ef6\u7684\u5e03\u5c40\u7ec4\u4ef6\u4f7f\u7528\u3002\u5f53\u8def\u7531\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," \u65f6\uff0c \u4f1a\u6709\u4ee5\u4e0b UI \u5e03\u5c40\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <UserLayout>\n    <UserPage>\n  <UserLayout>\n</Layout>\n")),(0,r.kt)("h4",{id:"layout"},"Layout"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," \u7ec4\u4ef6\u662f\u6307 ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u76ee\u5f55\u4e0b\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u6587\u4ef6\uff0c\u5b83\u4eec\u8868\u793a\u5bf9\u5e94\u8def\u7531\u7247\u6bb5\u7684\u5e03\u5c40\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u8868\u793a\u5b50\u7ec4\u4ef6\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u662f React Router 6 \u4e2d\u65b0\u7684 API\uff0c\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/components/outlet#outlet"},"Outlet"),".")),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u7684\u5173\u7cfb\uff0c\u4ee5\u4e0b\u9762\u7684\u6587\u4ef6\u76ee\u5f55\u4e3e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f53\u8def\u7531\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," \u4ee3\u8868\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/page.tsx")," \u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\uff0c\u751f\u6210\u4ee5\u4e0b UI \u7ed3\u6784\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <Page />\n</Layout>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5f53\u8def\u7531\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/blog")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," \u4ee3\u8868\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/blog/page.tsx")," \u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\uff0c\u751f\u6210\u4ee5\u4e0b UI \u7ed3\u6784\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <BlogPage />\n</Layout>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5f53\u8def\u7531\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/user")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," \u4ee3\u8868\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/layout.tsx")," \u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/layout.tsx")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," \u4ee3\u8868\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/page.tsx")," \u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\u3002\u751f\u6210\u4ee5\u4e0b UI \u7ed3\u6784\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <UserLayout>\n    <UserPage>\n  <UserLayout>\n</Layout>\n")),(0,r.kt)("p",null,"\u603b\u7ed3\u800c\u8a00\uff0c\u5982\u679c\u5b50\u8def\u7531\u7684\u6587\u4ef6\u76ee\u5f55\u4e0b\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx"),"\uff0c\u4e0a\u4e00\u7ea7 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u5373\u4e3a\u5b50\u8def\u7531\u6587\u4ef6\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \uff0c\u5426\u5219\u4e3a\u5b50\u8def\u7531\u6587\u4ef6\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx"),"\u3002"),(0,r.kt)("h4",{id:"page"},"Page"),(0,r.kt)("p",null,"\u6240\u6709\u7684\u8def\u7531\uff0c\u7406\u8bba\u4e0a\u90fd\u5e94\u8be5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Page>")," \u7ec4\u4ef6\u7ed3\u675f\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u6587\u4ef6\u5185\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u7ec4\u4ef6\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u6548\u679c\u3002"),(0,r.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," \u547d\u540d\u7684\u6587\u4ef6\u76ee\u5f55\uff0c\u751f\u6210\u7684\u8def\u7531\u4f1a\u4f5c\u4e3a\u52a8\u6001\u8def\u7531\u3002\u4f8b\u5982\u4ee5\u4e0b\u6587\u4ef6\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 [id]\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/[id]/page.tsx")," \u6587\u4ef6\u4f1a\u8f6c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/:id")," \u8def\u7531\u3002\u9664\u4e86\u53ef\u4ee5\u786e\u5207\u5339\u914d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," \u8def\u7531\uff0c\u5176\u4ed6\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"/xxx")," \u90fd\u4f1a\u5339\u914d\u5230\u8be5\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/router/#useparams"},"useParams")," \u83b7\u53d6\u5bf9\u5e94\u547d\u540d\u7684\u53c2\u6570\u3002"),(0,r.kt)("h3",{id:"\u65e0\u8def\u5f84\u5e03\u5c40"},"\u65e0\u8def\u5f84\u5e03\u5c40"),(0,r.kt)("p",null,"\u5f53\u76ee\u5f55\u540d\u4ee5 __ \u5f00\u5934\u65f6\uff0c\u5bf9\u5e94\u7684\u76ee\u5f55\u540d\u4e0d\u4f1a\u8f6c\u6362\u4e3a\u5b9e\u9645\u7684\u8def\u7531\u8def\u5f84\uff0c\u4f8b\u5982\u4ee5\u4e0b\u6587\u4ef6\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 __auth\n    \u2502   \u251c\u2500\u2500 layout.tsx\n    \u2502   \u251c\u2500\u2500 login\n    \u2502   \u2502   \u2514\u2500\u2500 page.tsx\n    \u2502   \u2514\u2500\u2500 signup\n    \u2502       \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"Modern.js \u4f1a\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/sign")," \u4e24\u6761\u8def\u7531\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"__auth/layout.tsx")," \u7ec4\u4ef6\u4f1a\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"login/page.tsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"signup/page.tsx")," \u7684\u5e03\u5c40\u7ec4\u4ef6\uff0c\u4f46__auth \u4e0d\u4f1a\u4f5c\u4e3a\u8def\u7531\u8def\u5f84\u7247\u6bb5\u3002"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u4e3a\u67d0\u4e9b\u7c7b\u578b\u7684\u8def\u7531\uff0c\u505a\u72ec\u7acb\u7684\u5e03\u5c40\uff0c\u6216\u662f\u60f3\u8981\u5c06\u8def\u7531\u505a\u5f52\u7c7b\u65f6\uff0c\u8fd9\u4e00\u529f\u80fd\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("h3",{id:"\u65e0\u5e03\u5c40\u8def\u5f84"},"\u65e0\u5e03\u5c40\u8def\u5f84"),(0,r.kt)("p",null,"\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u9700\u8981\u8f83\u4e3a\u590d\u6742\u7684\u8def\u7531\uff0c\u4f46\u8fd9\u4e9b\u8def\u7531\u53c8\u4e0d\u5b58\u5728\u72ec\u7acb\u7684 UI \u5e03\u5c40\uff0c\u5982\u679c\u50cf\u666e\u901a\u6587\u4ef6\u76ee\u5f55\u90a3\u8fb9\u521b\u5efa\u8def\u7531\u4f1a\u5bfc\u81f4\u76ee\u5f55\u5c42\u7ea7\u8f83\u6df1\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64 Modern.js \u652f\u6301\u4e86\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u6765\u5206\u5272\u8def\u7531\u7247\u6bb5\uff0c\u4ee3\u66ff\u6587\u4ef6\u76ee\u5f55\u3002\u4f8b\u5982\uff0c\u5f53\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/profile/2022/edit")," \u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 user.profile.[id].edit\n    \u2502      \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"\u8bbf\u95ee\u8def\u7531\u65f6\uff0c\u5c06\u5f97\u5230\u5982\u4e0b UI \u5e03\u5c40\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<RootLayout>\n   <UserProfileEdit />   // routes/user.profile.[id].edit/page.tsx\n</RootLayout>\n")),(0,r.kt)("h3",{id:"loading"},"Loading"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u4e0b\u6bcf\u4e00\u5c42\u76ee\u5f55\u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.tsx")," \u6587\u4ef6\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f53\u8def\u7531\u76ee\u5f55\u4e0b\u5b58\u5728\u8be5\u7ec4\u4ef6\u65f6\uff0c\u8fd9\u4e00\u7ea7\u5b50\u8def\u7531\u4e0b\u6240\u6709\u7684\u8def\u7531\u5207\u6362\u65f6\uff0c\u90fd\u4f1a\u4ee5\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," \u7ec4\u4ef6\u4f5c\u4e3a JS Chunk \u52a0\u8f7d\u65f6\u7684 Fallback UI\u3002\u5f53\u8be5\u76ee\u5f55\u4e0b\u672a\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u6587\u4ef6\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," \u7ec4\u4ef6\u4e0d\u4f1a\u751f\u6548\u3002\u4f8b\u5982\u4ee5\u4e0b\u6587\u4ef6\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u251c\u2500\u2500 [id]\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 loading.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"\u5f53\u8def\u7531\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u8df3\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," \u65f6\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Blog>")," \u7ec4\u4ef6\u7684 JS Chunk \u8fd8\u672a\u52a0\u8f7d\uff0c\u5219\u4f1a\u5148\u5c55\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.tsx")," \u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6 UI\u3002\u4f46\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," \u8df3\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog/20220101")," \u65f6\uff0c\u5219\u4e0d\u4f1a\u5c55\u793a\u3002"),(0,r.kt)("h3",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u4e0b\u6bcf\u4e00\u5c42\u76ee\u5f55\u4e2d\uff0c\u5f00\u53d1\u8005\u540c\u6837\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"error.tsx")," \u6587\u4ef6\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f53\u6709\u8def\u7531\u76ee\u5f55\u4e0b\u5b58\u5728\u8be5\u7ec4\u4ef6\u65f6\uff0c\u7ec4\u4ef6\u6e32\u67d3\u51fa\u9519\u4f1a\u88ab ErrorBoundary \u7ec4\u4ef6\u6355\u83b7\u3002\u5f53\u76ee\u5f55\u672a\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," \u6587\u4ef6\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," \u7ec4\u4ef6\u4e0d\u4f1a\u751f\u6548\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," \u53ef\u4ee5\u8fd4\u56de\u51fa\u9519\u65f6\u7684 UI \u89c6\u56fe\uff0c\u5f53\u524d\u5c42\u7ea7\u672a\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," \u7ec4\u4ef6\u65f6\uff0c\u9519\u8bef\u4f1a\u5411\u4e0a\u5192\u6ce1\u5230\u66f4\u4e0a\u5c42\u7684\u7ec4\u4ef6\uff0c\u76f4\u5230\u88ab\u6355\u83b7\u6216\u629b\u51fa\u9519\u8bef\u3002\u540c\u65f6\uff0c\u5f53\u7ec4\u4ef6\u51fa\u9519\u65f6\uff0c\u53ea\u4f1a\u5f71\u54cd\u6355\u83b7\u5230\u8be5\u9519\u8bef\u7684\u8def\u7531\u7ec4\u4ef6\u53ca\u5b50\u7ec4\u4ef6\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7684\u72b6\u6001\u548c\u89c6\u56fe\u4e0d\u53d7\u5f71\u54cd\uff0c\u53ef\u4ee5\u7ee7\u7eed\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," \u7ec4\u4ef6\u5185\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/router/#useparams"},"useRouteError")," \u83b7\u53d6\u7684\u9519\u8bef\u7684\u5177\u4f53\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouteError } from '@modern-js/runtime/router';\nexport default const ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n        <h1>{error.status}</h1>\n        <h2>{error.message}</h2>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"\u81ea\u63a7\u5f0f\u8def\u7531"},"\u81ea\u63a7\u5f0f\u8def\u7531"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," \u4e3a\u7ea6\u5b9a\u7684\u5165\u53e3\uff0cModern.js \u4e0d\u4f1a\u591a\u8def\u7531\u505a\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u4f7f\u7528 React Router 6 \u7684 API \u8fdb\u884c\u5f00\u53d1\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Route,\n  Routes,\n  BrowserRouter,\n  Outlet,\n} from \'@modern-js/runtime/router\';\n\nexport default () => {\n  return (\n    <div>\n      <BrowserRouter>\n        <Routes>\n          <Route index element={<div>index</div>} />\n          <Route\n            path="user"\n            element={\n              <div>\n                User Layout\n                <Outlet />\n              </div>\n            }\n          >\n            <Route index element={<div>user</div>} />\n            <Route path="profile" element={<div>profile</div>} />\n          </Route>\n          <Route path="about" element={<div>about</div>} />\n        </Routes>\n      </BrowserRouter>\n    </div>\n  );\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u81ea\u63a7\u5f0f\u8def\u7531\u4e0b\uff0c\u5f00\u53d1\u8005\u5982\u679c\u5e0c\u671b\u5728 SSR \u4e2d\u4f7f\u7528 React Router 6 \u4e2d ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/hooks/use-loader-data#useloaderdata"},"Loader API")," \u7684\u80fd\u529b\u4f1a\u76f8\u5bf9\u590d\u6742\uff0c\u63a8\u8350\u76f4\u63a5\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u3002Modern.js \u5df2\u7ecf\u4e3a\u4f60\u5c01\u88c5\u597d\u4e86\u4e00\u5207\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9879\u76ee\u53ea\u60f3\u5347\u7ea7\u5230 React Router 6\uff0c\u800c\u4e0d\u5e0c\u671b\u4f7f\u7528\u5d4c\u5957\u8def\u7531\u5e26\u6765\u7684\u4f18\u5316\uff0c\u90a3",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-loader"},"useLoader")," \u5728 SSR \u4e0b\u4ecd\u7136\u53ef\u4ee5\u5de5\u4f5c\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u5f0f\u8def\u7531"},"\u914d\u7f6e\u5f0f\u8def\u7531"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u656c\u8bf7\u671f\u5f85")))}d.isMDXComponent=!0}}]);