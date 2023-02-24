"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8814],{87324:function(e,s,n){n.r(s),n.d(s,{frontmatter:function(){return i},title:function(){return o},toc:function(){return l}});var r=n(39980);const i=void 0,l=[{id:"enable-rspack",text:"Enable Rspack",depth:2},{id:"enable-in-modernjs-framework",text:"Enable in Modern.js framework",depth:3},{id:"use-builder-in-a-front-end-framework",text:"Use Builder in a front-end framework",depth:3},{id:"migrating-from-webpack-to-rspack",text:"Migrating from webpack to rspack",depth:2},{id:"configuration-differences",text:"Configuration differences",depth:3},{id:"source-config",text:"Source Config",depth:4},{id:"html-config",text:"Html Config",depth:4},{id:"security-config",text:"Security Config",depth:4},{id:"dev-config",text:"Dev Config",depth:4},{id:"output-config",text:"Output Config",depth:4},{id:"experiments-config",text:"Experiments Config",depth:4},{id:"performance-config",text:"Performance Config",depth:4},{id:"modify-the-rspack-configuration-object",text:"Modify the Rspack Configuration Object",depth:3}],o="Rspack Start";function c(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",h4:"h4",blockquote:"blockquote",strong:"strong",h5:"h5"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"rspack-start",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-start",children:"#"}),"Rspack Start"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.rspack.org/",target:"_blank",rel:"nofollow",children:"Rspack"})," is a Rust-based web bundler developed by ByteDance Web Infra team, with core architecture aligned with webpack's implementation. Currently, rspack-provider has adapted and validated most of the configuration capabilities in Builder."]}),"\n",(0,r.jsx)(s.p,{children:"Switching to rspack as the bundler can provide a faster compilation speed."}),"\n",(0,r.jsxs)(s.h2,{id:"enable-rspack",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack",children:"#"}),"Enable Rspack"]}),"\n",(0,r.jsxs)(s.h3,{id:"enable-in-modernjs-framework",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-in-modernjs-framework",children:"#"}),"Enable in Modern.js framework"]}),"\n",(0,r.jsxs)(s.p,{children:["We recommend enabling rspack as the bundler for Modern.js framework through the ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/en/apis/app/commands/new.html#enable-features",target:"_blank",rel:"nofollow",children:"Modern.js generator"})," if you prefer it over the default webpack bundler."]}),"\n",(0,r.jsx)(s.p,{children:"Of course, you can also access it manually by following the steps below:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Install rspack-provider\uff08The version needs to be the same as the modern.js version)."}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"pnpm add @modern-js/builder-rspack-provider@2.4.0 -D\n"})})]})]}),"\n",(0,r.jsx)(s.p,{children:"Confirm the modern.js version via package.json or lock file:"}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"package.json"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"devDependencies"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"@modern-js/app-tools"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2.4.0"'})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsx)(s.li,{children:"Add statement of use"}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" appTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rspack'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"appTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      bundler"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'experimental-rspack'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"use-builder-in-a-front-end-framework",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"}),"Use Builder in a front-end framework"]}),"\n",(0,r.jsxs)(s.p,{children:["Integrating rspack-provider into a frontend framework is similar to integrating webpack-provider. You only need to change the dependency from ",(0,r.jsx)(s.code,{children:"@modern-js/builder-webpack-provider"})," to ",(0,r.jsx)(s.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { createBuilder } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderRspackProvider } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-rspack-provider'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderRspackProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// some configs"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"migrating-from-webpack-to-rspack",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"}),"Migrating from webpack to rspack"]}),"\n",(0,r.jsx)(s.p,{children:"Builder aims to eliminate the main differences between different bundlers and help users migrate at a lower cost. However, due to the different capabilities of each bundler, users still need to be aware of some differences."}),"\n",(0,r.jsxs)(s.h3,{id:"configuration-differences",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-differences",children:"#"}),"Configuration differences"]}),"\n",(0,r.jsx)(s.p,{children:"Currently, most of configuration options in Builder have been adapted for rspack.\nThroughout this process, Builder's work includes but is not limited to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Validating and encapsulating webpack plugins such as ",(0,r.jsx)(s.code,{children:"@svgr/webpack"})," and ",(0,r.jsx)(s.code,{children:"webpack-bundle-analyzer"}),";"]}),"\n",(0,r.jsxs)(s.li,{children:["Encapsulating rspack built-in features such as ",(0,r.jsx)(s.code,{children:"css"})," and ",(0,r.jsx)(s.code,{children:"minify"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"source-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"}),"Source Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Source code parsing and compilation related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-source.html#sourcemodulescopes",children:"source.moduleScopes"})}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"html-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"}),"Html Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"HTML related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"All configurations and capabilities under html are available within rspack."}),"\n",(0,r.jsxs)(s.h4,{id:"security-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"}),"Security Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Security related configurations in Builder."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["All configurations and capabilities under security are ",(0,r.jsx)(s.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,r.jsxs)(s.h4,{id:"dev-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"}),"Dev Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Dev related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"All configurations and capabilities under dev are available within rspack."}),"\n",(0,r.jsxs)(s.h4,{id:"output-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"}),"Output Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Output related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputassetsretry",children:"output.assetsRetry"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputdisablecssextract",children:"output.disableCssExtract"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableassetmanifest",children:"output.enableAssetManifest"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableassetfallback",children:"output.enableAssetFallback"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenablecssmoduletsdeclaration",children:"output.enableCssModuleTSDeclaration"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputlegalcomments",children:"output.legalComments"})}),"\n",(0,r.jsxs)(s.li,{children:["inlineChunk \u80fd\u529b","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputdisableinlineruntimechunk",children:"output.disableInlineRuntimeChunk"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableinlinescripts",children:"output.enableInlineScripts"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputenableinlinestyles",children:"output.enableInlineStyles"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["tsChecker \u80fd\u529b","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputdisabletschecker",children:"output.disableTsChecker"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"experiments-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"}),"Experiments Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Experimental related configurations in the Builder"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["All configurations and capabilities under experiments are ",(0,r.jsx)(s.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,r.jsxs)(s.h4,{id:"performance-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"}),"Performance Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Performance related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-performance.html#performanceprofile",children:"performance.profile"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-performance.html#performanceremovemomentlocale",children:"performance.removeMomentLocale"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-performance.html#performancebuildcache",children:"performance.buildCache"})}),"\n"]}),"\n",(0,r.jsxs)(s.h5,{id:"tools-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"}),"Tools Config"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Low-level tools configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsterser",children:"tools.terser"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsbabel",children:"tools.babel"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolscssextract",children:"tools.cssExtract"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolscssloader",children:"tools.cssLoader"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsinspector",children:"tools.inspector"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsminifycss",children:"tools.minifyCss"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolspug",children:"tools.pug"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsstyleloader",children:"tools.styleLoader"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsstyledcomponents",children:"tools.styledComponents"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolstsloader",children:"tools.tsLoader"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolstschecker",children:"tools.tsChecker"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolswebpack",children:"tools.webpack"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolswebpackchain",children:"tools.webpackChain"})}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nIn addition to the above configurations, some of the supported configurations may have differences in their capabilities. For specific differences in configurations, please refer to the corresponding API for each configuration."})})]}),"\n",(0,r.jsxs)(s.h3,{id:"modify-the-rspack-configuration-object",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-rspack-configuration-object",children:"#"}),"Modify the Rspack Configuration Object"]}),"\n",(0,r.jsxs)(s.p,{children:["You can use ",(0,r.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolsrspack",children:"tools.rspack"})," to modify the rspack configuration object."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"rspack"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (config"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"config"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".devtool "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cheap-module-eval-source-map'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" config;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["More information about Rspack, please refer to the ",(0,r.jsx)(s.a,{href:"https://www.rspack.org/",target:"_blank",rel:"nofollow",children:"Rspack website"}),"."]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);