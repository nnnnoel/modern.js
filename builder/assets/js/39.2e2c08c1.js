(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{262:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"css-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-usage"}},[s._v("#")]),s._v(" CSS Usage")]),s._v(" "),t("p",[s._v("Builder has built-in multiple style resource processing capabilities, including Less / Sass preprocessor, PostCSS, CSS Modules, CSS inline and CSS compression.")]),s._v(" "),t("p",[s._v("In addition, Builder also provides multiple configs to customize the compile rules of style resources.")]),s._v(" "),t("h2",{attrs:{id:"using-less-sass-and-stylus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-less-sass-and-stylus"}},[s._v("#")]),s._v(" Using Less, Sass and Stylus")]),s._v(" "),t("p",[s._v("The Builder has built-in community popular CSS preprocessors such as Less, Sass.")]),s._v(" "),t("p",[s._v("By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure "),t("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-less"}},[s._v("tools.less")]),s._v(", "),t("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-sass"}},[s._v("tools.sass")]),s._v(" to set it up.")],1),s._v(" "),t("p",[s._v("You can also use Stylus in Builder, just install the Stylus plugin provided by Builder, please refer to "),t("RouterLink",{attrs:{to:"/plugins/plugin-stylus.html"}},[s._v("Stylus Plugin")]),s._v(" for usage.")],1),s._v(" "),t("h2",{attrs:{id:"using-postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-postcss"}},[s._v("#")]),s._v(" Using PostCSS")]),s._v(" "),t("p",[s._v("Builder has built-in "),t("a",{attrs:{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),t("OutboundLink")],1),s._v(" to transform the CSS code. You can configure the postcss-loader via "),t("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-postcss"}},[s._v("tools.postcss")]),s._v(".")],1),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  tools"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("postcss")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" viewportPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-px-to-viewport'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        viewportWidth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("postcssOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("viewportPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("By default, we have enabled "),t("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[s._v("autoprefixer"),t("OutboundLink")],1),s._v(" to add vendor prefixes to CSS rules.\nIf you want to configure the target browser, you can use "),t("RouterLink",{attrs:{to:"/en/api/config-output.html#output-overridebrowserslist"}},[s._v("output.overrideBrowserslist")]),s._v(" config.")],1),s._v(" "),t("h2",{attrs:{id:"using-css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-css-modules"}},[s._v("#")]),s._v(" Using CSS Modules")]),s._v(" "),t("p",[s._v("Please read the "),t("RouterLink",{attrs:{to:"/guide/basic/css-modules.html"}},[s._v("Using CSS Modules")]),s._v(" chapter for a complete usage of CSS Modules.")],1),s._v(" "),t("h2",{attrs:{id:"css-minify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-minify"}},[s._v("#")]),s._v(" CSS Minify")]),s._v(" "),t("p",[s._v("Usually, in production environments we compress static resources such as CSS, JS, etc. to achieve better transfer efficiency.")]),s._v(" "),t("p",[s._v("Builder automatically compresses CSS code at production build time with "),t("a",{attrs:{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-minimizer-webpack-plugin"),t("OutboundLink")],1),s._v(" (The compression tool used at the bottom is "),t("a",{attrs:{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cssnano"),t("OutboundLink")],1),s._v(").")]),s._v(" "),t("p",[s._v("You can configure "),t("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-minifycss"}},[s._v("tools.minifyCss")]),s._v(" to make it more customizable.")],1),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("About cssnano")]),s._v(" "),t("p",[s._v("cssnano is a tool for optimizing and minifying CSS files. It reduces the size of CSS files by removing unused rules, merging similar rules, removing comments and whitespace, and converting length units, among other techniques, to improve the loading speed of websites.")])]),s._v(" "),t("h2",{attrs:{id:"inline-css-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inline-css-files"}},[s._v("#")]),s._v(" Inline CSS Files")]),s._v(" "),t("p",[s._v("By default, Builder will extract CSS into a separate "),t("code",[s._v(".css")]),s._v(" file and output it to the dist directory.")]),s._v(" "),t("p",[s._v("If you want to inline styles into your JS file, you can set "),t("RouterLink",{attrs:{to:"/en/api/config-output.html#output-disablecssextract"}},[s._v("output.disableCssExtract")]),s._v(" to true to disable CSS extraction logic.When the JS file is requested by the browser, JS dynamically inserts the "),t("code",[s._v("<style>")]),s._v(" tag into the Html to load the CSS styles.")],1),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    disableCssExtract"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("This will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction.")]),s._v(" "),t("h2",{attrs:{id:"import-css-in-node-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-css-in-node-modules"}},[s._v("#")]),s._v(" Import CSS in node_modules")]),s._v(" "),t("p",[s._v("You can directly import CSS files in node_modules.")]),s._v(" "),t("ul",[t("li",[s._v("Import in a component:")])]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/App.tsx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Import the Arco Design style:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@arco-design/web-react/dist/css/arco.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Import in a style file:")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* src/App.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* reference normalize.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* https://github.com/necolas/normalize.css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normalize.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);