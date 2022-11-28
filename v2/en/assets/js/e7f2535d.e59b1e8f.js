"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3225],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const i={title:"cleanup",sidebar_position:3},o=void 0,p={unversionedId:"apis/app/runtime/testing/cleanup",id:"apis/app/runtime/testing/cleanup",title:"cleanup",description:"Used to uninstall all currently rendered components.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/testing/cleanup.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/cleanup",permalink:"/v2/en/docs/apis/app/runtime/testing/cleanup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"cleanup",sidebar_position:3},sidebar:"apisAppSidebar",previous:{title:"loadable",permalink:"/v2/en/docs/apis/app/runtime/utility/loadable"},next:{title:"act",permalink:"/v2/en/docs/apis/app/runtime/testing/act"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Used to uninstall all currently rendered components."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { cleanup } from '@modenr-js/runtime/testing';\n")),(0,a.kt)("h2",{id:"function-signature"},"Function Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function cleanup(): void")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that if you are using a testing framework that supports afterEach and it is injected into your testing environment (such as mocha, Jest, and Jasmine), ",(0,a.kt)("strong",{parentName:"p"},"will execute ",(0,a.kt)("inlineCode",{parentName:"strong"},"cleanup"))," in the afterEach hook by default. Otherwise, you will need to do manual cleanup after each test.")),(0,a.kt)("p",null,"For example, if you use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava"},"ava")," test framework, then you need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"test.after Each")," hook like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava';\n\ntest.afterEach(cleanup);\n\ntest('renders into document', () => {\n  render(<div />);\n  // ...\n});\n\n// ... more tests ...\n")))}c.isMDXComponent=!0}}]);