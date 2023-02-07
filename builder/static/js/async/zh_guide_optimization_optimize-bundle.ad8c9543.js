"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9584],{30656:function(s,e,n){n.r(e),n.d(e,{content:function(){return a},frontmatter:function(){return r},title:function(){return o},toc:function(){return i}});var l=n(39980);const r=void 0,i=[{id:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",text:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",depth:2},{id:"\u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93",text:"\u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93",depth:2},{id:"\u63d0\u5347-browserslist-\u8303\u56f4",text:"\u63d0\u5347 Browserslist \u8303\u56f4",depth:2},{id:"\u6309\u9700\u5f15\u5165-polyfill",text:"\u6309\u9700\u5f15\u5165 polyfill",depth:2},{id:"\u4f7f\u7528\u56fe\u7247\u538b\u7f29",text:"\u4f7f\u7528\u56fe\u7247\u538b\u7f29",depth:2},{id:"\u4ee3\u7801\u62c6\u5305",text:"\u4ee3\u7801\u62c6\u5305",depth:2}],o="\u4ea7\u7269\u4f53\u79ef\u4f18\u5316",a="\"# \u4ea7\u7269\u4f53\u79ef\u4f18\u5316\\n\\n\u4ea7\u7269\u4f53\u79ef\u7684\u4f18\u5316\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u76f4\u63a5\u5f71\u54cd\u5230\u4e86\u7ebf\u4e0a\u7684\u7528\u6237\u4f53\u9a8c\u3002\u5728\u8fd9\u7bc7\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5728 Builder \u4e2d\u4e00\u4e9b\u5e38\u89c1\u7684\u4ea7\u7269\u4f53\u79ef\u4f18\u5316\u65b9\u5f0f\u3002\\n\\n## \u51cf\u5c11\u91cd\u590d\u4f9d\u8d56\\n\\n\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u4f1a\u5b58\u5728\u67d0\u4e9b\u7b2c\u4e09\u65b9\u4f9d\u8d56\u88ab\u5b89\u88c5\u4e86\u591a\u4e2a\u7248\u672c\u7684\u73b0\u8c61\u3002\u91cd\u590d\u4f9d\u8d56\u4f1a\u5bfc\u81f4\u5305\u4f53\u79ef\u53d8\u5927\u3001\u6784\u5efa\u901f\u5ea6\u53d8\u6162\u3002\\n\\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u793e\u533a\u4e2d\u7684\u4e00\u4e9b\u5de5\u5177\u6765\u68c0\u6d4b\u6216\u6d88\u9664\u91cd\u590d\u4f9d\u8d56\u3002\\n\\n\u5982\u679c\u4f60\u5728\u4f7f\u7528 `pnpm`\uff0c\u53ef\u4ee5\u4f7f\u7528 [pnpm-deduplicate](https://github.com/ocavue/pnpm-deduplicate) \u6765\u5206\u6790\u51fa\u6240\u6709\u7684\u91cd\u590d\u4f9d\u8d56\uff0c\u5e76\u901a\u8fc7\u5347\u7ea7\u4f9d\u8d56\u6216\u58f0\u660e [pnpm overrides](https://pnpm.io/package_json#pnpmoverrides) \u8fdb\u884c\u7248\u672c\u5408\u5e76\u3002\\n\\n```bash\\nnpx pnpm-deduplicate --list\\n```\\n\\n\u5982\u679c\u4f60\u5728\u4f7f\u7528 `yarn`\uff0c\u53ef\u4ee5\u4f7f\u7528 [yarn-deduplicate](https://github.com/scinos/yarn-deduplicate) \u6765\u81ea\u52a8\u5408\u5e76\u91cd\u590d\u4f9d\u8d56\uff1a\\n\\n```bash\\nnpx yarn-deduplicate && yarn\\n```\\n\\n## \u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93\\n\\n\u5efa\u8bae\u5c06\u9879\u76ee\u4e2d\u4f53\u79ef\u8f83\u5927\u7684\u4e09\u65b9\u5e93\u66ff\u6362\u4e3a\u66f4\u8f7b\u91cf\u7684\u5e93\uff0c\u6bd4\u5982\u5c06 [moment](https://momentjs.com/) \u66ff\u6362\u4e3a [day.js](https://day.js.org/)\u3002\\n\\n\u5982\u679c\u4f60\u9700\u8981\u627e\u51fa\u9879\u76ee\u4e2d\u4f53\u79ef\u8f83\u5927\u7684\u4e09\u65b9\u5e93\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u6784\u5efa\u65f6\u6dfb\u52a0 [BUNDLE_ANALYZE=true](/api/config-performance.html#performancebundleanalyze) \u73af\u5883\u53d8\u91cf\uff1a\\n\\n```bash\\nBUNDLE_ANALYZE=true pnpm build\\n```\\n\\n\u6dfb\u52a0\u8be5\u53c2\u6570\u540e\uff0cBuilder \u4f1a\u751f\u6210\u4e00\u4e2a\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\u7684 HTML \u6587\u4ef6\uff0c\u624b\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u6253\u5305\u4ea7\u7269\u7684\u74e6\u7247\u56fe\u3002\u533a\u5757\u7684\u9762\u79ef\u8d8a\u5927\uff0c\u8bf4\u660e\u8be5\u6a21\u5757\u7684\u4f53\u79ef\u8d8a\u5927\u3002\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png)\\n\\n## \u63d0\u5347 Browserslist \u8303\u56f4\\n\\nBuilder \u4f1a\u6839\u636e\u9879\u76ee\u7684 Browserslist \u914d\u7f6e\u8303\u56f4\u8fdb\u884c\u4ee3\u7801\u7f16\u8bd1\uff0c\u5e76\u6ce8\u5165\u76f8\u5e94\u7684 Polyfill\u3002\u5982\u679c\u9879\u76ee\u4e0d\u9700\u8981\u517c\u5bb9\u65e7\u7248\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u63d0\u5347 Browserslist \u8303\u56f4\uff0c\u4ece\u800c\u51cf\u5c11\u5728\u8bed\u6cd5\u548c Polyfill \u4e0a\u7684\u7f16\u8bd1\u5f00\u9500\u3002\\n\\nBuilder \u9ed8\u8ba4\u7684 Browserslist \u914d\u7f6e\u4e3a\uff1a\\n\\n```js\\n['> 0.01%', 'not dead', 'not op_mini all'];\\n```\\n\\n\u6bd4\u5982\u53ea\u517c\u5bb9 Chrome 61 \u4ee5\u4e0a\u7684\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6539\u6210\uff1a\\n\\n```js\\n['Chrome >= 61'];\\n```\\n\\n:::tip\\n\u8bf7\u9605\u8bfb [\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4](/guide/advanced/browserslist.html) \u7ae0\u8282\u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Browserslist \u7684\u7528\u6cd5\u3002\\n:::\\n\\n## \u6309\u9700\u5f15\u5165 polyfill\\n\\n\u5728\u660e\u786e\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u9700\u8981\u989d\u5916 polyfill \u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5c06 [output.polyfill](/api/config-output.html#outputpolyfill) \u8bbe\u7f6e\u4e3a `usage`\u3002\\n\\n\u5728 `usage` \u6a21\u5f0f\u4e0b\uff0cBuilder \u4f1a\u5206\u6790\u6e90\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u8bed\u6cd5\uff0c\u6309\u9700\u6ce8\u5165\u6240\u9700\u7684 polyfill \u4ee3\u7801\uff0c\u4ece\u800c\u51cf\u5c11 polyfill \u7684\u4ee3\u7801\u91cf\u3002\\n\\n```js\\nexport default {\\n  output: {\\n    polyfill: 'usage',\\n  },\\n};\\n```\\n\\n:::tip\\n\u8bf7\u9605\u8bfb [\u6d4f\u89c8\u5668\u517c\u5bb9\u6027](/guide/advanced/browser-compatibility.html) \u7ae0\u8282\u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e polyfill \u7684\u7528\u6cd5\u3002\\n:::\\n\\n## \u4f7f\u7528\u56fe\u7247\u538b\u7f29\\n\\n\u5728\u4e00\u822c\u7684\u524d\u7aef\u9879\u76ee\u4e2d\uff0c\u56fe\u7247\u8d44\u6e90\u7684\u4f53\u79ef\u5f80\u5f80\u662f\u9879\u76ee\u4ea7\u7269\u4f53\u79ef\u7684\u5927\u5934\uff0c\u56e0\u6b64\u5982\u679c\u80fd\u5c3d\u53ef\u80fd\u7cbe\u7b80\u56fe\u7247\u7684\u4f53\u79ef\uff0c\u90a3\u4e48\u5c06\u4f1a\u5bf9\u9879\u76ee\u7684\u6253\u5305\u4ea7\u7269\u4f53\u79ef\u8d77\u5230\u660e\u663e\u7684\u4f18\u5316\u6548\u679c\u3002\u4f60\u53ef\u4ee5\u5728 Builder \u4e2d\u6ce8\u518c\u63d2\u4ef6\u6765\u542f\u7528\u56fe\u7247\u538b\u7f29\u529f\u80fd:\\n\\n```js\\nimport { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\\n\\n// \u5f80 builder \u5b9e\u4f8b\u4e0a\u6dfb\u52a0\u63d2\u4ef6\\nbuilder.addPlugins([builderPluginImageCompress()]);\\n```\\n\\n\u8be6\u89c1 [Image Compress \u63d2\u4ef6](/plugins/plugin-image-compress)\u3002\\n\\n## \u4ee3\u7801\u62c6\u5305\\n\\n\u826f\u597d\u7684\u62c6\u5305\u7b56\u7565\u5bf9\u4e8e\u63d0\u5347\u5e94\u7528\u7684\u52a0\u8f7d\u6027\u80fd\u662f\u5341\u5206\u91cd\u8981\u7684\uff0c\u53ef\u4ee5\u5145\u5206\u5229\u7528\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u673a\u5236\uff0c\u51cf\u5c11\u8bf7\u6c42\u6570\u91cf\uff0c\u52a0\u5feb\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002\\n\\n\u5728 Builder \u4e2d\u5185\u7f6e\u4e86[\u591a\u79cd\u62c6\u5305\u7b56\u7565](/guide/optimization/split-chunk)\uff0c\u53ef\u4ee5\u6ee1\u8db3\u5927\u90e8\u5206\u5e94\u7528\u7684\u9700\u6c42\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u81ea\u5b9a\u4e49\u62c6\u5305\u914d\u7f6e\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u914d\u7f6e:\\n\\n```ts\\nexport default {\\n  performance: {\\n    chunkSplit: {\\n      strategy: 'split-by-experience',\\n      forceSplitting: {\\n        // \u6bd4\u5982\u5c06 react-query \u5305\u62c6\u5206\u4e3a\u4e00\u4e2a Chunk\\n        react_query: [/node_modules\\\\/react-query/],\\n      },\\n    },\\n  },\\n};\\n```\\n\"";function c(s){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",img:"img"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"\u4ea7\u7269\u4f53\u79ef\u4f18\u5316",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ea7\u7269\u4f53\u79ef\u4f18\u5316",children:"#"}),"\u4ea7\u7269\u4f53\u79ef\u4f18\u5316"]}),"\n",(0,l.jsx)(e.p,{children:"\u4ea7\u7269\u4f53\u79ef\u7684\u4f18\u5316\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u76f4\u63a5\u5f71\u54cd\u5230\u4e86\u7ebf\u4e0a\u7684\u7528\u6237\u4f53\u9a8c\u3002\u5728\u8fd9\u7bc7\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5728 Builder \u4e2d\u4e00\u4e9b\u5e38\u89c1\u7684\u4ea7\u7269\u4f53\u79ef\u4f18\u5316\u65b9\u5f0f\u3002"}),"\n",(0,l.jsxs)(e.h2,{id:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",children:"#"}),"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56"]}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u4f1a\u5b58\u5728\u67d0\u4e9b\u7b2c\u4e09\u65b9\u4f9d\u8d56\u88ab\u5b89\u88c5\u4e86\u591a\u4e2a\u7248\u672c\u7684\u73b0\u8c61\u3002\u91cd\u590d\u4f9d\u8d56\u4f1a\u5bfc\u81f4\u5305\u4f53\u79ef\u53d8\u5927\u3001\u6784\u5efa\u901f\u5ea6\u53d8\u6162\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u793e\u533a\u4e2d\u7684\u4e00\u4e9b\u5de5\u5177\u6765\u68c0\u6d4b\u6216\u6d88\u9664\u91cd\u590d\u4f9d\u8d56\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"pnpm"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(e.a,{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"nofollow",children:"pnpm-deduplicate"})," \u6765\u5206\u6790\u51fa\u6240\u6709\u7684\u91cd\u590d\u4f9d\u8d56\uff0c\u5e76\u901a\u8fc7\u5347\u7ea7\u4f9d\u8d56\u6216\u58f0\u660e ",(0,l.jsx)(e.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"nofollow",children:"pnpm overrides"})," \u8fdb\u884c\u7248\u672c\u5408\u5e76\u3002"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx pnpm-deduplicate --list"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"yarn"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(e.a,{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"nofollow",children:"yarn-deduplicate"})," \u6765\u81ea\u52a8\u5408\u5e76\u91cd\u590d\u4f9d\u8d56\uff1a"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx yarn-deduplicate "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" yarn"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"\u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93",children:"#"}),"\u4f7f\u7528\u66f4\u8f7b\u91cf\u7684\u5e93"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5efa\u8bae\u5c06\u9879\u76ee\u4e2d\u4f53\u79ef\u8f83\u5927\u7684\u4e09\u65b9\u5e93\u66ff\u6362\u4e3a\u66f4\u8f7b\u91cf\u7684\u5e93\uff0c\u6bd4\u5982\u5c06 ",(0,l.jsx)(e.a,{href:"https://momentjs.com/",target:"_blank",rel:"nofollow",children:"moment"})," \u66ff\u6362\u4e3a ",(0,l.jsx)(e.a,{href:"https://day.js.org/",target:"_blank",rel:"nofollow",children:"day.js"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u627e\u51fa\u9879\u76ee\u4e2d\u4f53\u79ef\u8f83\u5927\u7684\u4e09\u65b9\u5e93\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u6784\u5efa\u65f6\u6dfb\u52a0 ",(0,l.jsx)(e.a,{href:"/builder/api/config-performance.html#performancebundleanalyze",children:"BUNDLE_ANALYZE=true"})," \u73af\u5883\u53d8\u91cf\uff1a"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"BUNDLE_ANALYZE=true pnpm build"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u6dfb\u52a0\u8be5\u53c2\u6570\u540e\uff0cBuilder \u4f1a\u751f\u6210\u4e00\u4e2a\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\u7684 HTML \u6587\u4ef6\uff0c\u624b\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u6253\u5305\u4ea7\u7269\u7684\u74e6\u7247\u56fe\u3002\u533a\u5757\u7684\u9762\u79ef\u8d8a\u5927\uff0c\u8bf4\u660e\u8be5\u6a21\u5757\u7684\u4f53\u79ef\u8d8a\u5927\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,l.jsxs)(e.h2,{id:"\u63d0\u5347-browserslist-\u8303\u56f4",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63d0\u5347-browserslist-\u8303\u56f4",children:"#"}),"\u63d0\u5347 Browserslist \u8303\u56f4"]}),"\n",(0,l.jsx)(e.p,{children:"Builder \u4f1a\u6839\u636e\u9879\u76ee\u7684 Browserslist \u914d\u7f6e\u8303\u56f4\u8fdb\u884c\u4ee3\u7801\u7f16\u8bd1\uff0c\u5e76\u6ce8\u5165\u76f8\u5e94\u7684 Polyfill\u3002\u5982\u679c\u9879\u76ee\u4e0d\u9700\u8981\u517c\u5bb9\u65e7\u7248\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u63d0\u5347 Browserslist \u8303\u56f4\uff0c\u4ece\u800c\u51cf\u5c11\u5728\u8bed\u6cd5\u548c Polyfill \u4e0a\u7684\u7f16\u8bd1\u5f00\u9500\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Builder \u9ed8\u8ba4\u7684 Browserslist \u914d\u7f6e\u4e3a\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u6bd4\u5982\u53ea\u517c\u5bb9 Chrome 61 \u4ee5\u4e0a\u7684\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6539\u6210\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Chrome >= 61'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n\u8bf7\u9605\u8bfb ",(0,l.jsx)(e.a,{href:"/builder/guide/advanced/browserslist.html",children:"\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4"}),"\u7ae0\u8282\u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Browserslist \u7684\u7528\u6cd5\u3002"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"\u6309\u9700\u5f15\u5165-polyfill",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6309\u9700\u5f15\u5165-polyfill",children:"#"}),"\u6309\u9700\u5f15\u5165 polyfill"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u660e\u786e\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u9700\u8981\u989d\u5916 polyfill \u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.jsx)(e.a,{href:"/builder/api/config-output.html#outputpolyfill",children:"output.polyfill"})," \u8bbe\u7f6e\u4e3a ",(0,l.jsx)(e.code,{children:"usage"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"usage"})," \u6a21\u5f0f\u4e0b\uff0cBuilder \u4f1a\u5206\u6790\u6e90\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u8bed\u6cd5\uff0c\u6309\u9700\u6ce8\u5165\u6240\u9700\u7684 polyfill \u4ee3\u7801\uff0c\u4ece\u800c\u51cf\u5c11 polyfill \u7684\u4ee3\u7801\u91cf\u3002"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    polyfill"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'usage'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n\u8bf7\u9605\u8bfb ",(0,l.jsx)(e.a,{href:"/builder/guide/advanced/browser-compatibility.html",children:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"}),"\u7ae0\u8282\u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e polyfill \u7684\u7528\u6cd5\u3002"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"\u4f7f\u7528\u56fe\u7247\u538b\u7f29",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528\u56fe\u7247\u538b\u7f29",children:"#"}),"\u4f7f\u7528\u56fe\u7247\u538b\u7f29"]}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4e00\u822c\u7684\u524d\u7aef\u9879\u76ee\u4e2d\uff0c\u56fe\u7247\u8d44\u6e90\u7684\u4f53\u79ef\u5f80\u5f80\u662f\u9879\u76ee\u4ea7\u7269\u4f53\u79ef\u7684\u5927\u5934\uff0c\u56e0\u6b64\u5982\u679c\u80fd\u5c3d\u53ef\u80fd\u7cbe\u7b80\u56fe\u7247\u7684\u4f53\u79ef\uff0c\u90a3\u4e48\u5c06\u4f1a\u5bf9\u9879\u76ee\u7684\u6253\u5305\u4ea7\u7269\u4f53\u79ef\u8d77\u5230\u660e\u663e\u7684\u4f18\u5316\u6548\u679c\u3002\u4f60\u53ef\u4ee5\u5728 Builder \u4e2d\u6ce8\u518c\u63d2\u4ef6\u6765\u542f\u7528\u56fe\u7247\u538b\u7f29\u529f\u80fd:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginImageCompress } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-image-compress'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u5f80 builder \u5b9e\u4f8b\u4e0a\u6dfb\u52a0\u63d2\u4ef6"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u8be6\u89c1 ",(0,l.jsx)(e.a,{href:"/builder/plugins/plugin-image-compress.html",children:"Image Compress \u63d2\u4ef6"}),"\u3002"]}),"\n",(0,l.jsxs)(e.h2,{id:"\u4ee3\u7801\u62c6\u5305",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ee3\u7801\u62c6\u5305",children:"#"}),"\u4ee3\u7801\u62c6\u5305"]}),"\n",(0,l.jsx)(e.p,{children:"\u826f\u597d\u7684\u62c6\u5305\u7b56\u7565\u5bf9\u4e8e\u63d0\u5347\u5e94\u7528\u7684\u52a0\u8f7d\u6027\u80fd\u662f\u5341\u5206\u91cd\u8981\u7684\uff0c\u53ef\u4ee5\u5145\u5206\u5229\u7528\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u673a\u5236\uff0c\u51cf\u5c11\u8bf7\u6c42\u6570\u91cf\uff0c\u52a0\u5feb\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 Builder \u4e2d\u5185\u7f6e\u4e86",(0,l.jsx)(e.a,{href:"/builder/guide/optimization/split-chunk.html",children:"\u591a\u79cd\u62c6\u5305\u7b56\u7565"}),"\uff0c\u53ef\u4ee5\u6ee1\u8db3\u5927\u90e8\u5206\u5e94\u7528\u7684\u9700\u6c42\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u81ea\u5b9a\u4e49\u62c6\u5305\u914d\u7f6e\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u914d\u7f6e:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      forceSplitting"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u6bd4\u5982\u5c06 react-query \u5305\u62c6\u5206\u4e3a\u4e00\u4e2a Chunk"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        react_query"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/node_modules\\/react-query/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);