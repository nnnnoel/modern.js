"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[7687,2923,4709],{84842:function(s,n,e){e.r(n),e.d(n,{content:function(){return t},frontmatter:function(){return o},title:function(){return a},toc:function(){return c}});var r=e(39980),i=e(57270),l=e(9054);const o={extractApiHeaders:[2]},c=[{id:"securitysri",text:"security.sri",depth:2},{id:"securitychecksyntax",text:"security.checkSyntax",depth:2}],a="Security Config",t="\"---\\nextractApiHeaders: [2]\\n---\\n\\n# Security Config\\n\\n\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u5b89\u5168\u6709\u5173\u7684\u914d\u7f6e\u3002\\n\\n## security.sri\\n\\nimport Sri from '@zh/config/security/sri.md';\\n\\n<Sri />\\n\\n## security.checkSyntax\\n\\nimport CheckSyntax from '@zh/config/security/checkSyntax.md';\\n\\n<CheckSyntax />\\n\"";function h(s){const n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"security-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"}),"Security Config"]}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u5b89\u5168\u6709\u5173\u7684\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"securitysri",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"}),"security.sri"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"securitychecksyntax",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"}),"security.checkSyntax"]}),"\n","\n",(0,r.jsx)(l.default,{})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,r.jsx)(n,Object.assign({},s,{children:(0,r.jsx)(h,s)})):h(s)}},9054:function(s,n,e){e.r(n),e.d(n,{content:function(){return o},frontmatter:function(){return i},toc:function(){return l}});var r=e(39980);const i=void 0,l=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3},{id:"\u9519\u8bef\u65e5\u5fd7",text:"\u9519\u8bef\u65e5\u5fd7",depth:3},{id:"\u89e3\u51b3\u65b9\u6cd5",text:"\u89e3\u51b3\u65b9\u6cd5",depth:3}],o="\"- **\u7c7b\u578b\uff1a**\\n\\n```ts\\ntype CheckSyntax =\\n  | boolean\\n  | {\\n      targets: string[];\\n    };\\n```\\n\\n- **\u9ed8\u8ba4\u503c\uff1a** `false`\\n\\n\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4e2d\u662f\u5426\u5b58\u5728\u5f53\u524d\u6d4f\u89c8\u5668\u8303\u56f4\u4e0b\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u3002\u5982\u679c\u5b58\u5728\uff0c\u4f1a\u5c06\u8be6\u7ec6\u4fe1\u606f\u6253\u5370\u5728\u7ec8\u7aef\u3002\\n\\n### \u793a\u4f8b\\n\\n```ts\\nexport default {\\n  security: {\\n    checkSyntax: true,\\n  },\\n};\\n```\\n\\n\u5982\u679c\u5c06 `security.checkSyntax` \u6307\u5b9a\u4e3a `true` \u7684\u8bdd\uff0c\u5219 targets \u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u9879\u76ee\u8bbe\u5b9a\u7684 browserslist\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 [\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4](https://modernjs.dev/builder/guide/advanced/browser-compatibility.html)\u3002\\n\\n\u5f00\u542f\u540e\u5c06\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u68c0\u6d4b\uff0c\u5f53\u68c0\u6d4b\u5230\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u540e\uff0c\u4f1a\u5c06\u9519\u8bef\u65e5\u5fd7\u6253\u5370\u5728\u7ec8\u7aef\uff0c\u5e76\u9000\u51fa\u5f53\u524d\u6784\u5efa\u6d41\u7a0b\u3002\\n\\n### \u9519\u8bef\u65e5\u5fd7\\n\\n\u9519\u8bef\u65e5\u5fd7\u7684\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff0c\u5305\u542b\u4ee3\u7801\u6765\u6e90\u6587\u4ef6\u3001\u4ea7\u7269\u4f4d\u7f6e\u3001\u9519\u8bef\u539f\u56e0\u3001\u6e90\u4ee3\u7801\u7b49\u4fe1\u606f\uff1a\\n\\n```bash\\nerror   [Syntax Checker] Find some syntax errors after production build:\\n\\n  ERROR#1:\\n  source - /node_modules/foo/index.js:1:0\\n  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\\n  reason - The keyword 'const' is reserved (2:39400)\\n  code   - const foo = 'bar';\\n```\\n\\n### \u89e3\u51b3\u65b9\u6cd5\\n\\n\u5f53\u68c0\u6d4b\u5230\u8bed\u6cd5\u9519\u8bef\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u5904\u7406\uff1a\\n\\n- \u5982\u679c\u4f60\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u4ee5\u4fdd\u8bc1\u4ee3\u7801\u5177\u5907\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 `source.include` \u914d\u7f6e\u6765\u7f16\u8bd1\u76f8\u5e94\u7684\u6a21\u5757\u3002\\n- \u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u53ef\u4ee5\u8c03\u6574\u9879\u76ee\u7684 browserslist \u8303\u56f4\uff0c\u8c03\u6574\u81f3\u4e0e\u8be5\u8bed\u6cd5\u76f8\u5339\u914d\u7684\u8303\u56f4\u3002\\n\"";function c(s){const n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",a:"a"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7c7b\u578b\uff1a"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"language-ts",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"CheckSyntax"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      targets"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4e2d\u662f\u5426\u5b58\u5728\u5f53\u524d\u6d4f\u89c8\u5668\u8303\u56f4\u4e0b\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u3002\u5982\u679c\u5b58\u5728\uff0c\u4f1a\u5c06\u8be6\u7ec6\u4fe1\u606f\u6253\u5370\u5728\u7ec8\u7aef\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u793a\u4f8b",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,r.jsxs)(n.div,{className:"language-ts",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  security"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    checkSyntax"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5c06 ",(0,r.jsx)(n.code,{children:"security.checkSyntax"})," \u6307\u5b9a\u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u7684\u8bdd\uff0c\u5219 targets \u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u9879\u76ee\u8bbe\u5b9a\u7684 browserslist\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/browser-compatibility.html",target:"_blank",rel:"nofollow",children:"\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f\u540e\u5c06\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u68c0\u6d4b\uff0c\u5f53\u68c0\u6d4b\u5230\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u540e\uff0c\u4f1a\u5c06\u9519\u8bef\u65e5\u5fd7\u6253\u5370\u5728\u7ec8\u7aef\uff0c\u5e76\u9000\u51fa\u5f53\u524d\u6784\u5efa\u6d41\u7a0b\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u9519\u8bef\u65e5\u5fd7",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9519\u8bef\u65e5\u5fd7",children:"#"}),"\u9519\u8bef\u65e5\u5fd7"]}),"\n",(0,r.jsx)(n.p,{children:"\u9519\u8bef\u65e5\u5fd7\u7684\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff0c\u5305\u542b\u4ee3\u7801\u6765\u6e90\u6587\u4ef6\u3001\u4ea7\u7269\u4f4d\u7f6e\u3001\u9519\u8bef\u539f\u56e0\u3001\u6e90\u4ee3\u7801\u7b49\u4fe1\u606f\uff1a"}),"\n",(0,r.jsxs)(n.div,{className:"language-bash",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"error   [Syntax Checker] Find some syntax errors after production build:"})}),"\n",(0,r.jsx)(n.span,{className:"line"}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ERROR#1:"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" - /node_modules/foo/index.js:1:0"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  reason - The keyword "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'const'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" is reserved (2:39400)"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  code   - const foo = "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bar'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u89e3\u51b3\u65b9\u6cd5",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u89e3\u51b3\u65b9\u6cd5",children:"#"}),"\u89e3\u51b3\u65b9\u6cd5"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u68c0\u6d4b\u5230\u8bed\u6cd5\u9519\u8bef\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u5904\u7406\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u4ee5\u4fdd\u8bc1\u4ee3\u7801\u5177\u5907\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"source.include"})," \u914d\u7f6e\u6765\u7f16\u8bd1\u76f8\u5e94\u7684\u6a21\u5757\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u53ef\u4ee5\u8c03\u6574\u9879\u76ee\u7684 browserslist \u8303\u56f4\uff0c\u8c03\u6574\u81f3\u4e0e\u8be5\u8bed\u6cd5\u76f8\u5339\u914d\u7684\u8303\u56f4\u3002"}),"\n"]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,r.jsx)(n,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}},57270:function(s,n,e){e.r(n),e.d(n,{content:function(){return o},frontmatter:function(){return i},toc:function(){return l}});var r=e(39980);const i=void 0,l=[{id:"sri-\u4ecb\u7ecd",text:"SRI \u4ecb\u7ecd",depth:4},{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3}],o="\"- **\u7c7b\u578b\uff1a**\\n\\n```ts\\ntype SRIOptions =\\n  | {\\n      hashFuncNames?: string[];\\n      enabled?: 'auto' | boolean;\\n      hashLoading?: 'eager' | 'lazy';\\n    }\\n  | boolean;\\n```\\n\\n- **\u9ed8\u8ba4\u503c\uff1a** `undefined`\\n\\n\u4e3a HTML \u6240\u5f15\u5165\u7684\u5b50\u8d44\u6e90\u6dfb\u52a0\u5b8c\u6574\u6027\u5c5e\u6027 \u2014\u2014 `integrity`\uff0c\u4f7f\u6d4f\u89c8\u5668\u80fd\u591f\u9a8c\u8bc1\u5f15\u5165\u8d44\u6e90\u7684\u5b8c\u6574\u6027\uff0c\u4ee5\u6b64\u9632\u6b62\u4e0b\u8f7d\u7684\u8d44\u6e90\u88ab\u7be1\u6539\u3002\\n\\n\u542f\u52a8\u8be5\u9009\u9879\u540e\u4f1a\u5c06 webpack \u7684 [output.crossOriginLoading](https://webpack.docschina.org/configuration/output/#outputcrossoriginloading) \u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a `anonymous`\u3002\\n\\n#### SRI \u4ecb\u7ecd\\n\\n\u5b50\u8d44\u6e90\u5b8c\u6574\u6027 Subresource Integrity\uff08SRI\uff09\u662f\u4e13\u95e8\u7528\u6765\u6821\u9a8c\u8d44\u6e90\u7684\u4e00\u79cd\u65b9\u6848\uff0c\u5b83\u8bfb\u53d6\u8d44\u6e90\u6807\u7b7e\u4e2d\u7684 integrity \u5c5e\u6027\uff0c\u5c06\u5176\u4e2d\u7684\u4fe1\u606f\u6458\u8981\u503c\uff0c\u548c\u8d44\u6e90\u5b9e\u9645\u7684\u4fe1\u606f\u6458\u8981\u503c\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5982\u679c\u53d1\u73b0\u65e0\u6cd5\u5339\u914d\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u5c31\u4f1a\u62d2\u7edd\u6267\u884c\u8d44\u6e90\u3002\\n\\n\u5bf9\u4e8e script \u6807\u7b7e\u6765\u8bf4\uff0c\u7ed3\u679c\u4e3a\u62d2\u7edd\u6267\u884c\u5176\u4e2d\u7684\u4ee3\u7801\uff1b\u5bf9\u4e8e CSS link \u6765\u8bf4\uff0c\u7ed3\u679c\u4e3a\u4e0d\u52a0\u8f7d\u5176\u4e2d\u7684\u6837\u5f0f\u3002\\n\\n\u5173\u4e8e SRI \u7684\u66f4\u591a\u5185\u5bb9\uff0c\u53ef\u4ee5\u67e5\u770b [Subresource Integrity - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity)\u3002\\n\\n### \u793a\u4f8b\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u5f00\u542f `SRI`\uff0c\u5f53\u5f00\u542f\u4e4b\u540e\u5b83\u7684\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a\\n\\n```js\\n{\\n  hashFuncNames: ['sha384'];\\n  enabled: \\\"auto\\\",\\n  hashLoading: \\\"eager\\\",\\n}\\n```\\n\\n\u4f60\u53ef\u4ee5\u6309\u7167\u4f60\u81ea\u5df1\u7684\u9700\u6c42\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879:\\n\\n```js\\nexport default {\\n  security: {\\n    sri: {\\n      hashFuncNames: ['sha-256'],\\n      enabled: true,\\n      hashLoading: 'lazy',\\n    },\\n  },\\n};\\n```\\n\"";function c(s){const n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",a:"a",h4:"h4",h3:"h3"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7c7b\u578b\uff1a"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"language-ts",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"SRIOptions"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      hashFuncNames"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      enabled"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'auto'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      hashLoading"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eager'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'lazy'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a HTML \u6240\u5f15\u5165\u7684\u5b50\u8d44\u6e90\u6dfb\u52a0\u5b8c\u6574\u6027\u5c5e\u6027 \u2014\u2014 ",(0,r.jsx)(n.code,{children:"integrity"}),"\uff0c\u4f7f\u6d4f\u89c8\u5668\u80fd\u591f\u9a8c\u8bc1\u5f15\u5165\u8d44\u6e90\u7684\u5b8c\u6574\u6027\uff0c\u4ee5\u6b64\u9632\u6b62\u4e0b\u8f7d\u7684\u8d44\u6e90\u88ab\u7be1\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u542f\u52a8\u8be5\u9009\u9879\u540e\u4f1a\u5c06 webpack \u7684 ",(0,r.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"nofollow",children:"output.crossOriginLoading"})," \u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"anonymous"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"sri-\u4ecb\u7ecd",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sri-\u4ecb\u7ecd",children:"#"}),"SRI \u4ecb\u7ecd"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b50\u8d44\u6e90\u5b8c\u6574\u6027 Subresource Integrity\uff08SRI\uff09\u662f\u4e13\u95e8\u7528\u6765\u6821\u9a8c\u8d44\u6e90\u7684\u4e00\u79cd\u65b9\u6848\uff0c\u5b83\u8bfb\u53d6\u8d44\u6e90\u6807\u7b7e\u4e2d\u7684 integrity \u5c5e\u6027\uff0c\u5c06\u5176\u4e2d\u7684\u4fe1\u606f\u6458\u8981\u503c\uff0c\u548c\u8d44\u6e90\u5b9e\u9645\u7684\u4fe1\u606f\u6458\u8981\u503c\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5982\u679c\u53d1\u73b0\u65e0\u6cd5\u5339\u914d\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u5c31\u4f1a\u62d2\u7edd\u6267\u884c\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e script \u6807\u7b7e\u6765\u8bf4\uff0c\u7ed3\u679c\u4e3a\u62d2\u7edd\u6267\u884c\u5176\u4e2d\u7684\u4ee3\u7801\uff1b\u5bf9\u4e8e CSS link \u6765\u8bf4\uff0c\u7ed3\u679c\u4e3a\u4e0d\u52a0\u8f7d\u5176\u4e2d\u7684\u6837\u5f0f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8e SRI \u7684\u66f4\u591a\u5185\u5bb9\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"nofollow",children:"Subresource Integrity - MDN"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u793a\u4f8b",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u5f00\u542f ",(0,r.jsx)(n.code,{children:"SRI"}),"\uff0c\u5f53\u5f00\u542f\u4e4b\u540e\u5b83\u7684\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.div,{className:"language-js",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  hashFuncNames"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sha384'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  enabled"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"auto"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  hashLoading"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eager"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u6309\u7167\u4f60\u81ea\u5df1\u7684\u9700\u6c42\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879:"}),"\n",(0,r.jsxs)(n.div,{className:"language-js",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  security"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    sri"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      hashFuncNames"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sha-256'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      enabled"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      hashLoading"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'lazy'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,r.jsx)(n,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);