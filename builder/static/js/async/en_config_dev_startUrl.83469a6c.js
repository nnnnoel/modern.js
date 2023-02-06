"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[5001],{63042:function(e,s,n){n.r(s),n.d(s,{content:function(){return o},frontmatter:function(){return r},toc:function(){return t}});var l=n(39980);const r=void 0,t=[{id:"port-placeholder",text:"Port placeholder",depth:2}],o="\"- **Type:** `boolean | string | string[] | undefined`\\n- **Default:** `undefined`\\n\\n`dev.startUrl` is used to set the URL of the page that automatically opens in the browser when Dev Server starts.\\n\\nBy default, no page will be opened.\\n\\nYou can set it to the following values:\\n\\n```js\\nexport default {\\n  dev: {\\n    // Open the project's default preview page, equivalent to `http://localhost:<port>`\\n    startUrl: true,\\n    // Open the specified page\\n    startUrl: 'http://localhost:8080',\\n    // Open multiple pages\\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\\n  },\\n};\\n```\\n\\n## Port placeholder\\n\\nSince the port number may change, you can use the `<port>` placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number.\\n\\n```js\\nexport default {\\n  dev: {\\n    startUrl: 'http://localhost:<port>/home',\\n  },\\n};\\n```\\n\"";function i(e){const s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",a:"a"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Type:"})," ",(0,l.jsx)(s.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Default:"})," ",(0,l.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,l.jsx)(s.p,{children:"By default, no page will be opened."}),"\n",(0,l.jsx)(s.p,{children:"You can set it to the following values:"}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Open the project's default preview page, equivalent to `http://localhost:<port>`"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Open the specified page"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Open multiple pages"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080/about'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"port-placeholder",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#port-placeholder",children:"#"}),"Port placeholder"]}),"\n",(0,l.jsxs)(s.p,{children:["Since the port number may change, you can use the ",(0,l.jsx)(s.code,{children:"<port>"})," placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number."]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:<port>/home'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);