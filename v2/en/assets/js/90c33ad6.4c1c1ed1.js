"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3092],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(18249),o=(n(52983),n(44993));const r={title:"Add Model"},i=void 0,l={unversionedId:"tutorials/first-app/c06-model",id:"tutorials/first-app/c06-model",title:"Add Model",description:"In the previous chapter, we changed the hardcoding mockData to load from Data Loader.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/tutorials/first-app/c06-model.md",sourceDirName:"tutorials/first-app",slug:"/tutorials/first-app/c06-model",permalink:"/v2/en/docs/tutorials/first-app/c06-model",draft:!1,tags:[],version:"current",frontMatter:{title:"Add Model"},sidebar:"tutorialsSidebar",previous:{title:"Add Loader",permalink:"/v2/en/docs/tutorials/first-app/c05-loader"},next:{title:"Add Container",permalink:"/v2/en/docs/tutorials/first-app/c07-container"}},s={},d=[{value:"Model implementation",id:"model-implementation",level:2},{value:"Use Model",id:"use-model",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous chapter, we changed the hardcoding ",(0,o.kt)("inlineCode",{parentName:"p"},"mockData")," to load from Data Loader."),(0,o.kt)("p",null,"In this chapter, we will further implement the functions of the project, such as the implementation of the function of the ",(0,o.kt)("strong",{parentName:"p"},"Archive")," button to put the point of contact archive."),(0,o.kt)("p",null,"Therefore, we will start to write some business logic that has nothing to do with the UI at all. If we continue to write in the component code, more and more noodle code will be generated. To this end, we introduced a code module called ",(0,o.kt)("strong",{parentName:"p"},"Model")," to decoupling these business logic and UI."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use the Model API, you need to set runtime.state(/docs/configure/app/runtime/state) to enable the state management plugin.")),(0,o.kt)("h2",{id:"model-implementation"},"Model implementation"),(0,o.kt)("p",null,"To create a complete Model, you first need to define ",(0,o.kt)("strong",{parentName:"p"},"state"),", including the name and initial value of data in the state."),(0,o.kt)("p",null,"We use Model to manage the data of the point of contact list, so define the following data state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  items: [],\n};\n")),(0,o.kt)("p",null,"Using TS syntax, you can define more complete type information, such as items in each object should have a ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," field. In order to implement archive function, also need to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"archived")," field to hold the point of contact has been archived state."),(0,o.kt)("p",null,"We also need a field to access all archived points of contact. We can define a field of type ",(0,o.kt)("strong",{parentName:"p"},"computed")," to convert the existing data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n")),(0,o.kt)("p",null,"Fields of type ",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," are defined as function, but can be accessed through state just like normal fields."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Modern.js integrates ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," and can write such state transfer logic just like normal mutable data in JS.")),(0,o.kt)("p",null,"When implementing the Archive button, we need an ",(0,o.kt)("inlineCode",{parentName:"p"},"archive")," function, which is responsible for modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"archived")," field of the specified contact. We call this function ",(0,o.kt)("strong",{parentName:"p"},"action"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n")),(0,o.kt)("p",null,"An action function is a pure function, where a defined input gets a defined output (a shifted state) and should not have any side effects."),(0,o.kt)("p",null,"The first parameter of the function is the Draft State provided by Immer, and the second parameter is the parameter passed in when the action is called (more on how to call it later)."),(0,o.kt)("p",null,"We try to implement them completely:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n")),(0,o.kt)("p",null,"Next we connect the above code and put it in the same Model file. First execute the following command to create a new file directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/models/\ntouch src/models/contacts.ts\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"src/models/contacts.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n  },\n});\n")),(0,o.kt)("p",null,"We call a plain object containing elements such as state, action, etc. as ",(0,o.kt)("strong",{parentName:"p"},"Model Spec"),", Modern.js provides ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/model_"},"Model API"),", which can generate ",(0,o.kt)("strong",{parentName:"p"},"Model")," from Model Spec."),(0,o.kt)("h2",{id:"use-model"},"Use Model"),(0,o.kt)("p",null,"Now let's use this Model directly to complement the logic of the project."),(0,o.kt)("p",null,"First modify ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components/Item/index.tsx")," and add the UI and interaction of the ",(0,o.kt)("strong",{parentName:"p"},"Archive button"),", the content is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}\n        >\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n")),(0,o.kt)("p",null,"Next, we modify ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," to pass more parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Item>")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { List } from 'antd';\nimport { name, internet } from 'faker';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { archive, setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," is the hooks API provided by the Modern.js. You can provide the state defined in the Model in the component, or call the side effects and actions defined in the Model through actions to change the state of the Model."),(0,o.kt)("p",null,"Model is business logic, a computational process that does not create or hold state itself. Only after being used by the component with the hooks API, the state is created in the specified place."),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," and click the ",(0,o.kt)("strong",{parentName:"p"},"Archive button")," to see that the page UI has changed."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"useLoaderData")," is actually executed every time the route is switched. Because we used fake data in the Data Loader, the data returned each time is different. But we use the data in the Model first, so the data does not change when switching routes.")))}m.isMDXComponent=!0}}]);