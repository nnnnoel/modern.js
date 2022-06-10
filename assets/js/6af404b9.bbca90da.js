"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7921],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1836:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(49231);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},38108:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(91528),a=n(49231),o=n(43434),l=n(78250),s=n(1506),i="tabItem_Xw9X";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(h),j=w[0],x=w[1],S=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==j&&k.some((function(e){return e.value===C}))&&x(C)}var T=function(e){var t=e.currentTarget,n=S.indexOf(t),r=k[n].value;r!==j&&(O(t),x(r),null!=d&&N(d,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},66518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(91528),a=n(2854),o=(n(49231),n(54852)),l=n(38108),s=n(1836),i=["components"],u={title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6"},c=void 0,p={unversionedId:"guides/tutorials/c06-css-and-component/6.1-css-in-js",id:"guides/tutorials/c06-css-and-component/6.1-css-in-js",title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 UI \u7ec4\u4ef6\u5e93\u3001\u6807\u51c6\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002",source:"@site/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js.md",sourceDirName:"guides/tutorials/c06-css-and-component",slug:"/guides/tutorials/c06-css-and-component/6.1-css-in-js",permalink:"/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js",tags:[],version:"current",frontMatter:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c05-component/5.2-use-standalone-component"},next:{title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c06-css-and-component/6.2-utility-class"}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 UI \u7ec4\u4ef6\u5e93\u3001\u6807\u51c6\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5b9e\u73b0 UI \u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5e0c\u671b\u81ea\u5df1\u63a7\u5236\u8054\u7cfb\u4eba\u5934\u50cf\u7684\u5c55\u793a\uff0c\u5b9e\u73b0\u8fd9\u79cd\u8bbe\u8ba1\u7a3f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design1.png",alt:"design"})),(0,o.kt)("p",null,"\u5047\u8bbe\u6ca1\u6709\u73b0\u6210\u7684\u7ec4\u4ef6\u53ef\u4ee5\u5b9e\u73b0\uff0c\u90a3\u5c31\u9700\u8981\u81ea\u5df1\u5199\u4e9b CSS \u4e86\uff0c\u4f20\u7edf\u4e0a\uff0c\u6211\u4eec\u6709\u5982\u4e0b\u9009\u62e9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5728\u5143\u7d20\u7684 style \u5c5e\u6027\u4e0a\u5199\u6837\u5f0f\uff0c\u7f3a\u70b9\u662f\uff1a\u4e0d\u65b9\u4fbf\u7ef4\u62a4\uff0cUI \u89c6\u89c9\u4e0a\u7684\u7ec6\u8282\u4e5f\u4f1a\u8ddf UI \u7ed3\u6784\u4e0a\u7684\u7ec6\u8282\u548c\u4e1a\u52a1\u903b\u8f91\u6df7\u5728\u4e00\u8d77\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 CSS \u4ee3\u7801\u91cc\u7528\u9009\u62e9\u5668\u627e\u5230\u8fd9\u4e2a\u5934\u50cf\u5143\u7d20\uff0c\u5199\u6837\u5f0f\uff0c\u907f\u514d\u4e86 1 \u7684\u7f3a\u70b9\uff0c\u4f46\u65b0\u7684\u7f3a\u70b9\u662f\uff1a\u4e0d\u65b9\u4fbf\u5728\u5176\u4ed6\u6709\u5934\u50cf\u51fa\u73b0\u7684\u5730\u65b9\u590d\u7528\uff0c\u96c6\u4e2d\u7ef4\u62a4\uff0c\u505a\u5230 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don't_repeat_yourself"},"DRY"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 CSS \u4ee3\u7801\u91cc\u5199\u4e00\u4e2a classname\uff0c\u5c01\u88c5\u8fd9\u4e2a\u6837\u5f0f\uff0c\u907f\u514d\u4e86 2 \u7684\u7f3a\u70b9\uff0c\u4f46\u65b0\u7684\u7f3a\u70b9\u662f\uff1a\u9700\u8981\u8003\u8651\u547d\u540d\u95ee\u9898\uff0c\u907f\u514d\u5728\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u4e0b\u91cd\u540d\uff0c\u53ef\u80fd\u8981\u7528\u5230 ",(0,o.kt)("a",{parentName:"li",href:"http://getbem.com/"},"BEM")," \u4e4b\u7c7b\u7684\u89c4\u8303\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7528 CSS Modules \u6280\u672f\uff0c\u8ba9 CSS \u6587\u4ef6\u548c\u5176\u4e2d\u7684 classname \u53d8\u5f97\u3010 \u6a21\u5757\u5316 \u3011\uff0c\u907f\u514d\u4e86 3 \u7684\u7f3a\u70b9\u3002")),(0,o.kt)("p",null,"Modern.js \u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 CSS Modules\uff0c\u4f46\u6211\u4eec\u66f4\u63a8\u8350\u4f18\u5148\u91c7\u7528 CSS Modules \u7684\u7ee7\u627f\u8005\u3001\u5728\u3010 \u6a21\u5757\u5316 \u3011\u4e0a\u66f4\u8fdb\u4e00\u6b65\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),"\uff0c\u6765\u5b9e\u73b0\u7c7b\u4f3c\u7684\u9700\u6c42\u3002"),(0,o.kt)("p",null,"Modern.js \u540c\u6837\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 styled-components\uff0c\u65e2\u4e0d\u9700\u8981\u5b89\u88c5\u4f9d\u8d56\uff0c\u4e5f\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u4fee\u6539\u9876\u90e8\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled';\n")),(0,o.kt)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"List.Item.Meta")," \u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9884\u671f\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result1.png",alt:"result"})),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u505a\u4e00\u70b9\u91cd\u6784\uff0c\u4e3a\u4e86\u589e\u5f3a\u53ef\u8bfb\u6027\uff0c\u8ba9\u4ee3\u7801\u66f4\u5bb9\u6613\u7ef4\u62a4\uff0c\u53ef\u4ee5\u628a Avatar \u7ec4\u4ef6\u62c6\u5206\u51fa\u53bb"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n")))),(0,o.kt)("p",null,"\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u7684 Avatar \u5b9e\u73b0\u5220\u6389\uff0c\u6539\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Avatar from './components/Avatar';\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/components/Avatar/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8fd0\u884c\u7ed3\u679c\u5e94\u8be5\u662f\u4e00\u6837\u7684\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u91c7\u7528\u76ee\u5f55\u5f62\u5f0f\uff08Avatar/index.tsx\uff09\u800c\u4e0d\u662f\u5355\u6587\u4ef6\u5f62\u5f0f\uff08Avatar.tsx\uff09\u7684\u539f\u56e0\u662f\uff0c\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5728\u76ee\u5f55\u5185\u90e8\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\uff0c\u5728\u8fd9\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u9ed1\u76d2"),"\u5185\u90e8\u53ef\u4ee5\u968f\u610f\u91cd\u6784\uff0c\u53ea\u8003\u8651",(0,o.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u5c40\u90e8"),"\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}v.isMDXComponent=!0}}]);