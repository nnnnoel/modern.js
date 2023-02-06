"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3310],{71079:function(s,e,n){n.r(e),n.d(e,{content:function(){return l},frontmatter:function(){return o},toc:function(){return r}});var i=n(39980);const o=void 0,r=[{id:"example",text:"Example",depth:3}],l="\"- **Type:** `Record<string, unknown>`\\n- **Default:** `{}`\\n\\nReplaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds.\\n\\nEach key passed into options is an identifier or multiple identifiers joined with `.`.\\n\\n- If the value is a string it will be used as a code fragment.\\n- If the value isn't a string, it will be stringified (including functions).\\n- If the value is an object all keys are defined the same way.\\n- If you prefix typeof to the key, it's only defined for typeof calls.\\n\\nFor more information please visit [https://webpack.js.org/plugins/define-plugin/](https://webpack.js.org/plugins/define-plugin/).\\n\\n### Example\\n\\n```js\\nexport default {\\n  source: {\\n    define: {\\n      PRODUCTION: JSON.stringify(true),\\n      VERSION: JSON.stringify('5fa3b9'),\\n      BROWSER_SUPPORTS_HTML5: true,\\n      TWO: '1 + 1',\\n      'typeof window': JSON.stringify('object'),\\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\\n      'import.meta': { test: undefined },\\n    },\\n  },\\n};\\n```\\n\\nExpressions will be replaced with the corresponding code fragments:\\n\\n```js\\nconst foo = TWO;\\n\\n// \u2b07\ufe0f Turn into being...\\nconst foo = 1 + 1;\\n```\\n\"";function t(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Type:"})," ",(0,i.jsx)(e.code,{children:"Record<string, unknown>"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Default:"})," ",(0,i.jsx)(e.code,{children:"{}"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Replaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds."}),"\n",(0,i.jsxs)(e.p,{children:["Each key passed into options is an identifier or multiple identifiers joined with ",(0,i.jsx)(e.code,{children:"."}),"."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"If the value is a string it will be used as a code fragment."}),"\n",(0,i.jsx)(e.li,{children:"If the value isn't a string, it will be stringified (including functions)."}),"\n",(0,i.jsx)(e.li,{children:"If the value is an object all keys are defined the same way."}),"\n",(0,i.jsx)(e.li,{children:"If you prefix typeof to the key, it's only defined for typeof calls."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For more information please visit ",(0,i.jsx)(e.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"nofollow",children:"https://webpack.js.org/plugins/define-plugin/"}),"."]}),"\n",(0,i.jsxs)(e.h3,{id:"example",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    define"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      PRODUCTION"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      VERSION"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'5fa3b9'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      BROWSER_SUPPORTS_HTML5"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      TWO"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'1 + 1'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'typeof window'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'object'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'process.env.NODE_ENV'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NODE_ENV"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'import.meta'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { test"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(e.p,{children:"Expressions will be replaced with the corresponding code fragments:"}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"foo"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"TWO"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(e.span,{className:"line"}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u2b07\ufe0f Turn into being..."})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"foo"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,i.jsx)(e,Object.assign({},s,{children:(0,i.jsx)(t,s)})):t(s)}}}]);