import{h as $,c as w,b as p,g as D,e as m}from"./@babel-43e769cc.js";import{c as M}from"./classnames-325479d5.js";import{p as j}from"./rc-util-6fbd7337.js";import{r as a}from"./react-d998b26c.js";var V=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],W=a.forwardRef(function(t,g){var c,s=t.prefixCls,n=s===void 0?"rc-checkbox":s,k=t.className,C=t.style,b=t.checked,l=t.disabled,d=t.defaultChecked,_=d===void 0?!1:d,o=t.type,u=o===void 0?"checkbox":o,y=t.title,i=t.onChange,x=$(t,V),r=a.useRef(null),N=j(_,{value:b}),f=w(N,2),v=f[0],E=f[1];a.useImperativeHandle(g,function(){return{focus:function(){var e;(e=r.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=r.current)===null||e===void 0||e.blur()},input:r.current}});var P=M(n,k,(c={},p(c,"".concat(n,"-checked"),v),p(c,"".concat(n,"-disabled"),l),c)),R=function(e){l||("checked"in t||E(e.target.checked),i==null||i({target:m(m({},t),{},{type:u,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return a.createElement("span",{className:P,title:y,style:C},a.createElement("input",D({},x,{className:"".concat(n,"-input"),ref:r,onChange:R,disabled:l,checked:!!v,type:u})),a.createElement("span",{className:"".concat(n,"-inner")}))});export{W as C};
