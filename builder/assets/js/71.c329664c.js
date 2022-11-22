(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{294:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"html-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-模板"}},[t._v("#")]),t._v(" HTML 模板")]),t._v(" "),a("p",[t._v("在构建的过程中，Builder 会基于 HTML 模板文件和模板参数进行编译，生成若干份 HTML 文件。")]),t._v(" "),a("p",[t._v("Builder 提供了一些配置项来对 HTML 模板进行设置。通过本章节你可以了解到这些配置项的基本用法。")]),t._v(" "),a("h2",{attrs:{id:"设置模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置模板文件"}},[t._v("#")]),t._v(" 设置模板文件")]),t._v(" "),a("p",[t._v("通常来说，HTML 模板文件是由上层框架预先定义的。")]),t._v(" "),a("p",[t._v("比如在 Modern.js 2.0 框架中，默认会预设一份 HTML 模板，同时也支持用户自定义模板的内容。你可以阅读 "),a("a",{attrs:{href:"https://modernjs.dev/v2/docs/guides/basic-features/html",target:"_blank",rel:"noopener noreferrer"}},[t._v("「Modern.js - HTML 模板」"),a("OutboundLink")],1),t._v(" 章节来了解相关内容。")]),t._v(" "),a("p",[t._v("在 Builder 中，你可以使用 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-template"}},[t._v("html.template")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-templatebyentries"}},[t._v("html.templateByEntries")]),t._v(" 配置项来设置自定义的 HTML 模板文件。")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置页面标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置页面标题"}},[t._v("#")]),t._v(" 设置页面标题")]),t._v(" "),a("p",[t._v("你可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-title"}},[t._v("html.title")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-titlebyentries"}},[t._v("html.titleByEntries")]),t._v(" 配置项来设置 HTML 的 "),a("code",[t._v("<title>")]),t._v(" 标签。")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置页面图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置页面图标"}},[t._v("#")]),t._v(" 设置页面图标")]),t._v(" "),a("p",[t._v("Builder 支持设置 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Favicon",target:"_blank",rel:"noopener noreferrer"}},[t._v("favicon"),a("OutboundLink")],1),t._v(" 图标 和 iOS 系统下的 "),a("a",{attrs:{href:"https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/",target:"_blank",rel:"noopener noreferrer"}},[t._v("apple-touch-icon"),a("OutboundLink")],1),t._v(" 图标。")]),t._v(" "),a("p",[t._v("你可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-favicon"}},[t._v("html.favicon")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-faviconbyentries"}},[t._v("html.faviconByEntries")]),t._v(" 配置项来设置 favicon 图标。")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    favicon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/assets/icon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("也可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-appicon"}},[t._v("html.appIcon")]),t._v(" 配置项来设置 iOS 下的 apple-touch-icon 图标。")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    appIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/assets/icon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置-meta-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-meta-标签"}},[t._v("#")]),t._v(" 设置 meta 标签")]),t._v(" "),a("p",[t._v("你可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-meta"}},[t._v("html.meta")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-metabyentries"}},[t._v("html.metaByEntries")]),t._v(" 配置项来设置 HTML 的 "),a("code",[t._v("<meta>")]),t._v(" 标签。")],1),t._v(" "),a("p",[t._v("比如设置 description：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a description of the page'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("最终在 HTML 中生成的 meta 标签为：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a description of the page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"设置模板参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置模板参数"}},[t._v("#")]),t._v(" 设置模板参数")]),t._v(" "),a("p",[t._v("在 HTML 模板中，你可以使用丰富的模板参数，Builder 默认注入的模板参数包括：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultParameters")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 html.meta 配置")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 html.title 配置")]),t._v("\n  mountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 html.mountId 配置")]),t._v("\n  entryName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口名称")]),t._v("\n  assetPrefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 output.assetPrefix 配置")]),t._v("\n  compilation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Compilation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 webpack 的 compilation 对象")]),t._v("\n  webpackConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack 配置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// htmlWebpackPlugin 内置的参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 详见 https://github.com/jantimon/html-webpack-plugin")]),t._v("\n  htmlWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你也可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-templateparameters"}},[t._v("html.templateParameters")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-templateparametersbyentries"}},[t._v("html.templateParametersByEntries")]),t._v(" 配置项来传入自定义的模板参数。")],1),t._v(" "),a("p",[t._v("比如：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    templateParameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接下来，你可以在 HTML 模板中，通过 "),a("code",[t._v("<%= text %>")]),t._v(" 来读取参数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("经过编译后的最终 HTML 代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hello world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板引擎"}},[t._v("#")]),t._v(" 模板引擎")]),t._v(" "),a("p",[t._v("Builder 支持 "),a("a",{attrs:{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash Template"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pug"),a("OutboundLink")],1),t._v(" 等多个模板引擎，默认使用最基础的 Lodash Template 作为模板引擎。")]),t._v(" "),a("h3",{attrs:{id:"lodash-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lodash-template"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash Template"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("当模板文件的后缀为 "),a("code",[t._v(".html")]),t._v(" 时，Builder 会使用 Lodash Template 对模板进行编译。")]),t._v(" "),a("p",[t._v("例如，在模板中定义一个 "),a("code",[t._v("text")]),t._v(" 参数，值为 "),a("code",[t._v("'world'")]),t._v("，在构建时会自动将 "),a("code",[t._v("<%= text %>")]),t._v(" 替换为对应的值。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输入  --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello <%= text %>!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输出 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("请阅读 "),a("a",{attrs:{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash Template"),a("OutboundLink")],1),t._v(" 文档来了解完整用法。")]),t._v(" "),a("h3",{attrs:{id:"ejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejs"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("当模板文件的后缀为 "),a("code",[t._v(".ejs")]),t._v(" 时，Builder 会使用 EJS 模板引擎对模板进行编译。EJS 是一套简单的模板语言，支持直接在标签内书写简单、直白的 JavaScript 代码，并通过 JavaScript 输出最终所需的 HTML。")]),t._v(" "),a("p",[t._v("例如，你可以先通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-template"}},[t._v("html.template")]),t._v(" 配置项来引用一个 "),a("code",[t._v(".ejs")]),t._v(" 模板文件：")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/index.ejs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接着在模板中定义一个 "),a("code",[t._v("user")]),t._v(" 参数，值为 "),a("code",[t._v("{ name: 'Jack' }")]),t._v("。在构建时，会自动将 "),a("code",[t._v("<%= user.name %>")]),t._v(" 替换为对应的值。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输入  --\x3e")]),t._v("\n<% if (user) { %>\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<%= user.name %>"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<% } %>\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输出 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Jack"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("请阅读 "),a("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS"),a("OutboundLink")],1),t._v(" 文档来了解完整用法。")]),t._v(" "),a("h3",{attrs:{id:"pug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pug"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pug"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("当模板文件的后缀为 "),a("code",[t._v(".pug")]),t._v(" 时，Builder 会使用 Pug 模板引擎对模板进行编译。Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为 Node.js 平台开发。")]),t._v(" "),a("p",[t._v("使用 Pug 模板前，需要开启 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-pug"}},[t._v("tools.pug")]),t._v(" 配置项，并通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-template"}},[t._v("html.template")]),t._v(" 配置项来引用一个 "),a("code",[t._v(".pug")]),t._v(" 模板文件：")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/index.pug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("开启后，你可以在 "),a("code",[t._v(".pug")]),t._v(" 模板中使用 Pug 语法：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输入  --\x3e")]),t._v("\np Hello #{text}!\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 输出 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("请阅读 "),a("a",{attrs:{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pug"),a("OutboundLink")],1),t._v(" 文档来了解完整用法。")])])}),[],!1,null,null,null);a.default=e.exports}}]);