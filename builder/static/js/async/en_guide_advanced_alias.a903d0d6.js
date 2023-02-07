"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3873],{66375:function(s,e,n){n.r(e),n.d(e,{content:function(){return l},frontmatter:function(){return i},title:function(){return a},toc:function(){return r}});var o=n(39980);const i=void 0,r=[{id:"using-sourcealias-config",text:"Using source.alias config",depth:2},{id:"using-paths-config-in-tsconfigjson",text:"Using paths config in tsconfig.json",depth:2}],a="Alias",l="\"# Alias\\n\\nAlias is a way to specify a short name for a module or a path to a directory or file. This can be useful when you want to use a short, easy-to-remember name for a module instead of a long, complex path.\\n\\nFor example, if you have a file at `src/common/request.ts`, you could create an alias called `@request` for it, so you could import the file like this: `import request from '@request'`. This makes it easier to reference the file in your code, and also allows you to move the file to a different location without having to update all the import statements in your code.\\n\\nIn Builder, you can set aliases in two ways:\\n\\n- [source.alias](/en/api/config-source.html#sourcealias)\\n- `paths` in `tsconfig.json`\\n\\n## Using `source.alias` config\\n\\n[source.alias](/en/api/config-source.html#sourcealias) corresponds to webpack's native [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias) config, you can configure it as an object or a function.\\n\\nFirst, you can configure it as an object, for example:\\n\\n```js\\nexport default {\\n  source: {\\n    alias: {\\n      '@common': './src/common',\\n    },\\n  },\\n};\\n```\\n\\nThe relative path in it will be parsed as an absolute path in Builder.\\n\\nYou can also configure it as a function to get the preset `alias` object and modify it, for example:\\n\\n```js\\nexport default {\\n  source: {\\n    alias: alias => {\\n      alias['@common'] = './src/common';\\n      return alias;\\n    },\\n  },\\n};\\n```\\n\\n## Using `paths` config in `tsconfig.json`\\n\\nIn addition to `source.alias`, you can also configure it by `paths` in `tsconfig.json`. We recommend to use this way in TypeScript projects, because it can solve type problem of alias path.\\n\\nFor example:\\n\\n```json\\n{\\n  \\\"compilerOptions\\\": {\\n    \\\"paths\\\": {\\n      \\\"@common/*\\\": [\\\"./src/common/*\\\"]\\n    }\\n  }\\n}\\n```\\n\\n:::tip Priority\\nThe `paths` config has higher priority than `source.alias`.\\n:::\\n\"";function c(s){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"alias",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#alias",children:"#"}),"Alias"]}),"\n",(0,o.jsx)(e.p,{children:"Alias is a way to specify a short name for a module or a path to a directory or file. This can be useful when you want to use a short, easy-to-remember name for a module instead of a long, complex path."}),"\n",(0,o.jsxs)(e.p,{children:["For example, if you have a file at ",(0,o.jsx)(e.code,{children:"src/common/request.ts"}),", you could create an alias called ",(0,o.jsx)(e.code,{children:"@request"})," for it, so you could import the file like this: ",(0,o.jsx)(e.code,{children:"import request from '@request'"}),". This makes it easier to reference the file in your code, and also allows you to move the file to a different location without having to update all the import statements in your code."]}),"\n",(0,o.jsx)(e.p,{children:"In Builder, you can set aliases in two ways:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"/builder/en/api/config-source.html#sourcealias",children:"source.alias"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"paths"})," in ",(0,o.jsx)(e.code,{children:"tsconfig.json"})]}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"using-sourcealias-config",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-sourcealias-config",children:"#"}),"Using ",(0,o.jsx)(e.code,{children:"source.alias"})," config"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/builder/en/api/config-source.html#sourcealias-1",children:"source.alias"})," corresponds to webpack's native ",(0,o.jsx)(e.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"nofollow",children:"resolve.alias"})," config, you can configure it as an object or a function."]}),"\n",(0,o.jsx)(e.p,{children:"First, you can configure it as an object, for example:"}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    alias"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(e.p,{children:"The relative path in it will be parsed as an absolute path in Builder."}),"\n",(0,o.jsxs)(e.p,{children:["You can also configure it as a function to get the preset ",(0,o.jsx)(e.code,{children:"alias"})," object and modify it, for example:"]}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" alias "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      alias["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" alias;"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h2,{id:"using-paths-config-in-tsconfigjson",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-paths-config-in-tsconfigjson",children:"#"}),"Using ",(0,o.jsx)(e.code,{children:"paths"})," config in ",(0,o.jsx)(e.code,{children:"tsconfig.json"})]}),"\n",(0,o.jsxs)(e.p,{children:["In addition to ",(0,o.jsx)(e.code,{children:"source.alias"}),", you can also configure it by ",(0,o.jsx)(e.code,{children:"paths"})," in ",(0,o.jsx)(e.code,{children:"tsconfig.json"}),". We recommend to use this way in TypeScript projects, because it can solve type problem of alias path."]}),"\n",(0,o.jsx)(e.p,{children:"For example:"}),"\n",(0,o.jsxs)(e.div,{className:"language-json",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"compilerOptions"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"paths"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"@common/*"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"./src/common/*"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.p,{className:"modern-directive-title",children:"Priority"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\nThe ",(0,o.jsx)(e.code,{children:"paths"})," config has higher priority than ",(0,o.jsx)(e.code,{children:"source.alias"}),"."]})})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(c,s)})):c(s)}}}]);