"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[85772],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(86215),i=(n(49231),n(54852));const a={sidebar_position:2},l="\u4ecb\u7ecd",o={unversionedId:"guides/features/electron/ipc/ipc_",id:"guides/features/electron/ipc/ipc_",title:"\u4ecb\u7ecd",description:"\u7531\u4e8e Electron \u662f\u591a\u8fdb\u7a0b\uff0c\u5728\u4e0d\u540c\u8fdb\u7a0b\u4e4b\u95f4\u9700\u8981\u505a\u901a\u4fe1\u3002\u901a\u5e38\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u5728\u5982\u4e0b\u51e0\u4e2a\u8fdb\u7a0b\u95f4\u505a\u901a\u4fe1\uff1a",source:"@site/docs/guides/features/electron/ipc/ipc_.md",sourceDirName:"guides/features/electron/ipc",slug:"/guides/features/electron/ipc/ipc_",permalink:"/docs/guides/features/electron/ipc/ipc_",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u5173\u4e8e Node \u96c6\u6210",permalink:"/docs/guides/features/electron/develop"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/guides/features/electron/ipc/regist-services/"}},p={},s=[{value:"\u901a\u4fe1\u8be6\u89e3",id:"\u901a\u4fe1\u8be6\u89e3",level:2},{value:"\u76f8\u5173\u793a\u4f8b",id:"\u76f8\u5173\u793a\u4f8b",level:2},{value:"\u5355\u5411\u901a\u4fe1",id:"\u5355\u5411\u901a\u4fe1",level:3},{value:"\u53cc\u5411\u901a\u4fe1",id:"\u53cc\u5411\u901a\u4fe1",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u7531\u4e8e Electron \u662f\u591a\u8fdb\u7a0b\uff0c\u5728\u4e0d\u540c\u8fdb\u7a0b\u4e4b\u95f4\u9700\u8981\u505a\u901a\u4fe1\u3002\u901a\u5e38\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u5728\u5982\u4e0b\u51e0\u4e2a\u8fdb\u7a0b\u95f4\u505a\u901a\u4fe1\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b\uff08webview\uff09")),(0,i.kt)("p",null,"\u5728\u4e0d\u540c\u8fdb\u7a0b\u95f4\u5b58\u5728\u4e24\u79cd\u901a\u4fe1\u65b9\u5f0f\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u5355\u5411\u901a\u4fe1"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u53cc\u5411\u901a\u4fe1"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u5411\u901a\u4fe1\uff1a\u4ec5\u53d1\u9001\u6d88\u606f\u51fa\u53bb\u3002\u6bd4\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"winService.sendTo")," \u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53cc\u5411\u901a\u4fe1\uff1a\u53d1\u9001\u6d88\u606f\u51fa\u53bb\uff0c\u5e76\u83b7\u5f97\u8fd4\u56de\u7ed3\u679c\u3002\u6bd4\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"callMain")," \u7b49\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"ipcMain"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ipcRenderer")," \u539f\u751f\u901a\u4fe1\uff0c\u505a\u4e86\u4e0a\u5c42\u901a\u4fe1\u8bbe\u8ba1\uff0c\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u591a\u8fdb\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\u7ba1\u7406\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u53cc\u5411\u901a\u4fe1\uff0c\u964d\u4f4e\u901a\u4fe1\u4f7f\u7528\u590d\u6742\u5ea6\u3002\u6bd4\u5982\uff1a\u7a97\u53e3 A \u901a\u77e5\u7a97\u53e3 B \u6267\u884c\u4efb\u52a1\u5e76\u8fd4\u56de\u7ed3\u679c\u3002")),(0,i.kt)("h2",{id:"\u901a\u4fe1\u8be6\u89e3"},"\u901a\u4fe1\u8be6\u89e3"),(0,i.kt)("p",null,"\u5173\u4e8e\u5355\u5411\u901a\u4fe1\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/ipc2.png",alt:null})),(0,i.kt)("p",null,"\u53ef\u53c2\u8003\u76f8\u5173 API \u5373\u53ef\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/electron/main-process/win-service#sendto"},(0,i.kt)("inlineCode",{parentName:"a"},"winService.sendTo")),"\uff08\u4e3b\u8fdb\u7a0b\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/electron/render-process/win-service#sendto"},(0,i.kt)("inlineCode",{parentName:"a"},"winService.sendTo")),"\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/electron/render-process/webview-service#sendtowebview"},(0,i.kt)("inlineCode",{parentName:"a"},"webviewService.sendToWebview"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/electron/webview-process/index_#send"},(0,i.kt)("inlineCode",{parentName:"a"},"webviewBridge.send")))),(0,i.kt)("p",null,"\u5173\u4e8e\u53cc\u5411\u901a\u4fe1\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5c55\u793a\u4e86\u5f7c\u6b64\u4e4b\u95f4\u7684\u901a\u4fe1\u5173\u7cfb\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/ipc.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u8fdb\u7a0b"),"\u901a\u8fc7  ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")," \u5b9e\u4f8b\u5316\u65f6\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"mainServices")," \u4e2d\u6ce8\u518c\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"test1")," \u670d\u52a1\u51fd\u6570\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u901a\u8fc7  ",(0,i.kt)("inlineCode",{parentName:"li"},"callMain")," \u7684\u901a\u4fe1\u65b9\u5f0f\u8ba9\u4e3b\u8fdb\u7a0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"test1")," \u5e76\u83b7\u5f97\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"winService.registerServices")," \u6ce8\u518c\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"test2")," \u670d\u52a1\u51fd\u6570\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u8fdb\u7a0b"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"winService.callBrowserWindow")," \u7684\u901a\u4fe1\u65b9\u5f0f\u8ba9\u4e3b\u8fdb\u7a0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"test2")," \u5e76\u83b7\u5f97\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"webviewService.registerServices")," \u6ce8\u518c\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"test3")," \u670d\u52a1\u51fd\u6570\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b\uff08webview1 \u8fdb\u7a0b\uff09"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"webviewBridge.callBrowserWindow")," \u7684\u901a\u4fe1\u65b9\u5f0f\u8ba9\u4e3b\u8fdb\u7a0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"test3")," \u5e76\u83b7\u5f97\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b\uff08webview1 \u8fdb\u7a0b\uff09"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"webviewBridge.registerServices")," \u6ce8\u518c\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"test4")," \u670d\u52a1\u51fd\u6570\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"webviewService.callWebview")," \u7684\u901a\u4fe1\u65b9\u5f0f\u8ba9\u4e3b\u8fdb\u7a0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"test4")," \u5e76\u83b7\u5f97\u7ed3\u679c\u3002")),(0,i.kt)("h2",{id:"\u76f8\u5173\u793a\u4f8b"},"\u76f8\u5173\u793a\u4f8b"),(0,i.kt)("h3",{id:"\u5355\u5411\u901a\u4fe1"},"\u5355\u5411\u901a\u4fe1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u539f\u751f Electron \u7684\u5b9e\u73b0"),(0,i.kt)("p",{parentName:"li"},"\u5728 Electron \u539f\u751f API \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\u901a\u4fe1\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u7ed9\u67d0\u4e2a\u6e32\u67d3\u8fdb\u7a0b\uff08\u5373\u7a97\u53e3\uff09\u53d1\u9001\u6d88\u606f\u3002")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u4e3b\u8fdb\u7a0b"',title:'"\u4e3b\u8fdb\u7a0b"'},"// \u4e3b\u8fdb\u7a0b\u53d1\u9001\u6d88\u606f\nconst win = new BrowserWindow();\n\nwin.webContents.send('xxChannel', {msg: 'this is msg'});\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u6e32\u67d3\u8fdb\u7a0b"',title:'"\u6e32\u67d3\u8fdb\u7a0b"'},"// \u6e32\u67d3\u8fdb\u7a0b\u63a5\u6536\u6d88\u606f\nimport { ipcRenderer } from 'electron';\nipcRenderer.on('xxChannel', (e, msg) => {\n  console.log('msg:', msg);\n})\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modern Js Electron \u5b9e\u73b0"),(0,i.kt)("p",{parentName:"li"},"\u5728\u539f\u751f\u7684\u5199\u6cd5\u4e2d\uff0c\u6211\u4eec\u6709\u8fd9\u4e9b\u95ee\u9898:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u7ed9\u6e32\u67d3\u8fdb\u7a0b\u53d1\u6d88\u606f\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"li"},"BrowserWindow")," \u5b9e\u4f8b\uff0c\u56e0\u6b64\u9700\u8981\u8bbe\u8ba1",(0,i.kt)("strong",{parentName:"li"},"\u7a97\u53e3\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u76d1\u542c\u4e86\u6d88\u606f\uff0c\u89e3\u9664\u76d1\u542c\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"li"},"handler")," \uff0c\u6709\u70b9\u4e0d\u4fbf\u6377\u3002")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u6e32\u67d3\u8fdb\u7a0b"',title:'"\u6e32\u67d3\u8fdb\u7a0b"'},"const handler = (e, msg) => {\n  console.log('msg:', msg);\n};\nipcRenderer.on('xxChannel', handler)\n\n// \u89e3\u9664\u76d1\u542c\nipcRenderer.removeListener('xxChannel', handler);\n")),(0,i.kt)("p",{parentName:"li"},"\u5728 ModernJs Electron \u4e2d\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u4e3b\u8fdb\u7a0b"',title:'"\u4e3b\u8fdb\u7a0b"'},"// \u4e3b\u8fdb\u7a0b\u53d1\u9001\u6d88\u606f\u7ed9\u6e32\u67d3\u8fdb\u7a0b\nimport { winService } from '@modern-js/runtime/electron-main';\n...\n// \u7ed9 demo \u7a97\u53e3\u53d1\u9001\u6d88\u606f\nwinService.sendTo('demo', 'xxChannel', {data: 'this is msg from main'});\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u6e32\u67d3\u8fdb\u7a0b"',title:'"\u6e32\u67d3\u8fdb\u7a0b"'},"// \u6e32\u67d3\u8fdb\u7a0b\u76d1\u542c\u6d88\u606f\n\nimport { winService } from '@modern-js/runtime/electron-render';\n\nconst onxxChannelMsg = winService.onMessage<{data: string}>('xxChannel');\n\n...\n// \u76d1\u542c\nconst listener = onxxChannelMsg(({ data }) => {\n  console.log('msg:', data);\n});\n\n// \u89e3\u9664\u76d1\u542c\nlistener.dispose();\n")))),(0,i.kt)("h3",{id:"\u53cc\u5411\u901a\u4fe1"},"\u53cc\u5411\u901a\u4fe1"),(0,i.kt)("p",null,"\u53cc\u5411\u901a\u4fe1\u7684\u573a\u666f\uff0c\u5728\u6211\u4eec\u7684\u6846\u67b6\u4e2d\u88ab\u62bd\u8c61\u4e3a\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/ipc/regist-services/index"},"\u670d\u52a1\u7684\u6ce8\u518c\u4e0e\u8bbf\u95ee"),"\u3002"))}m.isMDXComponent=!0}}]);