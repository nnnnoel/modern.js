"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[66575],{35786:function(e,i,s){s.r(i),s.d(i,{frontmatter:function(){return n},title:function(){return o},toc:function(){return t}});var r=s(97458);const n={sidebar_position:4},t=[{id:"use",text:"Use",depth:2},{id:"api",text:"API",depth:2},{id:"isingitrepo",text:"isInGitRepo",depth:3},{id:"initgitrepo",text:"initGitRepo",depth:3},{id:"addandcommit",text:"addAndCommit",depth:3}],o="@modern-js/codesmith-api-git";function c(e){const i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"modern-jscodesmith-api-git",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-git",children:"#"}),"@modern-js/codesmith-api-git"]}),"\n",(0,r.jsx)(i.p,{children:"The API encapsulation of git-related operations in the micro-generator provides methods for judging git repository, initialization and commit code."}),"\n",(0,r.jsxs)(i.h2,{id:"use",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"}),"Use"]}),"\n",(0,r.jsxs)(i.div,{className:"language-ts",children:[(0,r.jsx)(i.div,{className:""}),(0,r.jsxs)(i.div,{className:"modern-code-content",children:[(0,r.jsx)(i.button,{className:"copy"}),(0,r.jsx)(i.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(i.code,{children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" { GitAPI } "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-git'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(i.span,{className:"line"}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"gitApi"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"GitAPI"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"(generatorCore"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" generatorContext);"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"gitApi"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:".initGitRepo"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(i.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Create GitAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Just call the API on its example."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"api",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,r.jsxs)(i.h3,{id:"isingitrepo",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"}),"isInGitRepo"]}),"\n",(0,r.jsx)(i.p,{children:"Whether the current directory is a git repository."}),"\n",(0,r.jsx)(i.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["cwd?: ",(0,r.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,r.jsx)(i.code,{children:"outputPath"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"initgitrepo",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"}),"initGitRepo"]}),"\n",(0,r.jsxs)(i.p,{children:["The initialization is the git repository. The default branch name for init can be configured via ",(0,r.jsx)(i.code,{children:"defaultBranch"})," in the generator config."]}),"\n",(0,r.jsx)(i.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["cwd?: ",(0,r.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,r.jsx)(i.code,{children:"outputPath"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["force?: ",(0,r.jsx)(i.code,{children:"boolean"}),". Use this parameter to force git init when the current directory is already a git repository."]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"addandcommit",children:[(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#addandcommit",children:"#"}),"addAndCommit"]}),"\n",(0,r.jsxs)(i.p,{children:["Execute ",(0,r.jsx)(i.code,{children:"git add ."})," and ",(0,r.jsx)(i.code,{children:"git commit"})," commit the current changes."]}),"\n",(0,r.jsx)(i.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["commitMessage: ",(0,r.jsx)(i.code,{children:"string"}),". Commit information."]}),"\n",(0,r.jsxs)(i.li,{children:["cwd?: ",(0,r.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,r.jsx)(i.code,{children:"outputPath"}),"."]}),"\n"]})]})}i.default=function(e={}){const{wrapper:i}=e.components||{};return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);