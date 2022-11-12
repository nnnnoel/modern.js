"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2066],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(18249),o=(n(52983),n(44993));const s={title:"\u200b\u7ba1\u7406 Design System"},a=void 0,i={unversionedId:"tutorials/first-app/c06-css-and-component/6.4-design-system",id:"tutorials/first-app/c06-css-and-component/6.4-design-system",title:"\u200b\u7ba1\u7406 Design System",description:"\u5728\u524d\u4e24\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u4e86 Utility Class \u4ee5\u53ca\u4f7f\u7528\u4e86 Modern.js \u5df2\u7ecf\u96c6\u6210\u7684 Utility Class \u5de5\u5177\u5e93 Tailwind CSS\uff0c",source:"@site/docs/tutorials/first-app/c06-css-and-component/6.4-design-system.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.4-design-system",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.4-design-system",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u7ba1\u7406 Design System"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u200b\u6dfb\u52a0\u65b0\u7684 Utility Class",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.3-postcss"},next:{title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.5-storybook"}},l={},p=[{value:"\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e",id:"\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"\u6269\u5c55\u9ed8\u8ba4\u914d\u7f6e",id:"\u6269\u5c55\u9ed8\u8ba4\u914d\u7f6e",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u524d\u4e24\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u4e86 Utility Class \u4ee5\u53ca\u4f7f\u7528\u4e86 Modern.js \u5df2\u7ecf\u96c6\u6210\u7684 Utility Class \u5de5\u5177\u5e93 ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\uff0c\n\u9ed8\u8ba4\u63d0\u4f9b\u7684\u8bbe\u8ba1\u7cfb\u7edf\u751f\u6210\u7684\u6837\u5f0f\u53ef\u4ee5\u6ee1\u8db3\u5b9e\u9645\u5f00\u53d1\u4e2d\u7684\u90e8\u5206\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u7136\u800c\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u7684\u8bbe\u8ba1\u7cfb\u7edf\u89c4\u8303\u3002\u4e3a\u6b64\uff0cModern.js \u63d0\u4f9b\u4e86\n",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},(0,o.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u914d\u7f6e\u6765\u7ba1\u7406\u9879\u76ee\u7684\u8bbe\u8ba1\u7cfb\u7edf\u3002"),(0,o.kt)("h2",{id:"\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e"},"\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e"),(0,o.kt)("p",null,"\u8981\u8986\u76d6\u9ed8\u8ba4\u7684\u8bbe\u8ba1\u7cfb\u7edf\u914d\u7f6e\uff0c\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"source.designSystem")," \u4e2d\u6dfb\u52a0\u8981\u8986\u76d6\u7684\u952e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    designSystem: {\n      opacity: {\n        0: '0',\n        20: '0.2',\n        40: '0.4',\n        60: '0.6',\n        80: '0.8',\n        100: '1',\n      },\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u5b8c\u5168\u66ff\u6362\u9ed8\u8ba4\u952e\u914d\u7f6e\uff0c\u56e0\u6b64\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4e0d\u4f1a\u751f\u6210\u9ed8\u8ba4\u7684 opacity utilities\u3002"),(0,o.kt)("p",null,"\u6240\u6709\u672a\u8986\u76d6\u7684\u952e\u90fd\u5c06\u4ece\u9ed8\u8ba4\u4e3b\u9898\u7ee7\u627f\uff0c\u56e0\u6b64\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u5c06\u4fdd\u7559\u989c\u8272\uff0c\u95f4\u8ddd\uff0c\u8fb9\u6846\u5706\u89d2\uff0c\u80cc\u666f\u4f4d\u7f6e\u7b49\u5185\u5bb9\u7684\u9ed8\u8ba4\u4e3b\u9898\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u6269\u5c55\u9ed8\u8ba4\u914d\u7f6e"},"\u6269\u5c55\u9ed8\u8ba4\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4fdd\u7559\u4e3b\u9898\u9009\u9879\u7684\u9ed8\u8ba4\u503c\uff0c\u4f46\u53c8\u8981\u6dfb\u52a0\u65b0\u503c\uff0c\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"designSystem.extend")," \u4e0b\u6dfb\u52a0\u6269\u5c55\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684\u65ad\u70b9\u4f46\u4fdd\u7559\u73b0\u6709\u7684\u65ad\u70b9\uff0c\u5219\u53ef\u4ee5\u6269\u5c55 ",(0,o.kt)("inlineCode",{parentName:"p"},"screens")," \u5c5e\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    designSystem: {\n      opacity: {\n        0: '0',\n        20: '0.2',\n        40: '0.4',\n        60: '0.6',\n        80: '0.8',\n        100: '1',\n      },\n      extend: {\n        screens: {\n          '2xl': '1440px',\n        },\n      },\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Item/index.tsx")," \u7684 button \u7ec4\u4ef6\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<button\n  type="button"\n  disabled={archived}\n  className={`bg-blue-500 text-white font-bold\n    py-2 px-4 rounded-full hover:bg-blue-700 2xl:bg-red-500`}\n>\n  Archive\n</button>\n')),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u540e\uff0c\u589e\u52a0\u9875\u9762\u5bbd\u5ea6\u8d85\u8fc7 1440px \u53ef\u4ee5\u770b\u5230 button \u989c\u8272\u53d8\u5316\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result4.png",alt:"design2"})),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-4"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);