"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8930],{71538:function(e,s,n){n.r(s),n.d(s,{content:function(){return l},frontmatter:function(){return r},toc:function(){return i}});var o=n(39980);const r=void 0,i=[{id:"example",text:"Example",depth:3},{id:"set-according-to-targets",text:"Set according to Targets",depth:4}],l="\"- **Type:** `string | Record<BuilderTarget, string>`\\n- **Default:** `undefined`\\n\\nAdd a prefix to [resolve.extensions](https://webpack.js.org/configuration/resolve/#resolveextensions).\\n\\nIf multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest.\\n\\n### Example\\n\\n```js\\nexport default {\\n  source: {\\n    resolveExtensionPrefix: '.web',\\n  },\\n};\\n```\\n\\nWith the configuration above, the extensions array will become:\\n\\n```js\\n// before\\nconst extensions = ['.js', '.ts', ...];\\n\\n// after\\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\\n```\\n\\nWhen `import './foo'` in the code, the `foo.web.js` file will be resolved first, then the `foo.js` file.\\n\\n#### Set according to Targets\\n\\nWhen you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set `resolveExtensionPrefix` to an object whose key is the corresponding build target.\\n\\nFor example to set different extension prefix for `web` and `node`:\\n\\n```js\\nexport default {\\n  output: {\\n    source: {\\n      resolveExtensionPrefix: {\\n        web: '.web',\\n        node: '.node',\\n      },\\n    },\\n  },\\n};\\n```\\n\\nWhen `import './foo'` in the code, the `foo.node.js` file will be resolved for node target, and the `foo.web.js` file will be resolved for web target.\\n\"";function t(e){const s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",h4:"h4"},e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Default:"})," ",(0,o.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Add a prefix to ",(0,o.jsx)(s.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"nofollow",children:"resolve.extensions"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."}),"\n",(0,o.jsxs)(s.h3,{id:"example",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    resolveExtensionPrefix"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.web'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(s.p,{children:"With the configuration above, the extensions array will become:"}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// before"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"extensions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.js'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.ts'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// after"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"extensions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.web.js'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.js'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.web.ts'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.ts'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["When ",(0,o.jsx)(s.code,{children:"import './foo'"})," in the code, the ",(0,o.jsx)(s.code,{children:"foo.web.js"})," file will be resolved first, then the ",(0,o.jsx)(s.code,{children:"foo.js"})," file."]}),"\n",(0,o.jsxs)(s.h4,{id:"set-according-to-targets",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"}),"Set according to Targets"]}),"\n",(0,o.jsxs)(s.p,{children:["When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,o.jsx)(s.code,{children:"resolveExtensionPrefix"})," to an object whose key is the corresponding build target."]}),"\n",(0,o.jsxs)(s.p,{children:["For example to set different extension prefix for ",(0,o.jsx)(s.code,{children:"web"})," and ",(0,o.jsx)(s.code,{children:"node"}),":"]}),"\n",(0,o.jsxs)(s.div,{className:"language-js",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      resolveExtensionPrefix"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        web"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.web'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        node"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.node'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["When ",(0,o.jsx)(s.code,{children:"import './foo'"})," in the code, the ",(0,o.jsx)(s.code,{children:"foo.node.js"})," file will be resolved for node target, and the ",(0,o.jsx)(s.code,{children:"foo.web.js"})," file will be resolved for web target."]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);