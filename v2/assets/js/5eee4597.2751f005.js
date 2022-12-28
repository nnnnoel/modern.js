"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3590],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(18249),i=(t(52983),t(44993));const o={title:"source.entries",sidebar_label:"entries"},a=void 0,l={unversionedId:"configure/app/source/entries",id:"configure/app/source/entries",title:"source.entries",description:"* \u7c7b\u578b\uff1a Object = { [ entryName string | Object }",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/source/entries.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/entries",permalink:"/v2/docs/configure/app/source/entries",draft:!1,tags:[],version:"current",frontMatter:{title:"source.entries",sidebar_label:"entries"},sidebar:"configsAppSidebar",previous:{title:"entriesDir",permalink:"/v2/docs/configure/app/source/entries-dir"},next:{title:"exclude",permalink:"/v2/docs/configure/app/source/exclude"}},p={},s=[{value:"String \u7c7b\u578b",id:"string-\u7c7b\u578b",level:2},{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:2},{value:"\u81ea\u5b9a\u4e49\u5165\u53e3\u548c\u9ed8\u8ba4\u5165\u53e3\u5408\u5e76",id:"\u81ea\u5b9a\u4e49\u5165\u53e3\u548c\u9ed8\u8ba4\u5165\u53e3\u5408\u5e76",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object = { [ entryName: string ]: string | Object }")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a \u6839\u636e\u5f53\u524d\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u52a8\u6001\u7ed3\u7b97\u51fa\u7684\u9ed8\u8ba4\u5165\u53e3\u5bf9\u8c61\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5927\u90e8\u5206\u573a\u666f\uff0cModern.js \u6839\u636e\u76ee\u5f55\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u7684\u5165\u53e3\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u4e1a\u52a1\u9700\u6c42\u3002\u5177\u4f53\u53ef\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries"},"\u5165\u53e3"),"\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\u6784\u5efa\u5165\u53e3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u9009\u9879\u6307\u5b9a\u3002"),(0,i.kt)("h2",{id:"string-\u7c7b\u578b"},"String \u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u65f6\uff0c\u4e3a\u5165\u53e3\u7684\u6587\u4ef6\u8def\u5f84:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // \u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\u4e3a entry_customize \u7684\u65b0\u5165\u53e3\n      entry_customize: './src/home/test/index.js',\n    },\n  },\n});\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u7684\u5165\u53e3\u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),"\uff0c\u5373\u6307\u5b9a\u7684\u5165\u53e3\u6587\u4ef6\u53ea\u9700\u8981\u5bfc\u51fa\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 entry\n\u2502       \u251c\u2500\u2500 chat.tsx\n\u2502       \u2514\u2500\u2500 home.tsx\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("p",null,"\u7ed3\u5408\u4e0a\u9762\u9ed8\u8ba4\u5165\u53e3\u673a\u5236\u7684\u5185\u5bb9\uff0cModern.js \u5728\u5206\u6790\u4e0a\u8ff0\u76ee\u5f55\u7ed3\u6784\u65f6\uff0c\u4e0d\u4f1a\u5f97\u5230\u4efb\u4f55\u9ed8\u8ba4\u5165\u53e3\u3002"),(0,i.kt)("p",null,"\u5728\u4e0d\u60f3\u6539\u53d8\u76ee\u5f55\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\uff08\u5982\u9879\u76ee\u8fc1\u79fb\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"source.entries")," \u81ea\u5b9a\u4e49\u5165\u53e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    entries: {\n      home: './src/entry/home.tsx',\n      chat: './src/entry/chat.tsx',\n    },\n  },\n});\n")),(0,i.kt)("h2",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u65f6\uff0c\u53ef\u914d\u7f6e\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5165\u53e3\u6587\u4ef6\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disableMount"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean = false"),"\uff0c\u5173\u95ed Modern.js \u751f\u6210\u5165\u53e3\u4ee3\u7801\u7684\u884c\u4e3a\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        // \u5165\u53e3\u6587\u4ef6\u8def\u5f84\n        entry: './src/home/test/App.jsx',\n      },\n      // \u542f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\n      entry_spa: {\n        // \u7ea6\u5b9a\u5f0f\u8def\u7531\u7684\u5165\u53e3\u8def\u5f84\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u76ee\u5f55\n        entry: './src/about'\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u7684\u5165\u53e3\u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),"\uff0c\u5982\u679c\u5e0c\u671b\u8be5\u5165\u53e3\u7b49\u4ef7\u4e8e\u6784\u5efa\u6a21\u5f0f\u4e0b\u7684\u5165\u53e3\uff0c\u53ef\u4ee5\u5c06\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"p"},"disableMount")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5165\u53e3\u548c\u9ed8\u8ba4\u5165\u53e3\u5408\u5e76"},"\u81ea\u5b9a\u4e49\u5165\u53e3\u548c\u9ed8\u8ba4\u5165\u53e3\u5408\u5e76"),(0,i.kt)("p",null,"\u5728\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"source.entries")," \u540e\uff0cModern.js \u4f1a\u5c06\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u5165\u53e3\u4e0e\u5206\u6790\u76ee\u5f55\u7ed3\u6784\u5f97\u5230\u7684\u9ed8\u8ba4\u5165\u53e3\u5408\u5e76\u3002\u5408\u5e76\u89c4\u5219\u4e3a\uff1a"),(0,i.kt)("p",null,"\u6bd4\u8f83\u81ea\u5b9a\u4e49\u5165\u53e3\u8bbe\u7f6e\u7684\u5165\u53e3\u8def\u5f84\u548c\u9ed8\u8ba4\u5165\u53e3\u8def\u5f84\uff0c\u5f53\u5165\u53e3\u8def\u5f84\u4e00\u81f4\u65f6\uff0c\u81ea\u5b9a\u4e49\u5165\u53e3\u4f1a\u8986\u76d6\u9ed8\u8ba4\u5165\u53e3\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 chat\n\u2502   \u2502   \u2514\u2500\u2500 App.jsx\n\u2502   \u2514\u2500\u2500 home\n\u2502       \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("p",null,"Modern.js \u5206\u6790 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\uff0c\u5f97\u5230\u9ed8\u8ba4\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"chat")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"home"),"\u3002\u5f53\u7528\u6237\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u5982\u4e0b\u65f6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      index: './src/home/index.js',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u81ea\u5b9a\u4e49\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u7684\u8def\u5f84\u548c\u9ed8\u8ba4\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"home")," \u7684\u8def\u5f84\u4e00\u81f4\uff0c\u5728\u5408\u5e76\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u4f1a\u8986\u76d6\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},"home"),"\uff0c\u6700\u7ec8\u5165\u53e3\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chat -> ./src/chat/App.jsx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index -> ./src/home/index.js"))))}u.isMDXComponent=!0}}]);