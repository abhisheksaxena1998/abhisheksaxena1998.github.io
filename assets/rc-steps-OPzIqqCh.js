import{h as Q,b as l,e as U,g as L}from"./@babel-lqQsMmn5.js";import{c as F}from"./classnames-96-Rrpk_.js";import{r as n,a as J}from"./react-jw9l9ZC3.js";import{K as M}from"./rc-util-fvOsdOwp.js";var ie=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function O(e){return typeof e=="string"}function V(e){var a,D=e.className,t=e.prefixCls,$=e.style,w=e.active,r=e.status,f=e.iconPrefix,s=e.icon;e.wrapperStyle;var C=e.stepNumber,g=e.disabled,v=e.description,y=e.title,u=e.subTitle,h=e.progressDot,S=e.stepIcon,z=e.tailContent,c=e.icons,E=e.stepIndex,d=e.onStepClick,N=e.onClick,R=e.render,W=Q(e,ie),T=!!d&&!g,p={};T&&(p.role="button",p.tabIndex=0,p.onClick=function(b){N==null||N(b),d(E)},p.onKeyDown=function(b){var m=b.which;(m===M.ENTER||m===M.SPACE)&&d(E)});var q=function(){var m,i,I=F("".concat(t,"-icon"),"".concat(f,"icon"),(m={},l(m,"".concat(f,"icon-").concat(s),s&&O(s)),l(m,"".concat(f,"icon-check"),!s&&r==="finish"&&(c&&!c.finish||!c)),l(m,"".concat(f,"icon-cross"),!s&&r==="error"&&(c&&!c.error||!c)),m)),k=n.createElement("span",{className:"".concat(t,"-icon-dot")});return h?typeof h=="function"?i=n.createElement("span",{className:"".concat(t,"-icon")},h(k,{index:C-1,status:r,title:y,description:v})):i=n.createElement("span",{className:"".concat(t,"-icon")},k):s&&!O(s)?i=n.createElement("span",{className:"".concat(t,"-icon")},s):c&&c.finish&&r==="finish"?i=n.createElement("span",{className:"".concat(t,"-icon")},c.finish):c&&c.error&&r==="error"?i=n.createElement("span",{className:"".concat(t,"-icon")},c.error):s||r==="finish"||r==="error"?i=n.createElement("span",{className:I}):i=n.createElement("span",{className:"".concat(t,"-icon")},C),S&&(i=S({index:C-1,status:r,title:y,description:v,node:i})),i},P=r||"wait",j=F("".concat(t,"-item"),"".concat(t,"-item-").concat(P),D,(a={},l(a,"".concat(t,"-item-custom"),s),l(a,"".concat(t,"-item-active"),w),l(a,"".concat(t,"-item-disabled"),g===!0),a)),K=U({},$),_=n.createElement("div",L({},W,{className:j,style:K}),n.createElement("div",L({onClick:N},p,{className:"".concat(t,"-item-container")}),n.createElement("div",{className:"".concat(t,"-item-tail")},z),n.createElement("div",{className:"".concat(t,"-item-icon")},q()),n.createElement("div",{className:"".concat(t,"-item-content")},n.createElement("div",{className:"".concat(t,"-item-title")},y,u&&n.createElement("div",{title:typeof u=="string"?u:void 0,className:"".concat(t,"-item-subtitle")},u)),v&&n.createElement("div",{className:"".concat(t,"-item-description")},v))));return R&&(_=R(_)||null),_}var ne=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function ce(e){var a,D=e.prefixCls,t=D===void 0?"rc-steps":D,$=e.style,w=$===void 0?{}:$,r=e.className;e.children;var f=e.direction,s=f===void 0?"horizontal":f,C=e.type,g=C===void 0?"default":C,v=e.labelPlacement,y=v===void 0?"horizontal":v,u=e.iconPrefix,h=u===void 0?"rc":u,S=e.status,z=S===void 0?"process":S,c=e.size,E=e.current,d=E===void 0?0:E,N=e.progressDot,R=N===void 0?!1:N,W=e.stepIcon,T=e.initial,p=T===void 0?0:T,q=e.icons,P=e.onChange,j=e.itemRender,K=e.items,_=K===void 0?[]:K,b=Q(e,ne),m=g==="navigation",i=g==="inline",I=i||R,k=i?"horizontal":s,G=i?void 0:c,X=I?"vertical":y,Y=F(t,"".concat(t,"-").concat(k),r,(a={},l(a,"".concat(t,"-").concat(G),G),l(a,"".concat(t,"-label-").concat(X),k==="horizontal"),l(a,"".concat(t,"-dot"),!!I),l(a,"".concat(t,"-navigation"),m),l(a,"".concat(t,"-inline"),i),a)),Z=function(A){P&&d!==A&&P(A)},ee=function(A,H){var o=U({},A),x=p+H;return z==="error"&&H===d-1&&(o.className="".concat(t,"-next-error")),o.status||(x===d?o.status=z:x<d?o.status="finish":o.status="wait"),i&&(o.icon=void 0,o.subTitle=void 0),!o.render&&j&&(o.render=function(te){return j(o,te)}),J.createElement(V,L({},o,{active:x===d,stepNumber:x+1,stepIndex:x,key:x,prefixCls:t,iconPrefix:h,wrapperStyle:w,progressDot:I,stepIcon:W,icons:q,onStepClick:P&&Z}))};return J.createElement("div",L({className:Y,style:w},b),_.filter(function(B){return B}).map(ee))}ce.Step=V;export{ce as S};
