import{c as C,h as Ne,g as Pe,e as W}from"./@babel-Xj_bk_MP.js";import{c as ot}from"./classnames-uKr76nPM.js";import{B as lt}from"./rc-input-UAvidU0N.js";import{p as Te,A as it,K as y}from"./rc-util-RBoppPtV.js";import{r as u,a as x}from"./react-gY946ZKh.js";import{T as ut}from"./rc-textarea-ITLMvXaX.js";import"./rc-resize-observer-QJ9n6sHl.js";import{c as st}from"./@rc-component-lPyAtwCK.js";import{E as ct,M as Me}from"./rc-menu-r8OImmUh.js";function ft(){var e=u.useState({id:0,callback:null}),t=C(e,2),i=t[0],s=t[1],o=u.useCallback(function(c){s(function(r){var f=r.id;return{id:f+1,callback:c}})},[]);return u.useEffect(function(){var c;(c=i.callback)===null||c===void 0||c.call(i)},[i]),o}var Re=u.createContext(null);function dt(e){var t=u.useContext(Re),i=t.notFoundContent,s=t.activeIndex,o=t.setActiveIndex,c=t.selectOption,r=t.onFocus,f=t.onBlur,m=e.prefixCls,d=e.options,S=d[s]||{};return u.createElement(ct,{prefixCls:"".concat(m,"-menu"),activeKey:S.key,onSelect:function(w){var h=w.key,p=d.find(function(b){var E=b.key;return E===h});c(p)},onFocus:r,onBlur:f},d.map(function(g,w){var h=g.key,p=g.disabled,b=g.className,E=g.style,I=g.label;return u.createElement(Me,{key:h,disabled:p,className:b,style:E,onMouseEnter:function(){o(w)}},I)}),!d.length&&u.createElement(Me,{disabled:!0},i))}var vt={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},mt=function(t){var i=t.prefixCls,s=t.options,o=t.children,c=t.visible,r=t.transitionName,f=t.getPopupContainer,m=t.dropdownClassName,d=t.direction,S=t.placement,g="".concat(i,"-dropdown"),w=u.createElement(dt,{prefixCls:g,options:s}),h=u.useMemo(function(){var p;return d==="rtl"?p=S==="top"?"topLeft":"bottomLeft":p=S==="top"?"topRight":"bottomRight",p},[d,S]);return u.createElement(st,{prefixCls:g,popupVisible:c,popup:w,popupPlacement:h,popupTransitionName:r,builtinPlacements:vt,getPopupContainer:f,popupClassName:m},o)},pt=function(){return null};function gt(e){var t=e.selectionStart;return e.value.slice(0,t)}function xt(e,t){return t.reduce(function(i,s){var o=e.lastIndexOf(s);return o>i.location?{location:o,prefix:s}:i},{location:-1,prefix:""})}function Ie(e){return(e||"").toLowerCase()}function ht(e,t,i){var s=e[0];if(!s||s===i)return e;for(var o=e,c=t.length,r=0;r<c;r+=1)if(Ie(o[r])!==Ie(t[r])){o=o.slice(r);break}else r===c-1&&(o=o.slice(c));return o}function Ct(e,t){var i=t.measureLocation,s=t.prefix,o=t.targetText,c=t.selectionStart,r=t.split,f=e.slice(0,i);f[f.length-r.length]===r&&(f=f.slice(0,f.length-r.length)),f&&(f="".concat(f).concat(r));var m=ht(e.slice(c),o.slice(c-i-s.length),r);m.slice(0,r.length)===r&&(m=m.slice(r.length));var d="".concat(f).concat(s).concat(o).concat(r);return{text:"".concat(d).concat(m),selectionLocation:d.length}}function St(e,t){e.setSelectionRange(t,t),e.blur(),e.focus()}function wt(e,t){return!t||e.indexOf(t)===-1}function yt(e,t){var i=t.value,s=i===void 0?"":i,o=e.toLowerCase();return s.toLowerCase().indexOf(o)!==-1}var bt=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","allowClear","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],Et=["suffix","prefixCls","defaultValue","value","allowClear","onChange","classNames","className","disabled"],_t=u.forwardRef(function(e,t){var i=e.prefixCls,s=e.className,o=e.style,c=e.prefix,r=c===void 0?"@":c,f=e.split,m=f===void 0?" ":f,d=e.notFoundContent,S=d===void 0?"Not Found":d,g=e.value,w=e.defaultValue,h=e.children,p=e.options,b=e.open;e.allowClear;var E=e.validateSearch,I=E===void 0?wt:E,O=e.filterOption,F=O===void 0?yt:O,N=e.onChange,X=e.onKeyDown,Y=e.onKeyUp,ne=e.onPressEnter,ae=e.onSearch,z=e.onSelect,re=e.onFocus,H=e.onBlur,ke=e.transitionName,Oe=e.placement,Fe=e.direction,Le=e.getPopupContainer,$e=e.dropdownClassName,oe=e.rows,Ke=oe===void 0?1:oe,Ae=Ne(e,bt),A=u.useMemo(function(){return Array.isArray(r)?r:[r]},[r]),L=u.useRef(null),q=u.useRef(null),G=function(){var n;return(n=L.current)===null||n===void 0||(n=n.resizableTextArea)===null||n===void 0?void 0:n.textArea};x.useImperativeHandle(t,function(){var l;return{focus:function(){var a;return(a=L.current)===null||a===void 0?void 0:a.focus()},blur:function(){var a;return(a=L.current)===null||a===void 0?void 0:a.blur()},textarea:(l=L.current)===null||l===void 0||(l=l.resizableTextArea)===null||l===void 0?void 0:l.textArea}});var Be=u.useState(!1),le=C(Be,2),B=le[0],ie=le[1],De=u.useState(""),ue=C(De,2),se=ue[0],ce=ue[1],Ve=u.useState(""),fe=C(Ve,2),de=fe[0],je=fe[1],Ue=u.useState(0),ve=C(Ue,2),me=ve[0],pe=ve[1],We=u.useState(0),ge=C(We,2),J=ge[0],Q=ge[1],Xe=u.useState(!1),xe=C(Xe,2),Ye=xe[0],he=xe[1],ze=Te("",{defaultValue:w,value:g}),Ce=C(ze,2),P=Ce[0],He=Ce[1];u.useEffect(function(){B&&q.current&&(q.current.scrollTop=G().scrollTop)},[B]);var qe=x.useMemo(function(){if(b)for(var l=0;l<A.length;l+=1){var n=A[l],a=P.lastIndexOf(n);if(a>=0)return[!0,"",n,a]}return[B,se,de,me]},[b,B,A,P,se,de,me]),D=C(qe,4),T=D[0],Z=D[1],V=D[2],ee=D[3],te=x.useCallback(function(l){var n;return p&&p.length>0?n=p.map(function(a){var v;return W(W({},a),{},{key:(v=a==null?void 0:a.key)!==null&&v!==void 0?v:a.value})}):n=it(h).map(function(a){var v=a.props,_=a.key;return W(W({},v),{},{label:v.children,key:_||v.value})}),n.filter(function(a){return F===!1?!0:F(l,a)})},[h,p,F]),j=x.useMemo(function(){return te(Z)},[te,Z]),Ge=ft(),Je=function(n,a,v){ie(!0),ce(n),je(a),pe(v),Q(0)},R=function(n){ie(!1),pe(0),ce(""),Ge(n)},Se=function(n){He(n),N==null||N(n)},Qe=function(n){var a=n.target.value;Se(a)},we=function(n){var a,v=n.value,_=v===void 0?"":v,M=Ct(P,{measureLocation:ee,targetText:_,prefix:V,selectionStart:(a=G())===null||a===void 0?void 0:a.selectionStart,split:m}),k=M.text,$=M.selectionLocation;Se(k),R(function(){St(G(),$)}),z==null||z(n,V)},Ze=function(n){var a=n.which;if(X==null||X(n),!!T){if(a===y.UP||a===y.DOWN){var v=j.length,_=a===y.UP?-1:1,M=(J+_+v)%v;Q(M),n.preventDefault()}else if(a===y.ESC)R();else if(a===y.ENTER){if(n.preventDefault(),!j.length){R();return}var k=j[J];we(k)}}},et=function(n){var a=n.key,v=n.which,_=n.target,M=gt(_),k=xt(M,A),$=k.location,U=k.prefix;if(Y==null||Y(n),[y.ESC,y.UP,y.DOWN,y.ENTER].indexOf(v)===-1)if($!==-1){var K=M.slice($+U.length),_e=I(K,m),rt=!!te(K).length;_e?(a===U||a==="Shift"||T||K!==Z&&rt)&&Je(K,U,$):T&&R(),ae&&_e&&ae(K,U)}else T&&R()},tt=function(n){!T&&ne&&ne(n)},ye=u.useRef(),be=function(n){window.clearTimeout(ye.current),!Ye&&n&&re&&re(n),he(!0)},Ee=function(n){ye.current=window.setTimeout(function(){he(!1),R(),H==null||H(n)},0)},nt=function(){be()},at=function(){Ee()};return x.createElement("div",{className:ot(i,s),style:o},x.createElement(ut,Pe({ref:L,value:P},Ae,{rows:Ke,onChange:Qe,onKeyDown:Ze,onKeyUp:et,onPressEnter:tt,onFocus:be,onBlur:Ee})),T&&x.createElement("div",{ref:q,className:"".concat(i,"-measure")},P.slice(0,ee),x.createElement(Re.Provider,{value:{notFoundContent:S,activeIndex:J,setActiveIndex:Q,selectOption:we,onFocus:nt,onBlur:at}},x.createElement(mt,{prefixCls:i,transitionName:ke,placement:Oe,direction:Fe,options:j,visible:!0,getPopupContainer:Le,dropdownClassName:$e},x.createElement("span",null,V))),P.slice(ee+V.length)))}),Mt=u.forwardRef(function(e,t){var i=e.suffix,s=e.prefixCls,o=s===void 0?"rc-mentions":s,c=e.defaultValue,r=e.value,f=e.allowClear,m=e.onChange,d=e.classNames,S=e.className,g=e.disabled,w=Ne(e,Et),h=Te("",{defaultValue:c,value:r}),p=C(h,2),b=p[0],E=p[1],I=function(N){E(N),m==null||m(N)},O=function(){I("")};return x.createElement(lt,{suffix:i,prefixCls:o,value:b,allowClear:f,handleReset:O,className:S,classNames:d,disabled:g},x.createElement(_t,Pe({className:d==null?void 0:d.mentions,prefixCls:o,ref:t,onChange:I},w)))});Mt.Option=pt;export{Mt as M};