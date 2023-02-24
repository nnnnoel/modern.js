"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[4651],{87077:function(e,t,r){r.d(t,{VK:function(){return c}});var n=r(2363),o=r(84667),a=r(12170);function c(e){let{basename:t,children:r,window:c}=e,i=n.useRef();null==i.current&&(i.current=(0,a.lX)({window:c,v5Compat:!0}));let s=i.current,[u,l]=n.useState({action:s.action,location:s.location});return n.useLayoutEffect((()=>s.listen(l)),[s]),n.createElement(o.F0,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:s})}var i,s;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(i||(i={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(s||(s={}))},84667:function(e,t,r){var n;r.d(t,{F0:function(){return y},TH:function(){return v},s0:function(){return g}});var o=r(12170),a=r(2363);const c="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:i,useEffect:s,useLayoutEffect:u,useDebugValue:l}=n||(n=r.t(a,2));function d(e){const t=e.getSnapshot,r=e.value;try{const e=t();return!c(r,e)}catch(n){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(n||(n=r.t(a,2))).useSyncExternalStore;const f=a.createContext(null);const h=a.createContext(null);const p=a.createContext({outlet:null,matches:[]});function m(){return null!=a.useContext(h)}function v(){return m()||(0,o.kG)(!1),a.useContext(h).location}function g(){m()||(0,o.kG)(!1);let{basename:e,navigator:t}=a.useContext(f),{matches:r}=a.useContext(p),{pathname:n}=v(),c=JSON.stringify((0,o.Zq)(r).map((e=>e.pathnameBase))),i=a.useRef(!1);return a.useEffect((()=>{i.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!i.current)return;if("number"==typeof r)return void t.go(r);let s=(0,o.pC)(r,JSON.parse(c),n,"path"===a.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:(0,o.RQ)([e,s.pathname])),(a.replace?t.replace:t.push)(s,a.state,a)}),[e,t,c,n])}class b extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?React.createElement(p.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var R,w;!function(e){e.UseRevalidator="useRevalidator"}(R||(R={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(w||(w={}));function y(e){let{basename:t="/",children:r=null,location:n,navigationType:c=o.aU.Pop,navigator:i,static:s=!1}=e;m()&&(0,o.kG)(!1);let u=t.replace(/^\/*/,"/"),l=a.useMemo((()=>({basename:u,navigator:i,static:s})),[u,i,s]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:d="/",search:p="",hash:v="",state:g=null,key:b="default"}=n,R=a.useMemo((()=>{let e=(0,o.Zn)(d,u);return null==e?null:{pathname:e,search:p,hash:v,state:g,key:b}}),[u,d,p,v,g,b]);return null==R?null:a.createElement(f.Provider,{value:l},a.createElement(h.Provider,{children:r,value:{location:R,navigationType:c}}))}var P;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(P||(P={}));new Promise((()=>{}));class C extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,o=P.pending;if(r instanceof Promise)if(this.state.error){P.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(r,void 0!==n._error?P.error:void 0!==n._data?P.success:P.pending):(P.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else P.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(o===P.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===P.error&&!t)throw n._error;if(o===P.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(o===P.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}}}]);