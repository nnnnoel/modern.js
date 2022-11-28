"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8937],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(18249),o=(n(52983),n(44993));const a={title:"Hook"},i=void 0,s={unversionedId:"apis/app/runtime/web-server/hook",id:"apis/app/runtime/web-server/hook",title:"Hook",description:"Used to extend Modern.js built-in Web Server, requests except BFF are handled by these hooks.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/web-server/hook.md",sourceDirName:"apis/app/runtime/web-server",slug:"/apis/app/runtime/web-server/hook",permalink:"/v2/en/docs/apis/app/runtime/web-server/hook",draft:!1,tags:[],version:"current",frontMatter:{title:"Hook"},sidebar:"apisAppSidebar",previous:{title:"useContext",permalink:"/v2/en/docs/apis/app/runtime/bff/use-context"},next:{title:"Middleware",permalink:"/v2/en/docs/apis/app/runtime/web-server/middleware"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Input",id:"input",level:3},{value:"Example",id:"example",level:2},{value:"Redirect",id:"redirect",level:3},{value:"Rewrite",id:"rewrite",level:3},{value:"HTML Inject",id:"html-inject",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Used to extend Modern.js built-in Web Server, requests except BFF are handled by these hooks."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For more detail, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/web-server"},"Extend Web Server"),"\u3002")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (context, next) => {}\nexport const afterRender: AfterRenderHook = (context, next) => {}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8be5 API \u524d\uff0c\u8bf7\u5148\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u65b0\u5efa\u300cWeb Server \u6269\u5c55\u300d\u6e90\u7801\u76ee\u5f55\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n? \u65b0\u5efa\u300cWeb Server \u6269\u5c55\u300d\u6e90\u7801\u76ee\u5f55\n"))),(0,o.kt)("h2",{id:"function-signature"},"Function Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type HookContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      get: (key: string) => string;\n      set: (key: string, value: string) => void;\n      delete: () => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n};\n\nfunction Hook(context: HookContext, next: NextFunction): Promsie<void> | void;\n")),(0,o.kt)("p",null,"different Hooks additionally provide different contexts. Currently Modern.js support ",(0,o.kt)("inlineCode",{parentName:"p"},"AtferMatch")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AfterRender"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AfterMatchContext = HookContext & {\n  router: {\n    redirect: (url: string, status: number) => void;\n    rewrite: (entry: string) => void;\n  };\n}\n\ntype AfterRenderContext = {\n  template: {\n    get: () => string;\n    set: (html: string) => void;\n    prependHead: (fragment: string) => void;\n    appendHead: (fragment: string) => void;\n    prependBody: (fragment: string) => void;\n    appendBody: (fragment: string) => void;\n  };\n};\n")),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": Hook context.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"response"),": provides a series of methods to process the response."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request"),": provides a series of methods to get request info."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"router"),": provides methods on routing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"template"),": provides methods on content."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"next"),": call next listener\uff08not affect the server process, only current hook\uff09\u3002")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"redirect"},"Redirect"),(0,o.kt)("p",null,"Redirect to pages outside the site, for example to login page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.redirect('https://website.com/login', 302);\n};\n")),(0,o.kt)("h3",{id:"rewrite"},"Rewrite"),(0,o.kt)("p",null,"Rewrite to pages of the current site, for example, the same route returns pages that are adapted to different UA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.rewrite('mobile');\n};\n")),(0,o.kt)("h3",{id:"html-inject"},"HTML Inject"),(0,o.kt)("p",null,"Inject some HTML content to the page, such as scripts, page skeletons, etc.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { AfterRender } from '@modern-js/runtime/server';\n\nexport const afterRender: AfterRenderHook = (context, next) => {\n  ctx.template.prependBody('<div>Footer</div>');\n}\n")))}d.isMDXComponent=!0}}]);