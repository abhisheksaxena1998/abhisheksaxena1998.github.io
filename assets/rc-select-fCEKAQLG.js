import{r as t,a as Cn}from"./react-gY946ZKh.js";import{w as lt,f as ct,x as fn,K as I,b as st,m as ft,e as dt,a as vt,p as In,q as mt,v as gt,c as pt,A as ht}from"./rc-util-RBoppPtV.js";import{c as je}from"./classnames-uKr76nPM.js";import{F as bt}from"./rc-overflow-WfkOJNdn.js";import"./react-dom-Wc9rTDnX.js";import"./rc-resize-observer-QJ9n6sHl.js";import"./rc-motion-S_lIiSSJ.js";import{d as dn,c as re,e as Q,b as ae,g as Ke,h as Ze,q as St,f as De}from"./@babel-Xj_bk_MP.js";import{c as wt}from"./@rc-component-lPyAtwCK.js";import{L as Ct}from"./rc-virtual-list-btFYbbwC.js";var vn=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.children,l=e.onMouseDown,f=e.onClick,v=typeof o=="function"?o(i):o;return t.createElement("span",{className:a,onMouseDown:function(m){m.preventDefault(),l==null||l(m)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:f,"aria-hidden":!0},v!==void 0?v:t.createElement("span",{className:je(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},r))},yt=function(e,a,o,i,r){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,f=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,g=Cn.useMemo(function(){if(dn(i)==="object")return i.clearIcon;if(r)return r},[i,r]),m=Cn.useMemo(function(){return!!(!l&&i&&(o.length||f)&&!(v==="combobox"&&f===""))},[i,l,o.length,f,v]);return{allowClear:m,clearIcon:Cn.createElement(vn,{className:"".concat(e,"-clear"),onMouseDown:a,customizeIcon:g},"×")}},Kn=t.createContext(null);function It(){return t.useContext(Kn)}function Et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=re(e,2),o=a[0],i=a[1],r=t.useRef(null),l=function(){window.clearTimeout(r.current)};t.useEffect(function(){return l},[]);var f=function(g,m){l(),r.current=window.setTimeout(function(){i(g),m&&m()},n)};return[o,f,l]}function $n(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Rt(n,e,a,o){var i=t.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function r(l){var f;if(!((f=i.current)!==null&&f!==void 0&&f.customizedTrigger)){var v=l.target;v.shadowRoot&&l.composed&&(v=l.composedPath()[0]||v),i.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(v)&&g!==v})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var Dt=function(e,a){var o,i=e.prefixCls,r=e.id,l=e.inputElement,f=e.disabled,v=e.tabIndex,g=e.autoFocus,m=e.autoComplete,s=e.editable,O=e.activeDescendantId,u=e.value,D=e.maxLength,S=e.onKeyDown,_=e.onMouseDown,N=e.onChange,K=e.onPaste,z=e.onCompositionStart,L=e.onCompositionEnd,G=e.open,W=e.attrs,Y=l||t.createElement("input",null),q=Y,le=q.ref,U=q.props,j=U.onKeyDown,F=U.onChange,ee=U.onMouseDown,V=U.onCompositionStart,X=U.onCompositionEnd,T=U.style;return lt(!("maxLength"in Y.props)),Y=t.cloneElement(Y,Q(Q(Q({type:"search"},U),{},{id:r,ref:ct(a,le),disabled:f,tabIndex:v,autoComplete:m||"off",autoFocus:g,className:je("".concat(i,"-selection-search-input"),(o=Y)===null||o===void 0||(o=o.props)===null||o===void 0?void 0:o.className),role:"combobox","aria-expanded":G||!1,"aria-haspopup":"listbox","aria-owns":"".concat(r,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(r,"_list"),"aria-activedescendant":G?O:void 0},W),{},{value:s?u:"",maxLength:D,readOnly:!s,unselectable:s?null:"on",style:Q(Q({},T),{},{opacity:s?null:0}),onKeyDown:function(p){S(p),j&&j(p)},onMouseDown:function(p){_(p),ee&&ee(p)},onChange:function(p){N(p),F&&F(p)},onCompositionStart:function(p){z(p),V&&V(p)},onCompositionEnd:function(p){L(p),X&&X(p)},onPaste:K})),Y},Bn=t.forwardRef(Dt);function zn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var xt=typeof window<"u"&&window.document&&window.document.documentElement,Mt=xt;function Ot(n){return n!=null}function Pt(n){return!n&&n!==0}function Vn(n){return["string","number"].includes(dn(n))}function Wn(n){var e=void 0;return n&&(Vn(n.title)?e=n.title.toString():Vn(n.label)&&(e=n.label.toString())),e}function Nt(n,e){Mt?t.useLayoutEffect(n,e):t.useEffect(n,e)}function _t(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Tn=function(e){e.preventDefault(),e.stopPropagation()},Vt=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,l=e.searchValue,f=e.autoClearSearchValue,v=e.inputRef,g=e.placeholder,m=e.disabled,s=e.mode,O=e.showSearch,u=e.autoFocus,D=e.autoComplete,S=e.activeDescendantId,_=e.tabIndex,N=e.removeIcon,K=e.maxTagCount,z=e.maxTagTextLength,L=e.maxTagPlaceholder,G=L===void 0?function(A){return"+ ".concat(A.length," ...")}:L,W=e.tagRender,Y=e.onToggleOpen,q=e.onRemove,le=e.onInputChange,U=e.onInputPaste,j=e.onInputKeyDown,F=e.onInputMouseDown,ee=e.onInputCompositionStart,V=e.onInputCompositionEnd,X=t.useRef(null),T=t.useState(0),E=re(T,2),p=E[0],se=E[1],de=t.useState(!1),Te=re(de,2),Se=Te[0],pe=Te[1],Z="".concat(o,"-selection"),Oe=r||s==="multiple"&&f===!1||s==="tags"?l:"",ne=s==="tags"||s==="multiple"&&f===!1||O&&(r||Se);Nt(function(){se(X.current.scrollWidth)},[Oe]);var Le=function(y,M,$,k,ce){return t.createElement("span",{title:Wn(y),className:je("".concat(Z,"-item"),ae({},"".concat(Z,"-item-disabled"),$))},t.createElement("span",{className:"".concat(Z,"-item-content")},M),k&&t.createElement(vn,{className:"".concat(Z,"-item-remove"),onMouseDown:Tn,onClick:ce,customizeIcon:N},"×"))},Pe=function(y,M,$,k,ce){var te=function(Ie){Tn(Ie),Y(!r)};return t.createElement("span",{onMouseDown:te},W({label:M,value:y,disabled:$,closable:k,onClose:ce}))},he=function(y){var M=y.disabled,$=y.label,k=y.value,ce=!m&&!M,te=$;if(typeof z=="number"&&(typeof $=="string"||typeof $=="number")){var we=String(te);we.length>z&&(te="".concat(we.slice(0,z),"..."))}var Ie=function(J){J&&J.stopPropagation(),q(y)};return typeof W=="function"?Pe(k,te,M,ce,Ie):Le(y,te,M,ce,Ie)},x=function(y){var M=typeof G=="function"?G(y):G;return Le({title:M},M,!1)},d=t.createElement("div",{className:"".concat(Z,"-search"),style:{width:p},onFocus:function(){pe(!0)},onBlur:function(){pe(!1)}},t.createElement(Bn,{ref:v,open:r,prefixCls:o,id:a,inputElement:null,disabled:m,autoFocus:u,autoComplete:D,editable:ne,activeDescendantId:S,value:Oe,onKeyDown:j,onMouseDown:F,onChange:le,onPaste:U,onCompositionStart:ee,onCompositionEnd:V,tabIndex:_,attrs:fn(e,!0)}),t.createElement("span",{ref:X,className:"".concat(Z,"-search-mirror"),"aria-hidden":!0},Oe," ")),w=t.createElement(bt,{prefixCls:"".concat(Z,"-overflow"),data:i,renderItem:he,renderRest:x,suffix:d,itemKey:_t,maxCount:K});return t.createElement(t.Fragment,null,w,!i.length&&!Oe&&t.createElement("span",{className:"".concat(Z,"-placeholder")},g))},Tt=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,l=e.disabled,f=e.autoFocus,v=e.autoComplete,g=e.activeDescendantId,m=e.mode,s=e.open,O=e.values,u=e.placeholder,D=e.tabIndex,S=e.showSearch,_=e.searchValue,N=e.activeValue,K=e.maxLength,z=e.onInputKeyDown,L=e.onInputMouseDown,G=e.onInputChange,W=e.onInputPaste,Y=e.onInputCompositionStart,q=e.onInputCompositionEnd,le=e.title,U=t.useState(!1),j=re(U,2),F=j[0],ee=j[1],V=m==="combobox",X=V||S,T=O[0],E=_||"";V&&N&&!F&&(E=N),t.useEffect(function(){V&&ee(!1)},[V,N]);var p=m!=="combobox"&&!s&&!S?!1:!!E,se=le===void 0?Wn(T):le,de=t.useMemo(function(){return T?null:t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:p?{visibility:"hidden"}:void 0},u)},[T,p,u,o]);return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Bn,{ref:r,prefixCls:o,id:i,open:s,inputElement:a,disabled:l,autoFocus:f,autoComplete:v,editable:X,activeDescendantId:g,value:E,onKeyDown:z,onMouseDown:L,onChange:function(Se){ee(!0),G(Se)},onPaste:W,onCompositionStart:Y,onCompositionEnd:q,tabIndex:D,attrs:fn(e,!0),maxLength:V?K:void 0})),!V&&T?t.createElement("span",{className:"".concat(o,"-selection-item"),title:se,style:p?{visibility:"hidden"}:void 0},T.label):null,de)};function Lt(n){return![I.ESC,I.SHIFT,I.BACKSPACE,I.TAB,I.WIN_KEY,I.ALT,I.META,I.WIN_KEY_RIGHT,I.CTRL,I.SEMICOLON,I.EQUALS,I.CAPS_LOCK,I.CONTEXT_MENU,I.F1,I.F2,I.F3,I.F4,I.F5,I.F6,I.F7,I.F8,I.F9,I.F10,I.F11,I.F12].includes(n)}var At=function(e,a){var o=t.useRef(null),i=t.useRef(!1),r=e.prefixCls,l=e.open,f=e.mode,v=e.showSearch,g=e.tokenWithEnter,m=e.autoClearSearchValue,s=e.onSearch,O=e.onSearchSubmit,u=e.onToggleOpen,D=e.onInputKeyDown,S=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var _=$n(0),N=re(_,2),K=N[0],z=N[1],L=function(E){var p=E.which;(p===I.UP||p===I.DOWN)&&E.preventDefault(),D&&D(E),p===I.ENTER&&f==="tags"&&!i.current&&!l&&(O==null||O(E.target.value)),Lt(p)&&u(!0)},G=function(){z(!0)},W=t.useRef(null),Y=function(E){s(E,!0,i.current)!==!1&&u(!0)},q=function(){i.current=!0},le=function(E){i.current=!1,f!=="combobox"&&Y(E.target.value)},U=function(E){var p=E.target.value;if(g&&W.current&&/[\r\n]/.test(W.current)){var se=W.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");p=p.replace(se,W.current)}W.current=null,Y(p)},j=function(E){var p=E.clipboardData,se=p==null?void 0:p.getData("text");W.current=se||""},F=function(E){var p=E.target;if(p!==o.current){var se=document.body.style.msTouchAction!==void 0;se?setTimeout(function(){o.current.focus()}):o.current.focus()}},ee=function(E){var p=K();E.target!==o.current&&!p&&f!=="combobox"&&E.preventDefault(),(f!=="combobox"&&(!v||!p)||!l)&&(l&&m!==!1&&s("",!0,!1),u())},V={inputRef:o,onInputKeyDown:L,onInputMouseDown:G,onInputChange:U,onInputPaste:j,onInputCompositionStart:q,onInputCompositionEnd:le},X=f==="multiple"||f==="tags"?t.createElement(Vt,Ke({},e,V)):t.createElement(Tt,Ke({},e,V));return t.createElement("div",{ref:S,className:"".concat(r,"-selector"),onClick:F,onMouseDown:ee},X)},Ft=t.forwardRef(At),kt=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Kt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},$t=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,l=e.popupElement,f=e.animation,v=e.transitionName,g=e.dropdownStyle,m=e.dropdownClassName,s=e.direction,O=s===void 0?"ltr":s,u=e.placement,D=e.builtinPlacements,S=e.dropdownMatchSelectWidth,_=e.dropdownRender,N=e.dropdownAlign,K=e.getPopupContainer,z=e.empty,L=e.getTriggerDOMNode,G=e.onPopupVisibleChange,W=e.onPopupMouseEnter,Y=Ze(e,kt),q="".concat(o,"-dropdown"),le=l;_&&(le=_(l));var U=t.useMemo(function(){return D||Kt(S)},[D,S]),j=f?"".concat(q,"-").concat(f):v,F=typeof S=="number",ee=t.useMemo(function(){return F?null:S===!1?"minWidth":"width"},[S,F]),V=g;F&&(V=Q(Q({},V),{},{width:S}));var X=t.useRef(null);return t.useImperativeHandle(a,function(){return{getPopupElement:function(){return X.current}}}),t.createElement(wt,Ke({},Y,{showAction:G?["click"]:[],hideAction:G?["click"]:[],popupPlacement:u||(O==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:U,prefixCls:q,popupTransitionName:j,popup:t.createElement("div",{ref:X,onMouseEnter:W},le),stretch:ee,popupAlign:N,popupVisible:i,getPopupContainer:K,popupClassName:je(m,ae({},"".concat(q,"-empty"),z)),popupStyle:V,getTriggerDOMNode:L,onPopupVisibleChange:G}),r)},Bt=t.forwardRef($t);function Ln(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function Un(n,e){var a=n||{},o=a.label,i=a.value,r=a.options,l=a.groupLabel,f=o||(e?"children":"label");return{label:f,value:i||"value",options:r||"options",groupLabel:l||f}}function zt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=Un(a,!1),l=r.label,f=r.value,v=r.options,g=r.groupLabel;function m(s,O){Array.isArray(s)&&s.forEach(function(u){if(O||!(v in u)){var D=u[f];i.push({key:Ln(u,i.length),groupOption:O,data:u,label:u[l],value:D})}else{var S=u[g];S===void 0&&o&&(S=u.label),i.push({key:Ln(u,i.length),group:!0,data:u,label:S}),m(u[v],!0)}})}return m(n,!1),i}function En(n){var e=Q({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return st(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}var Wt=function(e,a,o){if(!a||!a.length)return null;var i=!1,r=function f(v,g){var m=St(g),s=m[0],O=m.slice(1);if(!s)return[v];var u=v.split(s);return i=i||u.length>1,u.reduce(function(D,S){return[].concat(De(D),De(f(S,O)))},[]).filter(Boolean)},l=r(e,a);return i?typeof o<"u"?l.slice(0,o):l:null},Dn=t.createContext(null),Ut=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Ht=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],Rn=function(e){return e==="tags"||e==="multiple"},jt=t.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,l=n.className,f=n.showSearch,v=n.tagRender,g=n.direction,m=n.omitDomProps,s=n.displayValues,O=n.onDisplayValuesChange,u=n.emptyOptions,D=n.notFoundContent,S=D===void 0?"Not Found":D,_=n.onClear,N=n.mode,K=n.disabled,z=n.loading,L=n.getInputElement,G=n.getRawInputElement,W=n.open,Y=n.defaultOpen,q=n.onDropdownVisibleChange,le=n.activeValue,U=n.onActiveValueChange,j=n.activeDescendantId,F=n.searchValue,ee=n.autoClearSearchValue,V=n.onSearch,X=n.onSearchSplit,T=n.tokenSeparators,E=n.allowClear,p=n.suffixIcon,se=n.clearIcon,de=n.OptionList,Te=n.animation,Se=n.transitionName,pe=n.dropdownStyle,Z=n.dropdownClassName,Oe=n.dropdownMatchSelectWidth,ne=n.dropdownRender,Le=n.dropdownAlign,Pe=n.placement,he=n.builtinPlacements,x=n.getPopupContainer,d=n.showAction,w=d===void 0?[]:d,A=n.onFocus,y=n.onBlur,M=n.onKeyUp,$=n.onKeyDown,k=n.onMouseDown,ce=Ze(n,Ut),te=Rn(N),we=(f!==void 0?f:te)||N==="combobox",Ie=Q({},ce);Ht.forEach(function(P){delete Ie[P]}),m==null||m.forEach(function(P){delete Ie[P]});var $e=t.useState(!1),J=re($e,2),qe=J[0],en=J[1];t.useEffect(function(){en(ft())},[]);var Ae=t.useRef(null),ve=t.useRef(null),xe=t.useRef(null),ie=t.useRef(null),Ne=t.useRef(null),_e=t.useRef(!1),Ge=Et(),Ce=re(Ge,3),Be=Ce[0],ze=Ce[1],mn=Ce[2];t.useImperativeHandle(e,function(){var P,C;return{focus:(P=ie.current)===null||P===void 0?void 0:P.focus,blur:(C=ie.current)===null||C===void 0?void 0:C.blur,scrollTo:function(be){var oe;return(oe=Ne.current)===null||oe===void 0?void 0:oe.scrollTo(be)}}});var ye=t.useMemo(function(){var P;if(N!=="combobox")return F;var C=(P=s[0])===null||P===void 0?void 0:P.value;return typeof C=="string"||typeof C=="number"?String(C):""},[F,N,s]),an=N==="combobox"&&typeof L=="function"&&L()||null,Me=typeof G=="function"&&G(),gn=dt(ve,Me==null||(a=Me.props)===null||a===void 0?void 0:a.ref),pn=t.useState(!1),nn=re(pn,2),rn=nn[0],Xe=nn[1];vt(function(){Xe(!0)},[]);var un=In(!1,{defaultValue:Y,value:W}),ln=re(un,2),cn=ln[0],tn=ln[1],ue=rn?cn:!1,h=!S&&u;(K||h&&ue&&N==="combobox")&&(ue=!1);var b=h?!1:ue,c=t.useCallback(function(P){var C=P!==void 0?P:!ue;K||(tn(C),ue!==C&&(q==null||q(C)))},[K,ue,tn,q]),R=t.useMemo(function(){return(T||[]).some(function(P){return[`
`,`\r
`].includes(P)})},[T]),B=t.useContext(Dn)||{},H=B.maxCount,Ee=B.rawValues,Re=function(C,me,be){if(!((Ee==null?void 0:Ee.size)>=H)){var oe=!0,ge=C;U==null||U(null);var Ve=Wt(C,T,H&&H-Ee.size),We=be?null:Ve;return N!=="combobox"&&We&&(ge="",X==null||X(We),c(!1),oe=!1),V&&ye!==ge&&V(ge,{source:me?"typing":"effect"}),oe}},Ye=function(C){!C||!C.trim()||V(C,{source:"submit"})};t.useEffect(function(){!ue&&!te&&N!=="combobox"&&Re("",!1,!1)},[ue]),t.useEffect(function(){cn&&K&&tn(!1),K&&!_e.current&&ze(!1)},[K]);var fe=$n(),Fe=re(fe,2),hn=Fe[0],bn=Fe[1],xn=function(C){var me=hn(),be=C.which;if(be===I.ENTER&&(N!=="combobox"&&C.preventDefault(),ue||c(!0)),bn(!!ye),be===I.BACKSPACE&&!me&&te&&!ye&&s.length){for(var oe=De(s),ge=null,Ve=oe.length-1;Ve>=0;Ve-=1){var We=oe[Ve];if(!We.disabled){oe.splice(Ve,1),ge=We;break}}ge&&O(oe,{type:"remove",values:[ge]})}for(var Ue=arguments.length,Qe=new Array(Ue>1?Ue-1:0),He=1;He<Ue;He++)Qe[He-1]=arguments[He];if(ue){var sn;(sn=Ne.current)===null||sn===void 0||sn.onKeyDown.apply(sn,[C].concat(Qe))}$==null||$.apply(void 0,[C].concat(Qe))},on=function(C){for(var me=arguments.length,be=new Array(me>1?me-1:0),oe=1;oe<me;oe++)be[oe-1]=arguments[oe];if(ue){var ge;(ge=Ne.current)===null||ge===void 0||ge.onKeyUp.apply(ge,[C].concat(be))}M==null||M.apply(void 0,[C].concat(be))},ke=function(C){var me=s.filter(function(be){return be!==C});O(me,{type:"remove",values:[C]})},Sn=t.useRef(!1),qn=function(){ze(!0),K||(A&&!Sn.current&&A.apply(void 0,arguments),w.includes("focus")&&c(!0)),Sn.current=!0},Xn=function(){_e.current=!0,ze(!1,function(){Sn.current=!1,_e.current=!1,c(!1)}),!K&&(ye&&(N==="tags"?V(ye,{source:"submit"}):N==="multiple"&&V("",{source:"blur"})),y&&y.apply(void 0,arguments))},Je=[];t.useEffect(function(){return function(){Je.forEach(function(P){return clearTimeout(P)}),Je.splice(0,Je.length)}},[]);var Jn=function(C){var me,be=C.target,oe=(me=xe.current)===null||me===void 0?void 0:me.getPopupElement();if(oe&&oe.contains(be)){var ge=setTimeout(function(){var Qe=Je.indexOf(ge);if(Qe!==-1&&Je.splice(Qe,1),mn(),!qe&&!oe.contains(document.activeElement)){var He;(He=ie.current)===null||He===void 0||He.focus()}});Je.push(ge)}for(var Ve=arguments.length,We=new Array(Ve>1?Ve-1:0),Ue=1;Ue<Ve;Ue++)We[Ue-1]=arguments[Ue];k==null||k.apply(void 0,[C].concat(We))},Qn=t.useState({}),Zn=re(Qn,2),et=Zn[1];function nt(){et({})}var Mn;Me&&(Mn=function(C){c(C)}),Rt(function(){var P;return[Ae.current,(P=xe.current)===null||P===void 0?void 0:P.getPopupElement()]},b,c,!!Me);var tt=t.useMemo(function(){return Q(Q({},n),{},{notFoundContent:S,open:ue,triggerOpen:b,id:i,showSearch:we,multiple:te,toggleOpen:c})},[n,S,b,ue,i,we,te,c]),On=!!p||z,Pn;On&&(Pn=t.createElement(vn,{className:je("".concat(r,"-arrow"),ae({},"".concat(r,"-arrow-loading"),z)),customizeIcon:p,customizeIconProps:{loading:z,searchValue:ye,open:ue,focused:Be,showSearch:we}}));var ot=function(){var C;_==null||_(),(C=ie.current)===null||C===void 0||C.focus(),O([],{type:"clear",values:s}),Re("",!1,!1)},Nn=yt(r,ot,s,E,se,K,ye,N),at=Nn.allowClear,rt=Nn.clearIcon,it=t.createElement(de,{ref:Ne}),ut=je(r,l,(o={},ae(o,"".concat(r,"-focused"),Be),ae(o,"".concat(r,"-multiple"),te),ae(o,"".concat(r,"-single"),!te),ae(o,"".concat(r,"-allow-clear"),E),ae(o,"".concat(r,"-show-arrow"),On),ae(o,"".concat(r,"-disabled"),K),ae(o,"".concat(r,"-loading"),z),ae(o,"".concat(r,"-open"),ue),ae(o,"".concat(r,"-customize-input"),an),ae(o,"".concat(r,"-show-search"),we),o)),_n=t.createElement(Bt,{ref:xe,disabled:K,prefixCls:r,visible:b,popupElement:it,animation:Te,transitionName:Se,dropdownStyle:pe,dropdownClassName:Z,direction:g,dropdownMatchSelectWidth:Oe,dropdownRender:ne,dropdownAlign:Le,placement:Pe,builtinPlacements:he,getPopupContainer:x,empty:u,getTriggerDOMNode:function(){return ve.current},onPopupVisibleChange:Mn,onPopupMouseEnter:nt},Me?t.cloneElement(Me,{ref:gn}):t.createElement(Ft,Ke({},n,{domRef:ve,prefixCls:r,inputElement:an,ref:ie,id:i,showSearch:we,autoClearSearchValue:ee,mode:N,activeDescendantId:j,tagRender:v,values:s,open:ue,onToggleOpen:c,activeValue:le,searchValue:ye,onSearch:Re,onSearchSubmit:Ye,onRemove:ke,tokenWithEnter:R}))),wn;return Me?wn=_n:wn=t.createElement("div",Ke({className:ut},Ie,{ref:Ae,onMouseDown:Jn,onKeyDown:xn,onKeyUp:on,onFocus:qn,onBlur:Xn}),Be&&!ue&&t.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(s.map(function(P){var C=P.label,me=P.value;return["number","string"].includes(dn(C))?C:me}).join(", "))),_n,Pn,at&&rt),t.createElement(Kn.Provider,{value:tt},wn)}),Hn=function(){return null};Hn.isSelectOptGroup=!0;var jn=function(){return null};jn.isSelectOption=!0;function Gt(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Yt=["disabled","title","children","style","className"];function An(n){return typeof n=="string"||typeof n=="number"}var qt=function(e,a){var o=It(),i=o.prefixCls,r=o.id,l=o.open,f=o.multiple,v=o.mode,g=o.searchValue,m=o.toggleOpen,s=o.notFoundContent,O=o.onPopupScroll,u=t.useContext(Dn),D=u.maxCount,S=u.flattenOptions,_=u.onActiveValue,N=u.defaultActiveFirstOption,K=u.onSelect,z=u.menuItemSelectedIcon,L=u.rawValues,G=u.fieldNames,W=u.virtual,Y=u.direction,q=u.listHeight,le=u.listItemHeight,U=u.optionRender,j="".concat(i,"-item"),F=mt(function(){return S},[l,S],function(x,d){return d[0]&&x[1]!==d[1]}),ee=t.useRef(null),V=t.useMemo(function(){return f&&typeof D<"u"&&(L==null?void 0:L.size)>=D},[f,D,L==null?void 0:L.size]),X=function(d){d.preventDefault()},T=function(d){var w;(w=ee.current)===null||w===void 0||w.scrollTo(typeof d=="number"?{index:d}:d)},E=function(d){for(var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,A=F.length,y=0;y<A;y+=1){var M=(d+y*w+A)%A,$=F[M]||{},k=$.group,ce=$.data;if(!k&&!(ce!=null&&ce.disabled)&&!V)return M}return-1},p=t.useState(function(){return E(0)}),se=re(p,2),de=se[0],Te=se[1],Se=function(d){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Te(d);var A={source:w?"keyboard":"mouse"},y=F[d];if(!y){_(null,-1,A);return}_(y.value,d,A)};t.useEffect(function(){Se(N!==!1?E(0):-1)},[F.length,g]);var pe=t.useCallback(function(x){return L.has(x)&&v!=="combobox"},[v,De(L).toString(),L.size]);t.useEffect(function(){var x=setTimeout(function(){if(!f&&l&&L.size===1){var w=Array.from(L)[0],A=F.findIndex(function(y){var M=y.data;return M.value===w});A!==-1&&(Se(A),T(A))}});if(l){var d;(d=ee.current)===null||d===void 0||d.scrollTo(void 0)}return function(){return clearTimeout(x)}},[l,g]);var Z=function(d){d!==void 0&&K(d,{selected:!L.has(d)}),f||m(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(d){var w=d.which,A=d.ctrlKey;switch(w){case I.N:case I.P:case I.UP:case I.DOWN:{var y=0;if(w===I.UP?y=-1:w===I.DOWN?y=1:Gt()&&A&&(w===I.N?y=1:w===I.P&&(y=-1)),y!==0){var M=E(de+y,y);T(M),Se(M,!0)}break}case I.ENTER:{var $,k=F[de];k&&!(k!=null&&($=k.data)!==null&&$!==void 0&&$.disabled)&&!V?Z(k.value):Z(void 0),l&&d.preventDefault();break}case I.ESC:m(!1),l&&d.stopPropagation()}},onKeyUp:function(){},scrollTo:function(d){T(d)}}}),F.length===0)return t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(j,"-empty"),onMouseDown:X},s);var Oe=Object.keys(G).map(function(x){return G[x]}),ne=function(d){return d.label};function Le(x,d){var w=x.group;return{role:w?"presentation":"option",id:"".concat(r,"_list_").concat(d)}}var Pe=function(d){var w=F[d];if(!w)return null;var A=w.data||{},y=A.value,M=w.group,$=fn(A,!0),k=ne(w);return w?t.createElement("div",Ke({"aria-label":typeof k=="string"&&!M?k:null},$,{key:d},Le(w,d),{"aria-selected":pe(y)}),y):null},he={role:"listbox",id:"".concat(r,"_list")};return t.createElement(t.Fragment,null,W&&t.createElement("div",Ke({},he,{style:{height:0,width:0,overflow:"hidden"}}),Pe(de-1),Pe(de),Pe(de+1)),t.createElement(Ct,{itemKey:"key",ref:ee,data:F,height:q,itemHeight:le,fullHeight:!1,onMouseDown:X,onScroll:O,virtual:W,direction:Y,innerProps:W?null:he},function(x,d){var w,A=x.group,y=x.groupOption,M=x.data,$=x.label,k=x.value,ce=M.key;if(A){var te,we=(te=M.title)!==null&&te!==void 0?te:An($)?$.toString():void 0;return t.createElement("div",{className:je(j,"".concat(j,"-group")),title:we},$!==void 0?$:ce)}var Ie=M.disabled,$e=M.title;M.children;var J=M.style,qe=M.className,en=Ze(M,Yt),Ae=gt(en,Oe),ve=pe(k),xe=Ie||!ve&&V,ie="".concat(j,"-option"),Ne=je(j,ie,qe,(w={},ae(w,"".concat(ie,"-grouped"),y),ae(w,"".concat(ie,"-active"),de===d&&!xe),ae(w,"".concat(ie,"-disabled"),xe),ae(w,"".concat(ie,"-selected"),ve),w)),_e=ne(x),Ge=!z||typeof z=="function"||ve,Ce=typeof _e=="number"?_e:_e||k,Be=An(Ce)?Ce.toString():void 0;return $e!==void 0&&(Be=$e),t.createElement("div",Ke({},fn(Ae),W?{}:Le(x,d),{"aria-selected":ve,className:Ne,title:Be,onMouseMove:function(){de===d||xe||Se(d)},onClick:function(){xe||Z(k)},style:J}),t.createElement("div",{className:"".concat(ie,"-content")},typeof U=="function"?U(x,{index:d}):Ce),t.isValidElement(z)||ve,Ge&&t.createElement(vn,{className:"".concat(j,"-option-state"),customizeIcon:z,customizeIconProps:{value:k,disabled:xe,isSelected:ve}},ve?"✓":null))}))},Xt=t.forwardRef(qt);const Jt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var r=a.current,l=r.values,f=r.options,v=n.map(function(s){if(s.label===void 0){var O;return Q(Q({},s),{},{label:(O=l.get(s.value))===null||O===void 0?void 0:O.label})}return s}),g=new Map,m=new Map;return v.forEach(function(s){g.set(s.value,s),m.set(s.value,e.get(s.value)||f.get(s.value))}),a.current.values=g,a.current.options=m,v},[n,e]),i=t.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function yn(n,e){return zn(n).join("").toUpperCase().includes(e)}const Qt=function(n,e,a,o,i){return t.useMemo(function(){if(!a||o===!1)return n;var r=e.options,l=e.label,f=e.value,v=[],g=typeof o=="function",m=a.toUpperCase(),s=g?o:function(u,D){return i?yn(D[i],m):D[r]?yn(D[l!=="children"?l:"label"],m):yn(D[f],m)},O=g?function(u){return En(u)}:function(u){return u};return n.forEach(function(u){if(u[r]){var D=s(a,O(u));if(D)v.push(u);else{var S=u[r].filter(function(_){return s(a,O(_))});S.length&&v.push(Q(Q({},u),{},ae({},r,S)))}return}s(a,O(u))&&v.push(u)}),v},[n,o,i,a,e])};var Fn=0,Zt=pt();function eo(){var n;return Zt?(n=Fn,Fn+=1):n="TEST_OR_SSR",n}function no(n){var e=t.useState(),a=re(e,2),o=a[0],i=a[1];return t.useEffect(function(){i("rc_select_".concat(eo()))},[]),n||o}var to=["children","value"],oo=["children"];function ao(n){var e=n,a=e.key,o=e.props,i=o.children,r=o.value,l=Ze(o,to);return Q({key:a,value:r!==void 0?r:a,children:i},l)}function Gn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ht(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,l=i.key,f=i.props,v=f.children,g=Ze(f,oo);return e||!r?ao(a):Q(Q({key:"__RC_SELECT_GRP__".concat(l===null?o:l,"__"),label:l},g),{},{options:Gn(v)})}).filter(function(a){return a})}var ro=function(e,a,o,i,r){return t.useMemo(function(){var l=e,f=!e;f&&(l=Gn(a));var v=new Map,g=new Map,m=function(u,D,S){S&&typeof S=="string"&&u.set(D[S],D)},s=function O(u){for(var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S=0;S<u.length;S+=1){var _=u[S];!_[o.options]||D?(v.set(_[o.value],_),m(g,_,o.label),m(g,_,i),m(g,_,r)):O(_[o.options],!0)}};return s(l),{options:l,valueOptions:v,labelOptions:g}},[e,a,o,i,r])};function kn(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var io=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange","maxCount"],uo=["inputValue"];function lo(n){return!n||dn(n)!=="object"}var co=t.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,l=n.backfill,f=n.fieldNames,v=n.inputValue,g=n.searchValue,m=n.onSearch,s=n.autoClearSearchValue,O=s===void 0?!0:s,u=n.onSelect,D=n.onDeselect,S=n.dropdownMatchSelectWidth,_=S===void 0?!0:S,N=n.filterOption,K=n.filterSort,z=n.optionFilterProp,L=n.optionLabelProp,G=n.options,W=n.optionRender,Y=n.children,q=n.defaultActiveFirstOption,le=n.menuItemSelectedIcon,U=n.virtual,j=n.direction,F=n.listHeight,ee=F===void 0?200:F,V=n.listItemHeight,X=V===void 0?20:V,T=n.value,E=n.defaultValue,p=n.labelInValue,se=n.onChange,de=n.maxCount,Te=Ze(n,io),Se=no(a),pe=Rn(o),Z=!!(!G&&Y),Oe=t.useMemo(function(){return N===void 0&&o==="combobox"?!1:N},[N,o]),ne=t.useMemo(function(){return Un(f,Z)},[JSON.stringify(f),Z]),Le=In("",{value:g!==void 0?g:v,postState:function(b){return b||""}}),Pe=re(Le,2),he=Pe[0],x=Pe[1],d=ro(G,Y,ne,z,L),w=d.valueOptions,A=d.labelOptions,y=d.options,M=t.useCallback(function(h){var b=zn(h);return b.map(function(c){var R,B,H,Ee,Re;if(lo(c))R=c;else{var Ye;H=c.key,B=c.label,R=(Ye=c.value)!==null&&Ye!==void 0?Ye:H}var fe=w.get(R);if(fe){var Fe;B===void 0&&(B=fe==null?void 0:fe[L||ne.label]),H===void 0&&(H=(Fe=fe==null?void 0:fe.key)!==null&&Fe!==void 0?Fe:R),Ee=fe==null?void 0:fe.disabled,Re=fe==null?void 0:fe.title}return{label:B,value:R,key:H,disabled:Ee,title:Re}})},[ne,L,w]),$=In(E,{value:T}),k=re($,2),ce=k[0],te=k[1],we=t.useMemo(function(){var h,b=pe&&ce===null?[]:ce,c=M(b);return o==="combobox"&&Pt((h=c[0])===null||h===void 0?void 0:h.value)?[]:c},[ce,M,o,pe]),Ie=Jt(we,w),$e=re(Ie,2),J=$e[0],qe=$e[1],en=t.useMemo(function(){if(!o&&J.length===1){var h=J[0];if(h.value===null&&(h.label===null||h.label===void 0))return[]}return J.map(function(b){var c;return Q(Q({},b),{},{label:(c=b.label)!==null&&c!==void 0?c:b.value})})},[o,J]),Ae=t.useMemo(function(){return new Set(J.map(function(h){return h.value}))},[J]);t.useEffect(function(){if(o==="combobox"){var h,b=(h=J[0])===null||h===void 0?void 0:h.value;x(Ot(b)?String(b):"")}},[J]);var ve=kn(function(h,b){var c,R=b??h;return c={},ae(c,ne.value,h),ae(c,ne.label,R),c}),xe=t.useMemo(function(){if(o!=="tags")return y;var h=De(y),b=function(R){return w.has(R)};return De(J).sort(function(c,R){return c.value<R.value?-1:1}).forEach(function(c){var R=c.value;b(R)||h.push(ve(R,c.label))}),h},[ve,y,w,J,o]),ie=Qt(xe,ne,he,Oe,z),Ne=t.useMemo(function(){return o!=="tags"||!he||ie.some(function(h){return h[z||"value"]===he})||ie.some(function(h){return h[ne.value]===he})?ie:[ve(he)].concat(De(ie))},[ve,z,o,ie,he,ne]),_e=t.useMemo(function(){return K?De(Ne).sort(function(h,b){return K(h,b)}):Ne},[Ne,K]),Ge=t.useMemo(function(){return zt(_e,{fieldNames:ne,childrenAsData:Z})},[_e,ne,Z]),Ce=function(b){var c=M(b);if(te(c),se&&(c.length!==J.length||c.some(function(H,Ee){var Re;return((Re=J[Ee])===null||Re===void 0?void 0:Re.value)!==(H==null?void 0:H.value)}))){var R=p?c:c.map(function(H){return H.value}),B=c.map(function(H){return En(qe(H.value))});se(pe?R:R[0],pe?B:B[0])}},Be=t.useState(null),ze=re(Be,2),mn=ze[0],ye=ze[1],an=t.useState(0),Me=re(an,2),gn=Me[0],pn=Me[1],nn=q!==void 0?q:o!=="combobox",rn=t.useCallback(function(h,b){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},R=c.source,B=R===void 0?"keyboard":R;pn(b),l&&o==="combobox"&&h!==null&&B==="keyboard"&&ye(String(h))},[l,o]),Xe=function(b,c,R){var B=function(){var on,ke=qe(b);return[p?{label:ke==null?void 0:ke[ne.label],value:b,key:(on=ke==null?void 0:ke.key)!==null&&on!==void 0?on:b}:b,En(ke)]};if(c&&u){var H=B(),Ee=re(H,2),Re=Ee[0],Ye=Ee[1];u(Re,Ye)}else if(!c&&D&&R!=="clear"){var fe=B(),Fe=re(fe,2),hn=Fe[0],bn=Fe[1];D(hn,bn)}},un=kn(function(h,b){var c,R=pe?b.selected:!0;R?c=pe?[].concat(De(J),[h]):[h]:c=J.filter(function(B){return B.value!==h}),Ce(c),Xe(h,R),o==="combobox"?ye(""):(!Rn||O)&&(x(""),ye(""))}),ln=function(b,c){Ce(b);var R=c.type,B=c.values;(R==="remove"||R==="clear")&&B.forEach(function(H){Xe(H.value,!1,R)})},cn=function(b,c){if(x(b),ye(null),c.source==="submit"){var R=(b||"").trim();if(R){var B=Array.from(new Set([].concat(De(Ae),[R])));Ce(B),Xe(R,!0),x("")}return}c.source!=="blur"&&(o==="combobox"&&Ce(b),m==null||m(b))},tn=function(b){var c=b;o!=="tags"&&(c=b.map(function(B){var H=A.get(B);return H==null?void 0:H.value}).filter(function(B){return B!==void 0}));var R=Array.from(new Set([].concat(De(Ae),De(c))));Ce(R),R.forEach(function(B){Xe(B,!0)})},ue=t.useMemo(function(){var h=U!==!1&&_!==!1;return Q(Q({},d),{},{flattenOptions:Ge,onActiveValue:rn,defaultActiveFirstOption:nn,onSelect:un,menuItemSelectedIcon:le,rawValues:Ae,fieldNames:ne,virtual:h,direction:j,listHeight:ee,listItemHeight:X,childrenAsData:Z,maxCount:de,optionRender:W})},[de,d,Ge,rn,nn,un,le,Ae,ne,U,_,j,ee,X,Z,W]);return t.createElement(Dn.Provider,{value:ue},t.createElement(jt,Ke({},Te,{id:Se,prefixCls:r,ref:e,omitDomProps:uo,mode:o,displayValues:en,onDisplayValuesChange:ln,direction:j,searchValue:he,onSearch:cn,autoClearSearchValue:O,onSearchSplit:tn,dropdownMatchSelectWidth:_,OptionList:Xt,emptyOptions:!Ge.length,activeValue:mn,activeDescendantId:"".concat(Se,"_list_").concat(gn)})))}),Yn=co;Yn.Option=jn;Yn.OptGroup=Hn;export{jt as B,jn as O,Yn as T,Hn as a,no as b,It as u};