"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2870],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=t(18249),r=(t(52983),t(44993));const i={sidebar_position:7},a=void 0,p={unversionedId:"apis/app/commands/inspect",id:"apis/app/commands/inspect",title:"inspect",description:"modern inspect command used to view the full webpack configuration of the project.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/commands/inspect.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/inspect",permalink:"/v2/en/docs/apis/app/commands/inspect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"start",permalink:"/v2/en/docs/apis/app/commands/start"},next:{title:"upgrade",permalink:"/v2/en/docs/apis/app/commands/upgrade"}},c={},l=[{value:"Configuration Env",id:"configuration-env",level:2},{value:"Configuration Type",id:"configuration-type",level:2},{value:"SSR Configuration",id:"ssr-configuration",level:3},{value:"Modern Configuration",id:"modern-configuration",level:3}],u={toc:l};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: modern inspect [options]\n\ninspect internal webpack config\n\nOptions:\n  --env <env>           view the configuration in the target environment (default: "development")\n  --output <output>     Specify the path to output in the dist (default: "/")\n  --no-console          Do not output the full result in shell\n  --verbose             Show the full function in the result\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modern inspect")," command used to view the full webpack configuration of the project."),(0,r.kt)("p",null,"Executing the command ",(0,r.kt)("inlineCode",{parentName:"p"},"npx modern inspect")," in the project will output the webpack configuration on the shell, and will also generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.client.inspect.js")," file in the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory, which developers can open and view manually."),(0,r.kt)("h2",{id:"configuration-env"},"Configuration Env"),(0,r.kt)("p",null,"By default, the webpack configuration of the development environment is output. And the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," option can be used to output the configuration of the production environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --env production\n")),(0,r.kt)("h2",{id:"configuration-type"},"Configuration Type"),(0,r.kt)("h3",{id:"ssr-configuration"},"SSR Configuration"),(0,r.kt)("p",null,"If the project has SSR enable, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.ssr.inspect.js")," file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/"),", corresponding to the webpack configuration at SSR build time."),(0,r.kt)("h3",{id:"modern-configuration"},"Modern Configuration"),(0,r.kt)("p",null,"if project enable ",(0,r.kt)("a",{parentName:"p",href:"/docs/configure/app/output/enable-modern-mode"},"enableModernMode"),", an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.modern.inspect.js")," file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/"),"corresponding to the webpack configuration at modern web build."))}s.isMDXComponent=!0}}]);