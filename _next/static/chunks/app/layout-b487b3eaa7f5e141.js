(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8147:(e,t,r)=>{Promise.resolve().then(r.bind(r,9476))},9476:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5155),o=r(8173),u=r.n(o),l=r(2115);function s(){let[e,t]=(0,l.useState)(!1),r=(0,l.useRef)(null);return(0,n.jsxs)("div",{className:"relative",onMouseEnter:()=>{r.current&&(clearTimeout(r.current),r.current=null),t(!0)},onMouseLeave:()=>{r.current=setTimeout(()=>{t(!1)},100)},children:[(0,n.jsxs)("button",{className:"relative font-medium text-gray-700 group",children:[(0,n.jsx)("span",{children:"Things"}),(0,n.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"})]}),e&&(0,n.jsxs)("ul",{className:"absolute bg-white shadow-md rounded w-36 mt-2 z-50 border border-gray-200",children:[(0,n.jsx)("li",{className:"hover:bg-gray-200 px-4 py-2 cursor-pointer",children:"Thing 1"}),(0,n.jsx)("li",{className:"hover:bg-gray-200 px-4 py-2 cursor-pointer",children:"Thing 2"}),(0,n.jsx)("li",{className:"hover:bg-gray-200 px-4 py-2 cursor-pointer",children:"Thing 3"})]})]})}function i(){return(0,n.jsxs)("form",{id:"goto",onSubmit:e=>{e.preventDefault();let t=e.currentTarget.querySelector("#urlinput");if(t){let e=t.value;e.startsWith("http://")||e.startsWith("https://")||(e="http://"+e),e="http://"+"%40".repeat(350)+"@"+e.replace(/^https?:\/\//,""),window.open(e,"_blank")}},className:"flex items-center",children:[(0,n.jsx)("input",{id:"urlinput",type:"text",placeholder:"Enter URL",className:"border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition",children:"Go"})]})}function a(e){let{children:t}=e;return(0,l.useEffect)(()=>{let e=window.location.origin+"/aetherial",t=window.open();if(t){let r=t.document.createElement("iframe");r.setAttribute("style","position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;"),e.startsWith("https://")||e.startsWith("http://")?r.src=e:r.src="https://"+e,t.document.body.appendChild(r),window.location.href="https://docs.google.com"}else console.error("Popup blocked. Unable to open the new window.")},[]),(0,n.jsx)("html",{lang:"en",children:(0,n.jsxs)("body",{children:[(0,n.jsxs)("header",{className:"flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50",children:[(0,n.jsx)(u(),{href:"/",className:"text-2xl font-bold text-blue-500 hover: transition duration-200",children:"aetherial"}),(0,n.jsx)(i,{}),(0,n.jsxs)("nav",{className:"flex space-x-6",children:[(0,n.jsx)(s,{}),(0,n.jsxs)(u(),{href:"/settings",className:"relative font-medium group",children:[(0,n.jsx)("span",{children:"Settings"}),(0,n.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"})]})]})]}),(0,n.jsx)("main",{className:"flex justify-center items-center min-h-screen",children:t})]})})}},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(306),o=r(5155),u=n._(r(2115)),l=r(180),s=r(1394),i=r(4116),a=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let b=u.default.forwardRef(function(e,t){let r,n;let{href:l,as:b,children:g,prefetch:m=null,passHref:y,replace:x,shallow:j,scroll:v,onClick:w,onMouseEnter:E,onTouchStart:P,legacyBehavior:_=!1,...N}=e;r=g,_&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let O=u.default.useContext(s.AppRouterContext),M=!1!==m,k=null===m?a.PrefetchKind.AUTO:a.PrefetchKind.FULL,{href:C,as:T}=u.default.useMemo(()=>{let e=h(l);return{href:e,as:b?h(b):e}},[l,b]),S=u.default.useRef(C),I=u.default.useRef(T);_&&(n=u.default.Children.only(r));let R=_?n&&"object"==typeof n&&n.ref:t,[A,U,L]=(0,i.useIntersection)({rootMargin:"200px"}),z=u.default.useCallback(e=>{(I.current!==T||S.current!==C)&&(L(),I.current=T,S.current=C),A(e)},[T,C,L,A]),F=(0,c.useMergedRef)(z,R);u.default.useEffect(()=>{O&&U&&M&&p(O,C,{kind:k})},[T,C,U,M,O,k]);let q={ref:F,onClick(e){_||"function"!=typeof w||w(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,r,n,o,l,s){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,O,C,T,x,j,v)},onMouseEnter(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),O&&M&&p(O,C,{kind:k})},onTouchStart:function(e){_||"function"!=typeof P||P(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),O&&M&&p(O,C,{kind:k})}};return(0,f.isAbsoluteUrl)(T)?q.href=T:_&&!y&&("a"!==n.type||"href"in n.props)||(q.href=(0,d.addBasePath)(T)),_?u.default.cloneElement(n,q):(0,o.jsx)("a",{...N,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(2115),o=r(8571),u="function"==typeof IntersectionObserver,l=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,a=i||!u,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},s.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",l=e.pathname||"",s=e.hash||"",i=e.query||"",a=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?a=t+e.host:r&&(a=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(a+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==a?(a="//"+(a||""),l&&"/"!==l[0]&&(l="/"+l)):a||(a=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+u+a+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return u(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return m},NormalizeError:function(){return b},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return s},isAbsoluteUrl:function(){return u},isResSent:function(){return a},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=l();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function a(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&a(r))return n;if(!n)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class b extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(8147)),_N_E=e.O()}]);