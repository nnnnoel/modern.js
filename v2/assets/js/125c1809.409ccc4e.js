"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[666],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(52983),a=n(14517);const o="tabItem_cygK";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},75890:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(18249),a=n(52983),o=n(14517),s=n(27250),l=n(62209),c=n(61748),i=n(34333);const p="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:x}=(0,c.U)(),[C,N]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=f){const e=h[f];null!=e&&e!==C&&k.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),r=k[n].value;r!==C&&(O(t),N(r),null!=f&&x(f,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:j,onClick:E},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},41512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(18249),a=(n(52983),n(44993)),o=n(75890),s=n(6015);const l={title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09"},c=void 0,i={unversionedId:"tutorials/first-app/c11-container/11.2-add-container",id:"tutorials/first-app/c11-container/11.2-add-container",title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09",description:"\u524d\u4e24\u4e2a\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u6210\u4e86\u4e24\u4e2a layer\uff0c\u4e00\u4e2a\u662f\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u53e6\u4e00\u4e2a\u662f \u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c11-container/11.2-add-container.md",sourceDirName:"tutorials/first-app/c11-container",slug:"/tutorials/first-app/c11-container/11.2-add-container",permalink:"/v2/docs/tutorials/first-app/c11-container/11.2-add-container",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model",permalink:"/v2/docs/tutorials/first-app/c11-container/11.1-use-model-with-app-state"},next:{title:"\u200b\u4f7f\u7528 Loader",permalink:"/v2/docs/tutorials/first-app/c11-container/11.3-use-loader"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u524d\u4e24\u4e2a\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u6210\u4e86\u4e24\u4e2a layer\uff0c\u4e00\u4e2a\u662f\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u53e6\u4e00\u4e2a\u662f \u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u3002"),(0,a.kt)("p",null,"\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011 \u8d1f\u8d23 UI \u5c55\u793a\u3001\u4ea4\u4e92\u7b49\uff1b\u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u8d1f\u8d23\u5b9e\u73b0 UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u4e13\u95e8\u7ba1\u7406\u72b6\u6001\uff0c\u65e2\u53ef\u4ee5\u662f\u7ec4\u4ef6\u72b6\u6001\uff08\u5c40\u90e8\uff0c\u4e0d\u552f\u4e00\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u5e94\u7528\u72b6\u6001\uff08\u5168\u5c40\uff0c\u552f\u4e00\uff09\u3002"),(0,a.kt)("p",null,"\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"components/Contacts/index.tsx")," \u8fd9\u6837\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModel")," API \u7684\u7ec4\u4ef6\uff0c\u5176\u5b9e\u5df2\u7ecf\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u5e94\u7528\u67b6\u6784"),"\u4e2d\u626e\u6f14\u4e00\u79cd\u65b0\u7684\u89d2\u8272\uff0c\u8d1f\u8d23\u628a View \u548c Model \u8fd9\u4e24\u4e2a layer \u8fde\u63a5\u8d77\u6765\uff0c\u7c7b\u4f3c\u4f20\u7edf MVC \u67b6\u6784\u4e2d Controller \u7684\u89d2\u8272\uff0c\u4e5f\u7c7b\u4f3c\u4e00\u79cd ViewController\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u8fd9\u79cd\u7ec4\u4ef6\u5c5e\u4e8e\u4e00\u79cd\u65b0\u7684\u529f\u80fd\u6a21\u5757\uff0c\u5728 Modern.js \u91cc\u6211\u4eec\u6cbf\u7528\u4e60\u60ef\uff0c\u628a\u5b83\u4eec\u79f0\u4f5c\u3010 \u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09\u3011\u3002"),(0,a.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u63a8\u8350\u653e\u5728\u4e13\u95e8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/")," \u76ee\u5f55\u91cc\uff0c\u6211\u4eec\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/contacts/routes/containers/\nmv src/contacts/routes/components/Contacts/index.tsx src/contacts/routes/containers/Contacts.tsx\nrm -r src/contacts/routes/components/Contacts/\n"))),(0,a.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/contacts/containers/\nmv src/contacts/components/Contacts/index.tsx src/contacts/containers/Contacts.tsx\nrm -r src/contacts/components/Contacts/\n")))),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/Contacts.tsx")," \u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Item from '../components/Item';\nimport contacts from '../models/contacts';\n")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"page.tsx")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"archives/page.tsx")," \u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Contacts from './containers/Contacts';\n")),(0,a.kt)("p",null,"\u91cd\u6784\u5b8c\u6210\uff0c\u73b0\u5728\u7684\u9879\u76ee\u7ed3\u6784\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .eslintrc.js\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .husky\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 .prettierrc\n\u251c\u2500\u2500 .vscode\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 api\n\u2502   \u2514\u2500\u2500 contacts.ts\n\u251c\u2500\u2500 modern.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 .eslintrc.js\n\u2502   \u251c\u2500\u2500 contacts\n\u2502   \u2502   \u2514\u2500\u2500 routes\n\u2502   \u2502       \u251c\u2500\u2500 archives\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 page.tsx\n\u2502   \u2502       \u251c\u2500\u2500 components\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 Avatar\n\u2502   \u2502       \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502       \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 Item\n\u2502   \u2502       \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502       \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502       \u251c\u2500\u2500 containers\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 Contacts.tsx\n\u2502   \u2502       \u251c\u2500\u2500 index.css\n\u2502   \u2502       \u251c\u2500\u2500 layout.tsx\n\u2502   \u2502       \u251c\u2500\u2500 models\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 contacts.test.ts\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 contacts.ts\n\u2502   \u2502       \u251c\u2500\u2500 page.tsx\n\u2502   \u2502       \u2514\u2500\u2500 styles\n\u2502   \u2502           \u2514\u2500\u2500 utils.css\n\u2502   \u251c\u2500\u2500 landing-page\n\u2502   \u2502   \u2514\u2500\u2500 routes\n\u2502   \u2502       \u251c\u2500\u2500 index.css\n\u2502   \u2502       \u251c\u2500\u2500 layout.tsx\n\u2502   \u2502       \u2514\u2500\u2500 page.tsx\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"components/")," \u91cc\u7684\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u90fd\u662f\u76ee\u5f55\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Avatar/index.tsx"),"\u3002\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/")," \u91cc\u7684\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\uff0c\u90fd\u662f\u5355\u6587\u4ef6\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"contacts.tsx"),"\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u6211\u4eec\u63a8\u8350\u7684\u4e00\u79cd\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,a.kt)("p",null,"\u5728\u200b ",(0,a.kt)("a",{parentName:"p",href:"/v2/docs/tutorials/first-app/c06-css-and-component/6.1-css-in-js"},"\u6dfb\u52a0 UI \u7ec4\u4ef6\uff08Component\uff09")," \u7ae0\u8282\u63d0\u5230\u8fc7\uff0c\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u662f\u56e0\u4e3a\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u8d1f\u8d23\u5b9e\u73b0 UI \u5c55\u793a\u548c\u4ea4\u4e92\u7ec6\u8282\uff0c\u53ef\u4ee5\u6f14\u53d8\u7684\u590d\u6742\uff0c\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\uff0c\u5728\u8fd9\u4e2a\u76ee\u5f55\u5185\u90e8\u53ef\u4ee5\u968f\u610f\u91cd\u6784\uff0c\u53ea\u8003\u8651\u6700\u5c0f\u5c40\u90e8\u3002"),(0,a.kt)("p",null,"\u800c\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\u53ea\u8d1f\u8d23\u8fde\u63a5\uff0c\u662f\u4e00\u4e2a\u80f6\u6c34\u5c42\uff0c\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u5b9e\u73b0\u7ec6\u8282\u90fd\u4ea4\u7ed9 View \u5c42\u548c Model \u5c42\u53bb\u5b9e\u73b0\uff0c\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\u81ea\u5df1\u5e94\u8be5\u4fdd\u6301\u7b80\u5355\u6e05\u6670\uff0c\u4e0d\u5e94\u8be5\u5305\u542b\u590d\u6742\u5b9e\u73b0\u7ec6\u8282\uff0c\u6240\u4ee5\u4e0d\u5e94\u8be5\u6709\u5185\u90e8\u7ed3\u6784\uff0c\u91c7\u7528\u5355\u6587\u4ef6\u5f62\u5f0f\u4e0d\u4f46\u66f4\u7b80\u6d01\uff0c\u4e5f\u80fd\u8d77\u5230\u7ea6\u675f\u4f5c\u7528\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u4e0d\u8981\u628a\u5bb9\u5668\u7ec4\u4ef6\u5199\u590d\u6742\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);