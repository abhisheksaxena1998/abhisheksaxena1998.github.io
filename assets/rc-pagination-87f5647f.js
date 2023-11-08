import{i as ce,j as pe,a as he,b as l,k as p,_ as ge,e as Ce,g as G}from"./@babel-28107d12.js";import{c as E}from"./classnames-325479d5.js";import{x as Pe}from"./rc-util-cfa393e8.js";import{a as u,r as T}from"./react-d998b26c.js";const ke={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var _={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};const Ne={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};var $=function(I){ce(v,I);var f=pe(v);function v(){var s;he(this,v);for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return s=f.call.apply(f,[this].concat(t)),l(p(s),"state",{goInputText:""}),l(p(s),"getValidValue",function(){var a=s.state.goInputText;return!a||Number.isNaN(a)?void 0:Number(a)}),l(p(s),"buildOptionText",function(a){return"".concat(a," ").concat(s.props.locale.items_per_page)}),l(p(s),"changeSize",function(a){s.props.changeSize(Number(a))}),l(p(s),"handleChange",function(a){s.setState({goInputText:a.target.value})}),l(p(s),"handleBlur",function(a){var o=s.props,n=o.goButton,r=o.quickGo,i=o.rootPrefixCls,m=s.state.goInputText;n||m===""||(s.setState({goInputText:""}),!(a.relatedTarget&&(a.relatedTarget.className.indexOf("".concat(i,"-item-link"))>=0||a.relatedTarget.className.indexOf("".concat(i,"-item"))>=0))&&r(s.getValidValue()))}),l(p(s),"go",function(a){var o=s.state.goInputText;o!==""&&(a.keyCode===_.ENTER||a.type==="click")&&(s.setState({goInputText:""}),s.props.quickGo(s.getValidValue()))}),s}return ge(v,[{key:"getPageSizeOptions",value:function(){var e=this.props,t=e.pageSize,c=e.pageSizeOptions;return c.some(function(a){return a.toString()===t.toString()})?c:c.concat([t.toString()]).sort(function(a,o){var n=Number.isNaN(Number(a))?0:Number(a),r=Number.isNaN(Number(o))?0:Number(o);return n-r})}},{key:"render",value:function(){var e=this,t=this.props,c=t.pageSize,a=t.locale,o=t.rootPrefixCls,n=t.changeSize,r=t.quickGo,i=t.goButton,m=t.selectComponentClass,g=t.buildOptionText,d=t.selectPrefixCls,S=t.disabled,z=this.state.goInputText,C="".concat(o,"-options"),N=m,w=null,R=null,V=null;if(!n&&!r)return null;var j=this.getPageSizeOptions();if(n&&N){var A=j.map(function(k,h){return u.createElement(N.Option,{key:h,value:k.toString()},(g||e.buildOptionText)(k))});w=u.createElement(N,{disabled:S,prefixCls:d,showSearch:!1,className:"".concat(C,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(c||j[0]).toString(),onChange:this.changeSize,getPopupContainer:function(h){return h.parentNode},"aria-label":a.page_size,defaultOpen:!1},A)}return r&&(i&&(V=typeof i=="boolean"?u.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:S,className:"".concat(C,"-quick-jumper-button")},a.jump_to_confirm):u.createElement("span",{onClick:this.go,onKeyUp:this.go},i)),R=u.createElement("div",{className:"".concat(C,"-quick-jumper")},a.jump_to,u.createElement("input",{disabled:S,type:"text",value:z,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":a.page}),a.page,V)),u.createElement("li",{className:"".concat(C)},w,R)}}]),v}(u.Component);l($,"defaultProps",{pageSizeOptions:["10","20","50","100"]});var D=function(f){var v,s=f.rootPrefixCls,e=f.page,t=f.active,c=f.className,a=f.showTitle,o=f.onClick,n=f.onKeyPress,r=f.itemRender,i="".concat(s,"-item"),m=E(i,"".concat(i,"-").concat(e),(v={},l(v,"".concat(i,"-active"),t),l(v,"".concat(i,"-disabled"),!e),l(v,f.className,c),v)),g=function(){o(e)},d=function(C){n(C,o,e)},S=r(e,"page",u.createElement("a",{rel:"nofollow"},e));return S?u.createElement("li",{title:a?e.toString():null,className:m,onClick:g,onKeyPress:d,tabIndex:0},S):null};function Q(){}function ue(I){var f=Number(I);return typeof f=="number"&&!Number.isNaN(f)&&isFinite(f)&&Math.floor(f)===f}var Se=function(f,v,s){return s};function b(I,f,v){var s=typeof I>"u"?f.pageSize:I;return Math.floor((v.total-1)/s)+1}var Ie=function(I){ce(v,I);var f=pe(v);function v(s){var e;he(this,v),e=f.call(this,s),l(p(e),"paginationNode",u.createRef()),l(p(e),"getJumpPrevPage",function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))}),l(p(e),"getJumpNextPage",function(){return Math.min(b(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))}),l(p(e),"getItemIcon",function(n,r){var i=e.props.prefixCls,m=n||u.createElement("button",{type:"button","aria-label":r,className:"".concat(i,"-item-link")});return typeof n=="function"&&(m=u.createElement(n,Ce({},e.props))),m}),l(p(e),"isValid",function(n){var r=e.props.total;return ue(n)&&n!==e.state.current&&ue(r)&&r>0}),l(p(e),"shouldDisplayQuickJumper",function(){var n=e.props,r=n.showQuickJumper,i=n.total,m=e.state.pageSize;return i<=m?!1:r}),l(p(e),"handleKeyDown",function(n){(n.keyCode===_.ARROW_UP||n.keyCode===_.ARROW_DOWN)&&n.preventDefault()}),l(p(e),"handleKeyUp",function(n){var r=e.getValidValue(n),i=e.state.currentInputValue;r!==i&&e.setState({currentInputValue:r}),n.keyCode===_.ENTER?e.handleChange(r):n.keyCode===_.ARROW_UP?e.handleChange(r-1):n.keyCode===_.ARROW_DOWN&&e.handleChange(r+1)}),l(p(e),"handleBlur",function(n){var r=e.getValidValue(n);e.handleChange(r)}),l(p(e),"changePageSize",function(n){var r=e.state.current,i=b(n,e.state,e.props);r=r>i?i:r,i===0&&(r=e.state.current),typeof n=="number"&&("pageSize"in e.props||e.setState({pageSize:n}),"current"in e.props||e.setState({current:r,currentInputValue:r})),e.props.onShowSizeChange(r,n),"onChange"in e.props&&e.props.onChange&&e.props.onChange(r,n)}),l(p(e),"handleChange",function(n){var r=e.props,i=r.disabled,m=r.onChange,g=e.state,d=g.pageSize,S=g.current,z=g.currentInputValue;if(e.isValid(n)&&!i){var C=b(void 0,e.state,e.props),N=n;return n>C?N=C:n<1&&(N=1),"current"in e.props||e.setState({current:N}),N!==z&&e.setState({currentInputValue:N}),m(N,d),N}return S}),l(p(e),"prev",function(){e.hasPrev()&&e.handleChange(e.state.current-1)}),l(p(e),"next",function(){e.hasNext()&&e.handleChange(e.state.current+1)}),l(p(e),"jumpPrev",function(){e.handleChange(e.getJumpPrevPage())}),l(p(e),"jumpNext",function(){e.handleChange(e.getJumpNextPage())}),l(p(e),"hasPrev",function(){return e.state.current>1}),l(p(e),"hasNext",function(){return e.state.current<b(void 0,e.state,e.props)}),l(p(e),"runIfEnter",function(n,r){if(n.key==="Enter"||n.charCode===13){for(var i=arguments.length,m=new Array(i>2?i-2:0),g=2;g<i;g++)m[g-2]=arguments[g];r.apply(void 0,m)}}),l(p(e),"runIfEnterPrev",function(n){e.runIfEnter(n,e.prev)}),l(p(e),"runIfEnterNext",function(n){e.runIfEnter(n,e.next)}),l(p(e),"runIfEnterJumpPrev",function(n){e.runIfEnter(n,e.jumpPrev)}),l(p(e),"runIfEnterJumpNext",function(n){e.runIfEnter(n,e.jumpNext)}),l(p(e),"handleGoTO",function(n){(n.keyCode===_.ENTER||n.type==="click")&&e.handleChange(e.state.currentInputValue)}),l(p(e),"renderPrev",function(n){var r=e.props,i=r.prevIcon,m=r.itemRender,g=m(n,"prev",e.getItemIcon(i,"prev page")),d=!e.hasPrev();return T.isValidElement(g)?T.cloneElement(g,{disabled:d}):g}),l(p(e),"renderNext",function(n){var r=e.props,i=r.nextIcon,m=r.itemRender,g=m(n,"next",e.getItemIcon(i,"next page")),d=!e.hasNext();return T.isValidElement(g)?T.cloneElement(g,{disabled:d}):g});var t=s.onChange!==Q,c="current"in s;c&&!t&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var a=s.defaultCurrent;"current"in s&&(a=s.current);var o=s.defaultPageSize;return"pageSize"in s&&(o=s.pageSize),a=Math.min(a,b(o,void 0,s)),e.state={current:a,currentInputValue:a,pageSize:o},e}return ge(v,[{key:"componentDidUpdate",value:function(e,t){var c=this.props.prefixCls;if(t.current!==this.state.current&&this.paginationNode.current){var a=this.paginationNode.current.querySelector(".".concat(c,"-item-").concat(t.current));if(a&&document.activeElement===a){var o;a==null||(o=a.blur)===null||o===void 0||o.call(a)}}}},{key:"getValidValue",value:function(e){var t=e.target.value,c=b(void 0,this.state,this.props),a=this.state.currentInputValue,o;return t===""?o=t:Number.isNaN(Number(t))?o=a:t>=c?o=c:o=Number(t),o}},{key:"getShowSizeChanger",value:function(){var e=this.props,t=e.showSizeChanger,c=e.total,a=e.totalBoundaryShowSizeChanger;return typeof t<"u"?t:c>a}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,c=e.className,a=e.style,o=e.disabled,n=e.hideOnSinglePage,r=e.total,i=e.locale,m=e.showQuickJumper,g=e.showLessItems,d=e.showTitle,S=e.showTotal,z=e.simple,C=e.itemRender,N=e.showPrevNextJumpers,w=e.jumpPrevIcon,R=e.jumpNextIcon,V=e.selectComponentClass,j=e.selectPrefixCls,A=e.pageSizeOptions,k=this.state,h=k.current,O=k.pageSize,fe=k.currentInputValue;if(n===!0&&r<=O)return null;var x=b(void 0,this.state,this.props),P=[],F=null,Z=null,Y=null,H=null,K=null,U=m&&m.goButton,y=g?1:2,X=h-1>0?h-1:0,ee=h+1<x?h+1:x,te=Pe(this.props,{aria:!0,data:!0}),ne=S&&u.createElement("li",{className:"".concat(t,"-total-text")},S(r,[r===0?0:(h-1)*O+1,h*O>r?r:h*O]));if(z){U&&(typeof U=="boolean"?K=u.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},i.jump_to_confirm):K=u.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},U),K=u.createElement("li",{title:d?"".concat(i.jump_to).concat(h,"/").concat(x):null,className:"".concat(t,"-simple-pager")},K));var ae=this.renderPrev(X);return u.createElement("ul",G({className:E(t,"".concat(t,"-simple"),l({},"".concat(t,"-disabled"),o),c),style:a,ref:this.paginationNode},te),ne,ae?u.createElement("li",{title:d?i.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:E("".concat(t,"-prev"),l({},"".concat(t,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},ae):null,u.createElement("li",{title:d?"".concat(h,"/").concat(x):null,className:"".concat(t,"-simple-pager")},u.createElement("input",{type:"text",value:fe,disabled:o,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:3}),u.createElement("span",{className:"".concat(t,"-slash")},"/"),x),u.createElement("li",{title:d?i.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:E("".concat(t,"-next"),l({},"".concat(t,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ee)),u.createElement($,{disabled:o,locale:i,rootPrefixCls:t,selectComponentClass:V,selectPrefixCls:j,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:h,pageSize:O,pageSizeOptions:A,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:K}))}if(x<=3+y*2){var re={locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:d,itemRender:C};x||P.push(u.createElement(D,G({},re,{key:"noPager",page:1,className:"".concat(t,"-item-disabled")})));for(var B=1;B<=x;B+=1){var me=h===B;P.push(u.createElement(D,G({},re,{key:B,page:B,active:me})))}}else{var de=g?i.prev_3:i.prev_5,ve=g?i.next_3:i.next_5,ie=C(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(w,"prev page")),se=C(this.getJumpNextPage(),"jump-next",this.getItemIcon(R,"next page"));N&&(F=ie?u.createElement("li",{title:d?de:null,key:"prev",onClick:this.jumpPrev,tabIndex:0,onKeyPress:this.runIfEnterJumpPrev,className:E("".concat(t,"-jump-prev"),l({},"".concat(t,"-jump-prev-custom-icon"),!!w))},ie):null,Z=se?u.createElement("li",{title:d?ve:null,key:"next",tabIndex:0,onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:E("".concat(t,"-jump-next"),l({},"".concat(t,"-jump-next-custom-icon"),!!R))},se):null),H=u.createElement(D,{locale:i,last:!0,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:x,page:x,active:!1,showTitle:d,itemRender:C}),Y=u.createElement(D,{locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:d,itemRender:C});var W=Math.max(1,h-y),q=Math.min(h+y,x);h-1<=y&&(q=1+y*2),x-h<=y&&(W=x-y*2);for(var J=W;J<=q;J+=1){var xe=h===J;P.push(u.createElement(D,{locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:J,page:J,active:xe,showTitle:d,itemRender:C}))}h-1>=y*2&&h!==1+2&&(P[0]=T.cloneElement(P[0],{className:"".concat(t,"-item-after-jump-prev")}),P.unshift(F)),x-h>=y*2&&h!==x-2&&(P[P.length-1]=T.cloneElement(P[P.length-1],{className:"".concat(t,"-item-before-jump-next")}),P.push(Z)),W!==1&&P.unshift(Y),q!==x&&P.push(H)}var L=!this.hasPrev()||!x,M=!this.hasNext()||!x,le=this.renderPrev(X),oe=this.renderNext(ee);return u.createElement("ul",G({className:E(t,c,l({},"".concat(t,"-disabled"),o)),style:a,ref:this.paginationNode},te),ne,le?u.createElement("li",{title:d?i.prev_page:null,onClick:this.prev,tabIndex:L?null:0,onKeyPress:this.runIfEnterPrev,className:E("".concat(t,"-prev"),l({},"".concat(t,"-disabled"),L)),"aria-disabled":L},le):null,P,oe?u.createElement("li",{title:d?i.next_page:null,onClick:this.next,tabIndex:M?null:0,onKeyPress:this.runIfEnterNext,className:E("".concat(t,"-next"),l({},"".concat(t,"-disabled"),M)),"aria-disabled":M},oe):null,u.createElement($,{disabled:o,locale:i,rootPrefixCls:t,selectComponentClass:V,selectPrefixCls:j,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:h,pageSize:O,pageSizeOptions:A,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:U}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var c={};if("current"in e&&(c.current=e.current,e.current!==t.current&&(c.currentInputValue=c.current)),"pageSize"in e&&e.pageSize!==t.pageSize){var a=t.current,o=b(e.pageSize,t,e);a=a>o?o:a,"current"in e||(c.current=a,c.currentInputValue=a),c.pageSize=e.pageSize}return c}}]),v}(u.Component);l(Ie,"defaultProps",{defaultCurrent:1,total:0,defaultPageSize:10,onChange:Q,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:Q,locale:Ne,style:{},itemRender:Se,totalBoundaryShowSizeChanger:50});export{Ie as P,ke as e};
