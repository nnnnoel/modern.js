(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{270:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("h2",{attrs:{id:"using-modern-js-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-modern-js-app"}},[t._v("#")]),t._v(" Using Modern.js App")]),t._v(" "),e("p",[e("strong",[t._v("Modern.js 2.0 use Modern.js Builder as the build engine by default")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are a business developer, you do not need to manually install Builder, you can just create a Modern.js 2.0 project and use all the features provided by Builder.")]),t._v(" "),e("blockquote",[e("p",[t._v("Tips: Modern.js 2.0 is still under development and not officially released yet.")])]),t._v(" "),e("h2",{attrs:{id:"use-builder-in-a-front-end-framework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-builder-in-a-front-end-framework"}},[t._v("#")]),t._v(" Use Builder in a front-end framework")]),t._v(" "),e("p",[t._v("If you are developing a front-end framework, you can use Builder by following these steps:")]),t._v(" "),e("h3",{attrs:{id:"_1-install-builder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-builder"}},[t._v("#")]),t._v(" 1. Install Builder")]),t._v(" "),e("p",[t._v("You need to install two packages:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("@modern-js/builder")]),t._v(" is the core package of Builder and exports the core API.")]),t._v(" "),e("li",[e("code",[t._v("@modern-js/builder-webpack-provider")]),t._v(" is a provider for Builder, providing webpack-based building abilities.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @modern-js/builder@beta @modern-js/builder-webpack-provider@beta -D\n")])])]),e("blockquote",[e("p",[t._v("When upgrading the version, please make sure that Builder and Provider you installed have the same version.")])]),t._v(" "),e("h3",{attrs:{id:"_2-create-builder-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-builder-instance"}},[t._v("#")]),t._v(" 2. Create Builder Instance")]),t._v(" "),e("p",[t._v("There are two steps to creating a Builder instance:")]),t._v(" "),e("p",[t._v("First you need to initialize the Builder Provider and pass in the "),e("code",[t._v("builderConfig")]),t._v(" config object. Builder provides a lot of configs that allow you to customize the build behavior. At this point, you don't need to know the specific content of the config, just pass in an empty object. You can find all available configs in "),e("RouterLink",{attrs:{to:"/en/api/#config"}},[t._v("API - config")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createBuilder "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" builderWebpackProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder-webpack-provider'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("builderWebpackProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  builderConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some configs")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After getting the provider object, you can call the "),e("code",[t._v("createBuilder")]),t._v(" method to create a Builder instance object:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.ts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Except the "),e("code",[t._v("entry")]),t._v(" option, the "),e("code",[t._v("createBuilder")]),t._v(" method also provides some other options, which you can learn more about in "),e("RouterLink",{attrs:{to:"/en/api/builder-core.html#createbuilder"}},[t._v("API - createBuilder")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"_3-call-builder-instance-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-call-builder-instance-method"}},[t._v("#")]),t._v(" 3. Call Builder Instance Method")]),t._v(" "),e("p",[t._v("The Builder instance provides some methods, which you can use it according to the usage scenarios.")]),t._v(" "),e("p",[t._v("To start local development, it is recommended to use the "),e("RouterLink",{attrs:{to:"/en/api/builder-instance.html#builder-startdevserver"}},[t._v("builder.startDevServer")]),t._v(" method, which will start a local Dev Server.")],1),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("startDevServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After successfully starting Dev Server, you can see the following logs:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("info    Starting dev server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\ninfo    Dev server running at:\n\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Local:    http://localhost:8081\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Network:  http://192.168.0.1:8081\n")])])]),e("p",[t._v("To deploy the App to production environment, it is recommended to use the "),e("RouterLink",{attrs:{to:"/en/api/builder-instance.html#builder-build"}},[t._v("builder.build")]),t._v(" method, which will build the production outputs.")],1),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("For more introduction of Builder instance methods, please read the "),e("RouterLink",{attrs:{to:"/en/api/builder-instance.html"}},[t._v("Builder Instance")]),t._v(" chapter.")],1)]),t._v(" "),e("p",[t._v("After completing the above three steps, you have learned the basic usage of Builder. Next, you can customize the build process through the Builder plugin and Builder configs.")]),t._v(" "),e("h2",{attrs:{id:"next-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-step"}},[t._v("#")]),t._v(" Next Step")]),t._v(" "),e("p",[t._v("You may want:")]),t._v(" "),e("NextSteps",[e("Step",{attrs:{href:"/guide/glossary.html",title:"Glossary",description:"Learn about Builder related concepts"}}),t._v(" "),e("Step",{attrs:{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}}),t._v(" "),e("Step",{attrs:{href:"/api",title:"API Reference",description:"View detailed API documentation"}})],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);