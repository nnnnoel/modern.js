"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4385],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=t(18249),i=(t(52983),t(44993));const o={toc:[{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3}]};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object | Function | undefined")),(0,i.kt)("li",{parentName:"ul"},"Default:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = {\n  minimizerOptions: {\n    preset: [\n      'default',\n      {\n        mergeLonghand: false,\n      },\n    ],\n  },\n};\n")),(0,i.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0cBuilder \u4f1a\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin"},"css-minimizer-webpack-plugin")," \u5bf9 CSS \u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u4f18\u5316\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"tools.minifyCss")," \u4fee\u6539 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin"},"css-minimizer-webpack-plugin")," \u7684\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"tools.minifyCss")," \u7684\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u4fee\u6539 ",(0,i.kt)("a",{parentName:"p",href:"https://cssnano.co/"},"cssnano")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"preset")," \u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    minifyCss: {\n      minimizerOptions: {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"tools.minifyCss")," \u914d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n   tools: {\n    minifyCss: options => {\n      options.minimizerOptions = {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    }\n  }\n};\n")))}s.isMDXComponent=!0;const a={title:"tools.minifyCss",sidebar_label:"minifyCss"},p=void 0,l={unversionedId:"configure/app/tools/minify-css",id:"configure/app/tools/minify-css",title:"tools.minifyCss",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.minifyCss\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/minify-css.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/minify-css",permalink:"/v2/docs/configure/app/tools/minify-css",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.minifyCss",sidebar_label:"minifyCss"},sidebar:"configsAppSidebar",previous:{title:"less",permalink:"/v2/docs/configure/app/tools/less"},next:{title:"postcss",permalink:"/v2/docs/configure/app/tools/postcss"}},c={},m=[],u={toc:m};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-minifycss"},"tools.minifyCss"),"\u3002")),(0,i.kt)(s,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);