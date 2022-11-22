"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4509],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99936:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(52983),r=n(14517);const l="tabItem_cygK";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},91657:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(18249),r=n(52983),l=n(14517),o=n(2137),s=n(91740),i=n(59040),p=n(747);const c="tabList_N6AO",u="tabItem_Wt3n";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:b,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[O,S]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&h.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==O&&(j(t),S(a),null!=b&&w(b,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:T},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},83951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),l=n(91657),o=n(99936);const s={title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},i=void 0,p={unversionedId:"tutorials/first-app/c05-component/5.2-use-standalone-component",id:"tutorials/first-app/c05-component/5.2-use-standalone-component",title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c05-component/5.2-use-standalone-component.md",sourceDirName:"tutorials/first-app/c05-component",slug:"/tutorials/first-app/c05-component/5.2-use-standalone-component",permalink:"/v2/en/docs/tutorials/first-app/c05-component/5.2-use-standalone-component",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93",permalink:"/v2/en/docs/tutorials/first-app/c05-component/5.1-use-ui-library"},next:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.1-css-in-js"}},c={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6\u6765\u5b9e\u73b0\u8054\u7cfb\u4eba\u7684\u64cd\u4f5c\u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u4ee5\u6309\u94ae\u5e93 ",(0,r.kt)("a",{parentName:"p",href:"https://lab.hakim.se/ladda/"},"Ladda")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-ladda"},"React \u5b9e\u73b0")," \u4e3a\u4f8b\uff0c\u5148\u6dfb\u52a0\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-ladda ladda\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u5bfc\u5165\u7ec4\u4ef6\uff0c\u540c\u65f6\u624b\u52a8\u5bfc\u5165\u9700\u8981\u7684 CSS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import LaddaButton, { S, SLIDE_UP } from 'react-ladda';\nimport 'ladda/dist/ladda.min.css';\n")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"List.Item")," \u7ec4\u4ef6\u7684\u8c03\u7528\u4ee3\u7801\uff0c\u6dfb\u52a0 actions\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<List.Item\n  key={name}\n  actions={[\n    <LaddaButton\n      key={email}\n      loading={false}\n      data-size={S}\n      data-style={SLIDE_UP}\n      data-spinner-size={20}\n      data-spinner-color="#ddd"\n      data-spinner-lines={8}>\n      Call\n    </LaddaButton>\n  ]}>\n  <List.Item.Meta\n    avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n    title={name}\n    description={email}\n  />\n</List.Item>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-ladda")," \u7ec4\u4ef6\u5e93\u6ca1\u6709\u63d0\u4f9b types \u6587\u4ef6\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," \u6587\u4ef6\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/modern-app-env.d.ts\n"))),(0,r.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ni src/modern-app-env.d.ts\n")))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern-app-env.d.ts")," \u4e2d\u6dfb\u52a0\u6a21\u5757\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'react-ladda' {\n  const LaddaButton: any;\n  export default LaddaButton;\n  export const S: any;\n  export const SLIDE_UP: any;\n}\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/05/result1.png",alt:"result1"})),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"CSS \u6587\u4ef6\u4f1a\u81ea\u52a8\u7ecf\u8fc7 Modern.js \u5185\u7f6e\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/css/postcss"},"PostCSS")," \u7684\u5904\u7406\uff0c\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u6570\u9879\u76ee\u7684\u6837\u5f0f\u5f00\u53d1\u9700\u6c42\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Modern.js \u4e5f\u652f\u6301\u5bfc\u5165 SCSS\u3001Less \u6587\u4ef6\u3002\u6b64\u5916\uff0c\u6709\u7684\u7ec4\u4ef6\u4f7f\u7528 CSS in JS\uff0c\u4e0d\u9700\u8981\u989d\u5916\u5bfc\u5165\u6837\u5f0f\u6587\u4ef6\uff0c\u4e0b\u4e00\u8282\u4f1a\u6709\u76f8\u5173\u4ecb\u7ecd\u3002")),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c05/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);