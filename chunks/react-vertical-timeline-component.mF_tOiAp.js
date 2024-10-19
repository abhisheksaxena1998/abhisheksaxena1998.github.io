import{d as y,g as q}from"./classnames.CIPFGIzL.js";import{r as _}from"./react.DPZx3FLm.js";import{p as E}from"./prop-types.C_TNmPo8.js";import{r as w}from"./react-intersection-observer.D6xb7Nef.js";function D(t,u){for(var l=0;l<u.length;l++){const a=u[l];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in t)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var f={};f.__esModule=!0;f.default=void 0;var V=p(_),r=p(E),A=p(y);function p(t){return t&&t.__esModule?t:{default:t}}const h=({animate:t=!0,className:u="",layout:l="2-columns",lineColor:a="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),V.default.createElement("div",{className:(0,A.default)(u,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":l==="2-columns","vertical-timeline--one-column-left":l==="1-column"||l==="1-column-left","vertical-timeline--one-column-right":l==="1-column-right"})},n));h.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:r.default.string};var R=h;f.default=R;var m={};m.__esModule=!0;m.default=void 0;var i=v(_),e=v(E),d=v(y),I=w;function v(t){return t&&t.__esModule?t:{default:t}}const O=({children:t="",className:u="",contentArrowStyle:l=null,contentStyle:a=null,date:n="",dateClassName:o="",icon:x=null,iconClassName:N="",iconOnClick:$=null,onTimelineElementClick:C=null,iconStyle:b=null,id:M="",position:g="",style:k=null,textClassName:F="",intersectionObserverProps:P={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:s=!1})=>i.default.createElement(I.InView,P,({inView:c,ref:S})=>i.default.createElement("div",{ref:S,id:M,className:(0,d.default)(u,"vertical-timeline-element",{"vertical-timeline-element--left":g==="left","vertical-timeline-element--right":g==="right","vertical-timeline-element--no-children":t===""}),style:k},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:b,onClick:$,className:(0,d.default)(N,"vertical-timeline-element-icon",{"bounce-in":c||s,"is-hidden":!(c||s)})},x),i.default.createElement("div",{style:a,onClick:C,className:(0,d.default)(F,"vertical-timeline-element-content",{"bounce-in":c||s,"is-hidden":!(c||s)})},i.default.createElement("div",{style:l,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,d.default)(o,"vertical-timeline-element-date")},n)))));O.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),className:e.default.string,contentArrowStyle:e.default.shape({}),contentStyle:e.default.shape({}),date:e.default.node,dateClassName:e.default.string,icon:e.default.element,iconClassName:e.default.string,iconStyle:e.default.shape({}),iconOnClick:e.default.func,onTimelineElementClick:e.default.func,id:e.default.string,position:e.default.string,style:e.default.shape({}),textClassName:e.default.string,visible:e.default.bool,intersectionObserverProps:e.default.shape({root:e.default.object,rootMargin:e.default.string,threshold:e.default.number,triggerOnce:e.default.bool})};var j=O;m.default=j;var T={VerticalTimeline:f.default,VerticalTimelineElement:m.default};const z=q(T),K=D({__proto__:null,default:z},[T]);export{K as i};
