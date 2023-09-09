import{c as h,h as Pe,g as Te,e as j}from"./@babel-43e769cc.js";import{c as ot}from"./classnames-325479d5.js";import{B as it}from"./rc-input-dfa5175e.js";import{p as lt,A as ut,K as C}from"./rc-util-6fbd7337.js";import{r as l,a as p}from"./react-d998b26c.js";import{T as st}from"./rc-textarea-f64ac05f.js";import"./rc-resize-observer-ee76393b.js";import{c as ct}from"./@rc-component-93a12345.js";import{E as ft,M as Me}from"./rc-menu-e18a1022.js";function vt(){var e=l.useState({id:0,callback:null}),t=h(e,2),u=t[0],s=t[1],i=l.useCallback(function(f){s(function(a){var v=a.id;return{id:v+1,callback:f}})},[]);return l.useEffect(function(){var f;(f=u.callback)===null||f===void 0||f.call(u)},[u]),i}var Re=l.createContext(null);function dt(e){var t=l.useContext(Re),u=t.notFoundContent,s=t.activeIndex,i=t.setActiveIndex,f=t.selectOption,a=t.onFocus,v=t.onBlur,m=e.prefixCls,d=e.options,S=d[s]||{};return l.createElement(ft,{prefixCls:"".concat(m,"-menu"),activeKey:S.key,onSelect:function(y){var _=y.key,g=d.find(function(w){var b=w.key;return b===_});f(g)},onFocus:a,onBlur:v},d.map(function(x,y){var _=x.key,g=x.disabled,w=x.className,b=x.style,k=x.label;return l.createElement(Me,{key:_,disabled:g,className:w,style:b,onMouseEnter:function(){i(y)}},k)}),!d.length&&l.createElement(Me,{disabled:!0},u))}var pt={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},mt=function(t){var u=t.prefixCls,s=t.options,i=t.children,f=t.visible,a=t.transitionName,v=t.getPopupContainer,m=t.dropdownClassName,d=t.direction,S=t.placement,x="".concat(u,"-dropdown"),y=l.createElement(dt,{prefixCls:x,options:s}),_=l.useMemo(function(){var g;return d==="rtl"?g=S==="top"?"topLeft":"bottomLeft":g=S==="top"?"topRight":"bottomRight",g},[d,S]);return l.createElement(ct,{prefixCls:x,popupVisible:f,popup:y,popupPlacement:_,popupTransitionName:a,builtinPlacements:pt,getPopupContainer:v,popupClassName:m},i)},xt=function(){return null};function gt(e){var t=e.selectionStart;return e.value.slice(0,t)}function Ct(e,t){return t.reduce(function(u,s){var i=e.lastIndexOf(s);return i>u.location?{location:i,prefix:s}:u},{location:-1,prefix:""})}function Ne(e){return(e||"").toLowerCase()}function ht(e,t,u){var s=e[0];if(!s||s===u)return e;for(var i=e,f=t.length,a=0;a<f;a+=1)if(Ne(i[a])!==Ne(t[a])){i=i.slice(a);break}else a===f-1&&(i=i.slice(f));return i}function St(e,t){var u=t.measureLocation,s=t.prefix,i=t.targetText,f=t.selectionStart,a=t.split,v=e.slice(0,u);v[v.length-a.length]===a&&(v=v.slice(0,v.length-a.length)),v&&(v="".concat(v).concat(a));var m=ht(e.slice(f),i.slice(f-u-s.length),a);m.slice(0,a.length)===a&&(m=m.slice(a.length));var d="".concat(v).concat(s).concat(i).concat(a);return{text:"".concat(d).concat(m),selectionLocation:d.length}}function wt(e,t){e.setSelectionRange(t,t),e.blur(),e.focus()}function yt(e,t){return!t||e.indexOf(t)===-1}function _t(e,t){var u=t.value,s=u===void 0?"":u,i=e.toLowerCase();return s.toLowerCase().indexOf(i)!==-1}var Et=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],It=["suffix","prefixCls","classes","value"],bt=l.forwardRef(function(e,t){var u=e.prefixCls,s=u===void 0?"rc-mentions":u,i=e.className,f=e.style,a=e.prefix,v=a===void 0?"@":a,m=e.split,d=m===void 0?" ":m,S=e.notFoundContent,x=S===void 0?"Not Found":S,y=e.value,_=e.defaultValue,g=e.children,w=e.options,b=e.open,k=e.validateSearch,te=k===void 0?yt:k,ne=e.filterOption,U=ne===void 0?_t:ne,V=e.onChange,W=e.onKeyDown,X=e.onKeyUp,re=e.onPressEnter,ae=e.onSearch,Y=e.onSelect,oe=e.onFocus,z=e.onBlur,Oe=e.transitionName,$e=e.placement,ke=e.direction,Fe=e.getPopupContainer,Le=e.dropdownClassName,ie=e.rows,Ae=ie===void 0?1:ie,Ke=Pe(e,Et),F=l.useMemo(function(){return Array.isArray(v)?v:[v]},[v]),R=l.useRef(null),H=l.useRef(null),q=function(){var n,r;return(n=R.current)===null||n===void 0||(r=n.resizableTextArea)===null||r===void 0?void 0:r.textArea};p.useImperativeHandle(t,function(){var c,n;return{focus:function(){var o;return(o=R.current)===null||o===void 0?void 0:o.focus()},blur:function(){var o;return(o=R.current)===null||o===void 0?void 0:o.blur()},textarea:(c=R.current)===null||c===void 0||(n=c.resizableTextArea)===null||n===void 0?void 0:n.textArea}});var Be=l.useState(!1),le=h(Be,2),L=le[0],ue=le[1],De=l.useState(""),se=h(De,2),ce=se[0],fe=se[1],je=l.useState(""),ve=h(je,2),de=ve[0],Ue=ve[1],Ve=l.useState(0),pe=h(Ve,2),me=pe[0],xe=pe[1],We=l.useState(0),ge=h(We,2),G=ge[0],J=ge[1],Xe=l.useState(!1),Ce=h(Xe,2),Ye=Ce[0],he=Ce[1],ze=lt("",{defaultValue:_,value:y}),Se=h(ze,2),M=Se[0],He=Se[1];l.useEffect(function(){L&&H.current&&(H.current.scrollTop=q().scrollTop)},[L]);var qe=p.useMemo(function(){if(b)for(var c=0;c<F.length;c+=1){var n=F[c],r=M.lastIndexOf(n);if(r>=0)return[!0,"",n,r]}return[L,ce,de,me]},[b,L,F,M,ce,de,me]),A=h(qe,4),N=A[0],Q=A[1],K=A[2],Z=A[3],ee=p.useCallback(function(c){var n;return w&&w.length>0?n=w.map(function(r){var o;return j(j({},r),{},{key:(o=r==null?void 0:r.key)!==null&&o!==void 0?o:r.value})}):n=ut(g).map(function(r){var o=r.props,E=r.key;return j(j({},o),{},{label:o.children,key:E||o.value})}),n.filter(function(r){return U===!1?!0:U(c,r)})},[g,w,U]),B=p.useMemo(function(){return ee(Q)},[ee,Q]),Ge=vt(),Je=function(n,r,o){ue(!0),fe(n),Ue(r),xe(o),J(0)},P=function(n){ue(!1),xe(0),fe(""),Ge(n)},we=function(n){He(n),V==null||V(n)},Qe=function(n){var r=n.target.value;we(r)},ye=function(n){var r,o=n.value,E=o===void 0?"":o,I=St(M,{measureLocation:Z,targetText:E,prefix:K,selectionStart:(r=q())===null||r===void 0?void 0:r.selectionStart,split:d}),T=I.text,O=I.selectionLocation;we(T),P(function(){wt(q(),O)}),Y==null||Y(n,K)},Ze=function(n){var r=n.which;if(W==null||W(n),!!N){if(r===C.UP||r===C.DOWN){var o=B.length,E=r===C.UP?-1:1,I=(G+E+o)%o;J(I),n.preventDefault()}else if(r===C.ESC)P();else if(r===C.ENTER){if(n.preventDefault(),!B.length){P();return}var T=B[G];ye(T)}}},et=function(n){var r=n.key,o=n.which,E=n.target,I=gt(E),T=Ct(I,F),O=T.location,D=T.prefix;if(X==null||X(n),[C.ESC,C.UP,C.DOWN,C.ENTER].indexOf(o)===-1)if(O!==-1){var $=I.slice(O+D.length),be=te($,d),at=!!ee($).length;be?(r===D||r==="Shift"||N||$!==Q&&at)&&Je($,D,O):N&&P(),ae&&be&&ae($,D)}else N&&P()},tt=function(n){!N&&re&&re(n)},_e=l.useRef(),Ee=function(n){window.clearTimeout(_e.current),!Ye&&n&&oe&&oe(n),he(!0)},Ie=function(n){_e.current=window.setTimeout(function(){he(!1),P(),z==null||z(n)},0)},nt=function(){Ee()},rt=function(){Ie()};return p.createElement("div",{className:ot(s,i),style:f},p.createElement(st,Te({ref:R,value:M},Ke,{rows:Ae,onChange:Qe,onKeyDown:Ze,onKeyUp:et,onPressEnter:tt,onFocus:Ee,onBlur:Ie})),N&&p.createElement("div",{ref:H,className:"".concat(s,"-measure")},M.slice(0,Z),p.createElement(Re.Provider,{value:{notFoundContent:x,activeIndex:G,setActiveIndex:J,selectOption:ye,onFocus:nt,onBlur:rt}},p.createElement(mt,{prefixCls:s,transitionName:Oe,placement:$e,direction:ke,options:B,visible:!0,getPopupContainer:Fe,dropdownClassName:Le},p.createElement("span",null,K))),M.slice(Z+K.length)))}),Mt=l.forwardRef(function(e,t){var u=e.suffix,s=e.prefixCls,i=e.classes,f=e.value,a=Pe(e,It);return p.createElement(it,{inputElement:p.createElement(bt,Te({prefixCls:s,ref:t},a)),suffix:u,prefixCls:s,classes:i,value:f})});Mt.Option=xt;export{Mt as M};