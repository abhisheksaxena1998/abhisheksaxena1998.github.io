import{e as w,a as C,c as Y}from"./@babel-d329d0e8.js";import{P as ce}from"./@rc-component-5162e4ee.js";import{r as n,R as s}from"./react-0dc647d4.js";import{c as W}from"./classnames-0ec0b352.js";import{e as fe,n as ue,A as me,B as F,K as G}from"./rc-util-0d114846.js";import{C as p}from"./rc-motion-acd4ad74.js";import"./react-is-e8e5dbb3.js";var ee=n.createContext({});function J(e,a,t){var o=a;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function Q(e,a){var t=e["page".concat(a?"Y":"X","Offset")],o="scroll".concat(a?"Top":"Left");if(typeof t!="number"){var r=e.document;t=r.documentElement[o],typeof t!="number"&&(t=r.body[o])}return t}function de(e){var a=e.getBoundingClientRect(),t={left:a.left,top:a.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return t.left+=Q(r),t.top+=Q(r,!0),t}const ve=n.memo(function(e){var a=e.children;return a},function(e,a){var t=a.shouldUpdate;return!t});var Z={width:0,height:0,overflow:"hidden",outline:"none"},Ce=s.forwardRef(function(e,a){var t=e.prefixCls,o=e.className,r=e.style,i=e.title,c=e.ariaId,f=e.footer,u=e.closable,y=e.closeIcon,N=e.onClose,b=e.children,d=e.bodyStyle,v=e.bodyProps,R=e.modalRender,h=e.onMouseDown,P=e.onMouseUp,D=e.holderRef,E=e.visible,I=e.forceRender,m=e.width,k=e.height,M=s.useContext(ee),O=M.panel,K=fe(D,O),_=n.useRef(),$=n.useRef();s.useImperativeHandle(a,function(){return{focus:function(){var g;(g=_.current)===null||g===void 0||g.focus()},changeActive:function(g){var U=document,V=U.activeElement;g&&V===$.current?_.current.focus():!g&&V===_.current&&$.current.focus()}}});var T={};m!==void 0&&(T.width=m),k!==void 0&&(T.height=k);var z;f&&(z=s.createElement("div",{className:"".concat(t,"-footer")},f));var x;i&&(x=s.createElement("div",{className:"".concat(t,"-header")},s.createElement("div",{className:"".concat(t,"-title"),id:c},i)));var S;u&&(S=s.createElement("button",{type:"button",onClick:N,"aria-label":"Close",className:"".concat(t,"-close")},y||s.createElement("span",{className:"".concat(t,"-close-x")})));var A=s.createElement("div",{className:"".concat(t,"-content")},S,x,s.createElement("div",w({className:"".concat(t,"-body"),style:d},v),b),z);return s.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?c:null,"aria-modal":"true",ref:K,style:C(C({},r),T),className:W(t,o),onMouseDown:h,onMouseUp:P},s.createElement("div",{tabIndex:0,ref:_,style:Z,"aria-hidden":"true"}),s.createElement(ve,{shouldUpdate:E||I},R?R(A):A),s.createElement("div",{tabIndex:0,ref:$,style:Z,"aria-hidden":"true"}))}),te=n.forwardRef(function(e,a){var t=e.prefixCls,o=e.title,r=e.style,i=e.className,c=e.visible,f=e.forceRender,u=e.destroyOnClose,y=e.motionName,N=e.ariaId,b=e.onVisibleChanged,d=e.mousePosition,v=n.useRef(),R=n.useState(),h=Y(R,2),P=h[0],D=h[1],E={};P&&(E.transformOrigin=P);function I(){var m=de(v.current);D(d?"".concat(d.x-m.left,"px ").concat(d.y-m.top,"px"):"")}return n.createElement(p,{visible:c,onVisibleChanged:b,onAppearPrepare:I,onEnterPrepare:I,forceRender:f,motionName:y,removeOnLeave:u,ref:v},function(m,k){var M=m.className,O=m.style;return n.createElement(Ce,w({},e,{ref:a,title:o,ariaId:N,prefixCls:t,holderRef:k,style:C(C(C({},O),r),E),className:W(i,M)}))})});te.displayName="Content";function ye(e){var a=e.prefixCls,t=e.style,o=e.visible,r=e.maskProps,i=e.motionName;return n.createElement(p,{key:"mask",visible:o,motionName:i,leavedClassName:"".concat(a,"-mask-hidden")},function(c,f){var u=c.className,y=c.style;return n.createElement("div",w({ref:f,style:C(C({},y),t),className:W("".concat(a,"-mask"),u)},r))})}function be(e){var a=e.prefixCls,t=a===void 0?"rc-dialog":a,o=e.zIndex,r=e.visible,i=r===void 0?!1:r,c=e.keyboard,f=c===void 0?!0:c,u=e.focusTriggerAfterClose,y=u===void 0?!0:u,N=e.wrapStyle,b=e.wrapClassName,d=e.wrapProps,v=e.onClose,R=e.afterOpenChange,h=e.afterClose,P=e.transitionName,D=e.animation,E=e.closable,I=E===void 0?!0:E,m=e.mask,k=m===void 0?!0:m,M=e.maskTransitionName,O=e.maskAnimation,K=e.maskClosable,_=K===void 0?!0:K,$=e.maskStyle,T=e.maskProps,z=e.rootClassName,x=n.useRef(),S=n.useRef(),A=n.useRef(),B=n.useState(i),g=Y(B,2),U=g[0],V=g[1],ae=ue();function ne(){F(S.current,document.activeElement)||(x.current=document.activeElement)}function oe(){if(!F(S.current,document.activeElement)){var l;(l=A.current)===null||l===void 0||l.focus()}}function re(l){if(l)oe();else{if(V(!1),k&&x.current&&y){try{x.current.focus({preventScroll:!0})}catch{}x.current=null}U&&(h==null||h())}R==null||R(l)}function j(l){v==null||v(l)}var L=n.useRef(!1),H=n.useRef(),ie=function(){clearTimeout(H.current),L.current=!0},le=function(){H.current=setTimeout(function(){L.current=!1})},q=null;_&&(q=function(X){L.current?L.current=!1:S.current===X.target&&j(X)});function se(l){if(f&&l.keyCode===G.ESC){l.stopPropagation(),j(l);return}i&&l.keyCode===G.TAB&&A.current.changeActive(!l.shiftKey)}return n.useEffect(function(){i&&(V(!0),ne())},[i]),n.useEffect(function(){return function(){clearTimeout(H.current)}},[]),n.createElement("div",w({className:W("".concat(t,"-root"),z)},me(e,{data:!0})),n.createElement(ye,{prefixCls:t,visible:k&&i,motionName:J(t,M,O),style:C({zIndex:o},$),maskProps:T}),n.createElement("div",w({tabIndex:-1,onKeyDown:se,className:W("".concat(t,"-wrap"),b),ref:S,onClick:q,style:C(C({zIndex:o},N),{},{display:U?null:"none"})},d),n.createElement(te,w({},e,{onMouseDown:ie,onMouseUp:le,ref:A,closable:I,ariaId:ae,prefixCls:t,visible:i&&U,onClose:j,onVisibleChanged:re,motionName:J(t,P,D)}))))}var Re=function(a){var t=a.visible,o=a.getContainer,r=a.forceRender,i=a.destroyOnClose,c=i===void 0?!1:i,f=a.afterClose,u=a.panelRef,y=n.useState(t),N=Y(y,2),b=N[0],d=N[1],v=n.useMemo(function(){return{panel:u}},[u]);return n.useEffect(function(){t&&d(!0)},[t]),!r&&c&&!b?null:n.createElement(ee.Provider,{value:v},n.createElement(ce,{open:t||r||b,autoDestroy:!1,getContainer:o,autoLock:t||b},n.createElement(be,w({},a,{destroyOnClose:c,afterClose:function(){f==null||f(),d(!1)}}))))};Re.displayName="Dialog";export{Re as D,Ce as P};