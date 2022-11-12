"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5728],{44993:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var s=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),c=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?s.createElement(b,a(a({ref:t},i),{},{components:n})):s.createElement(b,a({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(18249),r=(n(52983),n(44993));const o={sidebar_position:5},a="CSS Modules",l={unversionedId:"guides/basic-features/css/css-modules",id:"guides/basic-features/css/css-modules",title:"CSS Modules",description:"Modern.js \u4e3a CSS Modules \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002",source:"@site/docs/guides/basic-features/css/css-modules.md",sourceDirName:"guides/basic-features/css",slug:"/guides/basic-features/css/css-modules",permalink:"/v2/docs/guides/basic-features/css/css-modules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"Less \u548c Sass",permalink:"/v2/docs/guides/basic-features/css/less-sass"},next:{title:"\u56fe\u7247\u8d44\u6e90",permalink:"/v2/docs/guides/basic-features/image"}},u={},c=[{value:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f CSS Modules",id:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f-css-modules",level:2},{value:"\u5168\u9762\u542f\u7528 CSS Modules",id:"\u5168\u9762\u542f\u7528-css-modules",level:2}],i={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"css-modules"},"CSS Modules"),(0,r.kt)("p",null,"Modern.js \u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f-css-modules"},"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f CSS Modules"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},".module.(css|scss|sass|less)")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u4f1a\u4f5c\u4e3a CSS Modules \u6587\u4ef6\u5904\u7406\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.module.css"',title:'"button.module.css"'},".redColor {\n  color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Button.jsx"',title:'"Button.jsx"'},"import styles from './button.module.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={styles.redColor}>\n      red button\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u5c06\u88ab\u7f16\u8bd1\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button_redColor__1-RBg">\n  red button\n</button>;\n')),(0,r.kt)("h2",{id:"\u5168\u9762\u542f\u7528-css-modules"},"\u5168\u9762\u542f\u7528 CSS Modules"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u53bb\u6389\u6587\u4ef6\u540d\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},".module")," \u540e\u7f00\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/configure/app/output/disable-css-module-extension"},(0,r.kt)("inlineCode",{parentName:"a"},"output.disableCssModuleExtension")),"\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u540e\uff0c\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/")," \u76ee\u5f55\u4e0b\u7684\u6837\u5f0f\u6587\u4ef6\u548c\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[name].global.(css|scss|sass|less)")," \u4e4b\u5916\u7684\u6240\u6709\u6837\u5f0f\u6587\u4ef6\uff0c\u90fd\u4f1a\u4f5c\u4e3a CSS Modules \u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6b64\u65f6\u9700\u8981\u5168\u5c40\u6837\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[name].global.(css|less|scss|sass)")," \u7684\u6837\u5f0f\u6587\u4ef6\u6765\u89e3\u51b3\uff0c \u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="app.global.css"',title:'"app.global.css"'},".bg-blue {\n  background-color: blue;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.css"',title:'"button.css"'},".redColor {\n  color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="App.jsx"',title:'"App.jsx"'},"import './app.global.css';\nimport styles from './button.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={`${styles.redColor} bg-blue`}>\n      button\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u5c06\u88ab\u7f16\u8bd1\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button__redColor--JsFYl bg-blue">\n  button\n</button>;\n')),(0,r.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/more-css-modules.png",alt:null})),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gajus/babel-plugin-react-css-modules"},"babel-plugin-react-css-modules")," \u65f6\u9700\u8981\u6ce8\u610f\uff0c\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u9009\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"generateScopedName")," \u9700\u8981\u548c ",(0,r.kt)("a",{parentName:"p",href:"/docs/configure/app/output/css-module-localIdent-name"},(0,r.kt)("inlineCode",{parentName:"a"},"output.cssModuleLocalIdentName"))," \u4fdd\u6301\u4e00\u81f4\u3002")))}p.isMDXComponent=!0}}]);