import{A as Ir,b as Fe,q as Kr,K as ae,p as lr}from"./rc-util-6fbd7337.js";import{e as T,f as W,h as cr,b as Tr,c as j,g as dr,d as Vr}from"./@babel-43e769cc.js";import{u as _r,b as Nr,B as Mr}from"./rc-select-fc5c77f6.js";import{r as t}from"./react-d998b26c.js";import{d as qe,c as Pr,T as Ar}from"./rc-tree-933a387c.js";import"./classnames-325479d5.js";import"./react-is-e8e5dbb3.js";const Hr=function(e){var r=t.useRef({valueLabels:new Map});return t.useMemo(function(){var n=r.current.valueLabels,u=new Map,l=e.map(function(o){var a,c=o.value,i=(a=o.label)!==null&&a!==void 0?a:n.get(c);return u.set(c,i),T(T({},o),{},{label:i})});return r.current.valueLabels=u,[l]},[e])},Or=function(e,r,n,u){return t.useMemo(function(){var l=e.map(function(i){var s=i.value;return s}),o=r.map(function(i){var s=i.value;return s}),a=l.filter(function(i){return!u[i]});if(n){var c=qe(l,!0,u);l=c.checkedKeys,o=c.halfCheckedKeys}return[Array.from(new Set([].concat(W(a),W(l)))),o]},[e,r,n,u])};function $r(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Rr(e){var r=e||{},n=r.label,u=r.value,l=r.children,o=u||"value";return{_title:n?[n]:["title","label"],value:o,key:o,children:l||"children"}}function Je(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function Fr(e,r){var n=[];function u(l){l.forEach(function(o){var a=o[r.children];a&&(n.push(o[r.value]),u(a))})}return u(e),n}function ir(e){return e==null}const Wr=function(e,r){return t.useMemo(function(){var n=Pr(e,{fieldNames:r,initWrapper:function(l){return T(T({},l),{},{valueEntities:new Map})},processEntity:function(l,o){var a=l.node[r.value];o.valueEntities.set(a,l)}});return n},[e,r])};var sr=function(){return null},jr=["children","value"];function fr(e){return Ir(e).map(function(r){if(!t.isValidElement(r)||!r.type)return null;var n=r,u=n.key,l=n.props,o=l.children,a=l.value,c=cr(l,jr),i=T({key:u,value:a},c),s=fr(o);return s.length&&(i.children=s),i}).filter(function(r){return r})}function Ye(e){if(!e)return e;var r=T({},e);return"props"in r||Object.defineProperty(r,"props",{get:function(){return Fe(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),r}}),r}function Ur(e,r,n,u,l,o){var a=null,c=null;function i(){function s(v){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return v.map(function(S,V){var I="".concat(L,"-").concat(V),_=S[o.value],O=n.includes(_),U=s(S[o.children]||[],I,O),g=t.createElement(sr,S,U.map(function(E){return E.node}));if(r===_&&(a=g),O){var N={pos:I,node:g,children:U};return D||c.push(N),N}return null}).filter(function(S){return S})}c||(c=[],s(u),c.sort(function(v,L){var D=v.node.props.value,S=L.node.props.value,V=n.indexOf(D),I=n.indexOf(S);return V-I}))}Object.defineProperty(e,"triggerNode",{get:function(){return Fe(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),i(),a}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Fe(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),i(),l?c:c.map(function(v){var L=v.node;return L})}})}const Br=function(e,r,n){var u=n.treeNodeFilterProp,l=n.filterTreeNode,o=n.fieldNames,a=o.children;return t.useMemo(function(){if(!r||l===!1)return e;var c;if(typeof l=="function")c=l;else{var i=r.toUpperCase();c=function(L,D){var S=D[u];return String(S).toUpperCase().includes(i)}}function s(v){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return v.reduce(function(D,S){var V=S[a],I=L||c(r,Ye(S)),_=s(V||[],I);return(I||_.length)&&D.push(T(T({},S),{},Tr({isLeaf:void 0},a,_))),D},[])}return s(e)},[e,r,a,u,l])};function ur(e){var r=t.useRef();r.current=e;var n=t.useCallback(function(){return r.current.apply(r,arguments)},[]);return n}function Gr(e,r){var n=r.id,u=r.pId,l=r.rootPId,o={},a=[],c=e.map(function(i){var s=T({},i),v=s[n];return o[v]=s,s.key=s.key||v,s});return c.forEach(function(i){var s=i[u],v=o[s];v&&(v.children=v.children||[],v.children.push(i)),(s===l||!v&&l===null)&&a.push(i)}),a}function qr(e,r,n){return t.useMemo(function(){return e?n?Gr(e,T({id:"id",pId:"pId",rootPId:null},n!==!0?n:{})):e:fr(r)},[r,n,e])}var vr=t.createContext(null),hr=t.createContext(null),Jr={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Yr=function(r,n){var u=_r(),l=u.prefixCls,o=u.multiple,a=u.searchValue,c=u.toggleOpen,i=u.open,s=u.notFoundContent,v=t.useContext(hr),L=v.virtual,D=v.listHeight,S=v.listItemHeight,V=v.treeData,I=v.fieldNames,_=v.onSelect,O=v.dropdownMatchSelectWidth,U=v.treeExpandAction,g=t.useContext(vr),N=g.checkable,E=g.checkedKeys,$=g.halfCheckedKeys,le=g.treeExpandedKeys,me=g.treeDefaultExpandAll,je=g.treeDefaultExpandedKeys,ye=g.onTreeExpand,Ue=g.treeIcon,Ce=g.showTreeIcon,Se=g.switcherIcon,be=g.treeLine,Ee=g.treeNodeFilterProp,ke=g.loadData,ie=g.treeLoadedKeys,xe=g.treeMotion,De=g.onTreeLoad,we=g.keyEntities,B=t.useRef(),ue=Kr(function(){return V},[i,V],function(h,k){return k[0]&&h[1]!==k[1]}),Le=t.useState(null),oe=j(Le,2),G=oe[0],ce=oe[1],M=we[G],Ie=t.useMemo(function(){return N?{checked:E,halfChecked:$}:null},[N,E,$]);t.useEffect(function(){if(i&&!o&&E.length){var h;(h=B.current)===null||h===void 0||h.scrollTo({key:E[0]}),ce(E[0])}},[i]);var de=String(a).toLowerCase(),Ke=function(k){return de?String(k[Ee]).toLowerCase().includes(de):!1},Te=t.useState(je),se=j(Te,2),Ve=se[0],Be=se[1],Z=t.useState(null),q=j(Z,2),fe=q[0],P=q[1],_e=t.useMemo(function(){return le?W(le):a?fe:Ve},[Ve,fe,le,a]);t.useEffect(function(){a&&P(Fr(V,I))},[a]);var Ne=function(k){Be(k),P(k),ye&&ye(k)},J=function(k){k.preventDefault()},ve=function(k,z){var A=z.node;N&&Je(A)||(_(A.key,{selected:!E.includes(A.key)}),o||c(!1))};if(t.useImperativeHandle(n,function(){var h;return{scrollTo:(h=B.current)===null||h===void 0?void 0:h.scrollTo,onKeyDown:function(z){var A,Me=z.which;switch(Me){case ae.UP:case ae.DOWN:case ae.LEFT:case ae.RIGHT:(A=B.current)===null||A===void 0||A.onKeyDown(z);break;case ae.ENTER:{if(M){var Pe=(M==null?void 0:M.node)||{},ee=Pe.selectable,Ae=Pe.value;ee!==!1&&ve(null,{node:{key:G},selected:!E.includes(Ae)})}break}case ae.ESC:c(!1)}},onKeyUp:function(){}}}),ue.length===0)return t.createElement("div",{role:"listbox",className:"".concat(l,"-empty"),onMouseDown:J},s);var Y={fieldNames:I};return ie&&(Y.loadedKeys=ie),_e&&(Y.expandedKeys=_e),t.createElement("div",{onMouseDown:J},M&&i&&t.createElement("span",{style:Jr,"aria-live":"assertive"},M.node.value),t.createElement(Ar,dr({ref:B,focusable:!1,prefixCls:"".concat(l,"-tree"),treeData:ue,height:D,itemHeight:S,virtual:L!==!1&&O!==!1,multiple:o,icon:Ue,showIcon:Ce,switcherIcon:Se,showLine:be,loadData:a?null:ke,motion:xe,activeKey:G,checkable:N,checkStrictly:!0,checkedKeys:Ie,selectedKeys:N?[]:E,defaultExpandAll:me},Y,{onActiveChange:ce,onSelect:ve,onCheck:ve,onExpand:Ne,onLoad:De,filterTreeNode:Ke,expandAction:U})))},pr=t.forwardRef(Yr);pr.displayName="OptionList";var gr="SHOW_ALL",mr="SHOW_PARENT",ze="SHOW_CHILD";function or(e,r,n,u){var l=new Set(e);return r===ze?e.filter(function(o){var a=n[o];return!(a&&a.children&&a.children.some(function(c){var i=c.node;return l.has(i[u.value])})&&a.children.every(function(c){var i=c.node;return Je(i)||l.has(i[u.value])}))}):r===mr?e.filter(function(o){var a=n[o],c=a?a.parent:null;return!(c&&!Je(c.node)&&l.has(c.key))}):e}var zr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Qr(e){return!e||Vr(e)!=="object"}var Xr=t.forwardRef(function(e,r){var n=e.id,u=e.prefixCls,l=u===void 0?"rc-tree-select":u,o=e.value,a=e.defaultValue,c=e.onChange,i=e.onSelect,s=e.onDeselect,v=e.searchValue,L=e.inputValue,D=e.onSearch,S=e.autoClearSearchValue,V=S===void 0?!0:S,I=e.filterTreeNode,_=e.treeNodeFilterProp,O=_===void 0?"value":_,U=e.showCheckedStrategy,g=e.treeNodeLabelProp,N=e.multiple,E=e.treeCheckable,$=e.treeCheckStrictly,le=e.labelInValue,me=e.fieldNames,je=e.treeDataSimpleMode,ye=e.treeData,Ue=e.children,Ce=e.loadData,Se=e.treeLoadedKeys,be=e.onTreeLoad,Ee=e.treeDefaultExpandAll,ke=e.treeExpandedKeys,ie=e.treeDefaultExpandedKeys,xe=e.onTreeExpand,De=e.treeExpandAction,we=e.virtual,B=e.listHeight,ue=B===void 0?200:B,Le=e.listItemHeight,oe=Le===void 0?20:Le,G=e.onDropdownVisibleChange,ce=e.dropdownMatchSelectWidth,M=ce===void 0?!0:ce,Ie=e.treeLine,de=e.treeIcon,Ke=e.showTreeIcon,Te=e.switcherIcon,se=e.treeMotion,Ve=cr(e,zr),Be=Nr(n),Z=E&&!$,q=E||$,fe=$||le,P=q||N,_e=lr(a,{value:o}),Ne=j(_e,2),J=Ne[0],ve=Ne[1],Y=t.useMemo(function(){return E?U||ze:gr},[U,E]),h=t.useMemo(function(){return Rr(me)},[JSON.stringify(me)]),k=lr("",{value:v!==void 0?v:L,postState:function(d){return d||""}}),z=j(k,2),A=z[0],Me=z[1],Pe=function(d){Me(d),D==null||D(d)},ee=qr(ye,Ue,je),Ae=Wr(ee,h),K=Ae.keyEntities,Q=Ae.valueEntities,Qe=t.useCallback(function(f){var d=[],p=[];return f.forEach(function(m){Q.has(m)?p.push(m):d.push(m)}),{missingRawValues:d,existRawValues:p}},[Q]),Xe=Br(ee,A,{fieldNames:h,treeNodeFilterProp:O,filterTreeNode:I}),Ze=t.useCallback(function(f){if(f){if(g)return f[g];for(var d=h._title,p=0;p<d.length;p+=1){var m=f[d[p]];if(m!==void 0)return m}}},[h,g]),he=t.useCallback(function(f){var d=$r(f);return d.map(function(p){return Qr(p)?{value:p}:p})},[]),He=t.useCallback(function(f){var d=he(f);return d.map(function(p){var m=p.label,w=p.value,b=p.halfChecked,y,C=Q.get(w);if(C){var x;m=(x=m)!==null&&x!==void 0?x:Ze(C.node),y=C.node.disabled}else if(m===void 0){var R=he(J).find(function(pe){return pe.value===w});m=R.label}return{label:m,value:w,halfChecked:b,disabled:y}})},[Q,Ze,he,J]),er=t.useMemo(function(){return he(J)},[he,J]),yr=t.useMemo(function(){var f=[],d=[];return er.forEach(function(p){p.halfChecked?d.push(p):f.push(p)}),[f,d]},[er]),rr=j(yr,2),re=rr[0],tr=rr[1],nr=t.useMemo(function(){return re.map(function(f){return f.value})},[re]),Cr=Or(re,tr,Z,K),ar=j(Cr,2),te=ar[0],Oe=ar[1],Sr=t.useMemo(function(){var f=or(te,Y,K,h),d=f.map(function(b){var y,C,x;return(y=(C=K[b])===null||C===void 0||(x=C.node)===null||x===void 0?void 0:x[h.value])!==null&&y!==void 0?y:b}),p=d.map(function(b){var y=re.find(function(C){return C.value===b});return{value:b,label:y==null?void 0:y.label}}),m=He(p),w=m[0];return!P&&w&&ir(w.value)&&ir(w.label)?[]:m.map(function(b){var y;return T(T({},b),{},{label:(y=b.label)!==null&&y!==void 0?y:b.value})})},[h,P,te,re,He,Y,K]),br=Hr(Sr),Er=j(br,1),kr=Er[0],$e=ur(function(f,d,p){var m=He(f);if(ve(m),V&&Me(""),c){var w=f;if(Z){var b=or(f,Y,K,h);w=b.map(function(H){var F=Q.get(H);return F?F.node[h.value]:H})}var y=d||{triggerValue:void 0,selected:void 0},C=y.triggerValue,x=y.selected,R=w;if($){var pe=tr.filter(function(H){return!w.includes(H.value)});R=[].concat(W(R),W(pe))}var ge=He(R),X={preValue:re,triggerValue:C},ne=!0;($||p==="selection"&&!x)&&(ne=!1),Ur(X,C,f,ee,ne,h),q?X.checked=x:X.selected=x;var Re=fe?ge:ge.map(function(H){return H.value});c(P?Re:Re[0],fe?null:ge.map(function(H){return H.label}),X)}}),Ge=t.useCallback(function(f,d){var p,m=d.selected,w=d.source,b=K[f],y=b==null?void 0:b.node,C=(p=y==null?void 0:y[h.value])!==null&&p!==void 0?p:f;if(!P)$e([C],{selected:!0,triggerValue:C},"option");else{var x=m?[].concat(W(nr),[C]):te.filter(function(F){return F!==C});if(Z){var R=Qe(x),pe=R.missingRawValues,ge=R.existRawValues,X=ge.map(function(F){return Q.get(F).key}),ne;if(m){var Re=qe(X,!0,K);ne=Re.checkedKeys}else{var H=qe(X,{checked:!1,halfCheckedKeys:Oe},K);ne=H.checkedKeys}x=[].concat(W(pe),W(ne.map(function(F){return K[F].node[h.value]})))}$e(x,{selected:m,triggerValue:C},w||"option")}m||!P?i==null||i(C,Ye(y)):s==null||s(C,Ye(y))},[Qe,Q,K,h,P,nr,$e,Z,i,s,te,Oe]),xr=t.useCallback(function(f){if(G){var d={};Object.defineProperty(d,"documentClickClose",{get:function(){return Fe(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),G(f,d)}},[G]),Dr=ur(function(f,d){var p=f.map(function(m){return m.value});if(d.type==="clear"){$e(p,{},"selection");return}d.values.length&&Ge(d.values[0].value,{selected:!1,source:"selection"})}),wr=t.useMemo(function(){return{virtual:we,dropdownMatchSelectWidth:M,listHeight:ue,listItemHeight:oe,treeData:Xe,fieldNames:h,onSelect:Ge,treeExpandAction:De}},[we,M,ue,oe,Xe,h,Ge,De]),Lr=t.useMemo(function(){return{checkable:q,loadData:Ce,treeLoadedKeys:Se,onTreeLoad:be,checkedKeys:te,halfCheckedKeys:Oe,treeDefaultExpandAll:Ee,treeExpandedKeys:ke,treeDefaultExpandedKeys:ie,onTreeExpand:xe,treeIcon:de,treeMotion:se,showTreeIcon:Ke,switcherIcon:Te,treeLine:Ie,treeNodeFilterProp:O,keyEntities:K}},[q,Ce,Se,be,te,Oe,Ee,ke,ie,xe,de,se,Ke,Te,Ie,O,K]);return t.createElement(hr.Provider,{value:wr},t.createElement(vr.Provider,{value:Lr},t.createElement(Mr,dr({ref:r},Ve,{id:Be,prefixCls:l,mode:P?"multiple":void 0,displayValues:kr,onDisplayValuesChange:Dr,searchValue:A,onSearch:Pe,OptionList:pr,emptyOptions:!ee.length,onDropdownVisibleChange:xr,dropdownMatchSelectWidth:M}))))}),We=Xr;We.TreeNode=sr;We.SHOW_ALL=gr;We.SHOW_PARENT=mr;We.SHOW_CHILD=ze;export{We as G,gr as S,sr as T,mr as a,ze as b};
