(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{298:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"构建产物类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建产物类型"}},[t._v("#")]),t._v(" 构建产物类型")]),t._v(" "),s("p",[t._v("Builder 支持构建出多种产物类型，你可以通过 "),s("RouterLink",{attrs:{to:"/zh/api/builder-core.html#createbuilder"}},[t._v("createBuilder")]),t._v(" 方法的 "),s("code",[t._v("target")]),t._v(" 参数来设置产物类型。")],1),t._v(" "),s("h2",{attrs:{id:"默认产物"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认产物"}},[t._v("#")]),t._v(" 默认产物")]),t._v(" "),s("p",[t._v("默认情况下，"),s("code",[t._v("target")]),t._v(" 会被设置为 "),s("code",[t._v("'web'")]),t._v("，并构建出"),s("strong",[t._v("运行在浏览器环境里的产物")]),t._v("。")]),t._v(" "),s("p",[t._v("同时，Builder 会读取项目中的 "),s("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserslist 配置"),s("OutboundLink")],1),t._v("，以确定需要兼容的浏览器范围。")]),t._v(" "),s("h2",{attrs:{id:"可选类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可选类型"}},[t._v("#")]),t._v(" 可选类型")]),t._v(" "),s("p",[t._v("除了 "),s("code",[t._v("'web'")]),t._v(" 外，你还可以将 "),s("code",[t._v("target")]),t._v(" 设置为以下值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("'node'")]),t._v(": 构建出运行在 Node.js 环境的产物，通常用于 SSR 等场景。")]),t._v(" "),s("li",[s("code",[t._v("'web-worker'")]),t._v("：构建出运行在 Web Worker 里的产物。")]),t._v(" "),s("li",[s("code",[t._v("'modern-web'")]),t._v("：构建出运行在现代浏览器里的产物。")])]),t._v(" "),s("p",[t._v("比如构建出适用于 Node.js 环境的产物：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"并行构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行构建"}},[t._v("#")]),t._v(" 并行构建")]),t._v(" "),s("p",[t._v("当 target 为包含多个值的数组时，Builder 会并行构建，并生成多份不同的产物。")]),t._v(" "),s("p",[t._v("比如同时构建浏览器产物和 SSR 产物：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"node-产物"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-产物"}},[t._v("#")]),t._v(" Node 产物")]),t._v(" "),s("p",[t._v("指运行在 Node.js 环境的产物，通常用于 SSR 等场景。")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("target")]),t._v(" 设置为 "),s("code",[t._v("'node'")]),t._v(" 时，Builder 会进行以下处理：")]),t._v(" "),s("ul",[s("li",[t._v("不会生成 HTML 文件，与 HTML 相关的逻辑也不会执行，因为 Node.js 环境不需要 HTML。")]),t._v(" "),s("li",[t._v("不会打包或抽取 CSS 代码，但产物中会包含 CSS Modules 的 id 信息。")]),t._v(" "),s("li",[t._v("不会开启默认的拆包策略，但 dynamic import 依然可以生效。")]),t._v(" "),s("li",[t._v("不会开启热更新相关的能力。")]),t._v(" "),s("li",[t._v("将 Browserslist 的默认值调整为 "),s("code",[t._v("['node >= 12']")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果触发了并行构建，比如同时构建 web 产物和 node 产物，那么上述处理不会影响 web 产物，web 产物所需的 HTML、CSS 等文件依然会正确生成。")])]),t._v(" "),s("h2",{attrs:{id:"web-worker-产物"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-产物"}},[t._v("#")]),t._v(" Web Worker 产物")]),t._v(" "),s("p",[t._v("指运行在 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker"),s("OutboundLink")],1),t._v(" 环境的产物。")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("target")]),t._v(" 设置为 "),s("code",[t._v("'web-worker'")]),t._v(" 时，Builder 会进行以下处理：")]),t._v(" "),s("ul",[s("li",[t._v("不会生成 HTML 文件，与 HTML 相关的逻辑也不会执行，因为 Web Worker 环境不需要 HTML。")]),t._v(" "),s("li",[t._v("不会打包或抽取 CSS 代码，但产物中会包含 CSS Modules 的 id 信息。")]),t._v(" "),s("li",[t._v("不会开启默认的拆包策略，"),s("strong",[t._v("并且 dynamic import 也不会生效")]),t._v("，因为 Web Worker 仅运行支持单个 JavaScript 文件。")]),t._v(" "),s("li",[t._v("不会开启热更新相关的能力。")])]),t._v(" "),s("h2",{attrs:{id:"modern-web-产物"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modern-web-产物"}},[t._v("#")]),t._v(" Modern Web 产物")]),t._v(" "),s("p",[t._v("指运行在现代浏览器环境的产物。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("什么是现代浏览器?")]),t._v(" "),s("p",[t._v("现代浏览器是我们的一个约定用语，指支持 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("原生 ES Modules"),s("OutboundLink")],1),t._v(" 的浏览器。")])]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("target")]),t._v(" 设置为 "),s("code",[t._v("'modern-web'")]),t._v(" 时，Builder 会进行以下处理：")]),t._v(" "),s("ul",[s("li",[t._v("将 Browserslist 的默认值调整为：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browserslist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome > 61'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edge > 16'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firefox > 60'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'safari > 11'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios_saf > 11'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);