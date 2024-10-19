import{k as ke,c as I,b as ee,g as Ie}from"./@babel.CqxtU2kl.js";import{c as ne}from"./classnames.CIPFGIzL.js";import{K as S,e as ae,p as Se}from"./rc-util.9PQy9ck0.js";import{a as u,r as _e}from"./react.DPZx3FLm.js";function xe(e,r){var t=e.disabled,n=e.prefixCls,v=e.character,b=e.characterRender,c=e.index,_=e.count,f=e.value,x=e.allowHalf,y=e.focused,V=e.onHover,D=e.onClick,E=function(g){V(g,c)},L=function(g){D(g,c)},F=function(g){g.keyCode===S.ENTER&&D(g,c)},w=c+1,m=new Set([n]);f===0&&c===0&&y?m.add("".concat(n,"-focused")):x&&f+.5>=w&&f<w?(m.add("".concat(n,"-half")),m.add("".concat(n,"-active")),y&&m.add("".concat(n,"-focused"))):(w<=f?m.add("".concat(n,"-full")):m.add("".concat(n,"-zero")),w===f&&y&&m.add("".concat(n,"-focused")));var l=typeof v=="function"?v(e):v,R=u.createElement("li",{className:ne(Array.from(m)),ref:r},u.createElement("div",{onClick:t?null:L,onKeyDown:t?null:F,onMouseMove:t?null:E,role:"radio","aria-checked":f>c?"true":"false","aria-posinset":c+1,"aria-setsize":_,tabIndex:t?-1:0},u.createElement("div",{className:"".concat(n,"-first")},l),u.createElement("div",{className:"".concat(n,"-second")},l)));return b&&(R=b(R,e)),R}const Ve=u.forwardRef(xe);function De(){var e=_e.useRef({});function r(n){return e.current[n]}function t(n){return function(v){e.current[n]=v}}return[r,t]}function Ee(e){var r=e.pageXOffset,t="scrollLeft";if(typeof r!="number"){var n=e.document;r=n.documentElement[t],typeof r!="number"&&(r=n.body[t])}return r}function Fe(e){var r,t,n=e.ownerDocument,v=n.body,b=n&&n.documentElement,c=e.getBoundingClientRect();return r=c.left,t=c.top,r-=b.clientLeft||v.clientLeft||0,t-=b.clientTop||v.clientTop||0,{left:r,top:t}}function Le(e){var r=Fe(e),t=e.ownerDocument,n=t.defaultView||t.parentWindow;return r.left+=Ee(n),r.left}var Me=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","keyboard","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function Ne(e,r){var t=e.prefixCls,n=t===void 0?"rc-rate":t,v=e.className,b=e.defaultValue,c=e.value,_=e.count,f=_===void 0?5:_,x=e.allowHalf,y=x===void 0?!1:x,V=e.allowClear,D=V===void 0?!0:V,E=e.keyboard,L=E===void 0?!0:E,F=e.character,w=F===void 0?"★":F,m=e.characterRender,l=e.disabled,R=e.direction,h=R===void 0?"ltr":R,g=e.tabIndex,te=g===void 0?0:g,re=e.autoFocus,H=e.onHoverChange,M=e.onChange,N=e.onFocus,K=e.onBlur,$=e.onKeyDown,T=e.onMouseLeave,oe=ke(e,Me),le=De(),P=I(le,2),ue=P[0],ce=P[1],B=u.useRef(null),W=function(){if(!l){var a;(a=B.current)===null||a===void 0||a.focus()}};u.useImperativeHandle(r,function(){return{focus:W,blur:function(){if(!l){var a;(a=B.current)===null||a===void 0||a.blur()}}}});var ie=ae(b||0,{value:c}),X=I(ie,2),C=X[0],fe=X[1],de=ae(null),z=I(de,2),se=z[0],A=z[1],G=function(a,s){var o=h==="rtl",i=a+1;if(y){var Y=ue(a),Z=Le(Y),p=Y.clientWidth;(o&&s-Z>p/2||!o&&s-Z<p/2)&&(i-=.5)}return i},k=function(a){fe(a),M==null||M(a)},ve=u.useState(!1),O=I(ve,2),me=O[0],j=O[1],Ce=function(){j(!0),N==null||N()},ge=function(){j(!1),K==null||K()},be=u.useState(null),q=I(be,2),J=q[0],Q=q[1],ye=function(a,s){var o=G(s,a.pageX);o!==se&&(Q(o),A(null)),H==null||H(o)},U=function(a){l||(Q(null),A(null),H==null||H(void 0)),a&&(T==null||T(a))},we=function(a,s){var o=G(s,a.pageX),i=!1;D&&(i=o===C),U(),k(i?0:o),A(i?o:null)},Re=function(a){var s=a.keyCode,o=h==="rtl",i=y?.5:1;L&&(s===S.RIGHT&&C<f&&!o?(k(C+i),a.preventDefault()):s===S.LEFT&&C>0&&!o||s===S.RIGHT&&C>0&&o?(k(C-i),a.preventDefault()):s===S.LEFT&&C<f&&o&&(k(C+i),a.preventDefault())),$==null||$(a)};u.useEffect(function(){re&&!l&&W()},[]);var he=new Array(f).fill(0).map(function(d,a){return u.createElement(Ve,{ref:ce(a),index:a,count:f,disabled:l,prefixCls:"".concat(n,"-star"),allowHalf:y,value:J===null?C:J,onClick:we,onHover:ye,key:d||a,character:w,characterRender:m,focused:me})}),He=ne(n,v,ee(ee({},"".concat(n,"-disabled"),l),"".concat(n,"-rtl"),h==="rtl"));return u.createElement("ul",Ie({className:He,onMouseLeave:U,tabIndex:l?-1:te,onFocus:l?null:Ce,onBlur:l?null:ge,onKeyDown:l?null:Re,ref:B,role:"radiogroup"},Se(oe,{aria:!0,data:!0,attr:!0})),he)}const Ae=u.forwardRef(Ne);export{Ae as R};
