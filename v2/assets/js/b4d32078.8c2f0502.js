"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3108],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(52983);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=c(t),k=l,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=s;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(18249),l=(t(52983),t(44993));const o={title:"tools.webpack",sidebar_label:"webpack"},i=void 0,r={unversionedId:"configure/app/tools/webpack",id:"configure/app/tools/webpack",title:"tools.webpack",description:"- \u7c7b\u578b\uff1a Object | (config, utils) => void",source:"@site/docs/configure/app/tools/webpack.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/webpack",permalink:"/v2/docs/configure/app/tools/webpack",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.webpack",sidebar_label:"webpack"},sidebar:"configsAppSidebar",previous:{title:"webpackChain",permalink:"/v2/docs/configure/app/tools/webpack-chain"}},p={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",level:2},{value:"env",id:"env",level:3},{value:"name",id:"name",level:3},{value:"webpack",id:"webpack",level:3},{value:"HtmlWebpackPlugin",id:"htmlwebpackplugin",level:3},{value:"addRules",id:"addrules",level:3},{value:"prependPlugins",id:"prependplugins",level:3},{value:"appendPlugins",id:"appendplugins",level:3},{value:"removePlugin",id:"removeplugin",level:3},{value:"chain (\u5e9f\u5f03)",id:"chain-\u5e9f\u5f03",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\uff1f",id:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684-webpack-\u914d\u7f6e",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"Object | (config, utils) => void")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,"Modern.js \u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),"\uff0c\u5bf9\u6784\u5efa\u4ea7\u7269\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\u7b49\u64cd\u4f5c\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u5bf9\u5176\u8fdb\u884c\u914d\u7f6e\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/webpack-chain"},"tools.webpackChain")," \u540c\u6837\u53ef\u4ee5\u4fee\u6539 webpack \u914d\u7f6e\uff0c\u5e76\u4e14\u529f\u80fd\u66f4\u52a0\u5f3a\u5927\uff0c\u5efa\u8bae\u4f18\u5148\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpackChain"),"\u3002")),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,l.kt)("p",null,"\u914d\u7f6e\u9879\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0cModern.js \u4f1a\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge"},"webpack-merge")," \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u53c2\u6570\u503c\u548c\u6846\u67b6\u7684\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u914d\u7f6e\u5408\u5e76\uff0c\u5f97\u5230\u6700\u7ec8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    webpack: {\n      mode: 'development',\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,l.kt)("p",null,"\u914d\u7f6e\u9879\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u5185\u90e8\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\u4e0d\u505a\u8fd4\u56de\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4fee\u6539 webpack \u914d\u7f6e\u7684\u5de5\u5177\u96c6\u5408\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u7528\u51fd\u6570\u7684\u65b9\u5f0f\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    webpack: config => {\n      config.mode = 'development';\n    },\n  },\n});\n")),(0,l.kt)("h2",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," \u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5bf9\u8c61\u53ef\u7528\u7684\u5c5e\u6027\u5982\u4e0b\u3002"),(0,l.kt)("h3",{id:"env"},"env"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," \u53c2\u6570\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u73af\u5883\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"development")," \u8fd8\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        // \u9488\u5bf9 dev \u573a\u666f\u6dfb\u52a0\u914d\u7f6e\n      }\n\n      if (env === 'production') {\n        // \u9488\u5bf9 build \u573a\u666f\u6dfb\u52a0\u914d\u7f6e\n      }\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u53c2\u6570\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u6784\u5efa\u4ea7\u7269\u7684\u8fd0\u884c\u73af\u5883\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": \u9ed8\u8ba4\u503c\uff0c\u6784\u5efa\u4ea7\u7269\u4e3a\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server"),": \u5f00\u542f ",(0,l.kt)("a",{parentName:"li",href:"/docs/configure/app/server/ssr"},"server.ssr")," SSR \u540e\uff0c\u6784\u5efa\u4ea7\u7269\u4e3a\u9488\u5bf9 SSR \u573a\u666f\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modern"),": \u5f00\u542f ",(0,l.kt)("a",{parentName:"li",href:"/docs/configure/app/output/enable-modern-mode"},"output.enableModernMode")," \u540e\uff0c\u6784\u5efa\u4ea7\u7269\u4e3a\u8fd0\u884c\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0a\u7684\u4ee3\u7801\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { name }) => {\n      if (name === 'server') {\n        // \u9488\u5bf9 SSR \u573a\u666f\u6dfb\u52a0\u914d\u7f6e\n      }\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"webpack"},"webpack"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u53c2\u6570\u53ef\u4ee5\u83b7\u53d6 Modern.js \u5185\u90e8\u4f7f\u7528\u7684 webpack \u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { webpack }) => {\n      console.log(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n    },\n  },\n});\n")),(0,l.kt)("p",null,"\u5efa\u8bae\u4f18\u5148\u4f7f\u7528\u8be5\u53c2\u6570\u6765\u8bbf\u95ee webpack \u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u901a\u8fc7 import \u6765\u5f15\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u901a\u8fc7 import \u5f15\u5165\uff0c\u5219\u9879\u76ee\u91cc\u9700\u8981\u5355\u72ec\u5b89\u88c5 webpack \u4f9d\u8d56\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4 webpack \u88ab\u91cd\u590d\u5b89\u88c5\uff0c\u56e0\u6b64\u4e0d\u63a8\u8350\u8be5\u505a\u6cd5\u3002"),(0,l.kt)("h3",{id:"htmlwebpackplugin"},"HtmlWebpackPlugin"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," \u53c2\u6570\u53ef\u4ee5\u83b7\u53d6 Modern.js \u5185\u90e8\u4f7f\u7528\u7684 HtmlWebpackPlugin \u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"addrules"},"addRules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"(rules: RuleSetRule | RuleSetRule[]) => void"))),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 Modern.js \u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#rule-conditions"},"webpack rule"),"\u3002\u5f53\u6709\u989d\u5916\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u5de5\u5177\u51fd\u6570\u6dfb\u52a0\u5bf9\u5e94\u7684 rules\u3002"),(0,l.kt)("p",null,"\u4ee5\u5904\u7406 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/groupon/cson-parser"},"cson")," \u6587\u4ef6\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { addRules }) => {\n      // \u6dfb\u52a0\u5355\u6761\u89c4\u5219\n      addRules({\n        test: /\\.cson/,\n        loader: require.resolve('cson-loader'),\n      });\n\n      // \u4ee5\u6570\u7ec4\u5f62\u5f0f\u6dfb\u52a0\u591a\u6761\u89c4\u5219\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"prependplugins"},"prependPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"))),(0,l.kt)("p",null,"\u5728\u5185\u90e8 webpack \u63d2\u4ef6\u6570\u7ec4\u5934\u90e8\u6dfb\u52a0\u989d\u5916\u7684\u63d2\u4ef6\uff08\u6570\u7ec4\u5934\u90e8\u7684\u63d2\u4ef6\u4f1a\u4f18\u5148\u6267\u884c\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // \u6dfb\u52a0\u5355\u4e2a\u63d2\u4ef6\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // \u4ee5\u6570\u7ec4\u5f62\u5f0f\u6dfb\u52a0\u591a\u4e2a\u63d2\u4ef6\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"appendplugins"},"appendPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"))),(0,l.kt)("p",null,"\u5728\u5185\u90e8 webpack \u63d2\u4ef6\u6570\u7ec4\u5c3e\u90e8\u6dfb\u52a0\u989d\u5916\u7684\u63d2\u4ef6\uff08\u6570\u7ec4\u5c3e\u90e8\u7684\u63d2\u4ef6\u4f1a\u5728\u6700\u540e\u6267\u884c\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // \u6dfb\u52a0\u5355\u4e2a\u63d2\u4ef6\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // \u4ee5\u6570\u7ec4\u5f62\u5f0f\u6dfb\u52a0\u591a\u4e2a\u63d2\u4ef6\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"removeplugin"},"removePlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"(name: string) => void"))),(0,l.kt)("p",null,"\u5220\u9664\u5185\u90e8\u7684 webpack \u63d2\u4ef6\uff0c\u53c2\u6570\u4e3a\u8be5\u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"constructor.name"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5220\u9664\u5185\u90e8\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"chain-\u5e9f\u5f03"},"chain (\u5e9f\u5f03)"),(0,l.kt)("p",null,"\u6b64\u53c2\u6570\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/webpack-chain"},"tools.webpackChain"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"chain")," \u53c2\u6570\u65f6\uff0c\u4fee\u6539 config \u5bf9\u8c61\u6216\u8fd4\u56de config \u5bf9\u8c61\u90fd\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684-webpack-\u914d\u7f6e"},"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\uff1f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/inspect"},"modern inspect")," \u547d\u4ee4\u6765\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\uff0c\u4ece\u800c\u786e\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u7684\u6539\u52a8\u662f\u5426\u6b63\u786e\u5e94\u7528\u5230 webpack \u914d\u7f6e\u4e0a\u3002"))}d.isMDXComponent=!0}}]);