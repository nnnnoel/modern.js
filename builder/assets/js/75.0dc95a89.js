(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{298:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"构建产物目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建产物目录"}},[t._v("#")]),t._v(" 构建产物目录")]),t._v(" "),s("p",[t._v("本章节主要介绍构建产物的目录结构，以及如何控制不同类型产物的输出目录。")]),t._v(" "),s("h2",{attrs:{id:"默认产物目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认产物目录"}},[t._v("#")]),t._v(" 默认产物目录")]),t._v(" "),s("p",[t._v("下面是最基础的产物目录结构，默认情况下，构建产物会生成在当前项目的 "),s("code",[t._v("dist")]),t._v(" 目录下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n├── static\n│   ├── css\n│   │   ├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".css\n│   │   └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".css.map\n│   │\n│   └── js\n│       ├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n│       ├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js.LICENSE.txt\n│       └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js.map\n│\n└── html\n    └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        └── index.html\n")])])]),s("p",[t._v("最常见的产物是 HTML 文件、JS 文件和 CSS 文件：")]),t._v(" "),s("ul",[s("li",[t._v("HTML 文件：默认输出到 "),s("code",[t._v("html")]),t._v(" 目录。")]),t._v(" "),s("li",[t._v("JS 文件：默认输出到 "),s("code",[t._v("static/js")]),t._v(" 目录，")]),t._v(" "),s("li",[t._v("CSS 文件：默认输出到 "),s("code",[t._v("static/css")]),t._v(" 目录。")])]),t._v(" "),s("p",[t._v("此外，JS 文件和 CSS 文件有时候会生成一些相关产物：")]),t._v(" "),s("ul",[s("li",[t._v("License 文件：包含开源许可证信息，默认输出到 JS 文件的同级目录，并添加 "),s("code",[t._v(".LICENSE.txt")]),t._v(" 后缀。")]),t._v(" "),s("li",[t._v("Source Map 文件：包含保存源代码映射关系，默认输出到 JS 文件和 CSS 文件的同级目录，并添加 "),s("code",[t._v(".map")]),t._v(" 后缀。")])]),t._v(" "),s("p",[t._v("在产物的文件名称中，"),s("code",[t._v("[name]")]),t._v(" 表示这个文件对应的入口名称，比如 "),s("code",[t._v("index")]),t._v(", "),s("code",[t._v("main")]),t._v("。"),s("code",[t._v("[hash]")]),t._v(" 则是基于该文件的内容生成的哈希值。")]),t._v(" "),s("h2",{attrs:{id:"修改产物目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改产物目录"}},[t._v("#")]),t._v(" 修改产物目录")]),t._v(" "),s("p",[t._v("Builder 提供了多个配置项来修改产物目录和产物名称，你可以：")]),t._v(" "),s("ul",[s("li",[t._v("通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-filename"}},[t._v("output.filename")]),t._v(" 来修改产物的文件名。")],1),t._v(" "),s("li",[t._v("通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-distpath"}},[t._v("output.distPath")]),t._v(" 来修改产物的输出路径。")],1),t._v(" "),s("li",[t._v("通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-legalcomments"}},[t._v("output.legalComments")]),t._v(" 来修改 License 文件的生成方式。")],1),t._v(" "),s("li",[t._v("通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-disablesourcemap"}},[t._v("output.disableSourceMap")]),t._v(" 来移除 Source Map 文件。")],1),t._v(" "),s("li",[t._v("通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-disablehtmlfolder"}},[t._v("html.disableHtmlFolder")]),t._v(" 移除 HTML 产物对应的文件夹。")],1)]),t._v(" "),s("h2",{attrs:{id:"静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[t._v("#")]),t._v(" 静态资源")]),t._v(" "),s("p",[t._v("当你在代码中引用图片、SVG、字体、媒体等类型的静态资源时，它们也会被输出到 "),s("code",[t._v("dist/static")]),t._v(" 目录下，并根据静态资源类型来自动分配到对应的子目录：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n└── static\n    ├── image\n    │   └── foo."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".png\n    │\n    ├── svg\n    │   └── bar."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".svg\n    │\n    ├── font\n    │   └── baz."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".woff2\n    │\n    └── media\n        └── qux."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".mp4\n")])])]),s("p",[t._v("你可以通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-distpath"}},[t._v("output.distPath")]),t._v(" 配置项将这些静态资源统一输入到单个目录下，比如输出到 "),s("code",[t._v("assets")]),t._v(" 目录：")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    distPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      svg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      media"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上方的配置会生成以下目录结构：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n└── assets\n    ├── foo."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".png\n    ├── bar."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".svg\n    ├── baz."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".woff2\n    └── qux."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".mp4\n")])])]),s("h2",{attrs:{id:"node-js-产物目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-产物目录"}},[t._v("#")]),t._v(" Node.js 产物目录")]),t._v(" "),s("p",[t._v("当 Builder 的 "),s("RouterLink",{attrs:{to:"/guide/basic/build-target.html"}},[t._v("构建产物类型")]),t._v(" 中包含 "),s("code",[t._v("'node'")]),t._v("，或者你在上层框架中开启了 SSR 等服务端功能时，Builder 会在构建后生成一份 Node.js 产物，并输出到 "),s("code",[t._v("bundles")]),t._v(" 目录下：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n├── bundles\n│   └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n├── static\n└── html\n")])])]),s("p",[t._v("Node.js 产物通常只包含 JS 文件，不包含 HTML、CSS 等文件。此外，Node 产物的 JS 文件名称也不会自动生成哈希值。")]),t._v(" "),s("p",[t._v("你可以通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-distpath"}},[t._v("output.distPath.server")]),t._v(" 配置项来修改 Node 产物的输出路径。")],1),t._v(" "),s("p",[t._v("比如，将 Node.js 产物输出到 "),s("code",[t._v("server")]),t._v(" 目录：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    distPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"扁平化产物目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扁平化产物目录"}},[t._v("#")]),t._v(" 扁平化产物目录")]),t._v(" "),s("p",[t._v("有时候你不想产物目录有太多层级，可以将目录设置为空字符串，使生成的产物目录扁平化。")]),t._v(" "),s("p",[t._v("参考下方的例子：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    distPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      css"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    disableHtmlFolder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上方的配置会生成以下目录结构：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".css\n├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".css.map\n├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js\n├── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js.map\n└── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".html\n")])])]),s("h2",{attrs:{id:"产物不写入磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产物不写入磁盘"}},[t._v("#")]),t._v(" 产物不写入磁盘")]),t._v(" "),s("p",[t._v("默认情况下，Builder 会将构建产物写入磁盘，以方便开发者查看产物的内容，或是配置静态资源的代理规则。")]),t._v(" "),s("p",[t._v("在开发环境，你可以选择将构建产物保存在 Dev Server 的内存中，从而减少文件操作产生的开销。")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("dev.writeToDisk")]),t._v(" 配置项设置为 "),s("code",[t._v("false")]),t._v(" 即可：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    writeToDisk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);