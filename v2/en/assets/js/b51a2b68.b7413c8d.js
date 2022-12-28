"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6061],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||r;return t?o.createElement(d,a(a({ref:n},s),{},{components:t})):o.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(18249),i=(t(52983),t(44993));const r={sidebar_position:0},a="Configure to use",l={unversionedId:"configure/app/usage",id:"configure/app/usage",title:"Configure to use",description:"There are two configurations in the Modern.js, a compile configuration and a server runtime configuration.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/usage.md",sourceDirName:"configure/app",slug:"/configure/app/usage",permalink:"/v2/en/docs/configure/app/usage",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"configsAppSidebar",next:{title:"alias",permalink:"/v2/en/docs/configure/app/source/alias"}},c={},p=[{value:"Configure in the configuration file",id:"configure-in-the-configuration-file",level:2},{value:"modern.config.js",id:"modernconfigjs",level:3},{value:"modern.config.ts",id:"modernconfigts",level:3},{value:"Configure in package.json (not recommended)",id:"configure-in-packagejson-not-recommended",level:2},{value:"Note",id:"note",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-to-use"},"Configure to use"),(0,i.kt)("p",null,"There are two configurations in the Modern.js, a compile configuration and a server runtime configuration."),(0,i.kt)("p",null,"The compile configuration can be configured in two places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modern.config.t(j)s")," file in the root path")),(0,i.kt)("admonition",{title:"Warning",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Configurations in both ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.t(j)s")," file are not supported for the same configuration. Configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config. t(j)s")," is recommended.")),(0,i.kt)("p",null,"Server runtime configuration can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.t(j)s")," file in the root path."),(0,i.kt)("h2",{id:"configure-in-the-configuration-file"},"Configure in the configuration file"),(0,i.kt)("p",null,"Modern.js configuration files are defined in the root path of the project, and both ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," formats are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modern.config.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modern.config.ts"))),(0,i.kt)("h3",{id:"modernconfigjs"},"modern.config.js"),(0,i.kt)("p",null,"You can use JavaScript syntax in the ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," file and it is more flexible than in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("p",null,"For example, you can define configuration options for function types in ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default {\n  source: {\n    alias: opts => {\n      opts['@common'] = './src/common';\n    },\n  },\n};\n")),(0,i.kt)("p",null,"You can also dynamically set it with ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NODE _ENV"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default {\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  },\n};\n")),(0,i.kt)("h3",{id:"modernconfigts"},"modern.config.ts"),(0,i.kt)("p",null,"We recommend using configuration files in ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," format, which provides friendly TypeScript type hints to help you avoid configuration errors."),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig")," tool function from ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/app-tools"),", which will help you with configuration type derivation and type completion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n")),(0,i.kt)("h2",{id:"configure-in-packagejson-not-recommended"},"Configure in package.json (not recommended)"),(0,i.kt)("p",null,"In addition to configuration files, configuration options can also be set the ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "modernConfig": {\n    "source": {\n      "alias": {\n        "@common": "./src/common"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Due to the limitation of the JSON file format, only simple types such as numbers, strings, boolean values, arrays, etc. can be defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". When we need to set the value of the function type, it is recommended to set it in the Modern.js configuration file."),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is not recommended to use both ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"modern.config.t[j]s")," for configuration. If both are used and a configuration conflict occurs, Modern.js will prompt error on the command line."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@modern-js/runtime")," exports the ",(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/app/define-config"},"defineConfig")," API of the same name, please pay attention to the distinction.")))}u.isMDXComponent=!0}}]);