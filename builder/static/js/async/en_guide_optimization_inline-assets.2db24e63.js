"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8717],{63974:function(e,s,n){n.r(s),n.d(s,{content:function(){return t},frontmatter:function(){return l},title:function(){return r},toc:function(){return o}});var i=n(39980);const l=void 0,o=[{id:"automatic-inlining",text:"Automatic Inlining",depth:2},{id:"force-inlining",text:"Force Inlining",depth:2},{id:"referenced-from-css-file",text:"Referenced from CSS file",depth:3},{id:"force-no-inlining",text:"Force no inlining",depth:2},{id:"referenced-from-css-file-1",text:"Referenced from CSS file",depth:3},{id:"inline-css-files",text:"Inline CSS files",depth:2},{id:"add-type-declaration",text:"Add Type Declaration",depth:2}],r="Inline Static Assets",t="\"# Inline Static Assets\\n\\nInline static assets refer to the practice of including the content of a static asset directly in a HTML or JS file, instead of linking to an external file. This can improve the performance of a website by reducing the number of HTTP requests that the browser has to make to load the page.\\n\\nHowever, static resource inlining also has some disadvantages, such as increasing the size of a single file, which may lead to slower loading. Therefore, in the actual scenario, it is necessary to decide whether to use static resource inlining according to the specific situation.\\n\\nBuilder will automatically inline static assets that are less than 10KB, but sometimes you may need to manually control assets to force them to be inlined or not, and this document explains how to precisely control the inlining behavior of static assets.\\n\\n## Automatic Inlining\\n\\nBy default, Builder will inline assets when the file size of is less than a threshold (the default is 10KB). When inlined, the asset will be converted to a Base64 encoded string and will no longer send a separate HTTP request. When the file size is greater than this threshold, it is loaded as a separate file with a separate HTTP request.\\n\\nThe threshold can be modified with the [output.dataUriLimit](/en/api/config-output.html#outputdataurilimit) config. For example, set the threshold of images to 5000 Bytes, and set media assets not to be inlined:\\n\\n```ts\\nexport default {\\n  output: {\\n    dataUriLimit: {\\n      image: 5000,\\n      media: 0,\\n    },\\n  },\\n};\\n```\\n\\n## Force Inlining\\n\\nYou can force an asset to be inlined by adding the `inline` query when importing the asset, regardless of whether the asset's size is smaller than the size threshold.\\n\\n```tsx\\nimport React from 'react';\\nimport img from '. /foo.png?inline';\\n\\nexport default function Foo() {\\n  return <img src={img} />;\\n}\\n```\\n\\nIn the above example, the `foo.png` image will always be inlined, regardless of whether the size of the image is larger than the threshold.\\n\\nIn addition to the `inline` query, you can also use the `__inline` query to force inlining of the asset:\\n\\n```tsx\\nimport img from '. /foo.png?__inline';\\n```\\n\\n### Referenced from CSS file\\n\\nWhen you reference a static asset in your CSS file, you can also force inline the asset with the `inline` or `__inline` queries.\\n\\n```css\\n.foo {\\n  background-image: url('. /icon.png?inline');\\n}\\n```\\n\\n:::tip Do you really need to force inlining?\\nInline large assets will significantly increase the first paint time or first contentful paint time of a page, which will hurt user experience. And when you inline a static asset multiple times into a CSS file, the base64 content will be repeatedly injected, causing the bundle size to grow . Please use forced inlining with caution.\\n:::\\n\\n## Force no inlining\\n\\nWhen you want to always treat some assets as separate files, no matter how small the asset is, you can add the `url` query to force the asset not to be inlined.\\n\\n```tsx\\nimport React from 'react';\\nimport img from '. /foo.png?url';\\n\\nexport default function Foo() {\\n  return <img src={img} />;\\n}\\n```\\n\\nIn the above example, the `foo.png` image will always be loaded as a separate file, even if the size of the image is smaller than the threshold.\\n\\nIn addition to the `url` query, you can also use the `__inline=false` query to force the asset not to be inlined:\\n\\n```tsx\\nimport img from '. /foo.png?__inline=false';\\n```\\n\\n### Referenced from CSS file\\n\\nWhen you reference a static asset in your CSS file, you can also force the asset not to be inlined with `url` or `__inline=false` queries.\\n\\n```css\\n.foo {\\n  background-image: url('. /icon.png?url');\\n}\\n```\\n\\n:::tip Do you really need to exclude assets from inlining?\\nExcluding assets from inlining will increase the number of assets that the Web App needs to load. This will reduce the efficiency of loading assets in a weak network environment or in scenarios where HTTP2 is not enabled. Please use force no Inline with caution.\\n\\n## Inline JS files\\n\\nIn addition to inlining static resource files into JS files, Builder also supports inlining JS files into HTML files.\\n\\nJust enable the [output.enableInlineScripts](/en/api/config-output.html#outputenableinlinescripts) config, and the generated JS files will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file.\\n\\n```ts\\nexport default {\\n  output: {\\n    enableInlineScripts: true,\\n  },\\n};\\n```\\n\\n:::tip\\nInline JS files may cause the single HTML file to be too large, and it will break the HTTP caching. Please use it with caution.\\n:::\\n\\n## Inline CSS files\\n\\nYou can also inline CSS files into HTML files.\\n\\nJust enable the [output.enableInlineStyles](/en/api/config-output.html#outputenableinlinestyles) config, the generated CSS file will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file.\\n\\n```ts\\nexport default {\\n  output: {\\n    enableInlineStyles: true,\\n  },\\n};\\n```\\n\\n## Add Type Declaration\\n\\nWhen you use URL queries such as `?inline` and `?url` in TypeScript code, TypeScript may prompt that the module is missing a type definition:\\n\\n```\\nTS2307: Cannot find module './logo.png?inline' or its corresponding type declarations.\\n```\\n\\nTo fix this, you can add type declarations for these URL queries, please create `src/global.d.ts` file and add the following type declarations:\\n\\n```ts\\ndeclare module '*?inline' {\\n  const content: string;\\n  export default content;\\n}\\n\\ndeclare module '*?inline' {\\n  const content: string;\\n  export default content;\\n}\\n\\ndeclare module '*?__inline' {\\n  const content: string;\\n  export default content;\\n}\\n\\ndeclare module '*?inline=false' {\\n  const content: string;\\n  export default content;\\n}\\n```\\n\"";function a(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"inline-static-assets",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-static-assets",children:"#"}),"Inline Static Assets"]}),"\n",(0,i.jsx)(s.p,{children:"Inline static assets refer to the practice of including the content of a static asset directly in a HTML or JS file, instead of linking to an external file. This can improve the performance of a website by reducing the number of HTTP requests that the browser has to make to load the page."}),"\n",(0,i.jsx)(s.p,{children:"However, static resource inlining also has some disadvantages, such as increasing the size of a single file, which may lead to slower loading. Therefore, in the actual scenario, it is necessary to decide whether to use static resource inlining according to the specific situation."}),"\n",(0,i.jsx)(s.p,{children:"Builder will automatically inline static assets that are less than 10KB, but sometimes you may need to manually control assets to force them to be inlined or not, and this document explains how to precisely control the inlining behavior of static assets."}),"\n",(0,i.jsxs)(s.h2,{id:"automatic-inlining",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#automatic-inlining",children:"#"}),"Automatic Inlining"]}),"\n",(0,i.jsx)(s.p,{children:"By default, Builder will inline assets when the file size of is less than a threshold (the default is 10KB). When inlined, the asset will be converted to a Base64 encoded string and will no longer send a separate HTTP request. When the file size is greater than this threshold, it is loaded as a separate file with a separate HTTP request."}),"\n",(0,i.jsxs)(s.p,{children:["The threshold can be modified with the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputdataurilimit",children:"output.dataUriLimit"})," config. For example, set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    dataUriLimit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      image"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5000"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      media"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"force-inlining",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#force-inlining",children:"#"}),"Force Inlining"]}),"\n",(0,i.jsxs)(s.p,{children:["You can force an asset to be inlined by adding the ",(0,i.jsx)(s.code,{children:"inline"})," query when importing the asset, regardless of whether the asset's size is smaller than the size threshold."]}),"\n",(0,i.jsxs)(s.div,{className:"language-tsx",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" img "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /foo.png?inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"img"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{img} />;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["In the above example, the ",(0,i.jsx)(s.code,{children:"foo.png"})," image will always be inlined, regardless of whether the size of the image is larger than the threshold."]}),"\n",(0,i.jsxs)(s.p,{children:["In addition to the ",(0,i.jsx)(s.code,{children:"inline"})," query, you can also use the ",(0,i.jsx)(s.code,{children:"__inline"})," query to force inlining of the asset:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-tsx",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" img "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /foo.png?__inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"referenced-from-css-file",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#referenced-from-css-file",children:"#"}),"Referenced from CSS file"]}),"\n",(0,i.jsxs)(s.p,{children:["When you reference a static asset in your CSS file, you can also force inline the asset with the ",(0,i.jsx)(s.code,{children:"inline"})," or ",(0,i.jsx)(s.code,{children:"__inline"})," queries."]}),"\n",(0,i.jsxs)(s.div,{className:"language-css",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"background-image"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"url"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /icon.png?inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"Do you really need to force inlining?"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nInline large assets will significantly increase the first paint time or first contentful paint time of a page, which will hurt user experience. And when you inline a static asset multiple times into a CSS file, the base64 content will be repeatedly injected, causing the bundle size to grow . Please use forced inlining with caution."})})]}),"\n",(0,i.jsxs)(s.h2,{id:"force-no-inlining",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#force-no-inlining",children:"#"}),"Force no inlining"]}),"\n",(0,i.jsxs)(s.p,{children:["When you want to always treat some assets as separate files, no matter how small the asset is, you can add the ",(0,i.jsx)(s.code,{children:"url"})," query to force the asset not to be inlined."]}),"\n",(0,i.jsxs)(s.div,{className:"language-tsx",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" img "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /foo.png?url'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"img"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{img} />;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["In the above example, the ",(0,i.jsx)(s.code,{children:"foo.png"})," image will always be loaded as a separate file, even if the size of the image is smaller than the threshold."]}),"\n",(0,i.jsxs)(s.p,{children:["In addition to the ",(0,i.jsx)(s.code,{children:"url"})," query, you can also use the ",(0,i.jsx)(s.code,{children:"__inline=false"})," query to force the asset not to be inlined:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-tsx",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" img "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /foo.png?__inline=false'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"referenced-from-css-file-1",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#referenced-from-css-file-1",children:"#"}),"Referenced from CSS file"]}),"\n",(0,i.jsxs)(s.p,{children:["When you reference a static asset in your CSS file, you can also force the asset not to be inlined with ",(0,i.jsx)(s.code,{children:"url"})," or ",(0,i.jsx)(s.code,{children:"__inline=false"})," queries."]}),"\n",(0,i.jsxs)(s.div,{className:"language-css",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"background-image"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"url"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'. /icon.png?url'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"Do you really need to exclude assets from inlining?"}),(0,i.jsxs)(s.div,{className:"modern-directive-content",children:[(0,i.jsx)(s.p,{children:"\nExcluding assets from inlining will increase the number of assets that the Web App needs to load. This will reduce the efficiency of loading assets in a weak network environment or in scenarios where HTTP2 is not enabled. Please use force no Inline with caution."}),(0,i.jsxs)(s.h2,{id:"inline-js-files",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-js-files",children:"#"}),"Inline JS files"]}),(0,i.jsx)(s.p,{children:"In addition to inlining static resource files into JS files, Builder also supports inlining JS files into HTML files."}),(0,i.jsxs)(s.p,{children:["Just enable the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableinlinescripts",children:"output.enableInlineScripts"})," config, and the generated JS files will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file."]}),(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableInlineScripts"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),(0,i.jsx)(s.p,{children:":::tip\nInline JS files may cause the single HTML file to be too large, and it will break the HTTP caching. Please use it with caution."})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"inline-css-files",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"}),"Inline CSS files"]}),"\n",(0,i.jsx)(s.p,{children:"You can also inline CSS files into HTML files."}),"\n",(0,i.jsxs)(s.p,{children:["Just enable the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableinlinestyles",children:"output.enableInlineStyles"})," config, the generated CSS file will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file."]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableInlineStyles"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"add-type-declaration",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"}),"Add Type Declaration"]}),"\n",(0,i.jsxs)(s.p,{children:["When you use URL queries such as ",(0,i.jsx)(s.code,{children:"?inline"})," and ",(0,i.jsx)(s.code,{children:"?url"})," in TypeScript code, TypeScript may prompt that the module is missing a type definition:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-text",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"TS2307: Cannot find module './logo.png?inline' or its corresponding type declarations.\n"})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["To fix this, you can add type declarations for these URL queries, please create ",(0,i.jsx)(s.code,{children:"src/global.d.ts"})," file and add the following type declarations:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*?inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*?inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*?__inline'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*?inline=false'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);