"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7918],{83192:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(29901),l=a(25789),s=a(18249),r=a(74730),i=a(70648);function c(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,(0,s.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,(0,s.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var o=a(7628),d=a(86505),m=a(89089),u=a(36316);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,o.Z)(),{pluginId:r}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,u.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:d}=(0,m.Jo)(r),v=null!=c?c:(E=d).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:d.label,to:v.path,onClick:()=>i(d.name)})))}function g(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(80521);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(96426),L=a(55);const U="lastUpdated_mws_";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(L.Z,e)))}function T(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",U)},(a||s)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:s})))}function w(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:r,formattedLastUpdatedAt:i,lastUpdatedBy:c,tags:o}=a,d=o.length>0,m=!!(s||r||c);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:o}),m&&n.createElement(T,{editUrl:s,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var y=a(83502);const A="tocCollapsible_X5LK",M="tocCollapsibleButton_ZI0Q",x="tocCollapsibleContent_uQnt",H="tocCollapsibleExpanded_xu5L";var B=a(77206);function S(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:c,toggleCollapsed:o}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(A,{[H]:!c},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:o},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:c},n.createElement(B.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var I=a(65184);const O="docItemContainer_rJDo",V="docItemCol_qRdY",D="tocMobile_AO2R",F="breadcrumbsContainer_Amgt",R="breadcrumbsItemLink_w3im";var z=a(47648);function P(e){let{children:t,href:a}=e;const s=(0,l.Z)("breadcrumbs__link",R);return a?n.createElement(d.Z,{className:s,href:a},t):n.createElement("span",{className:s},t)}function J(e){let{children:t,active:a}=e;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function W(){const e=(0,z.Z)("/");return n.createElement(J,null,n.createElement(P,{href:e},"\ud83c\udfe0"))}function j(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,F),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(W,null),e.map(((t,a)=>n.createElement(J,{key:a,active:a===e.length-1},n.createElement(P,{href:t.href},t.label)))))):null}function q(e){var t;const{content:a}=e,{metadata:s,frontMatter:r,assets:i}=a,{keywords:o,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:b}=r,{description:h,title:E}=s,N=null!=(t=i.image)?t:r.image,_=!d&&void 0===a.contentTitle,Z=(0,u.iP)(),k=!m&&a.toc&&a.toc.length>0,L=k&&("desktop"===Z||"ssr"===Z);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:E,description:h,keywords:o,image:N}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[V]:!m})},n.createElement(g,null),n.createElement("div",{className:O},n.createElement("article",null,n.createElement(j,null),n.createElement(p,null),k&&n.createElement(S,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,l.Z)(u.kM.docs.docTocMobile,D)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},_&&n.createElement("header",null,n.createElement(I.Z,{as:"h1"},E)),n.createElement(a,null)),n.createElement(w,e)),n.createElement(c,{previous:s.previous,next:s.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},96426:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(29901),l=a(74730),s=a(18249),r=a(25789);const i="iconEdit_GnsU";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(36316);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},65184:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(18249),l=a(29901),s=a(25789),r=a(74730),i=a(36316);const c="anchorWithStickyNavbar_pWUz",o="anchorWithHideOnScrollNavbar_j_Zk";function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[o]:m,[c]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)}function m(e){let{as:t,...a}=e;return"h1"===t?l.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):l.createElement(d,(0,n.Z)({as:t},a))}},70648:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29901),l=a(86505);function s(e){const{permalink:t,title:a,subLabel:s}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},83502:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(18249),l=a(29901),s=a(25789),r=a(77206);const i="tableOfContents_USc6";function c(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,s.Z)(i,"thin-scrollbar",t)},l.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},77206:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(18249),l=a(29901),s=a(36316);function r(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:d,...m}=e;const u=(0,s.LU)(),v=null!=o?o:u.tableOfContents.minHeadingLevel,b=null!=d?d:u.tableOfContents.maxHeadingLevel,h=(0,s.b9)({toc:t,minHeadingLevel:v,maxHeadingLevel:b}),E=(0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[i,c,v,b]);return(0,s.Si)(E),l.createElement(r,(0,n.Z)({toc:h,className:a,linkClassName:i},m))}},55:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(29901),l=a(25789),s=a(74730),r=a(86505);const i="tag_gOTC",c="tagRegular_a6wa",o="tagWithCount_w9h2";function d(e){const{permalink:t,name:a,count:s}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,{[c]:!s,[o]:s})},a,s&&n.createElement("span",null,s))}const m="tags_Jhml",u="tag_uc7Y";function v(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:u},n.createElement(d,{name:t,permalink:a}))}))))}}}]);