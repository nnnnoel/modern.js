"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[7403],{70881:function(e,s,n){n.r(s),n.d(s,{frontmatter:function(){return o},title:function(){return i},toc:function(){return l}});var r=n(39980);const o=void 0,l=[{id:"enabling-hmr",text:"Enabling HMR",depth:2},{id:"specify-hmr-url",text:"Specify HMR URL",depth:2},{id:"live-reloading-vs-hot-reloading",text:"Live reloading vs Hot reloading",depth:2},{id:"faq",text:"FAQ",depth:2},{id:"hmr-not-work-when-external-reactreactdom",text:"HMR not work when external react/reactDom?",depth:3},{id:"hmr-not-work-when-use-https",text:"HMR not work when use https?",depth:3},{id:"react-component-state-lost-after-hmr",text:"React component state lost after HMR?",depth:3}],i="Hot Module Replacement";function t(e){const s=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",img:"img",blockquote:"blockquote"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"hot-module-replacement",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hot-module-replacement",children:"#"}),"Hot Module Replacement"]}),"\n",(0,r.jsx)(s.p,{children:"Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Retain application state which is lost during a full reload."}),"\n",(0,r.jsx)(s.li,{children:"Save valuable development time by only updating what's changed."}),"\n",(0,r.jsx)(s.li,{children:"Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools."}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"enabling-hmr",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-hmr",children:"#"}),"Enabling HMR"]}),"\n",(0,r.jsx)(s.p,{children:"Builder has built-in support for HMR. By default, HMR is enabled in development."}),"\n",(0,r.jsxs)(s.p,{children:["By setting ",(0,r.jsx)(s.a,{href:"/builder/en/api/config-dev.html#devhmr",children:"dev.hmr"})," to false, HMR can be disabled, which the HMR and react-refresh will no longer work."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    hmr"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"specify-hmr-url",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-hmr-url",children:"#"}),"Specify HMR URL"]}),"\n",(0,r.jsx)(s.p,{children:"By default, builder get HMR client URL by local-ip and current port."}),"\n",(0,r.jsx)(s.p,{children:"In the event of a connection failure you can specify an available URL by custom configuration."}),"\n",(0,r.jsx)(s.p,{children:"For example, set HMR client and port empty to auto derived from browser:"}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    devServer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      client"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        host"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        port"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"live-reloading-vs-hot-reloading",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#live-reloading-vs-hot-reloading",children:"#"}),"Live reloading vs Hot reloading"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Live reloading: After modifying the file, webpack recompiles and forces a browser refresh, which is a global (application-wide) refresh, equivalent to ",(0,r.jsx)(s.code,{children:"window.location.reload()"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Hot reloading: After modifying the file, webpack recompiles the corresponding module and remembers the state of the application when it is refreshed, thus enabling a partial refresh, i.e. hot update."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["DevServer provides two configuration items, ",(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#hot",children:"hot"})," and ",(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#livereload",children:"liveReload"}),", to control how updates are made. When both hot and liveReload are open, DevServer will attempt to use hot mode (HMR) first, and will degrade to reloading the page if the HMR update fails."]}),"\n",(0,r.jsxs)(s.h2,{id:"faq",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"}),"FAQ"]}),"\n",(0,r.jsxs)(s.h3,{id:"hmr-not-work-when-external-reactreactdom",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-work-when-external-reactreactdom",children:"#"}),"HMR not work when external react/reactDom?"]}),"\n",(0,r.jsx)(s.p,{children:"HMR work requires the development mode of react & react-dom. The cdn version of react normally used the production mode.\nYou need to switch to development mode or make it not external when development."}),"\n",(0,r.jsxs)(s.p,{children:["If you're not sure which React mode you're using, you can see: ",(0,r.jsx)(s.a,{href:"https://reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"nofollow",children:"Check React Mode"})]}),"\n",(0,r.jsxs)(s.h3,{id:"hmr-not-work-when-use-https",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-work-when-use-https",children:"#"}),"HMR not work when use https?"]}),"\n",(0,r.jsx)(s.p,{children:"When https is enabled, the HMR perhaps connection fail due to a certificate issue, and if you open the console, you will get an HMR connect failed error."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_2f90d027-a232-4bd8-8021-dac3c651682g.jpg",alt:"hmr-connect-error-0"})}),"\n",(0,r.jsx)(s.p,{children:'The solution to this problem is to click on "Advanced" -> "Proceed to xxx (unsafe)" on the Chrome problem page.'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/3d2d4a38-acfe-4fe2-bdff-48b3366db481.png",alt:"hmr-connect-error-1"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'Tips: When accessing the page through Localhost, the words "Your connection is not private" may not appear and can be handled by visiting the Network domain.'}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"react-component-state-lost-after-hmr",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#react-component-state-lost-after-hmr",children:"#"}),"React component state lost after HMR?"]}),"\n",(0,r.jsxs)(s.p,{children:["Builder uses React's official ",(0,r.jsx)(s.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"nofollow",children:"Fast Refresh"})," capability for component hot update."]}),"\n",(0,r.jsx)(s.p,{children:"When using Fast Refresh, it is required that the component cannot be an anonymous function, otherwise the state of the React component cannot be preserved after hot update."}),"\n",(0,r.jsx)(s.p,{children:"The following spellings are incorrect:"}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// wrong spelling 1"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello World</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// wrong spelling 2"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello World</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(s.p,{children:"The correct spelling is:"}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Correct spelling 1"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyComponent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello World</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Correct spelling 2"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyComponent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello World</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" MyComponent;"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);