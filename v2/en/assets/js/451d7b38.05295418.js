"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[811],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(52983),r=n(14517);const s="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},75890:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),s=n(14517),l=n(27250),o=n(62209),i=n(61748),p=n(34333);const c="tabList_N6AO",m="tabItem_Wt3n";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[N,x]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=f){const e=g[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==N&&(j(t),x(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},b)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:O},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},27324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(18249),r=(n(52983),n(44993)),s=n(75890),l=n(6015);const o={title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6"},i=void 0,p={unversionedId:"tutorials/first-app/c06-css-and-component/6.2-utility-class",id:"tutorials/first-app/c06-css-and-component/6.2-utility-class",title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 style-components \u5b9e\u73b0 Avatar \u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c06-css-and-component/6.2-utility-class.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.2-utility-class",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.2-utility-class",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.1-css-in-js"},next:{title:"\u200b\u200b\u6dfb\u52a0\u65b0\u7684 Utility Class",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.3-postcss"}},c={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 style-components \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f46\u5f53\u524d\u7684 UI \u4ecd\u7136\u4e0d\u80fd\u8ba9\u4eba\u6ee1\u610f\uff0c\u7f3a\u4e4f\u4e13\u4e1a\u611f\uff0c\u4f8b\u5982\u5217\u8868\u9879\u5185\u90e8\u7684\u5e03\u5c40\u6709\u70b9\u7c97\u7cd9\uff0c\u5f88\u591a\u5730\u65b9\u6ca1\u5bf9\u9f50\u3002"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u81ea\u5df1\u6765\u5b9e\u73b0\u4e00\u4e2a\u66f4\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\uff0c\u5b9e\u73b0\u8fd9\u6837\u7684\u8bbe\u8ba1\u7a3f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design2.png",alt:"design"})),(0,r.kt)("p",null,"\u8fd9\u6b21\u8981\u5b9e\u73b0\u7684 UI \u66f4\u590d\u6742\uff0c\u6709\u5185\u90e8\u7ed3\u6784\uff0c\u4f46\u53e6\u4e00\u65b9\u9762\uff0c\u5e76\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," \u7ec4\u4ef6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5f88\u7c97\u7684\u4eae\u84dd\u8272\u8fb9\u6846"),"\u8fd9\u6837\u5f88\u7279\u6b8a\u7684 UI\uff0c\u90fd\u662f\u5f88\u5e38\u89c4\u7684\u6c34\u5e73\u5782\u76f4\u5e03\u5c40\u3001\u5c45\u4e2d\u3001\u5b57\u4f53\u6837\u5f0f\u7b49\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5176\u5b9e\u6839\u672c\u6ca1\u5fc5\u8981\u5199 CSS\uff0c\u6709\u66f4\u9ad8\u6548\u7684\u3001\u8ddf styled-components \u4e92\u8865\u7684\u5b9e\u73b0\u65b9\u5f0f\uff1aUtility Class\u3002"),(0,r.kt)("p",null,"Modern.js \u96c6\u6210\u4e86\u4e3b\u6d41\u3001\u8f7b\u91cf\u3001\u901a\u7528\u7684 Utility Class \u5de5\u5177\u5e93 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\u3002"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u9009\u62e9\uff0c\u5f00\u542f Tailwind CSS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n\u276f \u542f\u7528 Tailwind CSS \u652f\u6301\n  \u542f\u7528 Sass \u652f\u6301\n  ...\n")),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a\u6211\u4eec\u4e4b\u524d\u5df2\u7ecf\u5f00\u542f\u4e86 Less \u652f\u6301\uff0c\u6240\u4ee5\u518d\u6b21\u6dfb\u52a0\u53ef\u9009\u529f\u80fd\u65f6\uff0c\u4e0d\u518d\u6709\u8fd9\u4e2a\u9009\u9879\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u9876\u90e8\u5f15\u5165 Tailwind CSS \u7684 css \u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u5feb\u901f\u5b9e\u73b0\u4e13\u4e1a\u7684 UI\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n")),(0,r.kt)("p",null,"\u5148\u521b\u5efa Item \u7ec4\u4ef6\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Item\ntouch src/components/Item/index.tsx\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Item\nni src/components/Item/index.tsx\n")))),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u5b9e\u73b0\u4ea4\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { List } from 'antd';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport Item from './components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <List\n        dataSource={mockData}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"\u5728\u7236\u5bb9\u5668\u7684\u4e0a\u4f7f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/container"},"Utility Class")," \uff0c\u5feb\u901f\u5b9e\u73b0\u4e86\u6700\u57fa\u672c\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/responsive-design"},"RWD"),"\uff08\u6700\u5927\u5bbd\u5ea6\u3001\u5c45\u4e2d\uff09\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Item/index.tsx"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Avatar from \'../Avatar\';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({ info }: { info: InfoProps }) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className="flex p-4 items-center border-gray-200 border-b">\n      <Avatar src={avatar} />\n      <div className="ml-4 flex-1 flex justify-between">\n        <div className="flex-1">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type="button"\n          disabled={archived}\n          className={`bg-blue-500  text-white font-bold\n            py-2 px-4 rounded-full hover:bg-blue-700`}>\n          Archive\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9884\u671f\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result2.png",alt:"result"})),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u53ea\u4f7f\u7528\u4e86\u5c11\u91cf Utility Class\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/display/"},"Flex"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/padding/"},"Padding"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/margin/"},"Margin"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/text-color/"},"Text"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/font-weight/"},"Font"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/border-width"},"Border"),"\uff0c\u4e0d\u5199\u4e00\u884c CSS \u5c31\u5b9e\u73b0\u4e86\u6709\u3010 \u8bbe\u8ba1\u7cfb\u7edf\uff08Design System\uff09\u3011\u7684\u3001\u7b26\u5408\u8bbe\u8ba1\u7a3f\u7684\u4e13\u4e1a UI\u3002"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);