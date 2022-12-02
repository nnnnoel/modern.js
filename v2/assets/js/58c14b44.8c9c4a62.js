"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1355],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(18249),a=(n(52983),n(44993));const o={title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5"},s=void 0,p={unversionedId:"tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus",id:"tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus",title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u786e\u8ba4\u4e86\u5f53\u524d IDE \u7684\u7f16\u7a0b\u73af\u5883\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus.md",sourceDirName:"tutorials/first-app/c04-es6-plus-and-ts",slug:"/tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5"},sidebar:"tutorialsSidebar",previous:{title:"\u547d\u4ee4\u884c\u4e2d\u7684\u81ea\u52a8\u4fee\u590d",permalink:"/v2/docs/tutorials/first-app/c03-ide/3.4-autofix-in-cli"},next:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript"}},l={},i=[],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u786e\u8ba4\u4e86\u5f53\u524d IDE \u7684\u7f16\u7a0b\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u6cbf\u7528\u4e0a\u4e00\u7ae0\u8282\u7684\u9879\u76ee\u548c\u7f16\u7801\u73af\u5883\uff0c\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u8054\u7cfb\u4eba\u5217\u8868\u3002"),(0,a.kt)("p",null,"Modern.js \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u76f4\u63a5\u4f7f\u7528 ES6+\uff08ES2015+\uff09\u8bed\u6cd5\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/page.jsx")," \u6539\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const getAvatar = users =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst getMockData = () =>\n  getAvatar([\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n    { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n    { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n  ]);\n\nfunction Index() {\n  return (\n    <ul>\n      {getMockData().map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default Index;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5176\u4e2d\u4f7f\u7528\u4e86\u591a\u79cd ES6+ \u8bed\u6cd5\uff08\u6ce8\u610f\u751f\u6210 mockData \u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," \u8bed\u6cd5\uff09\uff0c\u90fd\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/contacts.png",alt:"result"})),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);