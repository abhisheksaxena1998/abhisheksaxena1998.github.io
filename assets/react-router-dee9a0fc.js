import{r as a}from"./react-612f7b04.js";import{A as J,i as v,p as M,s as T,j as L,g as O,r as B}from"./@remix-run-8cf5b07a.js";/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},p.apply(this,arguments)}const E=a.createContext(null),h=a.createContext(null),C=a.createContext(null),m=a.createContext({outlet:null,matches:[],isDataRoute:!1});function V(e,t){let{relative:n}=t===void 0?{}:t;g()||v(!1);let{basename:s,navigator:r}=a.useContext(h),{hash:o,pathname:u,search:c}=q(e,{relative:n}),i=u;return s!=="/"&&(i=u==="/"?s:L([s,u])),r.createHref({pathname:i,search:c,hash:o})}function g(){return a.useContext(C)!=null}function j(){return g()||v(!1),a.useContext(C).location}function I(e){a.useContext(h).static||a.useLayoutEffect(e)}function W(){let{isDataRoute:e}=a.useContext(m);return e?G():D()}function D(){g()||v(!1);let e=a.useContext(E),{basename:t,navigator:n}=a.useContext(h),{matches:s}=a.useContext(m),{pathname:r}=j(),o=JSON.stringify(O(s).map(i=>i.pathnameBase)),u=a.useRef(!1);return I(()=>{u.current=!0}),a.useCallback(function(i,l){if(l===void 0&&(l={}),!u.current)return;if(typeof i=="number"){n.go(i);return}let f=B(i,JSON.parse(o),r,l.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:L([t,f.pathname])),(l.replace?n.replace:n.push)(f,l.state,l)},[t,n,o,r,e])}function q(e,t){let{relative:n}=t===void 0?{}:t,{matches:s}=a.useContext(m),{pathname:r}=j(),o=JSON.stringify(O(s).map(u=>u.pathnameBase));return a.useMemo(()=>B(e,JSON.parse(o),r,n==="path"),[e,o,r,n])}var d;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(d||(d={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function z(e){let t=a.useContext(E);return t||v(!1),t}function A(e){let t=a.useContext(m);return t||v(!1),t}function F(e){let t=A(),n=t.matches[t.matches.length-1];return n.route.id||v(!1),n.route.id}function G(){let{router:e}=z(d.UseNavigateStable),t=F(x.UseNavigateStable),n=a.useRef(!1);return I(()=>{n.current=!0}),a.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,p({fromRouteId:t},o)))},[e,t])}function X(e){let{basename:t="/",children:n=null,location:s,navigationType:r=J.Pop,navigator:o,static:u=!1}=e;g()&&v(!1);let c=t.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:c,navigator:o,static:u}),[c,o,u]);typeof s=="string"&&(s=M(s));let{pathname:l="/",search:f="",hash:b="",state:N=null,key:P="default"}=s,U=a.useMemo(()=>{let R=T(l,c);return R==null?null:{location:{pathname:R,search:f,hash:b,state:N,key:P},navigationType:r}},[c,l,f,b,N,P,r]);return U==null?null:a.createElement(h.Provider,{value:i},a.createElement(C.Provider,{children:n,value:U}))}var y;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(y||(y={}));new Promise(()=>{});export{h as N,X as R,W as a,j as b,q as c,V as u};