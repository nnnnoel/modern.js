(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{258:function(t,s,e){"use strict";e.r(s);var a=e(4),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"browserslist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[t._v("#")]),t._v(" Browserslist")]),t._v(" "),s("p",[t._v("Builder supports using "),s("a",{attrs:{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),s("OutboundLink")],1),t._v(" to specify which browsers should be supported in your Web application.")]),t._v(" "),s("h2",{attrs:{id:"what-is-browserslist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-browserslist"}},[t._v("#")]),t._v(" What is Browserslist")]),t._v(" "),s("p",[t._v("Since different browsers support ECMAScript and CSS differently, developers need to set the correct browser range for web applications.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),s("OutboundLink")],1),t._v(" can specify which browsers your web application can run in, it provides a configuration for specifying browsers range. Browserslist has become a standard in the industry, it is used by libraries such as Autoprefixer, Babel, ESLint, PostCSS, SWC and Webpack.")]),t._v(" "),s("p",[t._v("When you specify a browser range through "),s("code",[t._v("browserslist")]),t._v(", Builder will compile JavaScript and CSS code to the specified syntax, and inject the corresponding Polyfill code.")]),t._v(" "),s("p",[t._v("For example, when you need to be compatible with IE11 browser, Builder will compile the code to ES5 and inject the Polyfill required by IE11 through "),s("code",[t._v("core-js")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("What is Polyfill")]),t._v(" "),s("p",[t._v("A polyfill is a piece of code that provides the functionality of a newer feature to older browsers that do not support that feature natively. It is used to fill in the gaps in older browsers' implementations of web standards, allowing developers to use newer features safely without having to worry about whether or not they will work in older browsers. For example, if a browser does not support the Array.map() method, a polyfill can be used to provide that functionality, allowing code that uses "),s("code",[t._v("Array.prototype.flat()")]),t._v(" to work in that browser. Polyfills are commonly used to ensure that web applications can work on a wide range of browsers, including older ones.")])]),t._v(" "),s("h2",{attrs:{id:"default-browserslist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-browserslist"}},[t._v("#")]),t._v(" Default Browserslist")]),t._v(" "),s("p",[t._v("Builder will set different default values of Browserslist according to "),s("RouterLink",{attrs:{to:"/guide/basic/build-target.html"}},[t._v("build target")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"web-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-target"}},[t._v("#")]),t._v(" Web Target")]),t._v(" "),s("p",[t._v("The default values of web target are as follows:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%\nnot dead\nnot op_mini all\n")])])]),s("p",[t._v("Under this browser range, JavaScript code will be compiled to ES5 syntax.")]),t._v(" "),s("h3",{attrs:{id:"node-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-target"}},[t._v("#")]),t._v(" Node Target")]),t._v(" "),s("p",[t._v("Node target will be compatible with Node.js 14.0 by default.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n")])])]),s("h3",{attrs:{id:"web-worker-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-target"}},[t._v("#")]),t._v(" Web Worker Target")]),t._v(" "),s("p",[t._v("The default browserslist of the Web Worker target is consistent with the Web target.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%\nnot dead\nnot op_mini all\n")])])]),s("h3",{attrs:{id:"modern-web-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modern-web-target"}},[t._v("#")]),t._v(" Modern Web Target")]),t._v(" "),s("p",[t._v("Modern Web target will be compatible with browsers that support "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("native ES Modules"),s("OutboundLink")],1),t._v(" by default.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("chrome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),t._v("\nedge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nfirefox "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\nsafari "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nios_saf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n")])])]),s("h2",{attrs:{id:"set-browserslist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-browserslist"}},[t._v("#")]),t._v(" Set Browserslist")]),t._v(" "),s("p",[t._v("You can set the browserslist value in the "),s("code",[t._v("package.json")]),t._v(" or "),s("code",[t._v(".browserslistrc")]),t._v(" file in the root directory of the current project.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Set via "),s("code",[t._v("browserslist")]),t._v(" in "),s("code",[t._v("package.json")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browserslist"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iOS 9"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Android 4.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 2 versions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"> 0.2%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not dead"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Set via a separate "),s("code",[t._v(".browserslistrc")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("iOS 9\nAndroid 4.4\nlast 2 versions\n> 0.2%\nnot dead\n")])])]),s("h3",{attrs:{id:"use-output-overridebrowserslist-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-output-overridebrowserslist-config"}},[t._v("#")]),t._v(" Use output.overrideBrowserslist config")]),t._v(" "),s("p",[t._v("In addition to the above standard usage, Builder also provides "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-overridebrowserslist"}},[t._v("output.overrideBrowserslist")]),t._v(" config, which can also set the value of browserslist.")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    overrideBrowserslist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iOS 9'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Android 4.4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last 2 versions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 0.2%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not dead'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set "),s("code",[t._v("overrideBrowserslist")]),t._v(" to an object whose key is the corresponding build target.")]),t._v(" "),s("p",[t._v("For example to set different ranges for "),s("code",[t._v("web")]),t._v(" and "),s("code",[t._v("node")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("overrideBrowserslist")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iOS 9'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Android 4.4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last 2 versions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 0.2%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not dead'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("node")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node >= 14'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In most cases, it is recommended to use the "),s("code",[t._v(".browserslistrc")]),t._v(" file rather than the "),s("code",[t._v("overrideBrowserslist")]),t._v(" config. Because the "),s("code",[t._v(".browserslistrc")]),t._v(" file is the official config file, it is more general and can be recognized by other libraries in the community.")])])}),[],!1,null,null,null);s.default=r.exports}}]);