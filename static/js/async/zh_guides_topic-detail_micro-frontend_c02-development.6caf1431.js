"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[51735],{

/***/ 71339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports frontmatter, toc, content */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"```bash\\n? 请选择你想创建的工程类型 应用\\n? 请选择开发语言 TS\\n? 请选择包管理工具 pnpm\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
    className: "language-bash",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      className: ""
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-code-content",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
        className: "copy"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "var(--shiki-color-background)"
        },
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "?"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " 请选择你想创建的工程类型 应用"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "?"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " 请选择开发语言 TS"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "?"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " 请选择包管理工具 pnpm"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 63637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports frontmatter, toc, content */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"```js title=\\\"modern.config.ts\\\"\\nimport appTools, { defineConfig } from '@modern-js/app-tools';\\nimport garfishPlugin from '@modern-js/plugin-garfish';\\n\\nexport default defineConfig({\\n  runtime: {\\n    router: true,\\n    masterApp: {\\n      apps: [{\\n        name: 'SubConvention',\\n        entry: 'http://localhost:3002',\\n        // activeWhen: '/SubConvention'\\n      }, {\\n        name: 'SubCustom',\\n        entry: 'http://localhost:3003'\\n        // activeWhen: '/SubConvention'\\n      }]\\n    },\\n  },\\n  plugins: [appTools(), garfishPlugin()],\\n});\\n\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
    className: "language-js",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      className: "modern-code-title",
      children: "modern.config.ts"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-code-content",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
        className: "copy"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "var(--shiki-color-background)"
        },
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " appTools"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { defineConfig } "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/app-tools'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " garfishPlugin "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/plugin-garfish'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "export"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "default"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "defineConfig"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "({"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  runtime"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    router"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "true"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    masterApp"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      apps"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " [{"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        name"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'SubConvention'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        entry"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'http://localhost:3002'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// activeWhen: '/SubConvention'"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      }"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        name"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'SubCustom'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        entry"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'http://localhost:3003'"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// activeWhen: '/SubConvention'"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      }]"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    }"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  }"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  plugins"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " ["
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "appTools"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "()"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "garfishPlugin"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "()]"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "});"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 19597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ c02_development_content),
  "default": () => (/* binding */ c02_development),
  "frontmatter": () => (/* binding */ c02_development_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ c02_development_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
// EXTERNAL MODULE: ../../packages/toolkit/main-doc/zh/components/default-mwa-generate.mdx
var default_mwa_generate = __webpack_require__(71339);
// EXTERNAL MODULE: ../../packages/toolkit/main-doc/zh/components/enable-micro-frontend.mdx
var enable_micro_frontend = __webpack_require__(63637);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/custom-router-micro-frontend.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"```js title=\\\"App.tsx\\\"\\nimport { useModuleApps } from '@modern-js/plugin-garfish/runtime';\\n\\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\\n\\nconst AppLayout = () => (\\n  <>\\n    <div><Link to={'/SubConvention'}>加载约定式路由子应用</Link></div>\\n    <div><Link to={'/SubCustom'}>加载自控式路由子应用</Link></div>\\n    <div><Link to={'/'}>卸载子应用</Link></div>\\n    <Outlet />\\n  </>\\n)\\n\\nexport default () => {\\n  const { apps, MApp } = useModuleApps();\\n\\n  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由\\n  const router = createBrowserRouter(\\n    createRoutesFromElements(\\n      <Route path=\\\"/\\\" element={<AppLayout />}>\\n        {apps.map(app => {\\n          const { Component } = app;\\n          // 模糊匹配，path 需要写成类似 abc/* 的模式\\n          return (\\n            <Route key={app.name} path={`${app.name}/*`} element={<Component />} />\\n          )\\n        })}\\n      </Route>\\n    )\\n  );\\n\\n  return (\\n    // 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用(本项目配置在 modern.config.ts 中)\\n    // <BrowserRouter>\\n    //   <MApp />\\n    // </BrowserRouter>\\n\\n    // 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景\\n    <>\\n      <RouterProvider router={router} />\\n    </>\\n  );\\n};\\n```\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(_components.div, {
    className: "language-js",
    children: [(0,jsx_runtime.jsx)(_components.div, {
      className: "modern-code-title",
      children: "App.tsx"
    }), (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-code-content",
      children: [(0,jsx_runtime.jsx)(_components.button, {
        className: "copy"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "var(--shiki-color-background)"
        },
        children: (0,jsx_runtime.jsxs)(_components.code, {
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { useModuleApps } "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/plugin-garfish/runtime'"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { RouterProvider"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " Route"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " createBrowserRouter"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " createRoutesFromElements"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " BrowserRouter"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " Outlet } "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/runtime/router'"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "AppLayout"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " () "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "=>"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " ("
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  <>"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "><"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "to"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'/SubConvention'"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "}>加载约定式路由子应用</"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "></"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "><"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "to"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'/SubCustom'"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "}>加载自控式路由子应用</"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "></"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "><"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "to"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'/'"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "}>卸载子应用</"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Link"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "></"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Outlet"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " />"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  </>"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ")"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "export"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "default"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " () "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "=>"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "apps"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "MApp"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " } "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "useModuleApps"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "();"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "router"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "createBrowserRouter"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "("
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "createRoutesFromElements"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "("
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Route"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "path"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "\"/\""
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "element"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{<"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "AppLayout"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " />}>"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        {"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "apps"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: ".map"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "(app "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "=>"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "          "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Component"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " } "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " app;"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "          "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// 模糊匹配，path 需要写成类似 abc/* 的模式"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "          "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "return"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " ("
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "            <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Route"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "key"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "app"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ".name} "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "path"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "`"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "${"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "app"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ".name"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "}"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "/*`"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "} "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "element"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{<"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Component"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " />} />"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "          )"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        })}"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      </"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Route"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    )"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  );"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "return"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " ("
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用(本项目配置在 modern.config.ts 中)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// <BrowserRouter>"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "//   <MApp />"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// </BrowserRouter>"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-comment)"
              },
              children: "// 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <>"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "line",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      <"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "RouterProvider"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "router"
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{router} />"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    </>"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  );"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line",
            children: (0,jsx_runtime.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "};"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const custom_router_micro_frontend = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c02-development.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const c02_development_frontmatter = {
  "sidebar_position": 2,
  "title": "体验微前端"
};



const c02_development_toc = [{
  "id": "创建应用",
  "text": "创建应用",
  "depth": 2
}, {
  "id": "创建约定式路由主应用",
  "text": "创建约定式路由主应用",
  "depth": 3
}, {
  "id": "加载约定式路由子应用",
  "text": "加载约定式路由子应用",
  "depth": 4
}, {
  "id": "加载自控式路由子应用",
  "text": "加载自控式路由子应用",
  "depth": 4
}, {
  "id": "路由跳转",
  "text": "路由跳转",
  "depth": 4
}, {
  "id": "创建自控式路由主应用",
  "text": "创建自控式路由主应用",
  "depth": 3
}, {
  "id": "加载子应用",
  "text": "加载子应用",
  "depth": 4
}, {
  "id": "创建约定式路由子应用",
  "text": "创建约定式路由子应用",
  "depth": 3
}, {
  "id": "创建自控式路由子应用",
  "text": "创建自控式路由子应用",
  "depth": 3
}, {
  "id": "调试",
  "text": "调试",
  "depth": 2
}, {
  "id": "常见问题",
  "text": "常见问题",
  "depth": 2
}];
const title = `体验微前端`;
const c02_development_content = "\"---\\nsidebar_position: 2\\ntitle: 体验微前端\\n---\\n# 体验微前端\\n\\n通过本章你可以了解到：\\n\\n- 如何创建微前端项目的主应用、子应用。\\n- 微前端项目开发的基本流程。\\n\\n## 创建应用\\n目前支持两种路由模式\\n- 自控式路由\\n- 约定式路由\\n\\n所以在这次的实践中，我们需要创建四个应用，分别为 2 个主应用，2 个子应用(业务中根据需要创建)：\\n\\n- MainConvention 主应用(约定式路由)\\n- MainCustom 主应用(自控式路由)\\n- SubConvention 子应用(约定式路由)\\n- SubCustom 子应用(自控式路由)\\n\\n### 创建约定式路由主应用\\n\\n通过命令行工具初始化项目：\\n\\n```bash\\nmkdir mainConvention && cd mainConvention\\nnpx @modern-js/create\\n```\\n\\nimport DefaultMWAGenerate from \\\"@site-docs/components/default-mwa-generate\\\";\\n\\n<DefaultMWAGenerate />\\n\\n完成项目创建后我们可以通过 `pnpm run new` 来开启 `微前端` 功能：\\n\\n```bash\\n? 请选择你想要的操作 启用可选功能\\n? 启用可选功能 启用「微前端」模式\\n```\\n\\n接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表：\\n\\nimport EnableMicroFrontend from \\\"@site-docs/components/enable-micro-frontend\\\";\\n\\n<EnableMicroFrontend />\\n\\n然后我们在 routes 文件夹下新建两个目录\\n- SubConvention (用于加载约定式路由子应用)\\n- SubCustom (用于加载自控式路由子应用)\\n\\n在这两个目录下我们需要新建一个 `$.tsx` 文件作为主应用约定式路由的入口($ 代表模糊匹配，即 `/SubConvention` 和 `/SubConvention/test` 都会匹配到这个 `$.tsx` 作为该路由的入口文件，这会保证在微前端场景下正确加载子应用路由)\\n\\n#### 加载约定式路由子应用\\n```js title=\\\"src/routes/SubConvention/$.tsx\\\"\\nimport { useModuleApps } from '@modern-js/plugin-garfish/runtime';\\n\\nconst Index = () => {\\n  const { SubConvention } = useModuleApps();\\n\\n  return (\\n    <div>\\n      <SubConvention />\\n    </div>\\n  )\\n}\\n\\nexport default Index;\\n```\\n\\n#### 加载自控式路由子应用\\n```js title=\\\"src/routes/SubCustom/$.tsx\\\"\\nimport { useModuleApps } from '@modern-js/plugin-garfish/runtime';\\n\\nconst Index = () => {\\n  const { SubCustom } = useModuleApps();\\n\\n  return (\\n    <div>\\n      <SubCustom />\\n    </div>\\n  )\\n}\\n\\nexport default Index;\\n```\\n#### 路由跳转\\n此时主应用配置已经完成，通过路由即可加载子应用，修改主应用的 `layout.tsx` 来跳转路由\\n```js title=\\\"src/route/layout.tsx\\\"\\nimport { Outlet, Link } from '@modern-js/runtime/router';\\n\\nconst Layout = () => (\\n  <div>\\n    <div><Link to={'/SubConvention'}>加载约定式路由子应用</Link></div>\\n    <div><Link to={'/SubCustom'}>加载自控式路由子应用</Link></div>\\n    <div><Link to={'/'}>卸载子应用</Link></div>\\n    <Outlet />\\n  </div>\\n);\\n\\nexport default Layout;\\n```\\n\\n### 创建自控式路由主应用\\n\\n通过命令行工具初始化项目：\\n\\n```bash\\nmkdir mainCustom && cd mainCustom\\nnpx @modern-js/create\\n```\\n\\n<DefaultMWAGenerate />\\n\\n完成项目创建后我们可以通过 `pnpm run new` 来开启 `微前端` 功能：\\n\\n```bash\\n? 请选择你想要的操作 启用可选功能\\n? 启用可选功能 启用「微前端」模式\\n```\\n\\n接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表：\\n\\n<EnableMicroFrontend />\\n\\n由于是自控式路由，我们删除掉 `routes` 文件夹并在 `src` 目录下增加 `App.tsx` 文件，此处如果使用的 `非 MApp` 组件，需要通过 `React Router v6` 的 `createBrowserRouter` API 来创建路由\\n#### 加载子应用\\nimport CustomRouterMicroFrontend from \\\"@site-docs/components/custom-router-micro-frontend\\\";\\n\\n<CustomRouterMicroFrontend />\\n\\n### 创建约定式路由子应用\\n\\n通过命令行工具初始化项目：\\n\\n```bash\\nmkdir subConvention && cd subConvention\\nnpx @modern-js/create\\n```\\n\\n按照如下选择，生成项目：\\n\\n<DefaultMWAGenerate/>\\n\\n我们执行 `pnpm run new` 来开启 `微前端` 功能：\\n\\n```bash\\n? 请选择你想要的操作 启用可选功能\\n? 启用可选功能 启用「微前端」模式\\n```\\n\\n接下来，让我们注册微前端插件并修改 `modern.config.ts`，添加微前端子应用的配置 `deploy.microFrontend`：\\n\\n```js title=\\\"modern.config.ts\\\"\\nimport appTools, { defineConfig } from '@modern-js/app-tools';\\nimport garfishPlugin from '@modern-js/plugin-garfish';\\n\\nexport default defineConfig({\\n  dev: {\\n    port: 3002\\n  },\\n  runtime: {\\n    router: true,\\n    state: true,\\n  },\\n  deploy: {\\n    microFrontend: true,\\n  },\\n  plugins: [appTools(), garfishPlugin()],\\n});\\n```\\n\\n添加 `src/routes/page.tsx` 代码\\n```js title=\\\"src/routes/page.tsx\\\"\\nconst Index = () => {\\n  return (\\n    <div className=\\\"container-box\\\">subApp: 约定式路由的子应用的根路由</div>\\n  )\\n}\\n\\nexport default Index;\\n```\\n\\n### 创建自控式路由子应用\\n\\n通过命令行工具初始化项目：\\n\\n```bash\\nmkdir subCustom && cd subCustom\\nnpx @modern-js/create\\n```\\n\\n按照如下选择，生成项目：\\n\\n<DefaultMWAGenerate/>\\n\\n我们执行 `pnpm run new` 来开启 `微前端`：\\n\\n```bash\\n? 请选择你想要的操作 启用可选功能\\n? 启用可选功能 启用「微前端」模式\\n```\\n\\n接下来，让我们注册微前端插件并修改 `modern.config.ts`，添加微前端子应用的配置 `deploy.microFrontend`：\\n\\n```js title=\\\"modern.config.ts\\\"\\nimport appTools, { defineConfig } from '@modern-js/app-tools';\\nimport garfishPlugin from '@modern-js/plugin-garfish';\\n\\nexport default defineConfig({\\n  dev: {\\n    port: 3003\\n  },\\n  runtime: {\\n    router: true,\\n    state: true,\\n  },\\n  deploy: {\\n    microFrontend: true,\\n  },\\n  plugins: [appTools(), garfishPlugin()],\\n});\\n```\\n\\n自控式路由子应用需要手动在 `src/App.tsx` 添加代码，注意需要从 `props` 中解析并传递 `basename` 给 `BrowserRouter`\\n\\n```js title=\\\"App.tsx\\\"\\nimport { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\\n\\nexport default (props: {basename: string}) => {\\n  const { basename } = props;\\n\\n  return (\\n    <BrowserRouter basename={basename}>\\n      <Routes>\\n        <Route index element={<div>自控式路由子应用根路由</div>} />\\n        <Route path={'path'} element={<div>自控式路由子应用子路由</div>} />\\n      </Routes>\\n    </BrowserRouter>\\n  );\\n};\\n```\\n\\n## 调试\\n按顺序在目录执行 `pnpm run dev` 命令启动应用：\\n- mainConvention 主应用(约定式路由) `http://localhost:8080`\\n- mainCustom 主应用(自控式路由) `http://localhost:8081`\\n- subConvention 子应用(约定式路由) `http://localhost:3002`\\n- subCustom 子应用(自控式路由) `http://localhost:3003`\\n\\n访问主应用地址 `http://localhost:8080` 或 `http://localhost:8081`\\n\\n在完成了微前端整体开发流程的体验后，你可以进一步了解如何 [开发主应用](/guides/topic-detail/micro-frontend/c03-main-app)\\n\\n## 常见问题\\n\\n自查手册: https://www.garfishjs.org/issues/\\n\"";
function c02_development_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    ul: "ul",
    li: "li",
    h2: "h2",
    h3: "h3",
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span",
    h4: "h4"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "体验微前端",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#体验微前端",
        children: "#"
      }), "体验微前端"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过本章你可以了解到："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如何创建微前端项目的主应用、子应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "微前端项目开发的基本流程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "创建应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建应用",
        children: "#"
      }), "创建应用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持两种路由模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自控式路由"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "约定式路由"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所以在这次的实践中，我们需要创建四个应用，分别为 2 个主应用，2 个子应用(业务中根据需要创建)："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MainConvention 主应用(约定式路由)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MainCustom 主应用(自控式路由)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SubConvention 子应用(约定式路由)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SubCustom 子应用(自控式路由)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "创建约定式路由主应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建约定式路由主应用",
        children: "#"
      }), "创建约定式路由主应用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行工具初始化项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "mkdir mainConvention "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "&&"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "cd"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " mainConvention"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(default_mwa_generate/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成项目创建后我们可以通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run new"
      }), " 来开启 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "微前端"
      }), " 功能："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 请选择你想要的操作 启用可选功能"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 启用可选功能 启用「微前端」模式"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表："
    }), "\n", "\n", (0,jsx_runtime.jsx)(enable_micro_frontend/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后我们在 routes 文件夹下新建两个目录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SubConvention (用于加载约定式路由子应用)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SubCustom (用于加载自控式路由子应用)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在这两个目录下我们需要新建一个 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$.tsx"
      }), " 文件作为主应用约定式路由的入口($ 代表模糊匹配，即 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/SubConvention"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/SubConvention/test"
      }), " 都会匹配到这个 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$.tsx"
      }), " 作为该路由的入口文件，这会保证在微前端场景下正确加载子应用路由)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "加载约定式路由子应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#加载约定式路由子应用",
        children: "#"
      }), "加载约定式路由子应用"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "src/routes/SubConvention/$.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { useModuleApps } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/plugin-garfish/runtime'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Index"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "SubConvention"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useModuleApps"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "();"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "SubConvention"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " />"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    </"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  )"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Index;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "加载自控式路由子应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#加载自控式路由子应用",
        children: "#"
      }), "加载自控式路由子应用"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "src/routes/SubCustom/$.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { useModuleApps } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/plugin-garfish/runtime'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Index"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "SubCustom"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useModuleApps"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "();"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "SubCustom"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " />"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    </"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  )"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Index;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "路由跳转",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#路由跳转",
        children: "#"
      }), "路由跳转"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此时主应用配置已经完成，通过路由即可加载子应用，修改主应用的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "layout.tsx"
      }), " 来跳转路由"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "src/route/layout.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { Outlet"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Link } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/runtime/router'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Layout"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "><"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "to"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'/SubConvention'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}>加载约定式路由子应用</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "></"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "><"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "to"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'/SubCustom'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}>加载自控式路由子应用</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "></"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "><"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "to"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'/'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}>卸载子应用</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Link"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "></"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Outlet"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " />"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  </"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ");"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Layout;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "创建自控式路由主应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建自控式路由主应用",
        children: "#"
      }), "创建自控式路由主应用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行工具初始化项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "mkdir mainCustom "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "&&"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "cd"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " mainCustom"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(default_mwa_generate/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成项目创建后我们可以通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run new"
      }), " 来开启 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "微前端"
      }), " 功能："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 请选择你想要的操作 启用可选功能"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 启用可选功能 启用「微前端」模式"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来，让我们注册微前端插件并添加开启微前端主应用，并增加子应用列表："
    }), "\n", (0,jsx_runtime.jsx)(enable_micro_frontend/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于是自控式路由，我们删除掉 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes"
      }), " 文件夹并在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src"
      }), " 目录下增加 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App.tsx"
      }), " 文件，此处如果使用的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "非 MApp"
      }), " 组件，需要通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React Router v6"
      }), " 的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "createBrowserRouter"
      }), " API 来创建路由"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "加载子应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#加载子应用",
        children: "#"
      }), "加载子应用"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(custom_router_micro_frontend, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "创建约定式路由子应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建约定式路由子应用",
        children: "#"
      }), "创建约定式路由子应用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行工具初始化项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "mkdir subConvention "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "&&"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "cd"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " subConvention"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照如下选择，生成项目："
    }), "\n", (0,jsx_runtime.jsx)(default_mwa_generate/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run new"
      }), " 来开启 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "微前端"
      }), " 功能："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 请选择你想要的操作 启用可选功能"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 启用可选功能 启用「微前端」模式"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接下来，让我们注册微前端插件并修改 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "modern.config.ts"
      }), "，添加微前端子应用的配置 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deploy.microFrontend"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "modern.config.ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { defineConfig } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/app-tools'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " garfishPlugin "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/plugin-garfish'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "defineConfig"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "({"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dev"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    port"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "3002"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  runtime"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    router"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    state"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  deploy"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    microFrontend"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  plugins"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ["
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "garfishPlugin"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()]"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "});"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/routes/page.tsx"
      }), " 代码"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "src/routes/page.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Index"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "className"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "\"container-box\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">subApp: 约定式路由的子应用的根路由</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  )"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Index;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "创建自控式路由子应用",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建自控式路由子应用",
        children: "#"
      }), "创建自控式路由子应用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行工具初始化项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "mkdir subCustom "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "&&"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "cd"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " subCustom"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照如下选择，生成项目："
    }), "\n", (0,jsx_runtime.jsx)(default_mwa_generate/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["我们执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run new"
      }), " 来开启 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "微前端"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 请选择你想要的操作 启用可选功能"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 启用可选功能 启用「微前端」模式"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接下来，让我们注册微前端插件并修改 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "modern.config.ts"
      }), "，添加微前端子应用的配置 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deploy.microFrontend"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "modern.config.ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { defineConfig } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/app-tools'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " garfishPlugin "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/plugin-garfish'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "defineConfig"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "({"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dev"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    port"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "3003"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  runtime"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    router"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    state"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  deploy"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    microFrontend"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  plugins"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ["
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "garfishPlugin"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()]"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "});"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自控式路由子应用需要手动在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/App.tsx"
      }), " 添加代码，注意需要从 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "props"
      }), " 中解析并传递 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "basename"
      }), " 给 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BrowserRouter"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "App.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { BrowserRouter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Route"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Routes } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/runtime/router'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " (props"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {basename"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}) "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "basename"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " props;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "BrowserRouter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "basename"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{basename}>"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Routes"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "        <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Route"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "index"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "element"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">自控式路由子应用根路由</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">} />"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "        <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Route"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'path'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "} "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "element"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "{<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">自控式路由子应用子路由</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">} />"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      </"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "Routes"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    </"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "BrowserRouter"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  );"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "调试",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#调试",
        children: "#"
      }), "调试"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按顺序在目录执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), " 命令启动应用："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["mainConvention 主应用(约定式路由) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:8080"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["mainCustom 主应用(自控式路由) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:8081"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["subConvention 子应用(约定式路由) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3002"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["subCustom 子应用(自控式路由) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3003"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问主应用地址 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080"
      }), " 或 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8081"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在完成了微前端整体开发流程的体验后，你可以进一步了解如何 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/guides/topic-detail/micro-frontend/c03-main-app.html",
        children: "开发主应用"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "常见问题",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#常见问题",
        children: "#"
      }), "常见问题"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自查手册: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.garfishjs.org/issues/",
        target: "_blank",
        rel: "nofollow",
        children: "https://www.garfishjs.org/issues/"
      })]
    })]
  });
}
function c02_development_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(c02_development_createMdxContent, props)
  })) : c02_development_createMdxContent(props);
}
/* harmony default export */ const c02_development = (c02_development_MDXContent);


/***/ })

}]);