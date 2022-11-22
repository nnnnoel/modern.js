"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[958],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const a={toc:[{value:"Example",id:"example",level:4}]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("p",null,"Whether to inline output scripts files (.js files) into HTML with ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags."),(0,i.kt)("p",null,"Note that, with this option on, the scripts files will no longer be written in dist directory, they will only exist inside the HTML file instead."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"By default, we have following output files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n")),(0,i.kt)("p",null,"After turn on the ",(0,i.kt)("inlineCode",{parentName:"p"},"output.enableInlineScripts")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n")),(0,i.kt)("p",null,"The output files will become:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dist/html/main/index.html\ndist/static/css/style.css\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/static/js/main.js")," will be inlined in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    <\/script>\n  </body>\n</html>\n")))}l.isMDXComponent=!0;const o={title:"output.enableInlineScripts",sidebar_label:"enableInlineScripts"},p=void 0,s={unversionedId:"configure/app/output/enable-inline-scripts",id:"configure/app/output/enable-inline-scripts",title:"output.enableInlineScripts",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.enableInlineScripts\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/enable-inline-scripts.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-inline-scripts",permalink:"/v2/en/docs/configure/app/output/enable-inline-scripts",draft:!1,tags:[],version:"current",frontMatter:{title:"output.enableInlineScripts",sidebar_label:"enableInlineScripts"},sidebar:"configsAppSidebar",previous:{title:"enableCssModuleTSDeclaration",permalink:"/v2/en/docs/configure/app/output/enable-css-module-tsdeclaration"},next:{title:"enableInlineStyles",permalink:"/v2/en/docs/configure/app/output/enable-inline-styles"}},c={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-enableinlinescripts"},"output.enableInlineScripts"),"\u3002")),(0,i.kt)(l,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);