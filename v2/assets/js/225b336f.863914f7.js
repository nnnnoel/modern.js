"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8280],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(18249),a=(n(52983),n(44993));const r={sidebar_position:4,title:"\u884d\u751f\u72b6\u6001"},i=void 0,l={unversionedId:"guides/topic-detail/model/computed-state",id:"guides/topic-detail/model/computed-state",title:"\u884d\u751f\u72b6\u6001",description:"\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u7ec4\u4ef6\u9700\u8981\u5bf9 Model \u4e2d\u7684 State \u8fdb\u884c\u8fdb\u4e00\u6b65\u8ba1\u7b97\uff0c\u624d\u80fd\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u8fd9\u90e8\u5206\u903b\u8f91\u53ef\u4ee5\u76f4\u63a5\u5199\u5728\u7ec4\u4ef6\u5185\u90e8\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 Model \u7684\u884d\u751f\u72b6\u6001\u5b9e\u73b0\u3002",source:"@site/docs/guides/topic-detail/model/computed-state.md",sourceDirName:"guides/topic-detail/model",slug:"/guides/topic-detail/model/computed-state",permalink:"/v2/docs/guides/topic-detail/model/computed-state",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u884d\u751f\u72b6\u6001"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 Model",permalink:"/v2/docs/guides/topic-detail/model/use-model"},next:{title:"\u526f\u4f5c\u7528\u7ba1\u7406",permalink:"/v2/docs/guides/topic-detail/model/manage-effects"}},d={},s=[{value:"\u53ea\u4f9d\u8d56\u81ea\u8eab\u7684 State",id:"\u53ea\u4f9d\u8d56\u81ea\u8eab\u7684-state",level:2},{value:"\u4f9d\u8d56\u5176\u4ed6 Model \u7684 State",id:"\u4f9d\u8d56\u5176\u4ed6-model-\u7684-state",level:2},{value:"\u51fd\u6570\u7c7b\u578b\u7684\u884d\u751f\u72b6\u6001",id:"\u51fd\u6570\u7c7b\u578b\u7684\u884d\u751f\u72b6\u6001",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u7ec4\u4ef6\u9700\u8981\u5bf9 Model \u4e2d\u7684 State \u8fdb\u884c\u8fdb\u4e00\u6b65\u8ba1\u7b97\uff0c\u624d\u80fd\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u8fd9\u90e8\u5206\u903b\u8f91\u53ef\u4ee5\u76f4\u63a5\u5199\u5728\u7ec4\u4ef6\u5185\u90e8\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 Model \u7684\u884d\u751f\u72b6\u6001\u5b9e\u73b0\u3002\n\u884d\u751f\u72b6\u6001\u5b9a\u4e49\u5728 Model \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"computed")," \u5b57\u6bb5\u4e0b\u3002\u6839\u636e\u4f9d\u8d56\u7684 Model \u7684\u4e0d\u540c\u3001\u8fd4\u56de\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u884d\u751f\u72b6\u6001\u7684\u5b9a\u4e49\u65b9\u6cd5\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b 3 \u79cd\u3002"),(0,a.kt)("h2",{id:"\u53ea\u4f9d\u8d56\u81ea\u8eab\u7684-state"},"\u53ea\u4f9d\u8d56\u81ea\u8eab\u7684 State"),(0,a.kt)("p",null,"\u884d\u751f\u72b6\u6001\u53ea\u4f9d\u8d56\u5f53\u524d Model \u7684 State\uff0cState \u4f1a\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u4f20\u5165\u884d\u751f\u72b6\u6001\u7684\u5b9a\u4e49\u51fd\u6570\u4e2d\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c todo \u5e94\u7528\u7684 State \u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," \u7528\u4e8e\u8fc7\u6ee4\u5f53\u524d\u9875\u9762\u663e\u793a\u7684 todo \u9879\uff0c\u6240\u4ee5\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"visibleTodos")," \u7684\u884d\u751f\u72b6\u6001\u53ef\u4ee5\u76f4\u63a5\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n *  \u5047\u8bbe todo item \u7ed3\u6784\u5982\u4e0b\uff1a\n{\n    id: string;          // id\n    text: string;        // todo \u4e8b\u9879\n    completed: boolean;  // \u5b8c\u6210\u72b6\u6001\uff1a0 \u4ee3\u8868\u672a\u5b8c\u6210\uff0c1 \u4ee3\u8868\u5b8c\u6210\n}\n**/\n\nconst todoModel = model('todo').define({\n  state: {\n    items: [],\n    filter: 'ALL', // ALL: \u663e\u793a\u5168\u90e8\uff1bCOMPLETED\uff1a\u663e\u793a\u5b8c\u6210\u7684\u4e8b\u9879\uff1bACTIVE\uff1a\u663e\u793a\u672a\u5b8c\u6210\u7684\u4e8b\u9879\n  },\n  computed: {\n    visibleTodos: state => {\n      switch (state.filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n")),(0,a.kt)("p",null,"\u884d\u751f\u72b6\u6001\u6700\u7ec8\u4f1a\u548c Model \u7684 State \u8fdb\u884c\u5408\u5e76\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7 Model \u7684 State \u5bf9\u8c61\u8bbf\u95ee\u5230\u884d\u751f\u72b6\u6001\uff0c\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"visibleTodos")," \u5728\u7ec4\u4ef6\u5185\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  return (\n    <div>\n      <div>\n        {state.visibleTodos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u4f9d\u8d56\u5176\u4ed6-model-\u7684-state"},"\u4f9d\u8d56\u5176\u4ed6 Model \u7684 State"),(0,a.kt)("p",null,"\u9664\u4e86\u4f9d\u8d56\u5f53\u524d Model \u7684 State\uff0c\u884d\u751f\u72b6\u6001\u8fd8\u4f9d\u8d56\u5176\u4ed6 Model \u7684 State\uff0c\u8fd9\u65f6\u5019\u884d\u751f\u72b6\u6001\u7684\u5b9a\u4e49\u683c\u5f0f\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"[stateKey]: [...depModels, (selfState, ...depModels) => computedState]\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\uff0c\u6f14\u793a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"barModel")," \u7684\u884d\u751f\u72b6\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"combinedValue")," \u662f\u5982\u4f55\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"fooModel")," \u7684 State \u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'foo',\n  },\n  computed: {\n    combinedValue: [\n      fooModel,\n      (state, fooState) => state.value + fooState.value,\n    ],\n  },\n});\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u7c7b\u578b\u7684\u884d\u751f\u72b6\u6001"},"\u51fd\u6570\u7c7b\u578b\u7684\u884d\u751f\u72b6\u6001"),(0,a.kt)("p",null,"\u884d\u751f\u72b6\u6001\u8fd8\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u3002\u8fd9\u65f6\u5019\u884d\u751f\u72b6\u6001\u7684\u5b9a\u4e49\u683c\u5f0f\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"[stateKey]: (state) => (...args) => computedState    // \u53ea\u4f9d\u8d56\u81ea\u8eab\u7684 state\n[stateKey]: [...depModels, (selfState, ...depModels) => (...args) => computedState]  // \u4f9d\u8d56\u5176\u4ed6 Model \u7684 state\n")),(0,a.kt)("p",null,"\u5047\u8bbe\uff0ctodo \u5e94\u7528\u7684 state \u4e0d\u5b58\u50a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," \u72b6\u6001\uff0c\u800c\u662f\u76f4\u63a5\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"visibleTodos")," \u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u7684\u503c\uff0c\u8fd9\u4e2a\u51fd\u6570\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u63a5\u6536 ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," \u53c2\u6570\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const todoModel = model('todo').define({\n  state: {\n    items: [],\n  },\n  computed: {\n    visibleTodos: state => filter => {\n      switch (filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n\nfunction Todo(props) {\n  // filter \u72b6\u6001\u901a\u8fc7 props \u4f20\u5165\n  const { filter } = props;\n  const [state, actions] = useModel(todoModel);\n\n  // \u8ba1\u7b97\u5f97\u5230\u6700\u7ec8\u8981\u663e\u793a\u7684 todos\n  const todos = state.visibleTodos(filter);\n\n  return (\n    <div>\n      <div>\n        {todos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n")),(0,a.kt)("admonition",{title:"\u66f4\u591a\u53c2\u8003",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/computed-state"},"\u4f7f\u7528 Model"))))}c.isMDXComponent=!0}}]);