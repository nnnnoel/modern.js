"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6948],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var o=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return t?o.createElement(m,i(i({ref:n},s),{},{components:t})):o.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(18249),r=(t(52983),t(44993));const a={title:"autoLoadPlugins",sidebar_position:11},i=void 0,l={unversionedId:"configure/app/auto-load-plugin",id:"configure/app/auto-load-plugin",title:"autoLoadPlugins",description:"- Type: boolean",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/auto-load-plugin.md",sourceDirName:"configure/app",slug:"/configure/app/auto-load-plugin",permalink:"/v2/en/docs/configure/app/auto-load-plugin",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"autoLoadPlugins",sidebar_position:11},sidebar:"configsAppSidebar",previous:{title:"builderPlugins",permalink:"/v2/en/docs/configure/app/builder-plugins"},next:{title:"autoprefixer",permalink:"/v2/en/docs/configure/app/tools/autoprefixer"}},p={},u=[{value:"Manual Registration Plugin",id:"manual-registration-plugin",level:3},{value:"Auto Registration plugin",id:"auto-registration-plugin",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Used to configure whether Modern.js enables auto-registration of plugins."),(0,r.kt)("h3",{id:"manual-registration-plugin"},"Manual Registration Plugin"),(0,r.kt)("p",null,"By default, installing the plugin requires you to register the plugin manually in the ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import AppToolsPlugin, { defineConfig } from '@modern-js/app-tools';\nimport I18nPlugin from '@modern-js/plugin-i18n';\n\ndefault export defineConfig({\n  plugins: [AppToolsPlugin(), I18nPlugin()]\n})\n\n")),(0,r.kt)("h3",{id:"auto-registration-plugin"},"Auto Registration plugin"),(0,r.kt)("p",null,"In addition to means registration, Modern.js also provides a way to automatically register plugins: set the ",(0,r.kt)("inlineCode",{parentName:"p"},"autoLoadPlugin")," configuration item to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\ndefault export defineConfig({\n  autoLoadPlugins: true\n})\n")),(0,r.kt)("p",null,"Modern.js will help you automatically register the plugin by following these steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modern.js maintains an official list of plugins internally.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Modern.js will read your ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," and collect the dependency information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Modern.js observes that when you install dependencies such as ",(0,r.kt)("inlineCode",{parentName:"li"},"@modern-js/plugin-i18n")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@modern-js/app-tools"),", automatic plugin registration will be imported.")),(0,r.kt)("p",null,"You can notice that this approach is relatively black-box and you are not even aware of the process of loading the plugin. We want to expose more details to the developer and be able to let the developer control the process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Therefore we recommend you to register the plugin manually.")))}c.isMDXComponent=!0}}]);