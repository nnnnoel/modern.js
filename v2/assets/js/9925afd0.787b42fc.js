"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,d=c["".concat(l,".").concat(f)]||c[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const o={sidebar_label:"\u603b\u89c8",sidebar_position:1},a="\u603b\u89c8",p={unversionedId:"configure/app/runtime/intro",id:"configure/app/runtime/intro",title:"\u603b\u89c8",description:"\u6b64\u8282\u5c06\u4ecb\u7ecd Runtime \u63d2\u4ef6\u7684\u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/runtime/intro.md",sourceDirName:"configure/app/runtime",slug:"/configure/app/runtime/intro",permalink:"/v2/docs/configure/app/runtime/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u603b\u89c8",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"svgDefaultExport",permalink:"/v2/docs/configure/app/output/svg-default-export"},next:{title:"masterApp",permalink:"/v2/docs/configure/app/runtime/master-app"}},l={},u=[{value:"\u914d\u7f6e\u65b9\u5f0f",id:"\u914d\u7f6e\u65b9\u5f0f",level:2},{value:"runtime",id:"runtime",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:4},{value:"\u8fd0\u884c\u65f6\u914d\u7f6e",id:"\u8fd0\u884c\u65f6\u914d\u7f6e",level:4},{value:"runtimeByEntries",id:"runtimebyentries",level:3},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:4}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,i.kt)("p",null,"\u6b64\u8282\u5c06\u4ecb\u7ecd Runtime \u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u65b9\u5f0f"},"\u914d\u7f6e\u65b9\u5f0f"),(0,i.kt)("h3",{id:"runtime"},"runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Object"))),(0,i.kt)("p",null,"runtime \u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("h4",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true\n  }\n});\n")),(0,i.kt)("h4",{id:"\u8fd0\u884c\u65f6\u914d\u7f6e"},"\u8fd0\u884c\u65f6\u914d\u7f6e"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/app/define-config"},(0,i.kt)("inlineCode",{parentName:"a"},"defineConfig"))," API \u914d\u7f6e\uff1a"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53 runtime \u914d\u7f6e\u4e2d\u5b58\u5728\u51fd\u6570\u65f6\uff0c\u53ea\u80fd\u4f7f\u7528\u8be5\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n\nexport default App;\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8fd0\u884c\u65f6\u914d\u7f6e\uff0c\u53ef\u4ee5\u89e3\u51b3 Runtime \u63d2\u4ef6\u914d\u7f6e\u9700\u8981\u5728\u8fd0\u884c\u65f6\u624d\u80fd\u83b7\u53d6\u5230\u5177\u4f53\u5185\u5bb9\u95ee\u9898\u3002"),(0,i.kt)("p",{parentName:"admonition"},"Runtime \u63d2\u4ef6\u8fd0\u884c\u65f6\u914d\u7f6e\u548c\u76f4\u63a5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u7684\u914d\u7f6e\u9ed8\u8ba4\u4f1a\u8fdb\u884c\u5408\u5e76\uff0c\u4e14\u8fd0\u884c\u65f6\u914d\u7f6e\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"defineConfig \u4e2d\u53ea\u80fd\u5b9a\u4e49 Runtime \u63d2\u4ef6\u7684\u5177\u4f53\u914d\u7f6e\u5185\u5bb9\uff0c\u786e\u8ba4\u662f\u5426\u5f00\u542f\u63d2\u4ef6\u8fd8\u9700\u8981\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u7684\u914d\u7f6e\u51b3\u5b9a\u3002")),(0,i.kt)("h3",{id:"runtimebyentries"},"runtimeByEntries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")),(0,i.kt)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("p",null,"\u6309\u5165\u53e3\u6dfb\u52a0 runtime \u914d\u7f6e\uff0c\u9009\u9879\u5c5e\u6027\u540c runtime \u4e00\u81f4\uff0c\u6307\u5b9a\u503c\u4f1a\u548c runtime \u5c5e\u6027\u5185\u5bb9\u505a\u66ff\u6362\u5408\u5e76\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n       state: true, // { state: true }\n    },\n    entry2: { // { state: false, router: true }\n       router: true,\n    },\n  },\n});\n")))}s.isMDXComponent=!0}}]);