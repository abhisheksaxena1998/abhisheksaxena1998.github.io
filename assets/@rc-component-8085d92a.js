import{c as b,h as ea,a as q,e as Ca,b as ka}from"./@babel-d329d0e8.js";import{r as t}from"./react-653a0b0c.js";import{r as Ma}from"./react-dom-bfbf1955.js";import{c as Rr,b as K,d as $a,u as La,r as oa,s as wa,e as ba,f as Fe,i as ra,h as Na,j as ia,g as aa,k as Ta,l as Ra,m as Wa,n as za}from"./rc-util-f5e5f282.js";import{c as Ye}from"./classnames-51ffc662.js";import{R as Sa}from"./rc-resize-observer-18f5d321.js";import{C as Pa}from"./rc-motion-7afff5ee.js";import"./react-is-e8e5dbb3.js";var Da=t.createContext(null),ua=[];function Ba(e,a){var r=t.useState(function(){if(!Rr())return null;var h=document.createElement("div");return h}),n=b(r,1),o=n[0],u=t.useRef(!1),s=t.useContext(Da),c=t.useState(ua),d=b(c,2),g=d[0],M=d[1],y=s||(u.current?void 0:function(h){M(function(w){var W=[h].concat(ea(w));return W})});function N(){o.parentElement||document.body.appendChild(o),u.current=!0}function v(){var h;(h=o.parentElement)===null||h===void 0||h.removeChild(o),u.current=!1}return K(function(){return e?s?s(N):N():v(),v},[e]),K(function(){g.length&&(g.forEach(function(h){return h()}),M(ua))},[g]),[o,y]}function xa(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Ha="rc-util-locker-".concat(Date.now()),la=0;function _a(e){var a=!!e,r=t.useState(function(){return la+=1,"".concat(Ha,"_").concat(la)}),n=b(r,1),o=n[0];K(function(){if(a){var u=$a(),s=xa();La(`
html body {
  overflow-y: hidden;
  `.concat(s?"width: calc(100% - ".concat(u,"px);"):"",`
}`),o)}else oa(o);return function(){oa(o)}},[a,o])}var sa=!1;function Fa(e){return typeof e=="boolean"&&(sa=e),sa}var va=function(a){return a===!1?!1:!Rr()||!a?null:typeof a=="string"?document.querySelector(a):typeof a=="function"?a():a},Ea=t.forwardRef(function(e,a){var r=e.open,n=e.autoLock,o=e.getContainer;e.debug;var u=e.autoDestroy,s=u===void 0?!0:u,c=e.children,d=t.useState(r),g=b(d,2),M=g[0],y=g[1],N=M||r;t.useEffect(function(){(s||r)&&y(r)},[r,s]);var v=t.useState(function(){return va(o)}),h=b(v,2),w=h[0],W=h[1];t.useEffect(function(){var x=va(o);W(x??null)});var T=Ba(N&&!w),l=b(T,2),S=l[0],E=l[1],B=w??S;_a(n&&r&&Rr()&&(B===S||B===document.body));var I=null;if(c&&wa(c)&&a){var O=c;I=O.ref}var Z=ba(I,a);if(!N||!Rr()||w===void 0)return null;var V=B===!1||Fa(),m=c;return a&&(m=t.cloneElement(c,{ref:Z})),t.createElement(Da.Provider,{value:E},V?m:Ma.createPortal(m,B))}),ca=t.createContext(null);function fa(e){return e?Array.isArray(e)?e:[e]:[]}function Va(e,a,r,n){return t.useMemo(function(){var o=fa(r??a),u=fa(n??a),s=new Set(o),c=new Set(u);return e&&(s.has("hover")&&(s.delete("hover"),s.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[s,c]},[e,a,r,n])}function Aa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===a[0]:e[0]===a[0]&&e[1]===a[1]}function Ua(e,a,r,n){for(var o=r.points,u=Object.keys(e),s=0;s<u.length;s+=1){var c,d=u[s];if(Aa((c=e[d])===null||c===void 0?void 0:c.points,o,n))return"".concat(a,"-placement-").concat(d)}return""}function da(e,a,r,n){return a||(r?{motionName:"".concat(e,"-").concat(r)}:n?{motionName:n}:null)}function sr(e){return e.ownerDocument.defaultView}function ta(e){for(var a=[],r=e==null?void 0:e.parentElement,n=["hidden","scroll","clip","auto"];r;){var o=sr(r).getComputedStyle(r),u=o.overflowX,s=o.overflowY,c=o.overflow;[u,s,c].some(function(d){return n.includes(d)})&&a.push(r),r=r.parentElement}return a}function lr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?a:e}function ur(e){return lr(parseFloat(e),0)}function ma(e,a){var r=q({},e);return(a||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement)){var o=sr(n).getComputedStyle(n),u=o.overflow,s=o.overflowClipMargin,c=o.borderTopWidth,d=o.borderBottomWidth,g=o.borderLeftWidth,M=o.borderRightWidth,y=n.getBoundingClientRect(),N=n.offsetHeight,v=n.clientHeight,h=n.offsetWidth,w=n.clientWidth,W=ur(c),T=ur(d),l=ur(g),S=ur(M),E=lr(Math.round(y.width/h*1e3)/1e3),B=lr(Math.round(y.height/N*1e3)/1e3),I=(h-w-l-S)*E,O=(N-v-W-T)*B,Z=W*B,V=T*B,m=l*E,x=S*E,P=0,te=0;if(u==="clip"){var ne=ur(s);P=ne*E,te=ne*B}var oe=y.x+m-P,k=y.y+Z-te,p=oe+y.width+2*P-m-x-I,ie=k+y.height+2*te-Z-V-O;r.left=Math.max(r.left,oe),r.top=Math.max(r.top,k),r.right=Math.min(r.right,p),r.bottom=Math.min(r.bottom,ie)}}),r}function ha(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(a),n=r.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(r)}function ga(e,a){var r=a||[],n=b(r,2),o=n[0],u=n[1];return[ha(e.width,o),ha(e.height,u)]}function ya(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function Xe(e,a){var r=a[0],n=a[1],o,u;return r==="t"?u=e.y:r==="b"?u=e.y+e.height:u=e.y+e.height/2,n==="l"?o=e.x:n==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:u}}function ke(e,a){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(n,o){return o===a?r[n]||"c":n}).join("")}function qa(e,a,r,n,o,u,s){var c=t.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[n]||{}}),d=b(c,2),g=d[0],M=d[1],y=t.useRef(0),N=t.useMemo(function(){return a?ta(a):[]},[a]),v=t.useRef({}),h=function(){v.current={}};e||h();var w=Fe(function(){if(a&&r&&e){let F=function(Ge,_e){var Ke=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ce,Ze=P.x+Ge,or=P.y+_e,ir=Ze+Q,Lr=or+re,Zr=Math.max(Ze,Ke.left),Xr=Math.max(or,Ke.top),Yr=Math.min(ir,Ke.right),Or=Math.min(Lr,Ke.bottom);return Math.max(0,(Yr-Zr)*(Or-Xr))},nr=function(){be=P.y+R,Ie=be+re,Se=P.x+z,Pe=Se+Q};var l=a,S=l.style.left,E=l.style.top,B=l.style.right,I=l.style.bottom,O=l.ownerDocument,Z=sr(l),V=q(q({},o[n]),u);l.style.left="0",l.style.top="0",l.style.right="auto",l.style.bottom="auto";var m;if(Array.isArray(r))m={x:r[0],y:r[1],width:0,height:0};else{var x=r.getBoundingClientRect();m={x:x.x,y:x.y,width:x.width,height:x.height}}var P=l.getBoundingClientRect(),te=Z.getComputedStyle(l),ne=te.width,oe=te.height,k=O.documentElement,p=k.clientWidth,ie=k.clientHeight,Ve=k.scrollWidth,ye=k.scrollHeight,ee=k.scrollTop,Ae=k.scrollLeft,re=P.height,Q=P.width,de=m.height,j=m.width,J={left:0,top:0,right:p,bottom:ie},Ue={left:-Ae,top:-ee,right:Ve-Ae,bottom:ye-ee},ae=V.htmlRegion,$e="visible",Le="visibleFirst";ae!=="scroll"&&ae!==Le&&(ae=$e);var me=ae===Le,X=ma(Ue,N),C=ma(J,N),Ce=ae===$e?C:X,Y=me?C:Ce;l.style.left="auto",l.style.top="auto",l.style.right="0",l.style.bottom="0";var ue=l.getBoundingClientRect();l.style.left=S,l.style.top=E,l.style.right=B,l.style.bottom=I;var he=lr(Math.round(Q/parseFloat(ne)*1e3)/1e3),le=lr(Math.round(re/parseFloat(oe)*1e3)/1e3);if(he===0||le===0||ra(r)&&!Na(r))return;var ge=V.offset,Wr=V.targetOffset,zr=ga(P,ge),vr=b(zr,2),qe=vr[0],A=vr[1],Br=ga(m,Wr),cr=b(Br,2),xr=cr[0],fr=cr[1];m.x-=xr,m.y-=fr;var Me=V.points||[],dr=b(Me,2),Hr=dr[0],Qe=dr[1],H=ya(Qe),_=ya(Hr),mr=Xe(m,H),hr=Xe(P,_),we=q({},V),z=mr.x-hr.x+qe,R=mr.y-hr.y+A,se=F(z,R),Ne=F(z,R,C),U=Xe(m,["t","l"]),gr=Xe(P,["t","l"]),Te=Xe(m,["b","r"]),Oe=Xe(P,["b","r"]),Re=V.overflow||{},yr=Re.adjustX,ve=Re.adjustY,Cr=Re.shiftX,pe=Re.shiftY,je=function(_e){return typeof _e=="boolean"?_e:_e>=0},be,Ie,Se,Pe;nr();var er=je(ve),Mr=_[0]===H[0];if(er&&_[0]==="t"&&(Ie>Y.bottom||v.current.bt)){var De=R;Mr?De-=re-de:De=U.y-Oe.y-A;var rr=F(z,De),_r=F(z,De,C);rr>se||rr===se&&(!me||_r>=Ne)?(v.current.bt=!0,R=De,we.points=[ke(_,0),ke(H,0)]):v.current.bt=!1}if(er&&_[0]==="b"&&(be<Y.top||v.current.tb)){var ce=R;Mr?ce+=re-de:ce=Te.y-gr.y-A;var wr=F(z,ce),G=F(z,ce,C);wr>se||wr===se&&(!me||G>=Ne)?(v.current.tb=!0,R=ce,we.points=[ke(_,0),ke(H,0)]):v.current.tb=!1}var br=je(yr),Sr=_[1]===H[1];if(br&&_[1]==="l"&&(Pe>Y.right||v.current.rl)){var We=z;Sr?We-=Q-j:We=U.x-Oe.x-qe;var Pr=F(We,R),Fr=F(We,R,C);Pr>se||Pr===se&&(!me||Fr>=Ne)?(v.current.rl=!0,z=We,we.points=[ke(_,1),ke(H,1)]):v.current.rl=!1}if(br&&_[1]==="r"&&(Se<Y.left||v.current.lr)){var ze=z;Sr?ze+=Q-j:ze=Te.x-gr.x-qe;var Dr=F(ze,R),Vr=F(ze,R,C);Dr>se||Dr===se&&(!me||Vr>=Ne)?(v.current.lr=!0,z=ze,we.points=[ke(_,1),ke(H,1)]):v.current.lr=!1}nr();var Be=Cr===!0?0:Cr;typeof Be=="number"&&(Se<C.left&&(z-=Se-C.left,m.x+j<C.left+Be&&(z+=m.x-C.left+j-Be)),Pe>C.right&&(z-=Pe-C.right,m.x>C.right-Be&&(z+=m.x-C.right+Be)));var fe=pe===!0?0:pe;typeof fe=="number"&&(be<C.top&&(R-=be-C.top+A,m.y+de<C.top+fe&&(R+=m.y-C.top+de-fe)),Ie>C.bottom&&(R-=Ie-C.bottom-A,m.y>C.bottom-fe&&(R+=m.y-C.bottom+fe)));var xe=P.x+z,Ee=xe+Q,ar=P.y+R,Ar=ar+re,Er=m.x,Ur=Er+j,tr=m.y,qr=tr+de,Qr=Math.max(xe,Er),jr=Math.min(Ee,Ur),kr=(Qr+jr)/2,Ir=kr-xe,Jr=Math.max(ar,tr),Gr=Math.min(Ar,qr),Kr=(Jr+Gr)/2,$r=Kr-ar;s==null||s(a,we);var Je=ue.right-P.x-(z+P.width),He=ue.bottom-P.y-(R+P.height);M({ready:!0,offsetX:z/he,offsetY:R/le,offsetR:Je/he,offsetB:He/le,arrowX:Ir/he,arrowY:$r/le,scaleX:he,scaleY:le,align:we})}}),W=function(){y.current+=1;var S=y.current;Promise.resolve().then(function(){y.current===S&&w()})},T=function(){M(function(S){return q(q({},S),{},{ready:!1})})};return K(T,[n]),K(function(){e||T()},[e]),[g.ready,g.offsetX,g.offsetY,g.offsetR,g.offsetB,g.arrowX,g.arrowY,g.scaleX,g.scaleY,g.align,W]}function Qa(e,a,r,n){K(function(){if(e&&a&&r){let M=function(){n()};var o=a,u=r,s=ta(o),c=ta(u),d=sr(u),g=new Set([d].concat(ea(s),ea(c)));return g.forEach(function(y){y.addEventListener("scroll",M,{passive:!0})}),d.addEventListener("resize",M,{passive:!0}),n(),function(){g.forEach(function(y){y.removeEventListener("scroll",M),d.removeEventListener("resize",M)})}}},[e,a,r])}function ja(e,a,r,n,o,u,s,c){var d=t.useRef(e),g=t.useRef(!1);d.current!==e&&(g.current=!0,d.current=e),t.useEffect(function(){var M=ia(function(){g.current=!1});return function(){ia.cancel(M)}},[e]),t.useEffect(function(){if(a&&n&&(!o||u)){var M=function(){var I=!1,O=function(m){var x=m.target;I=s(x)},Z=function(m){var x=m.target;!g.current&&d.current&&!I&&!s(x)&&c(!1)};return[O,Z]},y=M(),N=b(y,2),v=N[0],h=N[1],w=M(),W=b(w,2),T=W[0],l=W[1],S=sr(n);S.addEventListener("mousedown",v,!0),S.addEventListener("click",h,!0),S.addEventListener("contextmenu",h,!0);var E=aa(r);return E&&(E.addEventListener("mousedown",T,!0),E.addEventListener("click",l,!0),E.addEventListener("contextmenu",l,!0)),function(){S.removeEventListener("mousedown",v,!0),S.removeEventListener("click",h,!0),S.removeEventListener("contextmenu",h,!0),E&&(E.removeEventListener("mousedown",T,!0),E.removeEventListener("click",l,!0),E.removeEventListener("contextmenu",l,!0))}}},[a,r,n,o,u])}function Ia(e){var a=e.prefixCls,r=e.align,n=e.arrow,o=e.arrowPos,u=n||{},s=u.className,c=u.content,d=o.x,g=d===void 0?0:d,M=o.y,y=M===void 0?0:M,N=t.useRef();if(!r||!r.points)return null;var v={position:"absolute"};if(r.autoArrow!==!1){var h=r.points[0],w=r.points[1],W=h[0],T=h[1],l=w[0],S=w[1];W===l||!["t","b"].includes(W)?v.top=y:W==="t"?v.top=0:v.bottom=0,T===S||!["l","r"].includes(T)?v.left=g:T==="l"?v.left=0:v.right=0}return t.createElement("div",{ref:N,className:Ye("".concat(a,"-arrow"),s),style:v},c)}function Ja(e){var a=e.prefixCls,r=e.open,n=e.zIndex,o=e.mask,u=e.motion;return o?t.createElement(Pa,Ca({},u,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(s){var c=s.className;return t.createElement("div",{style:{zIndex:n},className:Ye("".concat(a,"-mask"),c)})}):null}var Ga=t.memo(function(e){var a=e.children;return a},function(e,a){return a.cache}),Ka=t.forwardRef(function(e,a){var r=e.popup,n=e.className,o=e.prefixCls,u=e.style,s=e.target,c=e.onVisibleChanged,d=e.open,g=e.keepDom,M=e.onClick,y=e.mask,N=e.arrow,v=e.arrowPos,h=e.align,w=e.motion,W=e.maskMotion,T=e.forceRender,l=e.getPopupContainer,S=e.autoDestroy,E=e.portal,B=e.zIndex,I=e.onMouseEnter,O=e.onMouseLeave,Z=e.onPointerEnter,V=e.ready,m=e.offsetX,x=e.offsetY,P=e.offsetR,te=e.offsetB,ne=e.onAlign,oe=e.onPrepare,k=e.stretch,p=e.targetWidth,ie=e.targetHeight,Ve=typeof r=="function"?r():r,ye=d||g,ee=(l==null?void 0:l.length)>0,Ae=t.useState(!l||!ee),re=b(Ae,2),Q=re[0],de=re[1];if(K(function(){!Q&&ee&&s&&de(!0)},[Q,ee,s]),!Q)return null;var j="auto",J={left:"-1000vw",top:"-1000vh",right:j,bottom:j};if(V||!d){var Ue=h.points,ae=h._experimental,$e=ae==null?void 0:ae.dynamicInset,Le=$e&&Ue[0][1]==="r",me=$e&&Ue[0][0]==="b";Le?(J.right=P,J.left=j):(J.left=m,J.right=j),me?(J.bottom=te,J.top=j):(J.top=x,J.bottom=j)}var X={};return k&&(k.includes("height")&&ie?X.height=ie:k.includes("minHeight")&&ie&&(X.minHeight=ie),k.includes("width")&&p?X.width=p:k.includes("minWidth")&&p&&(X.minWidth=p)),d||(X.pointerEvents="none"),t.createElement(E,{open:T||ye,getContainer:l&&function(){return l(s)},autoDestroy:S},t.createElement(Ja,{prefixCls:o,open:d,zIndex:B,mask:y,motion:W}),t.createElement(Sa,{onResize:ne,disabled:!d},function(C){return t.createElement(Pa,Ca({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:T,leavedClassName:"".concat(o,"-hidden")},w,{onAppearPrepare:oe,onEnterPrepare:oe,visible:d,onVisibleChanged:function(Y){var ue;w==null||(ue=w.onVisibleChanged)===null||ue===void 0||ue.call(w,Y),c(Y)}}),function(Ce,Y){var ue=Ce.className,he=Ce.style,le=Ye(o,ue,n);return t.createElement("div",{ref:Ta(C,a,Y),className:le,style:q(q(q(q({"--arrow-x":"".concat(v.x||0,"px"),"--arrow-y":"".concat(v.y||0,"px")},J),X),he),{},{boxSizing:"border-box",zIndex:B},u),onMouseEnter:I,onMouseLeave:O,onPointerEnter:Z,onClick:M},N&&t.createElement(Ia,{prefixCls:o,arrow:N,arrowPos:v,align:h}),t.createElement(Ga,{cache:!d},Ve))})}))}),Za=t.forwardRef(function(e,a){var r=e.children,n=e.getTriggerDOMNode,o=wa(r),u=t.useCallback(function(c){Ra(a,n?n(c):c)},[n]),s=ba(u,r.ref);return o?t.cloneElement(r,{ref:s}):r}),Xa=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Ya(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ea,a=t.forwardRef(function(r,n){var o=r.prefixCls,u=o===void 0?"rc-trigger-popup":o,s=r.children,c=r.action,d=c===void 0?"hover":c,g=r.showAction,M=r.hideAction,y=r.popupVisible,N=r.defaultPopupVisible,v=r.onPopupVisibleChange,h=r.afterPopupVisibleChange,w=r.mouseEnterDelay,W=r.mouseLeaveDelay,T=W===void 0?.1:W,l=r.focusDelay,S=r.blurDelay,E=r.mask,B=r.maskClosable,I=B===void 0?!0:B,O=r.getPopupContainer,Z=r.forceRender,V=r.autoDestroy,m=r.destroyPopupOnHide,x=r.popup,P=r.popupClassName,te=r.popupStyle,ne=r.popupPlacement,oe=r.builtinPlacements,k=oe===void 0?{}:oe,p=r.popupAlign,ie=r.zIndex,Ve=r.stretch,ye=r.getPopupClassNameFromAlign,ee=r.alignPoint,Ae=r.onPopupClick,re=r.onPopupAlign,Q=r.arrow,de=r.popupMotion,j=r.maskMotion,J=r.popupTransitionName,Ue=r.popupAnimation,ae=r.maskTransitionName,$e=r.maskAnimation,Le=r.className,me=r.getTriggerDOMNode,X=ka(r,Xa),C=V||m||!1,Ce=t.useState(!1),Y=b(Ce,2),ue=Y[0],he=Y[1];K(function(){he(Wa())},[]);var le=t.useRef({}),ge=t.useContext(ca),Wr=t.useMemo(function(){return{registerSubPopup:function(f,D){le.current[f]=D,ge==null||ge.registerSubPopup(f,D)}}},[ge]),zr=za(),vr=t.useState(null),qe=b(vr,2),A=qe[0],Br=qe[1],cr=Fe(function(i){ra(i)&&A!==i&&Br(i),ge==null||ge.registerSubPopup(zr,i)}),xr=t.useState(null),fr=b(xr,2),Me=fr[0],dr=fr[1],Hr=Fe(function(i){ra(i)&&Me!==i&&dr(i)}),Qe=t.Children.only(s),H=(Qe==null?void 0:Qe.props)||{},_={},mr=Fe(function(i){var f,D,$=Me;return($==null?void 0:$.contains(i))||((f=aa($))===null||f===void 0?void 0:f.host)===i||i===$||(A==null?void 0:A.contains(i))||((D=aa(A))===null||D===void 0?void 0:D.host)===i||i===A||Object.values(le.current).some(function(L){return(L==null?void 0:L.contains(i))||i===L})}),hr=da(u,de,Ue,J),we=da(u,j,$e,ae),z=t.useState(N||!1),R=b(z,2),se=R[0],Ne=R[1],U=y??se,gr=Fe(function(i){y===void 0&&Ne(i)});K(function(){Ne(y||!1)},[y]);var Te=t.useRef(U);Te.current=U;var Oe=Fe(function(i){Ma.flushSync(function(){U!==i&&(gr(i),v==null||v(i))})}),Re=t.useRef(),yr=function(){clearTimeout(Re.current)},ve=function(f){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;yr(),D===0?Oe(f):Re.current=setTimeout(function(){Oe(f)},D*1e3)};t.useEffect(function(){return yr},[]);var Cr=t.useState(!1),pe=b(Cr,2),je=pe[0],be=pe[1];K(function(i){(!i||U)&&be(!0)},[U]);var Ie=t.useState(null),Se=b(Ie,2),Pe=Se[0],er=Se[1],Mr=t.useState([0,0]),De=b(Mr,2),rr=De[0],_r=De[1],ce=function(f){_r([f.clientX,f.clientY])},wr=qa(U,A,ee?rr:Me,ne,k,p,re),G=b(wr,11),br=G[0],Sr=G[1],We=G[2],Pr=G[3],Fr=G[4],ze=G[5],Dr=G[6],Vr=G[7],Be=G[8],fe=G[9],xe=G[10],Ee=Fe(function(){je||xe()});Qa(U,Me,A,Ee),K(function(){Ee()},[rr,ne]),K(function(){U&&!(k!=null&&k[ne])&&Ee()},[JSON.stringify(p)]);var ar=t.useMemo(function(){var i=Ua(k,u,fe,ee);return Ye(i,ye==null?void 0:ye(fe))},[fe,ye,k,u,ee]);t.useImperativeHandle(n,function(){return{forceAlign:Ee}});var Ar=function(f){be(!1),xe(),h==null||h(f)},Er=function(){return new Promise(function(f){er(function(){return f})})};K(function(){Pe&&(xe(),Pe(),er(null))},[Pe]);var Ur=t.useState(0),tr=b(Ur,2),qr=tr[0],Qr=tr[1],jr=t.useState(0),kr=b(jr,2),Ir=kr[0],Jr=kr[1],Gr=function(f,D){if(Ee(),Ve){var $=D.getBoundingClientRect();Qr($.width),Jr($.height)}},Kr=Va(ue,d,g,M),$r=b(Kr,2),Je=$r[0],He=$r[1];function F(i,f,D,$){_[i]=function(L){var Nr;$==null||$(L),ve(f,D);for(var pr=arguments.length,na=new Array(pr>1?pr-1:0),Tr=1;Tr<pr;Tr++)na[Tr-1]=arguments[Tr];(Nr=H[i])===null||Nr===void 0||Nr.call.apply(Nr,[H,L].concat(na))}}var nr=Je.has("click"),Ge=He.has("click")||He.has("contextMenu");(nr||Ge)&&(_.onClick=function(i){var f;Te.current&&Ge?ve(!1):!Te.current&&nr&&(ce(i),ve(!0));for(var D=arguments.length,$=new Array(D>1?D-1:0),L=1;L<D;L++)$[L-1]=arguments[L];(f=H.onClick)===null||f===void 0||f.call.apply(f,[H,i].concat($))}),ja(U,Ge,Me,A,E,I,mr,ve);var _e=Je.has("hover"),Ke=He.has("hover"),Ze,or;_e&&(F("onMouseEnter",!0,w,function(i){ce(i)}),F("onPointerEnter",!0,w,function(i){ce(i)}),Ze=function(){(U||je)&&ve(!0,w)},ee&&(_.onMouseMove=function(i){var f;(f=H.onMouseMove)===null||f===void 0||f.call(H,i)})),Ke&&(F("onMouseLeave",!1,T),F("onPointerLeave",!1,T),or=function(){ve(!1,T)}),Je.has("focus")&&F("onFocus",!0,l),He.has("focus")&&F("onBlur",!1,S),Je.has("contextMenu")&&(_.onContextMenu=function(i){var f;Te.current&&He.has("contextMenu")?ve(!1):(ce(i),ve(!0)),i.preventDefault();for(var D=arguments.length,$=new Array(D>1?D-1:0),L=1;L<D;L++)$[L-1]=arguments[L];(f=H.onContextMenu)===null||f===void 0||f.call.apply(f,[H,i].concat($))}),Le&&(_.className=Ye(H.className,Le));var ir=q(q({},H),_),Lr={},Zr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Zr.forEach(function(i){X[i]&&(Lr[i]=function(){for(var f,D=arguments.length,$=new Array(D),L=0;L<D;L++)$[L]=arguments[L];(f=ir[i])===null||f===void 0||f.call.apply(f,[ir].concat($)),X[i].apply(X,$)})});var Xr=t.cloneElement(Qe,q(q({},ir),Lr)),Yr={x:ze,y:Dr},Or=Q?q({},Q!==!0?Q:{}):null;return t.createElement(t.Fragment,null,t.createElement(Sa,{disabled:!U,ref:Hr,onResize:Gr},t.createElement(Za,{getTriggerDOMNode:me},Xr)),t.createElement(ca.Provider,{value:Wr},t.createElement(Ka,{portal:e,ref:cr,prefixCls:u,popup:x,className:Ye(P,ar),style:te,target:Me,onMouseEnter:Ze,onMouseLeave:or,onPointerEnter:Ze,zIndex:ie,open:U,keepDom:je,onClick:Ae,mask:E,motion:hr,maskMotion:we,onVisibleChanged:Ar,onPrepare:Er,forceRender:Z,autoDestroy:C,getPopupContainer:O,align:fe,arrow:Or,arrowPos:Yr,ready:br,offsetX:Sr,offsetY:We,offsetR:Pr,offsetB:Fr,onAlign:Ee,stretch:Ve,targetWidth:qr/Vr,targetHeight:Ir/Be})))});return a}const it=Ya(Ea);export{Ea as P,it as T};
