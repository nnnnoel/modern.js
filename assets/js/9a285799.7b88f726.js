"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6414],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(18249),a=(n(29901),n(57522));const i={sidebar_position:6},l="updateService",o={unversionedId:"apis/app/runtime/electron/render-process/update-service",id:"apis/app/runtime/electron/render-process/update-service",title:"updateService",description:"* \u5347\u7ea7\u670d\u52a1\u3002",source:"@site/docs/apis/app/runtime/electron/render-process/update-service.md",sourceDirName:"apis/app/runtime/electron/render-process",slug:"/apis/app/runtime/electron/render-process/update-service",permalink:"/docs/apis/app/runtime/electron/render-process/update-service",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apisAppSidebar",previous:{title:"webviewService",permalink:"/docs/apis/app/runtime/electron/render-process/webview-service"},next:{title:"lifecycleService",permalink:"/docs/apis/app/runtime/electron/render-process/lifecycle-service"}},p={},d=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"<code>onUpdateProgress</code>",id:"onupdateprogress",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"<code>onUpdateIdle</code>",id:"onupdateidle",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"<code>onUpdateError</code>",id:"onupdateerror",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4},{value:"<code>onUpdateDone</code>",id:"onupdatedone",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:4},{value:"<code>restartAndInstall</code>",id:"restartandinstall",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-4",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updateservice"},"updateService"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateService } from '@modern-js/runtime/electron-render';\n")))),(0,a.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("h3",{id:"onupdateprogress"},(0,a.kt)("inlineCode",{parentName:"h3"},"onUpdateProgress")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateService.onUpdateProgress(callback)")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callback\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"(progress: IUpdateProgressInfo) => void"),"\uff0c\u76d1\u542c\u5347\u7ea7\u8fdb\u5ea6\u56de\u8c03\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,a.kt)("p",null,"\u66f4\u65b0\u8fdb\u5ea6\u7684\u76d1\u542c\u3002"),(0,a.kt)("h3",{id:"onupdateidle"},(0,a.kt)("inlineCode",{parentName:"h3"},"onUpdateIdle")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateService.onUpdateIdle(callback)")),(0,a.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callback\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"() => void"),"\uff0c\u76d1\u542c\u6682\u65e0\u7248\u672c\u66f4\u65b0\u56de\u8c03\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,a.kt)("p",null,"\u65e0\u5230\u66f4\u65b0\u7248\u672c\u76d1\u542c\u3002"),(0,a.kt)("h3",{id:"onupdateerror"},(0,a.kt)("inlineCode",{parentName:"h3"},"onUpdateError")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateService.onUpdateError(callback)")),(0,a.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callback\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"(err: any) => void"),"\uff0c\u76d1\u542c\u5347\u7ea7\u9519\u8bef\u56de\u8c03\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,a.kt)("p",null,"\u66f4\u65b0\u5931\u8d25\u76d1\u542c\u3002"),(0,a.kt)("h3",{id:"onupdatedone"},(0,a.kt)("inlineCode",{parentName:"h3"},"onUpdateDone")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateService.onUpdateDone(callback)")),(0,a.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callback\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"() => void"),"\uff0c\u76d1\u542c\u5347\u7ea7\u5b8c\u6210\u56de\u8c03\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u76d1\u542c\u3002"),(0,a.kt)("h3",{id:"restartandinstall"},(0,a.kt)("inlineCode",{parentName:"h3"},"restartAndInstall")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateService.restartAndInstall()")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u91cd\u542f\u5e76\u66f4\u65b0\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport bridge from '@modern-js/electron-bridge';\n\nconst { updateService } = bridge;\n\nconst App: React.FC = () => {\n   useEffect(() => {\n      // \u68c0\u67e5\u66f4\u65b0\n      updateService.checkUpdate({\n          url: 'xxx/xx'\n      });\n\n     // \u6dfb\u52a0\u76d1\u542c\n     const doneListener = updateService.onUpdateDone(() => {\n        console.log('update done')\n        // \u91cd\u542f\u5e76\u66f4\u65b0\n        updateService.restartAndInstall();\n      });\n     const errListener = updateService.onUpdateError(err => console.log(err));\n     const idleListener = updateService.onUpdateIdle(() => console.log('no update available'));\n     const progressListener = updateService.onUpdateProgress((progress: any) =>\n        console.log('progress:', progress),\n      );\n\n      return () => {\n          // \u53d6\u6d88\u76d1\u542c\n          doneListener.dispose();\n          errListener.dispose();\n          idleListener.dispose();\n          progressListener.dispose();\n      }\n   }, [])\n\n    return <div>demo</div>;\n}\n\n")))}c.isMDXComponent=!0}}]);