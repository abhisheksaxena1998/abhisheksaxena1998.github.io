import{g as H,e as u,c as se,b as de}from"./@babel-lqQsMmn5.js";import{P as Se}from"./@rc-component-35XQ0ZVh.js";import{e as xe,b as Me,x as Ne,K as ie,a as ve}from"./rc-util-fvOsdOwp.js";import{r as a}from"./react-jw9l9ZC3.js";import{c as z}from"./classnames-96-Rrpk_.js";import{C as fe}from"./rc-motion-n_VCCica.js";var me=a.createContext(null),he=a.createContext({}),Re=function(n){var v=n.prefixCls,h=n.className,f=n.style,m=n.children,s=n.containerRef,c=n.id,d=n.onMouseEnter,K=n.onMouseOver,y=n.onMouseLeave,O=n.onClick,g=n.onKeyDown,P=n.onKeyUp,r={onMouseEnter:d,onMouseOver:K,onMouseLeave:y,onClick:O,onKeyDown:g,onKeyUp:P},E=a.useContext(he),S=E.panel,x=xe(S,s);return a.createElement(a.Fragment,null,a.createElement("div",H({id:c,className:z("".concat(v,"-content"),h),style:u({},f),"aria-modal":"true",role:"dialog",ref:x},r),m))};function ye(e){return typeof e=="string"&&String(Number(e))===e?(Me(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var Ce={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function De(e,n){var v,h,f,m,s=e.prefixCls,c=e.open,d=e.placement,K=e.inline,y=e.push,O=e.forceRender,g=e.autoFocus,P=e.keyboard,r=e.classNames,E=e.rootClassName,S=e.rootStyle,x=e.zIndex,T=e.className,W=e.id,_=e.style,L=e.motion,q=e.width,G=e.height,J=e.children,Q=e.contentWrapperStyle,Z=e.mask,p=e.maskClosable,B=e.maskMotion,ee=e.maskClassName,V=e.maskStyle,k=e.afterOpenChange,I=e.onClose,ne=e.onMouseEnter,X=e.onMouseOver,ae=e.onMouseLeave,te=e.onClick,C=e.onKeyDown,Y=e.onKeyUp,l=e.styles,A=a.useRef(),F=a.useRef(),U=a.useRef();a.useImperativeHandle(n,function(){return A.current});var oe=function(i){var R=i.keyCode,D=i.shiftKey;switch(R){case ie.TAB:{if(R===ie.TAB){if(!D&&document.activeElement===U.current){var re;(re=F.current)===null||re===void 0||re.focus({preventScroll:!0})}else if(D&&document.activeElement===F.current){var le;(le=U.current)===null||le===void 0||le.focus({preventScroll:!0})}}break}case ie.ESC:{I&&P&&(i.stopPropagation(),I(i));break}}};a.useEffect(function(){if(c&&g){var t;(t=A.current)===null||t===void 0||t.focus({preventScroll:!0})}},[c]);var ue=a.useState(!1),M=se(ue,2),$=M[0],N=M[1],o=a.useContext(me),j;y===!1?j={distance:0}:y===!0?j={}:j=y||{};var w=(v=(h=(f=j)===null||f===void 0?void 0:f.distance)!==null&&h!==void 0?h:o==null?void 0:o.pushDistance)!==null&&v!==void 0?v:180,ke=a.useMemo(function(){return{pushDistance:w,push:function(){N(!0)},pull:function(){N(!1)}}},[w]);a.useEffect(function(){if(c){var t;o==null||(t=o.push)===null||t===void 0||t.call(o)}else{var i;o==null||(i=o.pull)===null||i===void 0||i.call(o)}},[c]),a.useEffect(function(){return function(){var t;o==null||(t=o.pull)===null||t===void 0||t.call(o)}},[]);var we=Z&&a.createElement(fe,H({key:"mask"},B,{visible:c}),function(t,i){var R=t.className,D=t.style;return a.createElement("div",{className:z("".concat(s,"-mask"),R,r==null?void 0:r.mask,ee),style:u(u(u({},D),V),l==null?void 0:l.mask),onClick:p&&c?I:void 0,ref:i})}),be=typeof L=="function"?L(d):L,b={};if($&&w)switch(d){case"top":b.transform="translateY(".concat(w,"px)");break;case"bottom":b.transform="translateY(".concat(-w,"px)");break;case"left":b.transform="translateX(".concat(w,"px)");break;default:b.transform="translateX(".concat(-w,"px)");break}d==="left"||d==="right"?b.width=ye(q):b.height=ye(G);var ge={onMouseEnter:ne,onMouseOver:X,onMouseLeave:ae,onClick:te,onKeyDown:C,onKeyUp:Y},Ee=a.createElement(fe,H({key:"panel"},be,{visible:c,forceRender:O,onVisibleChanged:function(i){k==null||k(i)},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),function(t,i){var R=t.className,D=t.style;return a.createElement("div",H({className:z("".concat(s,"-content-wrapper"),r==null?void 0:r.wrapper,R),style:u(u(u(u({},b),D),Q),l==null?void 0:l.wrapper)},Ne(e,{data:!0})),a.createElement(Re,H({id:W,containerRef:i,prefixCls:s,className:z(T,r==null?void 0:r.content),style:u(u({},_),l==null?void 0:l.content)},ge),J))}),ce=u({},S);return x&&(ce.zIndex=x),a.createElement(me.Provider,{value:ke},a.createElement("div",{className:z(s,"".concat(s,"-").concat(d),E,(m={},de(m,"".concat(s,"-open"),c),de(m,"".concat(s,"-inline"),K),m)),style:ce,tabIndex:-1,ref:A,onKeyDown:oe},we,a.createElement("div",{tabIndex:0,ref:F,style:Ce,"aria-hidden":"true","data-sentinel":"start"}),Ee,a.createElement("div",{tabIndex:0,ref:U,style:Ce,"aria-hidden":"true","data-sentinel":"end"})))}var Ke=a.forwardRef(De),Fe=function(n){var v=n.open,h=v===void 0?!1:v,f=n.prefixCls,m=f===void 0?"rc-drawer":f,s=n.placement,c=s===void 0?"right":s,d=n.autoFocus,K=d===void 0?!0:d,y=n.keyboard,O=y===void 0?!0:y,g=n.width,P=g===void 0?378:g,r=n.mask,E=r===void 0?!0:r,S=n.maskClosable,x=S===void 0?!0:S,T=n.getContainer,W=n.forceRender,_=n.afterOpenChange,L=n.destroyOnClose,q=n.onMouseEnter,G=n.onMouseOver,J=n.onMouseLeave,Q=n.onClick,Z=n.onKeyDown,p=n.onKeyUp,B=n.panelRef,ee=a.useState(!1),V=se(ee,2),k=V[0],I=V[1],ne=a.useState(!1),X=se(ne,2),ae=X[0],te=X[1];ve(function(){te(!0)},[]);var C=ae?h:!1,Y=a.useRef(),l=a.useRef();ve(function(){C&&(l.current=document.activeElement)},[C]);var A=function(M){var $;if(I(M),_==null||_(M),!M&&l.current&&!(($=Y.current)!==null&&$!==void 0&&$.contains(l.current))){var N;(N=l.current)===null||N===void 0||N.focus({preventScroll:!0})}},F=a.useMemo(function(){return{panel:B}},[B]);if(!W&&!k&&!C&&L)return null;var U={onMouseEnter:q,onMouseOver:G,onMouseLeave:J,onClick:Q,onKeyDown:Z,onKeyUp:p},oe=u(u({},n),{},{open:C,prefixCls:m,placement:c,autoFocus:K,keyboard:O,width:P,mask:E,maskClosable:x,inline:T===!1,afterOpenChange:A,ref:Y},U);return a.createElement(he.Provider,{value:F},a.createElement(Se,{open:C||W||k,autoDestroy:!1,getContainer:T,autoLock:E&&(C||k)},a.createElement(Ke,oe)))};export{Fe as D};