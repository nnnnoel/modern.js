"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4541],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),y=o,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(18249),o=(r(52983),r(44993));const a={},p=void 0,l={unversionedId:"components/global-proxy",id:"components/global-proxy",title:"global-proxy",description:"Modern.js provides out-of-the-box global proxy plugin @modern-js/plugin-proxy, which is based on whistle and can be used to view and modify HTTP/HTTPS requests and responses, and can also be used as an HTTP proxy server.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/global-proxy.md",sourceDirName:"components",slug:"/components/global-proxy",permalink:"/v2/en/docs/components/global-proxy",draft:!1,tags:[],version:"current",frontMatter:{}},s={},i=[{value:"Set Proxy Rules",id:"set-proxy-rules",level:3},{value:"Use Proxy Dashboard",id:"use-proxy-dashboard",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modern.js provides out-of-the-box global proxy plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/plugin-proxy"),", which is based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/avwo/whistle"},"whistle")," and can be used to view and modify HTTP/HTTPS requests and responses, and can also be used as an HTTP proxy server."),(0,o.kt)("h3",{id:"set-proxy-rules"},"Set Proxy Rules"),(0,o.kt)("p",null,"After install the proxy plugin and filling in the rules, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),", Modern.js will automatically enable the proxy server after the development server starts."),(0,o.kt)("p",null,"Specific proxy rules can be set via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/dev/proxy"},(0,o.kt)("inlineCode",{parentName:"a"},"dev.proxy"))," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/proxy.js")," file."),(0,o.kt)("h3",{id:"use-proxy-dashboard"},"Use Proxy Dashboard"),(0,o.kt)("p",null,"After exec ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\n\u2139  info      Starting the proxy server.....\n\u2714  success   Proxy Server start on localhost:8899\n")),(0,o.kt)("p",null,"In the console you can see that the proxy server started successfully."),(0,o.kt)("p",null,"Accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8899")," and, you can set the rules through the dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",alt:"debug-proxy-ui"})))}u.isMDXComponent=!0}}]);