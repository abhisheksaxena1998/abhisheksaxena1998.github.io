import{r as l}from"./react.DPZx3FLm.js";import{P as o}from"./prop-types.C_TNmPo8.js";import{m as g}from"./react-async-script.g1kdZUPl.js";import"./classnames.CIPFGIzL.js";import"./hoist-non-react-statics.C54nwvfX.js";var x=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},h.apply(this,arguments)}function m(n,r){if(n==null)return{};var i={},t=Object.keys(n),e,a;for(a=0;a<t.length;a++)e=t[a],!(r.indexOf(e)>=0)&&(i[e]=n[e]);return i}function s(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function b(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,p(n,r)}function p(n,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(n,r)}var c=function(n){b(r,n);function r(){var t;return t=n.call(this)||this,t.handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}var i=r.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&this._widgetId!==void 0?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&this._widgetId!==void 0)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise(function(a,f){e.executionResolve=a,e.executionReject=f,e.execute()})},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&this._widgetId!==void 0&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&this._widgetId===void 0){var a=document.createElement("div");this._widgetId=e(a,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(a)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props;e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated;var a=m(e,x);return l.createElement("div",h({},a,{ref:this.handleRecaptchaRef}))},r}(l.Component);c.displayName="ReCAPTCHA";c.propTypes={sitekey:o.string.isRequired,onChange:o.func,grecaptcha:o.object,theme:o.oneOf(["dark","light"]),type:o.oneOf(["image","audio"]),tabindex:o.number,onExpired:o.func,onErrored:o.func,size:o.oneOf(["compact","normal","invisible"]),stoken:o.string,hl:o.string,badge:o.oneOf(["bottomright","bottomleft","inline"]),isolated:o.bool};c.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d="onloadcallback",R="grecaptcha";function u(){return typeof window<"u"&&window.recaptchaOptions||{}}function v(){var n=u(),r=n.useRecaptchaNet?"recaptcha.net":"www.google.com";return n.enterprise?"https://"+r+"/recaptcha/enterprise.js?onload="+d+"&render=explicit":"https://"+r+"/recaptcha/api.js?onload="+d+"&render=explicit"}const O=g(v,{callbackName:d,globalName:R,attributes:u().nonce?{nonce:u().nonce}:{}})(c);export{c as ReCAPTCHA,O as default};
