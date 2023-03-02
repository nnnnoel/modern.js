"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[4651],{56482:function(e,t,r){r.d(t,{VK:function(){return c}});var o=r(2363),n=r(73734),a=r(84454);function c(e){let{basename:t,children:r,window:c}=e,i=o.useRef();null==i.current&&(i.current=(0,a.lX)({window:c,v5Compat:!0}));let s=i.current,[u,l]=o.useState({action:s.action,location:s.location});return o.useLayoutEffect((()=>s.listen(l)),[s]),o.createElement(n.F0,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:s})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var i,s;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(i||(i={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(s||(s={}))},73734:function(e,t,r){var o;r.d(t,{F0:function(){return R},TH:function(){return v},s0:function(){return g}});var n=r(84454),a=r(2363);const c="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:i,useEffect:s,useLayoutEffect:u,useDebugValue:l}=o||(o=r.t(a,2));function d(e){const t=e.getSnapshot,r=e.value;try{const e=t();return!c(r,e)}catch(o){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(o||(o=r.t(a,2))).useSyncExternalStore;const f=a.createContext(null);const p=a.createContext(null);const h=a.createContext({outlet:null,matches:[]});function m(){return null!=a.useContext(p)}function v(){return m()||(0,n.kG)(!1),a.useContext(p).location}function g(){m()||(0,n.kG)(!1);let{basename:e,navigator:t}=a.useContext(f),{matches:r}=a.useContext(h),{pathname:o}=v(),c=JSON.stringify((0,n.Zq)(r).map((e=>e.pathnameBase))),i=a.useRef(!1);return a.useEffect((()=>{i.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!i.current)return;if("number"==typeof r)return void t.go(r);let s=(0,n.pC)(r,JSON.parse(c),o,"path"===a.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:(0,n.RQ)([e,s.pathname])),(a.replace?t.replace:t.push)(s,a.state,a)}),[e,t,c,o])}class w extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?React.createElement(h.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var b,y;!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(b||(b={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(y||(y={}));function R(e){let{basename:t="/",children:r=null,location:o,navigationType:c=n.aU.Pop,navigator:i,static:s=!1}=e;m()&&(0,n.kG)(!1);let u=t.replace(/^\/*/,"/"),l=a.useMemo((()=>({basename:u,navigator:i,static:s})),[u,i,s]);"string"==typeof o&&(o=(0,n.cP)(o));let{pathname:d="/",search:h="",hash:v="",state:g=null,key:w="default"}=o,b=a.useMemo((()=>{let e=(0,n.Zn)(d,u);return null==e?null:{pathname:e,search:h,hash:v,state:g,key:w}}),[u,d,h,v,g,w]);return null==b?null:a.createElement(f.Provider,{value:l},a.createElement(p.Provider,{children:r,value:{location:b,navigationType:c}}))}var E;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(E||(E={}));new Promise((()=>{}));class P extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,o=null,n=E.pending;if(r instanceof Promise)if(this.state.error){E.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>e})}else r._tracked?(r,void 0!==o._error?E.error:void 0!==o._data?E.success:E.pending):(E.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else E.success,Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>r});if(n===E.error&&o._error instanceof AbortedDeferredError)throw neverSettledPromise;if(n===E.error&&!t)throw o._error;if(n===E.error)return React.createElement(AwaitContext.Provider,{value:o,children:t});if(n===E.success)return React.createElement(AwaitContext.Provider,{value:o,children:e});throw o}}}}]);