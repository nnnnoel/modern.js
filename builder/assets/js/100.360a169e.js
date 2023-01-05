(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{323:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换"}},[t._v("#")]),t._v(" 模块热替换")]),t._v(" "),a("p",[t._v("模块热替换（HMR - hot module replacement）功能会在应用程序运行过程中，替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：")]),t._v(" "),a("ul",[a("li",[t._v("保留在完全重新加载页面期间丢失的应用程序状态。")]),t._v(" "),a("li",[t._v("只更新变更内容，以节省宝贵的开发时间。")]),t._v(" "),a("li",[t._v("在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。")])]),t._v(" "),a("h2",{attrs:{id:"启用-hmr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-hmr"}},[t._v("#")]),t._v(" 启用 HMR")]),t._v(" "),a("p",[t._v("Builder 已内置了对 HMR 的支持，在开发环境下默认启用。")]),t._v(" "),a("p",[t._v("如果你不需要使用 HMR 能力，可以将 "),a("RouterLink",{attrs:{to:"/zh/api/config-dev.html#dev-hmr"}},[t._v("dev.hmr")]),t._v(" 设置为 false，此时将不再提供热更新和 react-refresh 功能。")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hmr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"自定义-hmr-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-hmr-url"}},[t._v("#")]),t._v(" 自定义 HMR URL")]),t._v(" "),a("p",[t._v("Builder 默认使用 local-ip 和当前端口号拼接 HMR 客户端的 URL，当出现连接失败的情况，可以通过自定义配置的方式指定可用的 URL。")]),t._v(" "),a("p",[t._v("例如，通过将 host 和 path 设置为空将根据当前客户端情况自动推导 HMR 客户端 URL：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"live-reloading-和-hot-reloading-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-reloading-和-hot-reloading-的区别"}},[t._v("#")]),t._v(" Live reloading 和 Hot reloading 的区别")]),t._v(" "),a("ul",[a("li",[t._v("Live reloading: 修改文件之后，webpack 重新编译，并强制刷新浏览器，属于全局（整个应用）刷新，相当于 "),a("code",[t._v("window.location.reload()")]),t._v("；")]),t._v(" "),a("li",[t._v("Hot reloading: 修改文件之后，webpack 重新编译对应模块，刷新时可以记住应用的状态，从而做到局部刷新，即热更新。")])]),t._v(" "),a("p",[t._v("DevServer 提供了 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#hot"}},[t._v("hot")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#livereload"}},[t._v("liveReload")]),t._v(" 这两个配置项来控制更新方式。当 hot 和 liveReload 同时开启时，DevServer 会优先尝试使用 hot 模式 (HMR)，如果 HMR 更新失败后，会降级到重新加载页面。")],1),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h3",{attrs:{id:"external-react-reactdom-后-热更新不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-react-reactdom-后-热更新不生效"}},[t._v("#")]),t._v(" External react/reactDom 后，热更新不生效？")]),t._v(" "),a("p",[t._v("热更新能力生效需要用到 react 和 react-dom 的 development 模式， 而 CDN 上的 react 通常使用 production 模式。你需要切换到开发模式，或者在开发环境下不配置 external。")]),t._v(" "),a("p",[t._v("如果不确定你当前使用的 React 模式，你可以参考："),a("a",{attrs:{href:"https://reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"noopener noreferrer"}},[t._v("检查 React 模式"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"开启-https-后-热更新不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-https-后-热更新不生效"}},[t._v("#")]),t._v(" 开启 https 后，热更新不生效？")]),t._v(" "),a("p",[t._v("当开启 https 时，由于证书的问题，会出现 HMR 连接失败的情况，此时打开控制台，会出现 HMR connect failed 的报错。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_2f90d027-a232-4bd8-8021-dac3c651682g.jpg",alt:"hmr-connect-error-0"}})]),t._v(" "),a("p",[t._v("此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 xxx（不安全）」。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/59b37606-52ad-4886-a423-af2edaa49245.png",alt:"hmr-connect-error-1"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Tips: 当通过 Localhost 访问页面时，「您的连接不是私密连接」字样可能不会出现，可访问 Network 域名进行处理。")])]),t._v(" "),a("h3",{attrs:{id:"热更新后-react-组件的-state-丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新后-react-组件的-state-丢失"}},[t._v("#")]),t._v(" 热更新后 React 组件的 state 丢失？")]),t._v(" "),a("p",[t._v("Builder 使用 React 官方的 "),a("a",{attrs:{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fast Refresh"),a("OutboundLink")],1),t._v(" 能力来进行组件热更新。")]),t._v(" "),a("p",[t._v("在使用 Fast Refresh 时，要求组件不能为匿名函数，否则热更新后无法保留 React 组件的 state。")]),t._v(" "),a("p",[t._v("以下写法都是不正确的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("正确的写法为：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" MyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);