import{e as he,b as N,g as Je,c as H,_ as Rt,a as pt,d as Ce,h as Mt}from"./@babel-43e769cc.js";import{r as t}from"./react-d998b26c.js";import{r as Ae}from"./react-dom-890fecd1.js";import{c as Me}from"./classnames-325479d5.js";import{R as Qe}from"./rc-resize-observer-ee76393b.js";import{j as F,O as bt,a as Te,f as je}from"./rc-util-6fbd7337.js";import"./react-is-e8e5dbb3.js";var et=t.forwardRef(function(e,c){var r=e.height,o=e.offsetY,m=e.offsetX,n=e.children,l=e.prefixCls,h=e.onInnerResize,g=e.innerProps,S=e.rtl,s=e.extra,u={},v={display:"flex",flexDirection:"column"};if(o!==void 0){var d;u={height:r,position:"relative",overflow:"hidden"},v=he(he({},v),{},(d={transform:"translateY(".concat(o,"px)")},N(d,S?"marginRight":"marginLeft",-m),N(d,"position","absolute"),N(d,"left",0),N(d,"right",0),N(d,"top",0),d))}return t.createElement("div",{style:u},t.createElement(Qe,{onResize:function(f){var R=f.offsetHeight;R&&h&&h()}},t.createElement("div",Je({style:v,className:Me(N({},"".concat(l,"-holder-inner"),l)),ref:c},g),n,s)))});et.displayName="Filler";function Ge(e,c){var r="touches"in e?e.touches[0]:e;return r[c?"pageX":"pageY"]}var Ue=t.forwardRef(function(e,c){var r,o=e.prefixCls,m=e.rtl,n=e.scrollOffset,l=e.scrollRange,h=e.onStartMove,g=e.onStopMove,S=e.onScroll,s=e.horizontal,u=e.spinSize,v=e.containerSize,d=t.useState(!1),M=H(d,2),f=M[0],R=M[1],w=t.useState(null),E=H(w,2),I=E[0],X=E[1],re=t.useState(null),W=H(re,2),V=W[0],L=W[1],k=!m,z=t.useRef(),U=t.useRef(),b=t.useState(!1),T=H(b,2),B=T[0],Z=T[1],ne=t.useRef(),P=function(){clearTimeout(ne.current),Z(!0),ne.current=setTimeout(function(){Z(!1)},3e3)},j=l-v||0,ae=v-u||0,ge=j>0,Y=t.useMemo(function(){if(n===0||j===0)return 0;var D=n/j;return D*ae},[n,j,ae]),ie=function(x){x.stopPropagation(),x.preventDefault()},oe=t.useRef({top:Y,dragging:f,pageY:I,startTop:V});oe.current={top:Y,dragging:f,pageY:I,startTop:V};var q=function(x){R(!0),X(Ge(x,s)),L(oe.current.top),h(),x.stopPropagation(),x.preventDefault()};t.useEffect(function(){var D=function(ue){ue.preventDefault()},x=z.current,$=U.current;return x.addEventListener("touchstart",D),$.addEventListener("touchstart",q),function(){x.removeEventListener("touchstart",D),$.removeEventListener("touchstart",q)}},[]);var Se=t.useRef();Se.current=j;var le=t.useRef();le.current=ae,t.useEffect(function(){if(f){var D,x=function(ue){var ce=oe.current,be=ce.dragging,Ee=ce.pageY,J=ce.startTop;if(F.cancel(D),be){var Re=Ge(ue,s)-Ee,Q=J;!k&&s?Q-=Re:Q+=Re;var ee=Se.current,pe=le.current,te=pe?Q/pe:0,O=Math.ceil(te*ee);O=Math.max(O,0),O=Math.min(O,ee),D=F(function(){S(O,s)})}},$=function(){R(!1),g()};return window.addEventListener("mousemove",x),window.addEventListener("touchmove",x),window.addEventListener("mouseup",$),window.addEventListener("touchend",$),function(){window.removeEventListener("mousemove",x),window.removeEventListener("touchmove",x),window.removeEventListener("mouseup",$),window.removeEventListener("touchend",$),F.cancel(D)}}},[f]),t.useEffect(function(){P()},[n]),t.useImperativeHandle(c,function(){return{delayHidden:P}});var K="".concat(o,"-scrollbar"),C={position:"absolute",visibility:B&&ge?null:"hidden"},_={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return s?(C.height=8,C.left=0,C.right=0,C.bottom=0,_.height="100%",_.width=u,k?_.left=Y:_.right=Y):(C.width=8,C.top=0,C.bottom=0,k?C.right=0:C.left=0,_.width="100%",_.height=u,_.top=Y),t.createElement("div",{ref:z,className:Me(K,(r={},N(r,"".concat(K,"-horizontal"),s),N(r,"".concat(K,"-vertical"),!s),N(r,"".concat(K,"-visible"),B),r)),style:C,onMouseDown:ie,onMouseMove:P},t.createElement("div",{ref:U,className:Me("".concat(K,"-thumb"),N({},"".concat(K,"-thumb-moving"),f)),style:_,onMouseDown:q}))});function Et(e){var c=e.children,r=e.setRef,o=t.useCallback(function(m){r(m)},[]);return t.cloneElement(c,{ref:o})}function xt(e,c,r,o,m,n,l){var h=l.getKey;return e.slice(c,r+1).map(function(g,S){var s=c+S,u=n(g,s,{style:{width:o}}),v=h(g);return t.createElement(Et,{key:v,setRef:function(M){return m(g,M)}},u)})}var yt=function(){function e(){pt(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return Rt(e,[{key:"set",value:function(r,o){this.maps[r]=o,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function wt(e,c,r){var o=t.useState(0),m=H(o,2),n=m[0],l=m[1],h=t.useRef(new Map),g=t.useRef(new yt),S=t.useRef();function s(){F.cancel(S.current)}function u(){s(),S.current=F(function(){h.current.forEach(function(d,M){if(d&&d.offsetParent){var f=bt(d),R=f.offsetHeight;g.current.get(M)!==R&&g.current.set(M,f.offsetHeight)}}),l(function(d){return d+1})})}function v(d,M){var f=e(d),R=h.current.get(f);M?(h.current.set(f,M),u()):h.current.delete(f),!R!=!M&&(M?c==null||c(d):r==null||r(d))}return t.useEffect(function(){return s},[]),[v,u,g.current,n]}function zt(e,c,r,o,m,n,l,h){var g=t.useRef();return function(S){if(S==null){h();return}if(F.cancel(g.current),typeof S=="number")l(S);else if(S&&Ce(S)==="object"){var s,u=S.align;"index"in S?s=S.index:s=c.findIndex(function(f){return m(f)===S.key});var v=S.offset,d=v===void 0?0:v,M=function f(R,w){if(!(R<0||!e.current)){var E=e.current.clientHeight,I=!1,X=w;if(E){for(var re=w||u,W=0,V=0,L=0,k=Math.min(c.length,s),z=0;z<=k;z+=1){var U=m(c[z]);V=W;var b=r.get(U);L=V+(b===void 0?o:b),W=L,z===s&&b===void 0&&(I=!0)}var T=null;switch(re){case"top":T=V-d;break;case"bottom":T=L-E+d;break;default:{var B=e.current.scrollTop,Z=B+E;V<B?X="top":L>Z&&(X="bottom")}}T!==null&&T!==e.current.scrollTop&&l(T)}g.current=F(function(){I&&n(),f(R-1,X)},2)}};M(3)}}}function Lt(e,c,r){var o=e.length,m=c.length,n,l;if(o===0&&m===0)return null;o<m?(n=e,l=c):(n=c,l=e);var h={__EMPTY_ITEM__:!0};function g(M){return M!==void 0?r(M):h}for(var S=null,s=Math.abs(o-m)!==1,u=0;u<l.length;u+=1){var v=g(n[u]),d=g(l[u]);if(v!==d){S=u,s=s||v!==g(l[u+1]);break}}return S===null?null:{index:S,multiple:s}}function _t(e,c,r){var o=t.useState(e),m=H(o,2),n=m[0],l=m[1],h=t.useState(null),g=H(h,2),S=g[0],s=g[1];return t.useEffect(function(){var u=Lt(n||[],e||[],c);(u==null?void 0:u.index)!==void 0&&(r==null||r(u.index),s(e[u.index])),l(e)},[e]),[S]}var Ze=(typeof navigator>"u"?"undefined":Ce(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const tt=function(e,c){var r=t.useRef(!1),o=t.useRef(null);function m(){clearTimeout(o.current),r.current=!0,o.current=setTimeout(function(){r.current=!1},50)}var n=t.useRef({top:e,bottom:c});return n.current.top=e,n.current.bottom=c,function(l){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=l<0&&n.current.top||l>0&&n.current.bottom;return h&&g?(clearTimeout(o.current),r.current=!1):(!g||r.current)&&m(),!r.current&&g}};function Ht(e,c,r,o,m){var n=t.useRef(0),l=t.useRef(null),h=t.useRef(null),g=t.useRef(!1),S=tt(c,r);function s(R){F.cancel(l.current);var w=R.deltaY;n.current+=w,h.current=w,!S(w)&&(Ze||R.preventDefault(),l.current=F(function(){var E=g.current?10:1;m(n.current*E),n.current=0}))}function u(R){var w=R.deltaX;m(w,!0),Ze||R.preventDefault()}var v=t.useRef(null),d=t.useRef(null);function M(R){if(e){F.cancel(d.current),d.current=F(function(){v.current=null},2);var w=R.deltaX,E=R.deltaY,I=Math.abs(w),X=Math.abs(E);v.current===null&&(v.current=o&&I>X?"x":"y"),v.current==="x"?u(R):s(R)}}function f(R){e&&(g.current=R.detail===h.current)}return[M,f]}var Tt=14/15;function Ct(e,c,r){var o=t.useRef(!1),m=t.useRef(0),n=t.useRef(null),l=t.useRef(null),h,g=function(v){if(o.current){var d=Math.ceil(v.touches[0].pageY),M=m.current-d;m.current=d,r(M)&&v.preventDefault(),clearInterval(l.current),l.current=setInterval(function(){M*=Tt,(!r(M,!0)||Math.abs(M)<=.1)&&clearInterval(l.current)},16)}},S=function(){o.current=!1,h()},s=function(v){h(),v.touches.length===1&&!o.current&&(o.current=!0,m.current=Math.ceil(v.touches[0].pageY),n.current=v.target,n.current.addEventListener("touchmove",g),n.current.addEventListener("touchend",S))};h=function(){n.current&&(n.current.removeEventListener("touchmove",g),n.current.removeEventListener("touchend",S))},Te(function(){return e&&c.current.addEventListener("touchstart",s),function(){var u;(u=c.current)===null||u===void 0||u.removeEventListener("touchstart",s),h(),clearInterval(l.current)}},[e])}var Dt=20;function qe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/c*100;return isNaN(r)&&(r=0),r=Math.max(r,Dt),r=Math.min(r,e/2),Math.floor(r)}function It(e,c,r,o){var m=t.useMemo(function(){return[new Map,[]]},[e,r.id,o]),n=H(m,2),l=n[0],h=n[1],g=function(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,v=l.get(s),d=l.get(u);if(v===void 0||d===void 0)for(var M=e.length,f=h.length;f<M;f+=1){var R,w=e[f],E=c(w);l.set(E,f);var I=(R=r.get(E))!==null&&R!==void 0?R:o;if(h[f]=(h[f-1]||0)+I,E===s&&(v=f),E===u&&(d=f),v!==void 0&&d!==void 0)break}return{top:h[v-1]||0,bottom:h[d]}};return g}var Pt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender"],Ot=[],Nt={overflowY:"auto",overflowAnchor:"none"};function kt(e,c){var r=e.prefixCls,o=r===void 0?"rc-virtual-list":r,m=e.className,n=e.height,l=e.itemHeight,h=e.fullHeight,g=h===void 0?!0:h,S=e.style,s=e.data,u=e.children,v=e.itemKey,d=e.virtual,M=e.direction,f=e.scrollWidth,R=e.component,w=R===void 0?"div":R,E=e.onScroll,I=e.onVirtualScroll,X=e.onVisibleChange,re=e.innerProps,W=e.extraRender,V=Mt(e,Pt),L=!!(d!==!1&&n&&l),k=L&&s&&l*s.length>n,z=M==="rtl",U=Me(o,N({},"".concat(o,"-rtl"),z),m),b=s||Ot,T=t.useRef(),B=t.useRef(),Z=t.useState(0),ne=H(Z,2),P=ne[0],j=ne[1],ae=t.useState(0),ge=H(ae,2),Y=ge[0],ie=ge[1],oe=t.useState(!1),q=H(oe,2),Se=q[0],le=q[1],K=function(){le(!0)},C=function(){le(!1)},_=t.useCallback(function(a){return typeof v=="function"?v(a):a==null?void 0:a[v]},[v]),D={getKey:_};function x(a){j(function(i){var p;typeof a=="function"?p=a(i):p=a;var y=lt(p);return T.current.scrollTop=y,y})}var $=t.useRef({start:0,end:b.length}),me=t.useRef(),ue=_t(b,_),ce=H(ue,1),be=ce[0];me.current=be;var Ee=wt(_,null,null),J=H(Ee,4),Re=J[0],Q=J[1],ee=J[2],pe=J[3],te=t.useMemo(function(){if(!L)return{scrollHeight:void 0,start:0,end:b.length-1,offset:void 0};if(!k){var a;return{scrollHeight:((a=B.current)===null||a===void 0?void 0:a.offsetHeight)||0,start:0,end:b.length-1,offset:void 0}}for(var i=0,p,y,A,gt=b.length,de=0;de<gt;de+=1){var St=b[de],mt=_(St),Be=ee.get(mt),He=i+(Be===void 0?l:Be);He>=P&&p===void 0&&(p=de,y=i),He>P+n&&A===void 0&&(A=de),i=He}return p===void 0&&(p=0,y=0,A=Math.ceil(n/l)),A===void 0&&(A=b.length-1),A=Math.min(A+1,b.length-1),{scrollHeight:i,start:p,end:A,offset:y}},[k,L,P,b,pe,n]),O=te.scrollHeight,fe=te.start,se=te.end,De=te.offset;$.current.start=fe,$.current.end=se;var rt=t.useState({width:0,height:n}),Ie=H(rt,2),G=Ie[0],nt=Ie[1],at=function(i){nt(i)},Pe=t.useRef(),Oe=t.useRef(),it=t.useMemo(function(){return qe(G.width,f)},[G.width,f]),ot=t.useMemo(function(){return qe(G.height,O)},[G.height,O]),xe=O-n,ye=t.useRef(xe);ye.current=xe;function lt(a){var i=a;return Number.isNaN(ye.current)||(i=Math.min(i,ye.current)),i=Math.max(i,0),i}var Ne=P<=0,ke=P>=xe,ut=tt(Ne,ke),we=function(){return{x:z?-Y:Y,y:P}},ze=t.useRef(we()),Le=je(function(){if(I){var a=we();(ze.current.x!==a.x||ze.current.y!==a.y)&&(I(a),ze.current=a)}});function Ye(a,i){var p=a;i?(Ae.flushSync(function(){ie(p)}),Le()):x(p)}function ct(a){var i=a.currentTarget.scrollTop;i!==P&&x(i),E==null||E(a),Le()}var Fe=function(i){var p=i,y=f-G.width;return p=Math.max(p,0),p=Math.min(p,y),p},ft=je(function(a,i){i?(Ae.flushSync(function(){ie(function(p){var y=p+(z?-a:a);return Fe(y)})}),Le()):x(function(p){var y=p+a;return y})}),st=Ht(L,Ne,ke,!!f,ft),Xe=H(st,2),_e=Xe[0],$e=Xe[1];Ct(L,T,function(a,i){return ut(a,i)?!1:(_e({preventDefault:function(){},deltaY:a}),!0)}),Te(function(){function a(p){L&&p.preventDefault()}var i=T.current;return i.addEventListener("wheel",_e),i.addEventListener("DOMMouseScroll",$e),i.addEventListener("MozMousePixelScroll",a),function(){i.removeEventListener("wheel",_e),i.removeEventListener("DOMMouseScroll",$e),i.removeEventListener("MozMousePixelScroll",a)}},[L]);var We=function(){var i,p;(i=Pe.current)===null||i===void 0||i.delayHidden(),(p=Oe.current)===null||p===void 0||p.delayHidden()},Ve=zt(T,b,ee,l,_,Q,x,We);t.useImperativeHandle(c,function(){return{getScrollInfo:we,scrollTo:function(i){function p(y){return y&&Ce(y)==="object"&&("left"in y||"top"in y)}p(i)?(i.left!==void 0&&ie(Fe(i.left)),Ve(i.top)):Ve(i)}}}),Te(function(){if(X){var a=b.slice(fe,se+1);X(a,b)}},[fe,se,b]);var vt=It(b,_,ee,l),dt=W==null?void 0:W({start:fe,end:se,virtual:k,offsetX:Y,offsetY:De,rtl:z,getSize:vt}),ht=xt(b,fe,se,f,Re,u,D),ve=null;n&&(ve=he(N({},g?"height":"maxHeight",n),Nt),L&&(ve.overflowY="hidden",f&&(ve.overflowX="hidden"),Se&&(ve.pointerEvents="none")));var Ke={};return z&&(Ke.dir="rtl"),t.createElement("div",Je({style:he(he({},S),{},{position:"relative"}),className:U},Ke,V),t.createElement(Qe,{onResize:at},t.createElement(w,{className:"".concat(o,"-holder"),style:ve,ref:T,onScroll:ct,onMouseEnter:We},t.createElement(et,{prefixCls:o,height:O,offsetX:Y,offsetY:De,scrollWidth:f,onInnerResize:Q,ref:B,innerProps:re,rtl:z,extra:dt},ht))),k&&O>n&&t.createElement(Ue,{ref:Pe,prefixCls:o,scrollOffset:P,scrollRange:O,rtl:z,onScroll:Ye,onStartMove:K,onStopMove:C,spinSize:ot,containerSize:G.height}),k&&f&&t.createElement(Ue,{ref:Oe,prefixCls:o,scrollOffset:Y,scrollRange:f,rtl:z,onScroll:Ye,onStartMove:K,onStopMove:C,spinSize:it,containerSize:G.width,horizontal:!0}))}var Yt=t.forwardRef(kt);Yt.displayName="List";export{Yt as L};