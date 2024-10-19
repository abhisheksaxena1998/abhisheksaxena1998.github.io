import{k as Re,c as T,d as Le,e as I,g as be,b as ve,f as _e}from"./@babel.CqxtU2kl.js";import{c as K}from"./classnames.CIPFGIzL.js";import{u as Be,B as Oe,r as he}from"./rc-input.6sqsoodD.js";import{e as ze,u as Se,q as xe}from"./rc-util.9PQy9ck0.js";import{r as d,a as x}from"./react.DPZx3FLm.js";import{R as De}from"./rc-resize-observer.XqflEGEn.js";var He=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Ke=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ue={},m;function Ye(e){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(w&&ue[a])return ue[a];var r=window.getComputedStyle(e),R=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),c=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),o=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),i=Ke.map(function(l){return"".concat(l,":").concat(r.getPropertyValue(l))}).join(";"),b={sizingStyle:i,paddingSize:c,borderSize:o,boxSizing:R};return w&&a&&(ue[a]=b),b}function je(e){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;m||(m=document.createElement("textarea"),m.setAttribute("tab-index","-1"),m.setAttribute("aria-hidden","true"),m.setAttribute("name","hiddenTextarea"),document.body.appendChild(m)),e.getAttribute("wrap")?m.setAttribute("wrap",e.getAttribute("wrap")):m.removeAttribute("wrap");var R=Ye(e,w),c=R.paddingSize,o=R.borderSize,i=R.boxSizing,b=R.sizingStyle;m.setAttribute("style","".concat(b,";").concat(He)),m.value=e.value||e.placeholder||"";var l=void 0,s=void 0,z,g=m.scrollHeight;if(i==="border-box"?g+=o:i==="content-box"&&(g-=c),a!==null||r!==null){m.value=" ";var F=m.scrollHeight-c;a!==null&&(l=F*a,i==="border-box"&&(l=l+c+o),g=Math.max(l,g)),r!==null&&(s=F*r,i==="border-box"&&(s=s+c+o),z=g>s?"":"hidden",g=Math.min(s,g))}var f={height:g,overflowY:z,resize:"none"};return l&&(f.minHeight=l),s&&(f.maxHeight=s),f}var ke=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],de=0,ce=1,fe=2,We=d.forwardRef(function(e,w){var a=e,r=a.prefixCls,R=a.defaultValue,c=a.value,o=a.autoSize,i=a.onResize,b=a.className,l=a.style,s=a.disabled,z=a.onChange;a.onInternalAutoSize;var g=Re(a,ke),F=ze(R,{value:c,postState:function(u){return u??""}}),f=T(F,2),L=f[0],U=f[1],J=function(u){U(u.target.value),z==null||z(u)},p=d.useRef();d.useImperativeHandle(w,function(){return{textArea:p.current}});var $=d.useMemo(function(){return o&&Le(o)==="object"?[o.minRows,o.maxRows]:[]},[o]),Y=T($,2),v=Y[0],y=Y[1],N=!!o,Q=function(){try{if(document.activeElement===p.current){var u=p.current,X=u.selectionStart,ae=u.selectionEnd,ne=u.scrollTop;p.current.setSelectionRange(X,ae),p.current.scrollTop=ne}}catch{}},j=d.useState(fe),_=T(j,2),C=_[0],V=_[1],ee=d.useState(),k=T(ee,2),W=k[0],B=k[1],O=function(){V(de)};Se(function(){N&&O()},[c,v,y,N]),Se(function(){if(C===de)V(ce);else if(C===ce){var h=je(p.current,!1,v,y);V(fe),B(h)}else Q()},[C]);var M=d.useRef(),Z=function(){xe.cancel(M.current)},G=function(u){C===fe&&(i==null||i(u),o&&(Z(),M.current=xe(function(){O()})))};d.useEffect(function(){return Z},[]);var te=N?W:null,P=I(I({},l),te);return(C===de||C===ce)&&(P.overflowY="hidden",P.overflowX="hidden"),d.createElement(De,{onResize:G,disabled:!(o||i)},d.createElement("textarea",be({},g,{ref:p,style:P,className:K(r,b,ve({},"".concat(r,"-disabled"),s)),disabled:s,value:L,onChange:J})))}),Ze=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],et=x.forwardRef(function(e,w){var a,r=e.defaultValue,R=e.value,c=e.onFocus,o=e.onBlur,i=e.onChange,b=e.allowClear,l=e.maxLength,s=e.onCompositionStart,z=e.onCompositionEnd,g=e.suffix,F=e.prefixCls,f=F===void 0?"rc-textarea":F,L=e.showCount,U=e.count,J=e.className,p=e.style,$=e.disabled,Y=e.hidden,v=e.classNames,y=e.styles,N=e.onResize,Q=e.onClear,j=e.onPressEnter,_=e.readOnly,C=e.autoSize,V=e.onKeyDown,ee=Re(e,Ze),k=ze(r,{value:R,defaultValue:r}),W=T(k,2),B=W[0],O=W[1],M=B==null?"":String(B),Z=x.useState(!1),G=T(Z,2),te=G[0],P=G[1],h=x.useRef(!1),u=x.useState(null),X=T(u,2),ae=X[0],ne=X[1],re=d.useRef(null),oe=d.useRef(null),E=function(){var t;return(t=oe.current)===null||t===void 0?void 0:t.textArea},me=function(){E().focus()};d.useImperativeHandle(w,function(){var n;return{resizableTextArea:oe.current,focus:me,blur:function(){E().blur()},nativeElement:((n=re.current)===null||n===void 0?void 0:n.nativeElement)||E()}}),d.useEffect(function(){P(function(n){return!$&&n})},[$]);var ye=x.useState(null),ge=T(ye,2),ie=ge[0],Ce=ge[1];x.useEffect(function(){if(ie){var n;(n=E()).setSelectionRange.apply(n,_e(ie))}},[ie]);var S=Be(U,L),D=(a=S.max)!==null&&a!==void 0?a:l,we=Number(D)>0,le=S.strategy(M),Ee=!!D&&le>D,pe=function(t,A){var q=A;!h.current&&S.exceedFormatter&&S.max&&S.strategy(A)>S.max&&(q=S.exceedFormatter(A,{max:S.max}),A!==q&&Ce([E().selectionStart||0,E().selectionEnd||0])),O(q),he(t.currentTarget,t,i,q)},Ae=function(t){h.current=!0,s==null||s(t)},Ie=function(t){h.current=!1,pe(t,t.currentTarget.value),z==null||z(t)},Te=function(t){pe(t,t.target.value)},Fe=function(t){t.key==="Enter"&&j&&j(t),V==null||V(t)},Ne=function(t){P(!0),c==null||c(t)},Ve=function(t){P(!1),o==null||o(t)},Pe=function(t){O(""),me(),he(E(),t,i)},se=g,H;S.show&&(S.showFormatter?H=S.showFormatter({value:M,count:le,maxLength:D}):H="".concat(le).concat(we?" / ".concat(D):""),se=x.createElement(x.Fragment,null,se,x.createElement("span",{className:K("".concat(f,"-data-count"),v==null?void 0:v.count),style:y==null?void 0:y.count},H)));var $e=function(t){var A;N==null||N(t),(A=E())!==null&&A!==void 0&&A.style.height&&ne(!0)},Me=!C&&!L&&!b;return x.createElement(Oe,{ref:re,value:M,allowClear:b,handleReset:Pe,suffix:se,prefixCls:f,classNames:I(I({},v),{},{affixWrapper:K(v==null?void 0:v.affixWrapper,ve(ve({},"".concat(f,"-show-count"),L),"".concat(f,"-textarea-allow-clear"),b))}),disabled:$,focused:te,className:K(J,Ee&&"".concat(f,"-out-of-range")),style:I(I({},p),ae&&!Me?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof H=="string"?H:void 0}},hidden:Y,readOnly:_,onClear:Q},x.createElement(We,be({},ee,{autoSize:C,maxLength:l,onKeyDown:Fe,onChange:Te,onFocus:Ne,onBlur:Ve,onCompositionStart:Ae,onCompositionEnd:Ie,className:K(v==null?void 0:v.textarea),style:I(I({},y==null?void 0:y.textarea),{},{resize:p==null?void 0:p.resize}),disabled:$,prefixCls:f,onResize:$e,ref:oe,readOnly:_})))});export{et as T};
