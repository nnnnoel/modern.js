(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{267:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"import-svg-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-svg-assets"}},[t._v("#")]),t._v(" Import SVG Assets")]),t._v(" "),s("p",[t._v("Builder supports import SVG assets and transform SVG into React components or URLs.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("What is SVG")]),t._v(" "),s("p",[t._v("SVG stands for Scalable Vector Graphics. It is a type of image format that uses vector graphics to represent images. Vector graphics are different from raster graphics, which are made up of pixels. Instead, vector graphics use geometric shapes, lines, and curves to represent images. Because vector graphics are not made up of pixels, they can be scaled to any size without losing resolution or quality.")])]),t._v(" "),s("h2",{attrs:{id:"import-svg-in-js-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-svg-in-js-file"}},[t._v("#")]),t._v(" Import SVG in JS file")]),t._v(" "),s("p",[t._v("When import an SVG in a JS file, if you import "),s("code",[t._v("ReactComponent")]),t._v(", Builder will call "),s("a",{attrs:{href:"https://react-svgr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVGR"),s("OutboundLink")],1),t._v(" to convert the SVG into a React component.")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/component/Logo.tsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ReactComponent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Logo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If you use the default import, then the SVG will be treated as a normal static asset and you will get a URL:")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logoURL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logoURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "/static/logo.6c12aba3.png"')]),t._v("\n")])])]),s("h2",{attrs:{id:"modify-the-default-export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-default-export"}},[t._v("#")]),t._v(" Modify the Default Export")]),t._v(" "),s("p",[t._v("You can modify the default export of SVG files through the "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-svgdefaultexport"}},[t._v("output.svgDefaultExport")]),t._v(" config. For example, set the default export as a React component:")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    svgDefaultExport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Then import the SVG, you'll get a React component instead of a URL:")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/component/Logo.tsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"import-svg-in-css-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-svg-in-css-file"}},[t._v("#")]),t._v(" Import SVG in CSS file")]),t._v(" "),s("p",[t._v("When import an SVG in a CSS file, the SVG is treated as a normal static resource and you will get a URL:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'../static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"assets-processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assets-processing"}},[t._v("#")]),t._v(" Assets Processing")]),t._v(" "),s("p",[t._v("When SVG is imported not as a React component but as a normal static resource, it is processed exactly the same as other static assets, and it is also affected by rules such as assets inlining and URL prefixing.")]),t._v(" "),s("p",[t._v("Please read the "),s("RouterLink",{attrs:{to:"/guide/basic/static-assets.html"}},[t._v("Import Static Assets")]),t._v(" section to understand the processing rules for static assets.")],1),t._v(" "),s("h2",{attrs:{id:"add-type-declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-type-declaration"}},[t._v("#")]),t._v(" Add type declaration")]),t._v(" "),s("p",[t._v("When you reference an SVG asset in TypeScript code, TypeScript may prompt that the module is missing a type definition:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TS2307: Cannot find module './logo.svg' or its corresponding type declarations.\n")])])]),s("p",[t._v("To fix this, you need to add a type declaration file for the SVG asset, please create a "),s("code",[t._v("src/global.d.ts")]),t._v(" file, and add the following type declaration:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.svg'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ReactComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunctionComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n    React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SVGProps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SVGSVGElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If you set "),s("code",[t._v("svgDefaultExport")]),t._v(" to "),s("code",[t._v("'component'")]),t._v(", then change the type declaration to:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.svg'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ReactComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunctionComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n    React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SVGProps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SVGSVGElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ReactComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where "),s("code",[t._v("global.d.ts")]),t._v(" is located, making sure the TypeScript can correctly identify the type definition.")])])}),[],!1,null,null,null);s.default=n.exports}}]);