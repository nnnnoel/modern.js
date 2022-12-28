"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4414],{44993:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(18249),o=(t(52983),t(44993));const a={sidebar_position:7},i=void 0,p={unversionedId:"apis/app/commands/inspect",id:"apis/app/commands/inspect",title:"inspect",description:"modern inspect \u547d\u4ee4\uff0c\u7528\u4e8e\u67e5\u770b\u9879\u76ee\u7684 Modern.js Builder \u914d\u7f6e \u4ee5\u53ca webpack \u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/inspect.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/inspect",permalink:"/v2/docs/apis/app/commands/inspect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"serve",permalink:"/v2/docs/apis/app/commands/serve"},next:{title:"upgrade",permalink:"/v2/docs/apis/app/commands/upgrade"}},c={},s=[{value:"\u6307\u5b9a\u73af\u5883",id:"\u6307\u5b9a\u73af\u5883",level:2},{value:"\u5b8c\u6574\u5185\u5bb9",id:"\u5b8c\u6574\u5185\u5bb9",level:2},{value:"SSR \u6784\u5efa\u914d\u7f6e",id:"ssr-\u6784\u5efa\u914d\u7f6e",level:2}],l={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage: modern inspect [options]\n\nOptions:\n  --env <env>           \u67e5\u770b\u6307\u5b9a\u73af\u5883\u4e0b\u7684\u914d\u7f6e (default: "development")\n  --output <output>     \u6307\u5b9a\u5728 dist \u76ee\u5f55\u4e0b\u8f93\u51fa\u7684\u8def\u5f84 (default: "/")\n  --verbose             \u5728\u7ed3\u679c\u4e2d\u5c55\u793a\u51fd\u6570\u7684\u5b8c\u6574\u5185\u5bb9\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern inspect")," \u547d\u4ee4\uff0c\u7528\u4e8e\u67e5\u770b\u9879\u76ee\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/guide/basic/builder-config.html"},"Modern.js Builder \u914d\u7f6e")," \u4ee5\u53ca webpack \u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx modern inspect")," \u540e\uff0c\u4f1a\u5728\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u751f\u6210\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"builder.config.js"),": \u8868\u793a\u5728\u6784\u5efa\u65f6\u4f7f\u7528\u7684 Modern.js Builder \u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webpack.config.web.js"),": \u8868\u793a\u5728\u6784\u5efa\u65f6\u4f7f\u7528\u7684 webpack \u914d\u7f6e\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n")),(0,o.kt)("h2",{id:"\u6307\u5b9a\u73af\u5883"},"\u6307\u5b9a\u73af\u5883"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cinspect \u547d\u4ee4\u4f1a\u8f93\u51fa\u5f00\u53d1\u73af\u5883\u7684\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--env production")," \u9009\u9879\u6765\u8f93\u51fa\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --env production\n")),(0,o.kt)("h2",{id:"\u5b8c\u6574\u5185\u5bb9"},"\u5b8c\u6574\u5185\u5bb9"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cinspect \u547d\u4ee4\u4f1a\u7701\u7565\u914d\u7f6e\u5bf9\u8c61\u4e2d\u7684\u51fd\u6570\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," \u9009\u9879\u6765\u8f93\u51fa\u51fd\u6570\u7684\u5b8c\u6574\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --verbose\n")),(0,o.kt)("h2",{id:"ssr-\u6784\u5efa\u914d\u7f6e"},"SSR \u6784\u5efa\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5f00\u542f\u4e86 SSR \u80fd\u529b\uff0c\u5219\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4f1a\u53e6\u5916\u751f\u6210\u4e00\u4efd ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.node.js")," \u6587\u4ef6\uff0c\u5bf9\u5e94 SSR \u6784\u5efa\u65f6\u7684 webpack \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js\n")))}d.isMDXComponent=!0}}]);