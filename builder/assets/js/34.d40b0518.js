(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{257:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[t._v("#")]),t._v(" Alias")]),t._v(" "),s("p",[t._v("Alias is a way to specify a short name for a module or a path to a directory or file. This can be useful when you want to use a short, easy-to-remember name for a module instead of a long, complex path.")]),t._v(" "),s("p",[t._v("For example, if you have a file at "),s("code",[t._v("src/common/request.ts")]),t._v(", you could create an alias called "),s("code",[t._v("@request")]),t._v(" for it, so you could import the file like this: "),s("code",[t._v("import request from '@request'")]),t._v(". This makes it easier to reference the file in your code, and also allows you to move the file to a different location without having to update all the import statements in your code.")]),t._v(" "),s("p",[t._v("In Builder, you can set aliases in two ways:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/api/config-source.html#source-alias"}},[t._v("source.alias")])],1),t._v(" "),s("li",[s("code",[t._v("paths")]),t._v(" in "),s("code",[t._v("tsconfig.json")])])]),t._v(" "),s("h2",{attrs:{id:"using-source-alias-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-source-alias-config"}},[t._v("#")]),t._v(" Using "),s("code",[t._v("source.alias")]),t._v(" config")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-alias"}},[t._v("source.alias")]),t._v(" corresponds to webpack's native "),s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"}},[t._v("resolve.alias"),s("OutboundLink")],1),t._v(" config, you can configure it as an object or a function.")],1),t._v(" "),s("p",[t._v("First, you can configure it as an object, for example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@common'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The relative path in it will be parsed as an absolute path in Builder.")]),t._v(" "),s("p",[t._v("You can also configure it as a function to get the preset "),s("code",[t._v("alias")]),t._v(" object and modify it, for example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"using-paths-config-in-tsconfig-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-paths-config-in-tsconfig-json"}},[t._v("#")]),t._v(" Using "),s("code",[t._v("paths")]),t._v(" config in "),s("code",[t._v("tsconfig.json")])]),t._v(" "),s("p",[t._v("In addition to "),s("code",[t._v("source.alias")]),t._v(", you can also configure it by "),s("code",[t._v("paths")]),t._v(" in "),s("code",[t._v("tsconfig.json")]),t._v(". We recommend to use this way in TypeScript projects, because it can solve type problem of alias path.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@common/*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/common/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Priority")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("paths")]),t._v(" config has higher priority than "),s("code",[t._v("source.alias")]),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);