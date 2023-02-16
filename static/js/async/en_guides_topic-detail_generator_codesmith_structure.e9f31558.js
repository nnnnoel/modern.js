"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[80488],{93145:function(e,s,r){r.r(s),r.d(s,{frontmatter:function(){return n},title:function(){return t},toc:function(){return i}});var o=r(97458);const n={sidebar_position:2},i=[{id:"packagejson",text:"package.json",depth:2},{id:"entry-file",text:"Entry file",depth:2},{id:"context",text:"context",depth:3},{id:"generator",text:"generator",depth:3},{id:"template-file",text:"Template File",depth:2}],t="The composition of the microgenerator";function l(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3"},e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"the-composition-of-the-microgenerator",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#the-composition-of-the-microgenerator",children:"#"}),"The composition of the microgenerator"]}),"\n",(0,o.jsx)(s.p,{children:"A microgenerator project is a module project or an Npm package that contains several basic parts:"}),"\n",(0,o.jsxs)(s.h2,{id:"packagejson",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"}),"package.json"]}),"\n",(0,o.jsx)(s.p,{children:"NPM package description information, including name, version, main and other fields."}),"\n",(0,o.jsxs)(s.h2,{id:"entry-file",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-file",children:"#"}),"Entry file"]}),"\n",(0,o.jsx)(s.p,{children:"The js file corresponding to the above main field. The file exports a generator function by default, and the function format is as follows:"}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"async"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  context: GeneratorContext"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  generator: GeneratorCore"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {};"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(s.p,{children:"The function parameters are context and generator:"}),"\n",(0,o.jsxs)(s.h3,{id:"context",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"}),"context"]}),"\n",(0,o.jsx)(s.p,{children:"Context provides context information maintained by the codesmith runtime. Its type is defined as:"}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  materials"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  config"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  data"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  current"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { material"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  [key"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(s.p,{children:"Materials is an abstract file system for codesmith that maintains the mapping between generator names and actionable files."}),"\n",(0,o.jsx)(s.p,{children:"Materials also maintains this default mapping relationship, which is used to maintain the resource information of the current generator execution directory, and can operate on the target project resources through this field."}),"\n",(0,o.jsxs)(s.p,{children:["For example, when you need to modify a field in the ",(0,o.jsx)(s.code,{children:"package.json"})," of the current project:"]}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"resource"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"materials"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".join"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(appDir"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'package.json'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(s.p,{children:"Pass the acquired resources to the JSON API provided by codesmith to implement json operations."}),"\n",(0,o.jsxs)(s.p,{children:["The currently running generator file resource is maintained on the current field of ",(0,o.jsx)(s.code,{children:"GeneratorContext"}),", and the current ",(0,o.jsx)(s.code,{children:"FsMaterial"})," can be obtained through ",(0,o.jsx)(s.code,{children:"current.material"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["The get method is provided in ",(0,o.jsx)(s.code,{children:"FsMaterial"})," to get the resource file and pass the resource file to the API supported by the generator to process the template file."]}),"\n",(0,o.jsx)(s.p,{children:"For example:"}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"resourceMap"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"material"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".find"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/**/*'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["All template files in the generator that match to the ",(0,o.jsx)(s.code,{children:"templates /**/*"})," rules can be obtained in the above way, and the resource files can be operated by traversing the object."]}),"\n",(0,o.jsxs)(s.h3,{id:"generator",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#generator",children:"#"}),"generator"]}),"\n",(0,o.jsx)(s.p,{children:"Generator provides the function method of the codesmith runtime. Its type is defined as:"}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    logger"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Logger"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    outputPath"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    output"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (file"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" data"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" options"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"WriteFileOptions"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"runSubGenerator"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (subGenerator"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" relativePwdPath"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" config"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.p,{children:["The outputPath and the ",(0,o.jsx)(s.code,{children:"materials.default"})," in the context point to the same directory, the outputPath is used to directly calculate the target path and operate, and the ",(0,o.jsx)(s.code,{children:"materials.default"})," is used to obtain resource files."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"runSubGenerator"})," provides a way to run other microgenerators in one microgenerator, which will automatically update and maintain new context information."]}),"\n",(0,o.jsxs)(s.h2,{id:"template-file",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#template-file",children:"#"}),"Template File"]}),"\n",(0,o.jsx)(s.p,{children:"Generator template file."}),"\n",(0,o.jsx)(s.p,{children:"It is recommended to create a templates directory in the project root directory to maintain the template file of the microgenerator. During the execution of the microgenerator, you can only use your own template file. For template files that need to be shared, it is recommended to use a shared sub-generator implementation."})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);