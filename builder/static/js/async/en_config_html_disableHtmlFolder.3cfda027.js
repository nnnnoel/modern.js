"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[5464],{50925:function(e,s,n){n.r(s),n.d(s,{content:function(){return r},frontmatter:function(){return i},toc:function(){return t}});var l=n(39980);const i=void 0,t=[{id:"example",text:"Example",depth:3}],r='"- **Type:** `boolean`\\n- **Default:** `false`\\n\\nRemove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from `[name]/index.html` to `[name].html`.\\n\\n### Example\\n\\nBy default, the structure of HTML files in the `dist` directory is:\\n\\n```bash\\n/dist\\n\u2514\u2500\u2500 html\\n \xa0  \u2514\u2500\u2500 main\\n \xa0\xa0     \u2514\u2500\u2500 index.html\\n```\\n\\nEnable the `html.disableHtmlFolder` config:\\n\\n```js\\nexport default {\\n  html: {\\n    disableHtmlFolder: true,\\n  },\\n};\\n```\\n\\nAfter recompiling, the directory structure of the HTML files in dist is:\\n\\n```bash\\n/dist\\n\u2514\u2500\u2500 html\\n \xa0\xa0 \u2514\u2500\u2500 main.html\\n```\\n\\n> If you want to set the path of the HTML files, use the `output.distPath.html` config.\\n"';function o(e){const s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span",blockquote:"blockquote"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Type:"})," ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Default:"})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Remove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from ",(0,l.jsx)(s.code,{children:"[name]/index.html"})," to ",(0,l.jsx)(s.code,{children:"[name].html"}),"."]}),"\n",(0,l.jsxs)(s.h3,{id:"example",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,l.jsxs)(s.p,{children:["By default, the structure of HTML files in the ",(0,l.jsx)(s.code,{children:"dist"})," directory is:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/dist"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 html"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \xa0  \u2514\u2500\u2500 main"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \xa0\xa0     \u2514\u2500\u2500 index.html"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["Enable the ",(0,l.jsx)(s.code,{children:"html.disableHtmlFolder"})," config:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableHtmlFolder"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"After recompiling, the directory structure of the HTML files in dist is:"}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/dist"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 html"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \xa0\xa0 \u2514\u2500\u2500 main.html"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["If you want to set the path of the HTML files, use the ",(0,l.jsx)(s.code,{children:"output.distPath.html"})," config."]}),"\n"]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}}}]);