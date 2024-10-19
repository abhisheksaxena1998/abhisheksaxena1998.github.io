import{r as t,a as In}from"./react.DPZx3FLm.js";import"./react-is.DcfIKM1A.js";import{K as D,w as st,i as ft,p as mn,b as dt,m as vt,h as mt,u as gt,e as Rn,t as pt,x as ht,c as bt,A as St}from"./rc-util.9PQy9ck0.js";import{c as je}from"./classnames.CIPFGIzL.js";import{F as wt}from"./rc-overflow.I4o3U_CK.js";import"./react-dom.stFbKHXB.js";import"./rc-resize-observer.XqflEGEn.js";import"./rc-motion.cq0Hvde5.js";import{d as gn,c as ie,e as H,b as re,g as ze,k as rn,t as Ct,f as ye}from"./@babel.CqxtU2kl.js";import{d as yt}from"./@rc-component.icrtlwR4.js";import{L as It}from"./rc-virtual-list.BWJs4OTy.js";var pn=function(e){var a=e.className,o=e.customizeIcon,r=e.customizeIconProps,i=e.children,u=e.onMouseDown,c=e.onClick,v=typeof o=="function"?o(r):o;return t.createElement("span",{className:a,onMouseDown:function(s){s.preventDefault(),u==null||u(s)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},v!==void 0?v:t.createElement("span",{className:je(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},i))},Et=function(e,a,o,r,i){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,c=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,g=In.useMemo(function(){if(gn(r)==="object")return r.clearIcon;if(i)return i},[r,i]),s=In.useMemo(function(){return!!(!u&&r&&(o.length||c)&&!(v==="combobox"&&c===""))},[r,u,o.length,c,v]);return{allowClear:s,clearIcon:In.createElement(pn,{className:"".concat(e,"-clear"),onMouseDown:a,customizeIcon:g},"×")}},zn=t.createContext(null);function Rt(){return t.useContext(zn)}function Dt(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=ie(e,2),o=a[0],r=a[1],i=t.useRef(null),u=function(){window.clearTimeout(i.current)};t.useEffect(function(){return u},[]);var c=function(g,s){u(),i.current=window.setTimeout(function(){r(g),s&&s()},n)};return[o,c,u]}function Wn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(r){(r||e.current===null)&&(e.current=r),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function xt(n,e,a,o){var r=t.useRef(null);r.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function i(u){var c;if(!((c=r.current)!==null&&c!==void 0&&c.customizedTrigger)){var v=u.target;v.shadowRoot&&u.composed&&(v=u.composedPath()[0]||v),r.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(v)&&g!==v})&&r.current.triggerOpen(!1)}}return window.addEventListener("mousedown",i),function(){return window.removeEventListener("mousedown",i)}},[])}function Mt(n){return![D.ESC,D.SHIFT,D.BACKSPACE,D.TAB,D.WIN_KEY,D.ALT,D.META,D.WIN_KEY_RIGHT,D.CTRL,D.SEMICOLON,D.EQUALS,D.CAPS_LOCK,D.CONTEXT_MENU,D.F1,D.F2,D.F3,D.F4,D.F5,D.F6,D.F7,D.F8,D.F9,D.F10,D.F11,D.F12].includes(n)}var Ot=function(e,a){var o,r=e.prefixCls,i=e.id,u=e.inputElement,c=e.disabled,v=e.tabIndex,g=e.autoFocus,s=e.autoComplete,m=e.editable,O=e.activeDescendantId,l=e.value,R=e.maxLength,C=e.onKeyDown,I=e.onMouseDown,L=e.onChange,Z=e.onPaste,W=e.onCompositionStart,_=e.onCompositionEnd,J=e.open,ee=e.attrs,A=u||t.createElement("input",null),oe=A,ae=oe.ref,j=oe.props,z=j.onKeyDown,$=j.onChange,U=j.onMouseDown,K=j.onCompositionStart,G=j.onCompositionEnd,Y=j.style;return st(!("maxLength"in A.props)),A=t.cloneElement(A,H(H(H({type:"search"},j),{},{id:i,ref:ft(a,ae),disabled:c,tabIndex:v,autoComplete:s||"off",autoFocus:g,className:je("".concat(r,"-selection-search-input"),(o=A)===null||o===void 0||(o=o.props)===null||o===void 0?void 0:o.className),role:"combobox","aria-expanded":J||!1,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":J?O:void 0},ee),{},{value:m?l:"",maxLength:R,readOnly:!m,unselectable:m?null:"on",style:H(H({},Y),{},{opacity:m?null:0}),onKeyDown:function(b){C(b),z&&z(b)},onMouseDown:function(b){I(b),U&&U(b)},onChange:function(b){L(b),$&&$(b)},onCompositionStart:function(b){W(b),K&&K(b)},onCompositionEnd:function(b){_(b),G&&G(b)},onPaste:Z})),A},Un=t.forwardRef(Ot);function Hn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var Pt=typeof window<"u"&&window.document&&window.document.documentElement,Nt=Pt;function Vt(n){return n!=null}function _t(n){return!n&&n!==0}function An(n){return["string","number"].includes(gn(n))}function jn(n){var e=void 0;return n&&(An(n.title)?e=n.title.toString():An(n.label)&&(e=n.label.toString())),e}function Tt(n,e){Nt?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Lt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Fn=function(e){e.preventDefault(),e.stopPropagation()},At=function(e){var a=e.id,o=e.prefixCls,r=e.values,i=e.open,u=e.searchValue,c=e.autoClearSearchValue,v=e.inputRef,g=e.placeholder,s=e.disabled,m=e.mode,O=e.showSearch,l=e.autoFocus,R=e.autoComplete,C=e.activeDescendantId,I=e.tabIndex,L=e.removeIcon,Z=e.maxTagCount,W=e.maxTagTextLength,_=e.maxTagPlaceholder,J=_===void 0?function(P){return"+ ".concat(P.length," ...")}:_,ee=e.tagRender,A=e.onToggleOpen,oe=e.onRemove,ae=e.onInputChange,j=e.onInputPaste,z=e.onInputKeyDown,$=e.onInputMouseDown,U=e.onInputCompositionStart,K=e.onInputCompositionEnd,G=t.useRef(null),Y=t.useState(0),M=ie(Y,2),b=M[0],F=M[1],Q=t.useState(!1),Re=ie(Q,2),we=Re[0],De=Re[1],ne="".concat(o,"-selection"),me=i||m==="multiple"&&c===!1||m==="tags"?u:"",We=m==="tags"||m==="multiple"&&c===!1||O&&(i||we);Tt(function(){F(G.current.scrollWidth)},[me]);var te=function(h,N,k,q,B){return t.createElement("span",{title:jn(h),className:je("".concat(ne,"-item"),re({},"".concat(ne,"-item-disabled"),k))},t.createElement("span",{className:"".concat(ne,"-item-content")},N),q&&t.createElement(pn,{className:"".concat(ne,"-item-remove"),onMouseDown:Fn,onClick:B,customizeIcon:L},"×"))},xe=function(h,N,k,q,B,ce){var Ce=function(Te){Fn(Te),A(!i)};return t.createElement("span",{onMouseDown:Ce},ee({label:N,value:h,disabled:k,closable:q,onClose:B,isMaxTag:!!ce}))},_e=function(h){var N=h.disabled,k=h.label,q=h.value,B=!s&&!N,ce=k;if(typeof W=="number"&&(typeof k=="string"||typeof k=="number")){var Ce=String(ce);Ce.length>W&&(ce="".concat(Ce.slice(0,W),"..."))}var Me=function(Le){Le&&Le.stopPropagation(),oe(h)};return typeof ee=="function"?xe(q,ce,N,B,Me):te(h,ce,N,B,Me)},y=function(h){var N=typeof J=="function"?J(h):J;return typeof ee=="function"?xe(void 0,N,!1,!1,void 0,!0):te({title:N},N,!1)},f=t.createElement("div",{className:"".concat(ne,"-search"),style:{width:b},onFocus:function(){De(!0)},onBlur:function(){De(!1)}},t.createElement(Un,{ref:v,open:i,prefixCls:o,id:a,inputElement:null,disabled:s,autoFocus:l,autoComplete:R,editable:We,activeDescendantId:C,value:me,onKeyDown:z,onMouseDown:$,onChange:ae,onPaste:j,onCompositionStart:U,onCompositionEnd:K,tabIndex:I,attrs:mn(e,!0)}),t.createElement("span",{ref:G,className:"".concat(ne,"-search-mirror"),"aria-hidden":!0},me," ")),x=t.createElement(wt,{prefixCls:"".concat(ne,"-overflow"),data:r,renderItem:_e,renderRest:y,suffix:f,itemKey:Lt,maxCount:Z});return t.createElement(t.Fragment,null,x,!r.length&&!me&&t.createElement("span",{className:"".concat(ne,"-placeholder")},g))},Ft=function(e){var a=e.inputElement,o=e.prefixCls,r=e.id,i=e.inputRef,u=e.disabled,c=e.autoFocus,v=e.autoComplete,g=e.activeDescendantId,s=e.mode,m=e.open,O=e.values,l=e.placeholder,R=e.tabIndex,C=e.showSearch,I=e.searchValue,L=e.activeValue,Z=e.maxLength,W=e.onInputKeyDown,_=e.onInputMouseDown,J=e.onInputChange,ee=e.onInputPaste,A=e.onInputCompositionStart,oe=e.onInputCompositionEnd,ae=e.title,j=t.useState(!1),z=ie(j,2),$=z[0],U=z[1],K=s==="combobox",G=K||C,Y=O[0],M=I||"";K&&L&&!$&&(M=L),t.useEffect(function(){K&&U(!1)},[K,L]);var b=s!=="combobox"&&!m&&!C?!1:!!M,F=ae===void 0?jn(Y):ae,Q=t.useMemo(function(){return Y?null:t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:b?{visibility:"hidden"}:void 0},l)},[Y,b,l,o]);return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(Un,{ref:i,prefixCls:o,id:r,open:m,inputElement:a,disabled:u,autoFocus:c,autoComplete:v,editable:G,activeDescendantId:g,value:M,onKeyDown:W,onMouseDown:_,onChange:function(we){U(!0),J(we)},onPaste:ee,onCompositionStart:A,onCompositionEnd:oe,tabIndex:R,attrs:mn(e,!0),maxLength:K?Z:void 0})),!K&&Y?t.createElement("span",{className:"".concat(o,"-selection-item"),title:F,style:b?{visibility:"hidden"}:void 0},Y.label):null,Q)},kt=function(e,a){var o=t.useRef(null),r=t.useRef(!1),i=e.prefixCls,u=e.open,c=e.mode,v=e.showSearch,g=e.tokenWithEnter,s=e.disabled,m=e.autoClearSearchValue,O=e.onSearch,l=e.onSearchSubmit,R=e.onToggleOpen,C=e.onInputKeyDown,I=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(b){o.current.focus(b)},blur:function(){o.current.blur()}}});var L=Wn(0),Z=ie(L,2),W=Z[0],_=Z[1],J=function(b){var F=b.which;(F===D.UP||F===D.DOWN)&&b.preventDefault(),C&&C(b),F===D.ENTER&&c==="tags"&&!r.current&&!u&&(l==null||l(b.target.value)),Mt(F)&&R(!0)},ee=function(){_(!0)},A=t.useRef(null),oe=function(b){O(b,!0,r.current)!==!1&&R(!0)},ae=function(){r.current=!0},j=function(b){r.current=!1,c!=="combobox"&&oe(b.target.value)},z=function(b){var F=b.target.value;if(g&&A.current&&/[\r\n]/.test(A.current)){var Q=A.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");F=F.replace(Q,A.current)}A.current=null,oe(F)},$=function(b){var F=b.clipboardData,Q=F==null?void 0:F.getData("text");A.current=Q||""},U=function(b){var F=b.target;if(F!==o.current){var Q=document.body.style.msTouchAction!==void 0;Q?setTimeout(function(){o.current.focus()}):o.current.focus()}},K=function(b){var F=W();b.target!==o.current&&!F&&!(c==="combobox"&&s)&&b.preventDefault(),(c!=="combobox"&&(!v||!F)||!u)&&(u&&m!==!1&&O("",!0,!1),R())},G={inputRef:o,onInputKeyDown:J,onInputMouseDown:ee,onInputChange:z,onInputPaste:$,onInputCompositionStart:ae,onInputCompositionEnd:j},Y=c==="multiple"||c==="tags"?t.createElement(At,ze({},e,G)):t.createElement(Ft,ze({},e,G));return t.createElement("div",{ref:I,className:"".concat(i,"-selector"),onClick:U,onMouseDown:K},Y)},Kt=t.forwardRef(kt),$t=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Bt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},zt=function(e,a){var o=e.prefixCls;e.disabled;var r=e.visible,i=e.children,u=e.popupElement,c=e.animation,v=e.transitionName,g=e.dropdownStyle,s=e.dropdownClassName,m=e.direction,O=m===void 0?"ltr":m,l=e.placement,R=e.builtinPlacements,C=e.dropdownMatchSelectWidth,I=e.dropdownRender,L=e.dropdownAlign,Z=e.getPopupContainer,W=e.empty,_=e.getTriggerDOMNode,J=e.onPopupVisibleChange,ee=e.onPopupMouseEnter,A=rn(e,$t),oe="".concat(o,"-dropdown"),ae=u;I&&(ae=I(u));var j=t.useMemo(function(){return R||Bt(C)},[R,C]),z=c?"".concat(oe,"-").concat(c):v,$=typeof C=="number",U=t.useMemo(function(){return $?null:C===!1?"minWidth":"width"},[C,$]),K=g;$&&(K=H(H({},K),{},{width:C}));var G=t.useRef(null);return t.useImperativeHandle(a,function(){return{getPopupElement:function(){var M;return(M=G.current)===null||M===void 0?void 0:M.popupElement}}}),t.createElement(yt,ze({},A,{showAction:J?["click"]:[],hideAction:J?["click"]:[],popupPlacement:l||(O==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:j,prefixCls:oe,popupTransitionName:z,popup:t.createElement("div",{onMouseEnter:ee},ae),ref:G,stretch:U,popupAlign:L,popupVisible:r,getPopupContainer:Z,popupClassName:je(s,re({},"".concat(oe,"-empty"),W)),popupStyle:K,getTriggerDOMNode:_,onPopupVisibleChange:J}),i)},Wt=t.forwardRef(zt);function kn(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function Dn(n){return typeof n<"u"&&!Number.isNaN(n)}function Gn(n,e){var a=n||{},o=a.label,r=a.value,i=a.options,u=a.groupLabel,c=o||(e?"children":"label");return{label:c,value:r||"value",options:i||"options",groupLabel:u||c}}function Ut(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,r=[],i=Gn(a,!1),u=i.label,c=i.value,v=i.options,g=i.groupLabel;function s(m,O){Array.isArray(m)&&m.forEach(function(l){if(O||!(v in l)){var R=l[c];r.push({key:kn(l,r.length),groupOption:O,data:l,label:l[u],value:R})}else{var C=l[g];C===void 0&&o&&(C=l.label),r.push({key:kn(l,r.length),group:!0,data:l,label:C}),s(l[v],!0)}})}return s(n,!1),r}function xn(n){var e=H({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return dt(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}var Ht=function(e,a,o){if(!a||!a.length)return null;var r=!1,i=function c(v,g){var s=Ct(g),m=s[0],O=s.slice(1);if(!m)return[v];var l=v.split(m);return r=r||l.length>1,l.reduce(function(R,C){return[].concat(ye(R),ye(c(C,O)))},[]).filter(Boolean)},u=i(e,a);return r?typeof o<"u"?u.slice(0,o):u:null},On=t.createContext(null);function jt(n){var e=n.visible,a=n.values;if(!e)return null;var o=50;return t.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(a.slice(0,o).map(function(r){var i=r.label,u=r.value;return["number","string"].includes(gn(i))?i:u}).join(", ")),a.length>o?", ...":null)}var Gt=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Yt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],Mn=function(e){return e==="tags"||e==="multiple"},Xt=t.forwardRef(function(n,e){var a,o=n.id,r=n.prefixCls,i=n.className,u=n.showSearch,c=n.tagRender,v=n.direction,g=n.omitDomProps,s=n.displayValues,m=n.onDisplayValuesChange,O=n.emptyOptions,l=n.notFoundContent,R=l===void 0?"Not Found":l,C=n.onClear,I=n.mode,L=n.disabled,Z=n.loading,W=n.getInputElement,_=n.getRawInputElement,J=n.open,ee=n.defaultOpen,A=n.onDropdownVisibleChange,oe=n.activeValue,ae=n.onActiveValueChange,j=n.activeDescendantId,z=n.searchValue,$=n.autoClearSearchValue,U=n.onSearch,K=n.onSearchSplit,G=n.tokenSeparators,Y=n.allowClear,M=n.suffixIcon,b=n.clearIcon,F=n.OptionList,Q=n.animation,Re=n.transitionName,we=n.dropdownStyle,De=n.dropdownClassName,ne=n.dropdownMatchSelectWidth,me=n.dropdownRender,We=n.dropdownAlign,te=n.placement,xe=n.builtinPlacements,_e=n.getPopupContainer,y=n.showAction,f=y===void 0?[]:y,x=n.onFocus,P=n.onBlur,h=n.onKeyUp,N=n.onKeyDown,k=n.onMouseDown,q=rn(n,Gt),B=Mn(I),ce=(u!==void 0?u:B)||I==="combobox",Ce=H({},q);Yt.forEach(function(V){delete Ce[V]}),g==null||g.forEach(function(V){delete Ce[V]});var Me=t.useState(!1),Te=ie(Me,2),Le=Te[0],se=Te[1];t.useEffect(function(){se(vt())},[]);var Ue=t.useRef(null),ge=t.useRef(null),pe=t.useRef(null),fe=t.useRef(null),He=t.useRef(null),he=t.useRef(!1),Ge=Dt(),Ae=ie(Ge,3),Fe=Ae[0],ke=Ae[1],Ye=Ae[2];t.useImperativeHandle(e,function(){var V,E;return{focus:(V=fe.current)===null||V===void 0?void 0:V.focus,blur:(E=fe.current)===null||E===void 0?void 0:E.blur,scrollTo:function(Se){var le;return(le=He.current)===null||le===void 0?void 0:le.scrollTo(Se)},nativeElement:Ue.current||ge.current}});var Oe=t.useMemo(function(){var V;if(I!=="combobox")return z;var E=(V=s[0])===null||V===void 0?void 0:V.value;return typeof E=="string"||typeof E=="number"?String(E):""},[z,I,s]),un=I==="combobox"&&typeof W=="function"&&W()||null,Pe=typeof _=="function"&&_(),en=mt(ge,Pe==null||(a=Pe.props)===null||a===void 0?void 0:a.ref),hn=t.useState(!1),ln=ie(hn,2),bn=ln[0],Sn=ln[1];gt(function(){Sn(!0)},[]);var sn=Rn(!1,{defaultValue:ee,value:J}),cn=ie(sn,2),Xe=cn[0],nn=cn[1],ue=bn?Xe:!1,fn=!R&&O;(L||fn&&ue&&I==="combobox")&&(ue=!1);var tn=fn?!1:ue,Ie=t.useCallback(function(V){var E=V!==void 0?V:!ue;L||(nn(E),ue!==E&&(A==null||A(E)))},[L,ue,nn,A]),S=t.useMemo(function(){return(G||[]).some(function(V){return[`
`,`\r
`].includes(V)})},[G]),w=t.useContext(On)||{},d=w.maxCount,p=w.rawValues,T=function(E,be,Se){if(!(B&&Dn(d)&&(p==null?void 0:p.size)>=d)){var le=!0,ve=E;ae==null||ae(null);var Be=Ht(E,G,Dn(d)?d-p.size:void 0),Ve=Se?null:Be;return I!=="combobox"&&Ve&&(ve="",K==null||K(Ve),Ie(!1),le=!1),U&&Oe!==ve&&U(ve,{source:be?"typing":"effect"}),le}},X=function(E){!E||!E.trim()||U(E,{source:"submit"})};t.useEffect(function(){!ue&&!B&&I!=="combobox"&&T("",!1,!1)},[ue]),t.useEffect(function(){Xe&&L&&nn(!1),L&&!he.current&&ke(!1)},[L]);var Ke=Wn(),Ee=ie(Ke,2),Je=Ee[0],de=Ee[1],Ne=t.useRef(!1),wn=function(E){var be=Je(),Se=E.key,le=Se==="Enter";if(le&&(I!=="combobox"&&E.preventDefault(),ue||Ie(!0)),de(!!Oe),Se==="Backspace"&&!be&&B&&!Oe&&s.length){for(var ve=ye(s),Be=null,Ve=ve.length-1;Ve>=0;Ve-=1){var qe=ve[Ve];if(!qe.disabled){ve.splice(Ve,1),Be=qe;break}}Be&&m(ve,{type:"remove",values:[Be]})}for(var an=arguments.length,Ze=new Array(an>1?an-1:0),dn=1;dn<an;dn++)Ze[dn-1]=arguments[dn];if(ue&&(!le||!Ne.current)){var vn;(vn=He.current)===null||vn===void 0||vn.onKeyDown.apply(vn,[E].concat(Ze))}le&&(Ne.current=!0),N==null||N.apply(void 0,[E].concat(Ze))},Cn=function(E){for(var be=arguments.length,Se=new Array(be>1?be-1:0),le=1;le<be;le++)Se[le-1]=arguments[le];if(ue){var ve;(ve=He.current)===null||ve===void 0||ve.onKeyUp.apply(ve,[E].concat(Se))}E.key==="Enter"&&(Ne.current=!1),h==null||h.apply(void 0,[E].concat(Se))},Pn=function(E){var be=s.filter(function(Se){return Se!==E});m(be,{type:"remove",values:[E]})},Qe=t.useRef(!1),$e=function(){ke(!0),L||(x&&!Qe.current&&x.apply(void 0,arguments),f.includes("focus")&&Ie(!0)),Qe.current=!0},qn=function(){he.current=!0,ke(!1,function(){Qe.current=!1,he.current=!1,Ie(!1)}),!L&&(Oe&&(I==="tags"?U(Oe,{source:"submit"}):I==="multiple"&&U("",{source:"blur"})),P&&P.apply(void 0,arguments))},on=[];t.useEffect(function(){return function(){on.forEach(function(V){return clearTimeout(V)}),on.splice(0,on.length)}},[]);var Zn=function(E){var be,Se=E.target,le=(be=pe.current)===null||be===void 0?void 0:be.getPopupElement();if(le&&le.contains(Se)){var ve=setTimeout(function(){var an=on.indexOf(ve);if(an!==-1&&on.splice(an,1),Ye(),!Le&&!le.contains(document.activeElement)){var Ze;(Ze=fe.current)===null||Ze===void 0||Ze.focus()}});on.push(ve)}for(var Be=arguments.length,Ve=new Array(Be>1?Be-1:0),qe=1;qe<Be;qe++)Ve[qe-1]=arguments[qe];k==null||k.apply(void 0,[E].concat(Ve))},et=t.useState({}),nt=ie(et,2),tt=nt[1];function ot(){tt({})}var Nn;Pe&&(Nn=function(E){Ie(E)}),xt(function(){var V;return[Ue.current,(V=pe.current)===null||V===void 0?void 0:V.getPopupElement()]},tn,Ie,!!Pe);var at=t.useMemo(function(){return H(H({},n),{},{notFoundContent:R,open:ue,triggerOpen:tn,id:o,showSearch:ce,multiple:B,toggleOpen:Ie})},[n,R,tn,ue,o,ce,B,Ie]),Vn=!!M||Z,_n;Vn&&(_n=t.createElement(pn,{className:je("".concat(r,"-arrow"),re({},"".concat(r,"-arrow-loading"),Z)),customizeIcon:M,customizeIconProps:{loading:Z,searchValue:Oe,open:ue,focused:Fe,showSearch:ce}}));var rt=function(){var E;C==null||C(),(E=fe.current)===null||E===void 0||E.focus(),m([],{type:"clear",values:s}),T("",!1,!1)},Tn=Et(r,rt,s,Y,b,L,Oe,I),it=Tn.allowClear,ut=Tn.clearIcon,lt=t.createElement(F,{ref:He}),ct=je(r,i,re(re(re(re(re(re(re(re(re(re({},"".concat(r,"-focused"),Fe),"".concat(r,"-multiple"),B),"".concat(r,"-single"),!B),"".concat(r,"-allow-clear"),Y),"".concat(r,"-show-arrow"),Vn),"".concat(r,"-disabled"),L),"".concat(r,"-loading"),Z),"".concat(r,"-open"),ue),"".concat(r,"-customize-input"),un),"".concat(r,"-show-search"),ce)),Ln=t.createElement(Wt,{ref:pe,disabled:L,prefixCls:r,visible:tn,popupElement:lt,animation:Q,transitionName:Re,dropdownStyle:we,dropdownClassName:De,direction:v,dropdownMatchSelectWidth:ne,dropdownRender:me,dropdownAlign:We,placement:te,builtinPlacements:xe,getPopupContainer:_e,empty:O,getTriggerDOMNode:function(E){return ge.current||E},onPopupVisibleChange:Nn,onPopupMouseEnter:ot},Pe?t.cloneElement(Pe,{ref:en}):t.createElement(Kt,ze({},n,{domRef:ge,prefixCls:r,inputElement:un,ref:fe,id:o,showSearch:ce,autoClearSearchValue:$,mode:I,activeDescendantId:j,tagRender:c,values:s,open:ue,onToggleOpen:Ie,activeValue:oe,searchValue:Oe,onSearch:T,onSearchSubmit:X,onRemove:Pn,tokenWithEnter:S}))),yn;return Pe?yn=Ln:yn=t.createElement("div",ze({className:ct},Ce,{ref:Ue,onMouseDown:Zn,onKeyDown:wn,onKeyUp:Cn,onFocus:$e,onBlur:qn}),t.createElement(jt,{visible:Fe&&!ue,values:s}),Ln,_n,it&&ut),t.createElement(zn.Provider,{value:at},yn)}),Yn=function(){return null};Yn.isSelectOptGroup=!0;var Xn=function(){return null};Xn.isSelectOption=!0;function Jt(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Qt=["disabled","title","children","style","className"];function Kn(n){return typeof n=="string"||typeof n=="number"}var qt=function(e,a){var o=Rt(),r=o.prefixCls,i=o.id,u=o.open,c=o.multiple,v=o.mode,g=o.searchValue,s=o.toggleOpen,m=o.notFoundContent,O=o.onPopupScroll,l=t.useContext(On),R=l.maxCount,C=l.flattenOptions,I=l.onActiveValue,L=l.defaultActiveFirstOption,Z=l.onSelect,W=l.menuItemSelectedIcon,_=l.rawValues,J=l.fieldNames,ee=l.virtual,A=l.direction,oe=l.listHeight,ae=l.listItemHeight,j=l.optionRender,z="".concat(r,"-item"),$=pt(function(){return C},[u,C],function(y,f){return f[0]&&y[1]!==f[1]}),U=t.useRef(null),K=t.useMemo(function(){return c&&Dn(R)&&(_==null?void 0:_.size)>=R},[c,R,_==null?void 0:_.size]),G=function(f){f.preventDefault()},Y=function(f){var x;(x=U.current)===null||x===void 0||x.scrollTo(typeof f=="number"?{index:f}:f)},M=function(f){for(var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,P=$.length,h=0;h<P;h+=1){var N=(f+h*x+P)%P,k=$[N]||{},q=k.group,B=k.data;if(!q&&!(B!=null&&B.disabled)&&!K)return N}return-1},b=t.useState(function(){return M(0)}),F=ie(b,2),Q=F[0],Re=F[1],we=function(f){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;Re(f);var P={source:x?"keyboard":"mouse"},h=$[f];if(!h){I(null,-1,P);return}I(h.value,f,P)};t.useEffect(function(){we(L!==!1?M(0):-1)},[$.length,g]);var De=t.useCallback(function(y){return _.has(y)&&v!=="combobox"},[v,ye(_).toString(),_.size]);t.useEffect(function(){var y=setTimeout(function(){if(!c&&u&&_.size===1){var x=Array.from(_)[0],P=$.findIndex(function(h){var N=h.data;return N.value===x});P!==-1&&(we(P),Y(P))}});if(u){var f;(f=U.current)===null||f===void 0||f.scrollTo(void 0)}return function(){return clearTimeout(y)}},[u,g]);var ne=function(f){f!==void 0&&Z(f,{selected:!_.has(f)}),c||s(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(f){var x=f.which,P=f.ctrlKey;switch(x){case D.N:case D.P:case D.UP:case D.DOWN:{var h=0;if(x===D.UP?h=-1:x===D.DOWN?h=1:Jt()&&P&&(x===D.N?h=1:x===D.P&&(h=-1)),h!==0){var N=M(Q+h,h);Y(N),we(N,!0)}break}case D.ENTER:{var k,q=$[Q];q&&!(q!=null&&(k=q.data)!==null&&k!==void 0&&k.disabled)&&!K?ne(q.value):ne(void 0),u&&f.preventDefault();break}case D.ESC:s(!1),u&&f.stopPropagation()}},onKeyUp:function(){},scrollTo:function(f){Y(f)}}}),$.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(z,"-empty"),onMouseDown:G},m);var me=Object.keys(J).map(function(y){return J[y]}),We=function(f){return f.label};function te(y,f){var x=y.group;return{role:x?"presentation":"option",id:"".concat(i,"_list_").concat(f)}}var xe=function(f){var x=$[f];if(!x)return null;var P=x.data||{},h=P.value,N=x.group,k=mn(P,!0),q=We(x);return x?t.createElement("div",ze({"aria-label":typeof q=="string"&&!N?q:null},k,{key:f},te(x,f),{"aria-selected":De(h)}),h):null},_e={role:"listbox",id:"".concat(i,"_list")};return t.createElement(t.Fragment,null,ee&&t.createElement("div",ze({},_e,{style:{height:0,width:0,overflow:"hidden"}}),xe(Q-1),xe(Q),xe(Q+1)),t.createElement(It,{itemKey:"key",ref:U,data:$,height:oe,itemHeight:ae,fullHeight:!1,onMouseDown:G,onScroll:O,virtual:ee,direction:A,innerProps:ee?null:_e},function(y,f){var x=y.group,P=y.groupOption,h=y.data,N=y.label,k=y.value,q=h.key;if(x){var B,ce=(B=h.title)!==null&&B!==void 0?B:Kn(N)?N.toString():void 0;return t.createElement("div",{className:je(z,"".concat(z,"-group"),h.className),title:ce},N!==void 0?N:q)}var Ce=h.disabled,Me=h.title;h.children;var Te=h.style,Le=h.className,se=rn(h,Qt),Ue=ht(se,me),ge=De(k),pe=Ce||!ge&&K,fe="".concat(z,"-option"),He=je(z,fe,Le,re(re(re(re({},"".concat(fe,"-grouped"),P),"".concat(fe,"-active"),Q===f&&!pe),"".concat(fe,"-disabled"),pe),"".concat(fe,"-selected"),ge)),he=We(y),Ge=!W||typeof W=="function"||ge,Ae=typeof he=="number"?he:he||k,Fe=Kn(Ae)?Ae.toString():void 0;return Me!==void 0&&(Fe=Me),t.createElement("div",ze({},mn(Ue),ee?{}:te(y,f),{"aria-selected":ge,className:He,title:Fe,onMouseMove:function(){Q===f||pe||we(f)},onClick:function(){pe||ne(k)},style:Te}),t.createElement("div",{className:"".concat(fe,"-content")},typeof j=="function"?j(y,{index:f}):Ae),t.isValidElement(W)||ge,Ge&&t.createElement(pn,{className:"".concat(z,"-option-state"),customizeIcon:W,customizeIconProps:{value:k,disabled:pe,isSelected:ge}},ge?"✓":null))}))},Zt=t.forwardRef(qt);const eo=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=a.current,u=i.values,c=i.options,v=n.map(function(m){if(m.label===void 0){var O;return H(H({},m),{},{label:(O=u.get(m.value))===null||O===void 0?void 0:O.label})}return m}),g=new Map,s=new Map;return v.forEach(function(m){g.set(m.value,m),s.set(m.value,e.get(m.value)||c.get(m.value))}),a.current.values=g,a.current.options=s,v},[n,e]),r=t.useCallback(function(i){return e.get(i)||a.current.options.get(i)},[e]);return[o,r]};function En(n,e){return Hn(n).join("").toUpperCase().includes(e)}const no=function(n,e,a,o,r){return t.useMemo(function(){if(!a||o===!1)return n;var i=e.options,u=e.label,c=e.value,v=[],g=typeof o=="function",s=a.toUpperCase(),m=g?o:function(l,R){return r?En(R[r],s):R[i]?En(R[u!=="children"?u:"label"],s):En(R[c],s)},O=g?function(l){return xn(l)}:function(l){return l};return n.forEach(function(l){if(l[i]){var R=m(a,O(l));if(R)v.push(l);else{var C=l[i].filter(function(I){return m(a,O(I))});C.length&&v.push(H(H({},l),{},re({},i,C)))}return}m(a,O(l))&&v.push(l)}),v},[n,o,r,a,e])};var $n=0,to=bt();function oo(){var n;return to?(n=$n,$n+=1):n="TEST_OR_SSR",n}function ao(n){var e=t.useState(),a=ie(e,2),o=a[0],r=a[1];return t.useEffect(function(){r("rc_select_".concat(oo()))},[]),n||o}var ro=["children","value"],io=["children"];function uo(n){var e=n,a=e.key,o=e.props,r=o.children,i=o.value,u=rn(o,ro);return H({key:a,value:i!==void 0?i:a,children:r},u)}function Jn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return St(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var r=a,i=r.type.isSelectOptGroup,u=r.key,c=r.props,v=c.children,g=rn(c,io);return e||!i?uo(a):H(H({key:"__RC_SELECT_GRP__".concat(u===null?o:u,"__"),label:u},g),{},{options:Jn(v)})}).filter(function(a){return a})}var lo=function(e,a,o,r,i){return t.useMemo(function(){var u=e,c=!e;c&&(u=Jn(a));var v=new Map,g=new Map,s=function(l,R,C){C&&typeof C=="string"&&l.set(R[C],R)},m=function O(l){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C=0;C<l.length;C+=1){var I=l[C];!I[o.options]||R?(v.set(I[o.value],I),s(g,I,o.label),s(g,I,r),s(g,I,i)):O(I[o.options],!0)}};return m(u),{options:u,valueOptions:v,labelOptions:g}},[e,a,o,r,i])};function Bn(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var co=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],so=["inputValue"];function fo(n){return!n||gn(n)!=="object"}var vo=t.forwardRef(function(n,e){var a=n.id,o=n.mode,r=n.prefixCls,i=r===void 0?"rc-select":r,u=n.backfill,c=n.fieldNames,v=n.inputValue,g=n.searchValue,s=n.onSearch,m=n.autoClearSearchValue,O=m===void 0?!0:m,l=n.onSelect,R=n.onDeselect,C=n.dropdownMatchSelectWidth,I=C===void 0?!0:C,L=n.filterOption,Z=n.filterSort,W=n.optionFilterProp,_=n.optionLabelProp,J=n.options,ee=n.optionRender,A=n.children,oe=n.defaultActiveFirstOption,ae=n.menuItemSelectedIcon,j=n.virtual,z=n.direction,$=n.listHeight,U=$===void 0?200:$,K=n.listItemHeight,G=K===void 0?20:K,Y=n.labelRender,M=n.value,b=n.defaultValue,F=n.labelInValue,Q=n.onChange,Re=n.maxCount,we=rn(n,co),De=ao(a),ne=Mn(o),me=!!(!J&&A),We=t.useMemo(function(){return L===void 0&&o==="combobox"?!1:L},[L,o]),te=t.useMemo(function(){return Gn(c,me)},[JSON.stringify(c),me]),xe=Rn("",{value:g!==void 0?g:v,postState:function(w){return w||""}}),_e=ie(xe,2),y=_e[0],f=_e[1],x=lo(J,A,te,W,_),P=x.valueOptions,h=x.labelOptions,N=x.options,k=t.useCallback(function(S){var w=Hn(S);return w.map(function(d){var p,T,X,Ke,Ee;if(fo(d))p=d;else{var Je;X=d.key,T=d.label,p=(Je=d.value)!==null&&Je!==void 0?Je:X}var de=P.get(p);if(de){var Ne;T===void 0&&(T=de==null?void 0:de[_||te.label]),X===void 0&&(X=(Ne=de==null?void 0:de.key)!==null&&Ne!==void 0?Ne:p),Ke=de==null?void 0:de.disabled,Ee=de==null?void 0:de.title}return{label:T,value:p,key:X,disabled:Ke,title:Ee}})},[te,_,P]),q=Rn(b,{value:M}),B=ie(q,2),ce=B[0],Ce=B[1],Me=t.useMemo(function(){var S,w=ne&&ce===null?[]:ce,d=k(w);return o==="combobox"&&_t((S=d[0])===null||S===void 0?void 0:S.value)?[]:d},[ce,k,o,ne]),Te=eo(Me,P),Le=ie(Te,2),se=Le[0],Ue=Le[1],ge=t.useMemo(function(){if(!o&&se.length===1){var S=se[0];if(S.value===null&&(S.label===null||S.label===void 0))return[]}return se.map(function(w){var d;return H(H({},w),{},{label:(d=typeof Y=="function"?Y(w):w.label)!==null&&d!==void 0?d:w.value})})},[o,se,Y]),pe=t.useMemo(function(){return new Set(se.map(function(S){return S.value}))},[se]);t.useEffect(function(){if(o==="combobox"){var S,w=(S=se[0])===null||S===void 0?void 0:S.value;f(Vt(w)?String(w):"")}},[se]);var fe=Bn(function(S,w){var d=w??S;return re(re({},te.value,S),te.label,d)}),He=t.useMemo(function(){if(o!=="tags")return N;var S=ye(N),w=function(p){return P.has(p)};return ye(se).sort(function(d,p){return d.value<p.value?-1:1}).forEach(function(d){var p=d.value;w(p)||S.push(fe(p,d.label))}),S},[fe,N,P,se,o]),he=no(He,te,y,We,W),Ge=t.useMemo(function(){return o!=="tags"||!y||he.some(function(S){return S[W||"value"]===y})||he.some(function(S){return S[te.value]===y})?he:[fe(y)].concat(ye(he))},[fe,W,o,he,y,te]),Ae=function S(w){var d=ye(w).sort(function(p,T){return Z(p,T,{searchValue:y})});return d.map(function(p){return Array.isArray(p.options)?H(H({},p),{},{options:p.options.length>0?S(p.options):p.options}):p})},Fe=t.useMemo(function(){return Z?Ae(Ge):Ge},[Ge,Z,y]),ke=t.useMemo(function(){return Ut(Fe,{fieldNames:te,childrenAsData:me})},[Fe,te,me]),Ye=function(w){var d=k(w);if(Ce(d),Q&&(d.length!==se.length||d.some(function(X,Ke){var Ee;return((Ee=se[Ke])===null||Ee===void 0?void 0:Ee.value)!==(X==null?void 0:X.value)}))){var p=F?d:d.map(function(X){return X.value}),T=d.map(function(X){return xn(Ue(X.value))});Q(ne?p:p[0],ne?T:T[0])}},Oe=t.useState(null),un=ie(Oe,2),Pe=un[0],en=un[1],hn=t.useState(0),ln=ie(hn,2),bn=ln[0],Sn=ln[1],sn=oe!==void 0?oe:o!=="combobox",cn=t.useCallback(function(S,w){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=d.source,T=p===void 0?"keyboard":p;Sn(w),u&&o==="combobox"&&S!==null&&T==="keyboard"&&en(String(S))},[u,o]),Xe=function(w,d,p){var T=function(){var Qe,$e=Ue(w);return[F?{label:$e==null?void 0:$e[te.label],value:w,key:(Qe=$e==null?void 0:$e.key)!==null&&Qe!==void 0?Qe:w}:w,xn($e)]};if(d&&l){var X=T(),Ke=ie(X,2),Ee=Ke[0],Je=Ke[1];l(Ee,Je)}else if(!d&&R&&p!=="clear"){var de=T(),Ne=ie(de,2),wn=Ne[0],Cn=Ne[1];R(wn,Cn)}},nn=Bn(function(S,w){var d,p=ne?w.selected:!0;p?d=ne?[].concat(ye(se),[S]):[S]:d=se.filter(function(T){return T.value!==S}),Ye(d),Xe(S,p),o==="combobox"?en(""):(!Mn||O)&&(f(""),en(""))}),ue=function(w,d){Ye(w);var p=d.type,T=d.values;(p==="remove"||p==="clear")&&T.forEach(function(X){Xe(X.value,!1,p)})},fn=function(w,d){if(f(w),en(null),d.source==="submit"){var p=(w||"").trim();if(p){var T=Array.from(new Set([].concat(ye(pe),[p])));Ye(T),Xe(p,!0),f("")}return}d.source!=="blur"&&(o==="combobox"&&Ye(w),s==null||s(w))},tn=function(w){var d=w;o!=="tags"&&(d=w.map(function(T){var X=h.get(T);return X==null?void 0:X.value}).filter(function(T){return T!==void 0}));var p=Array.from(new Set([].concat(ye(pe),ye(d))));Ye(p),p.forEach(function(T){Xe(T,!0)})},Ie=t.useMemo(function(){var S=j!==!1&&I!==!1;return H(H({},x),{},{flattenOptions:ke,onActiveValue:cn,defaultActiveFirstOption:sn,onSelect:nn,menuItemSelectedIcon:ae,rawValues:pe,fieldNames:te,virtual:S,direction:z,listHeight:U,listItemHeight:G,childrenAsData:me,maxCount:Re,optionRender:ee})},[Re,x,ke,cn,sn,nn,ae,pe,te,j,I,z,U,G,me,ee]);return t.createElement(On.Provider,{value:Ie},t.createElement(Xt,ze({},we,{id:De,prefixCls:i,ref:e,omitDomProps:so,mode:o,displayValues:ge,onDisplayValuesChange:ue,direction:z,searchValue:y,onSearch:fn,autoClearSearchValue:O,onSearchSplit:tn,dropdownMatchSelectWidth:I,OptionList:Zt,emptyOptions:!ke.length,activeValue:Pe,activeDescendantId:"".concat(De,"_list_").concat(bn)})))}),Qn=vo;Qn.Option=Xn;Qn.OptGroup=Yn;export{Xt as B,Xn as O,Qn as T,Yn as a,ao as b,Rt as u};
