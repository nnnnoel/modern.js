(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{264:function(e,t,r){"use strict";r.r(t);var a=r(4),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"glossary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),t("h2",{attrs:{id:"bundler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bundler"}},[e._v("#")]),e._v(" Bundler")]),e._v(" "),t("p",[e._v("Refers to module bundlers such as "),t("code",[e._v("webpack")]),e._v(" and "),t("code",[e._v("rspack")]),e._v(".")]),e._v(" "),t("p",[e._v("When Bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles.")]),e._v(" "),t("h2",{attrs:{id:"rspack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rspack"}},[e._v("#")]),e._v(" Rspack")]),e._v(" "),t("p",[e._v("A Rust Bundler developed by the ByteDance Web Infra team. The core architecture of rspack is aligned with the implementation of webpack, and provides out-of-the-box support for commonly used build features. In the long run, rspack will align the main APIs of webpack and be compatible with the mainstream webpack loaders and plugins to ensure that developers can smoothly migrate from webpack to rspack.")]),e._v(" "),t("p",[e._v("Rspack optimizes compilation performance by:")]),e._v(" "),t("ul",[t("li",[e._v("Highly LTO optimized Native code.")]),e._v(" "),t("li",[e._v("Take full advantage of multi-core, and the entire compilation process is fully optimized for multi-threading.")]),e._v(" "),t("li",[e._v("On-demand compilation based on request (Lazy Compilation), reducing the number of modules per compilation to improve the speed of cold start.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Rspack is still in development and has not been open sourced yet.")])]),e._v(" "),t("h2",{attrs:{id:"builder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#builder"}},[e._v("#")]),e._v(" Builder")]),e._v(" "),t("p",[e._v('Build Engine. The goal of Builder is to "reuse the best practices of build tools".')]),e._v(" "),t("p",[e._v("Bundlers are low-level, if we build a project based on webpack, we need to fully understand the webpack config and many webpack plugins and loaders, then spend a lot of time to combine them.")]),e._v(" "),t("p",[e._v("Builder is a out-of-box build tools. By using Builder, you can quickly gain the ability to build a modern web application.")]),e._v(" "),t("p",[e._v("The layers inside the Builder are as follows:")]),e._v(" "),t("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png"}}),e._v(" "),t("h2",{attrs:{id:"builder-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#builder-provider"}},[e._v("#")]),e._v(" Builder Provider")]),e._v(" "),t("p",[e._v("Builder Provider is a part of Builder. Providers implements corresponding build feature based on specific bundlers.")]),e._v(" "),t("p",[e._v("Currently there are two Providers:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("@modern-js/builder-webpack-provider")]),e._v(": Based on webpack.")]),e._v(" "),t("li",[t("code",[e._v("@modern-js/builder-rspack-provider")]),e._v(": Based on rspack.")])]),e._v(" "),t("h2",{attrs:{id:"modern-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modern-js"}},[e._v("#")]),e._v(" Modern.js")]),e._v(" "),t("p",[e._v("Modern web engineering system.")]),e._v(" "),t("p",[e._v("Modern.js is open sourced by the ByteDance Web Infra team, provides a series of best practices for modern web development, such as integrated development of frontend and backend, conventional routing, building solutions, style solutions, etc.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern.js Website"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"edenx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edenx"}},[e._v("#")]),e._v(" EdenX")]),e._v(" "),t("p",[e._v("ByteDance's internal web engineering system, implemented based on Modern.js.")])])}),[],!1,null,null,null);t.default=s.exports}}]);