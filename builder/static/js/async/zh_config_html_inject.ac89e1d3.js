"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6805],{65999:function(s,e,r){r.r(e),r.d(e,{content:function(){return o},frontmatter:function(){return i},toc:function(){return l}});var n=r(39980);const i=void 0,l=[{id:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",text:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",depth:4},{id:"\u63d2\u5165\u81f3-body-\u6807\u7b7e",text:"\u63d2\u5165\u81f3 body \u6807\u7b7e",depth:4}],o='"- **\u7c7b\u578b\uff1a** `\'head\' | \'body\'| \'true\' | false`\\n- **\u9ed8\u8ba4\u503c\uff1a** `\'head\'`\\n\\n\u4fee\u6539\u6784\u5efa\u4ea7\u7269\u4e2d `<script>` \u6807\u7b7e\u5728 HTML \u4e2d\u7684\u63d2\u5165\u4f4d\u7f6e\u3002\\n\\n\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u503c\uff1a\\n\\n- `\'head\'`: script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 head \u6807\u7b7e\u5185\u3002\\n- `\'body\'`: script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 body \u6807\u7b7e\u5c3e\u90e8\u3002\\n- `true`: \u6700\u7ec8\u8868\u73b0\u53d6\u51b3\u4e8e `html-webpack-plugin` \u7684 scriptLoading \u914d\u7f6e\u9879\u3002\\n- `false`: script \u6807\u7b7e\u4e0d\u63d2\u5165 HTML \u4e2d\u3002\\n\\n#### \u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e\\n\\nscript \u6807\u7b7e\u9ed8\u8ba4\u5728 head \u6807\u7b7e\u5185\uff1a\\n\\n```html\\n<html>\\n  <head>\\n    <title></title>\\n    <script defer src=\\"/static/js/runtime-main.js\\"><\/script>\\n    <script defer src=\\"/static/js/main.js\\"><\/script>\\n    <link href=\\"/static/css/main.css\\" rel=\\"stylesheet\\" />\\n  </head>\\n  <body>\\n    <div id=\\"root\\"></div>\\n  </body>\\n</html>\\n```\\n\\n#### \u63d2\u5165\u81f3 body \u6807\u7b7e\\n\\n\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06 script \u63d2\u5165\u81f3 body \u6807\u7b7e\uff1a\\n\\n```js\\nexport default {\\n  html: {\\n    inject: \'body\',\\n  },\\n};\\n```\\n\\n\u53ef\u4ee5\u770b\u5230 script \u6807\u7b7e\u751f\u6210\u5728 body \u6807\u7b7e\u5c3e\u90e8\uff1a\\n\\n```html\\n<html>\\n  <head>\\n    <title></title>\\n    <link href=\\"/static/css/main.css\\" rel=\\"stylesheet\\" />\\n  </head>\\n  <body>\\n    <div id=\\"root\\"></div>\\n    <script defer src=\\"/static/js/runtime-main.js\\"><\/script>\\n    <script defer src=\\"/static/js/main.js\\"><\/script>\\n  </body>\\n</html>\\n```\\n"';function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,n.jsx)(e.code,{children:"'head' | 'body'| 'true' | false"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,n.jsx)(e.code,{children:"'head'"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u4fee\u6539\u6784\u5efa\u4ea7\u7269\u4e2d ",(0,n.jsx)(e.code,{children:"<script>"})," \u6807\u7b7e\u5728 HTML \u4e2d\u7684\u63d2\u5165\u4f4d\u7f6e\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u503c\uff1a"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"'head'"}),": script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 head \u6807\u7b7e\u5185\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"'body'"}),": script \u6807\u7b7e\u4f1a\u63d2\u5165\u5728 HTML \u7684 body \u6807\u7b7e\u5c3e\u90e8\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"true"}),": \u6700\u7ec8\u8868\u73b0\u53d6\u51b3\u4e8e ",(0,n.jsx)(e.code,{children:"html-webpack-plugin"})," \u7684 scriptLoading \u914d\u7f6e\u9879\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"false"}),": script \u6807\u7b7e\u4e0d\u63d2\u5165 HTML \u4e2d\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(e.h4,{id:"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e",children:"#"}),"\u9ed8\u8ba4\u63d2\u5165\u4f4d\u7f6e"]}),"\n",(0,n.jsx)(e.p,{children:"script \u6807\u7b7e\u9ed8\u8ba4\u5728 head \u6807\u7b7e\u5185\uff1a"}),"\n",(0,n.jsxs)(e.div,{className:"language-html",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/runtime-main.js"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/main.js"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"link"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/css/main.css"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"rel"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"stylesheet"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"root"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h4,{id:"\u63d2\u5165\u81f3-body-\u6807\u7b7e",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63d2\u5165\u81f3-body-\u6807\u7b7e",children:"#"}),"\u63d2\u5165\u81f3 body \u6807\u7b7e"]}),"\n",(0,n.jsx)(e.p,{children:"\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06 script \u63d2\u5165\u81f3 body \u6807\u7b7e\uff1a"}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    inject"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230 script \u6807\u7b7e\u751f\u6210\u5728 body \u6807\u7b7e\u5c3e\u90e8\uff1a"}),"\n",(0,n.jsxs)(e.div,{className:"language-html",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"link"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/css/main.css"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"rel"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"stylesheet"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"root"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/runtime-main.js"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/main.js"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(c,s)})):c(s)}}}]);