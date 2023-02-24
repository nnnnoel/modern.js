"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[1371],{6625:function(e,s,n){n.r(s),n.d(s,{frontmatter:function(){return i},title:function(){return l},toc:function(){return o}});var r=n(97458);const i={sidebar_position:5,title:"Use Proxy"},o=[],l="Use Proxy";function c(e){const s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"use-proxy",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"}),"Use Proxy"]}),"\n",(0,r.jsx)(s.p,{children:"By configuring the BFF proxy, API requests can be forwarded without manual coding"}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive caution",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"CAUTION"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nUsing a BFF proxy ensures that requests can enter the BFF handler. (eg the request path must contain a bff prefix)"})})]}),"\n",(0,r.jsxs)(s.p,{children:["Writing the following BFF proxy configuration in the ",(0,r.jsx)(s.code,{children:"modern.server-runtime.config.js"})," file will proxy requests sent to ",(0,r.jsx)(s.code,{children:"http://localhost:8080/api/v1/topics"})," to ",(0,r.jsx)(s.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.server-runtime.config.js"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools/server'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  bff"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    proxy"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/api/v1/topics'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://cnodejs.org'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nFor more detail, see ",(0,r.jsx)(s.a,{href:"/en/configure/app/bff/proxy.html",children:"bff.proxy"}),". For more proxy info, see ",(0,r.jsx)(s.a,{href:"/en/guides/basic-features/proxy.html",children:"Proxy"}),"."]})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);