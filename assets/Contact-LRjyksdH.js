import{_ as b}from"./@react-three-KTxSArJJ.js";import{r as o,a as C,j as e}from"./react-jw9l9ZC3.js";import{e as R}from"./@emailjs-ScBCI6Nh.js";import{s as h}from"./styles-XArcKjeV.js";import{S as A,s as g}from"./SectionWrapper-qeYnaGaS.js";import{notification as S}from"./antd-RR8_1CZK.js";import{m as y}from"./framer-motion-YRdXFUwf.js";import"./@babel-lqQsMmn5.js";import"./three-ODSOfOY2.js";import"./react-use-measure-Uxhxpaid.js";import"./debounce-u2XLviHy.js";import"./classnames-96-Rrpk_.js";import"./its-fine-_mGf-b4E.js";import"./react-reconciler-wEKmnSJx.js";import"./scheduler-iwWdm5Ml.js";import"./react-dom-CtI8I0Ic.js";import"./zustand-UQ77M4rd.js";import"./maath--sADCjaD.js";import"./three-stdlib-pT9nEKKP.js";import"./react-merge-refs-hAbx5P3g.js";import"./suspend-react-7rE_FwbT.js";import"./@ant-design-IP1jUR2_.js";import"./rc-util-fvOsdOwp.js";import"./@emotion-folQEnri.js";import"./stylis-B9hOrIjN.js";import"./throttle-debounce-5p4B7Tol.js";import"./resize-observer-polyfill-B32NGzNS.js";import"./json2mq-0nnV1xDV.js";import"./string-convert-NV8PTOlN.js";import"./@ctrl-_Y40OLZn.js";import"./rc-resize-observer-bP1MRz7y.js";import"./rc-pagination-xOA1UH4j.js";import"./rc-picker-4G_7NsUo.js";import"./dayjs-RI1ypt0Y.js";import"./@rc-component-35XQ0ZVh.js";import"./rc-motion-n_VCCica.js";import"./scroll-into-view-if-needed-IfixhRVP.js";import"./compute-scroll-into-view--ODhS-4c.js";import"./rc-notification-K4mGRJOW.js";import"./rc-dialog-SEyhwt_C.js";import"./rc-field-form-3to-MNfV.js";import"./async-validator-BHjhHa7C.js";import"./rc-select-xkYq3pjc.js";import"./rc-overflow-_qJGGb8n.js";import"./rc-virtual-list-2gUUidLJ.js";import"./rc-tooltip-Gco2SpDX.js";import"./rc-dropdown-3wwdZeW9.js";import"./rc-menu-UO4xkKd7.js";import"./rc-checkbox-ePXYc5aM.js";import"./rc-tabs-ZBYiNetF.js";import"./rc-cascader-eu_Taw3H.js";import"./rc-tree-xjdhpdXH.js";import"./rc-collapse-K22mQczX.js";import"./rc-input-number-8Bzo1W9F.js";import"./rc-input-39nXwpyM.js";import"./rc-textarea-iJirgjSB.js";import"./rc-drawer-yt6hWapA.js";import"./rc-image-Mynop94R.js";import"./rc-mentions-cF9c7xuD.js";import"./rc-progress-Kl7Ypglx.js";import"./qrcode.react-6Z8dJQer.js";import"./rc-rate-LGBsXsWd.js";import"./rc-segmented-EvofqKLQ.js";import"./rc-slider-Xyx_auwr.js";import"./rc-steps-OPzIqqCh.js";import"./rc-switch-5ht0F00i.js";import"./rc-table-zaxTetKu.js";import"./rc-tree-select-2UC1JKoM.js";import"./copy-to-clipboard-UMIWxmd-.js";import"./toggle-selection-fekekO1r.js";import"./rc-upload-aa95BSGJ.js";const T=o.lazy(()=>b(()=>import("./Earth-jGIEgSJY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),E=o.lazy(()=>b(()=>import("./react-google-recaptcha-BUqgsBty.js"),__vite__mapDeps([17,3,4,18,19,20,21]))),I=C.createContext({name:"Default"}),P=()=>{var f;const[v,n]=o.useState(null),d=o.useRef(),a=o.useRef(null),[r,u]=o.useState({name:"",email:"",message:""}),[j,m]=o.useState(!1),[N,w]=S.useNotification(),l=(t,i,s,c)=>{N[t]({message:`${s}`,description:`${c}!`,placement:i})},_=o.useMemo(()=>({name:"Ant Design"}),[]),p=t=>{const{target:i}=t,{name:s,value:c}=i;u({...r,[s]:c})};o.useEffect(()=>{let t=a.current.getValue(),i=x(t);n(i)},[d,(f=a==null?void 0:a.current)==null?void 0:f.getValue(),r]);const x=t=>!!t,k=t=>{t.preventDefault(),m(!0);let i=a.current.getValue();a.current.reset();let s=x(i);n(s),v===!0?R.send("service_nseufki","template_vmxepet",{from_name:r.name,to_name:"Abhishek",from_email:r.email,to_email:"developerabhe@gmail.com",message:r.message},"sRJPnnabw6HIjFNHF").then(()=>{m(!1),u({name:"",email:"",message:""}),l("success","topRight","Thank you."," I will get back to you as soon as possible.")},()=>{m(!1),l("error","topRight","Something went wrong!","Please try again later!")}):(m(!1),l("warning","topRight","Complete captcha","Please select 'I'm not a robot'"))};return e.jsxs(I.Provider,{value:_,children:[w,e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(y.div,{variants:g("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:h.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:h.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:d,onSubmit:k,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:r.name,onChange:p,placeholder:"What's your good name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:p,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:7,name:"message",value:r.message,onChange:p,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsx("label",{className:"flex flex-col py-4 px-0",children:e.jsx(E,{className:"recaptcha",theme:"dark",sitekey:"6LfoMWgmAAAAANR0h8irfrJoyVyv26ZvI8ILyvlp",ref:a,onChange:t=>n(t)})}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:j?"Sending...":"Send"})]})]}),e.jsx(y.div,{variants:g("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(T,{})})]})]})},Qe=A(P,"contact");export{Qe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Earth-jGIEgSJY.js","assets/@react-three-KTxSArJJ.js","assets/@babel-lqQsMmn5.js","assets/react-jw9l9ZC3.js","assets/classnames-96-Rrpk_.js","assets/three-ODSOfOY2.js","assets/react-use-measure-Uxhxpaid.js","assets/debounce-u2XLviHy.js","assets/its-fine-_mGf-b4E.js","assets/react-reconciler-wEKmnSJx.js","assets/scheduler-iwWdm5Ml.js","assets/react-dom-CtI8I0Ic.js","assets/zustand-UQ77M4rd.js","assets/maath--sADCjaD.js","assets/three-stdlib-pT9nEKKP.js","assets/react-merge-refs-hAbx5P3g.js","assets/suspend-react-7rE_FwbT.js","assets/react-google-recaptcha-BUqgsBty.js","assets/prop-types-5-ISWPDn.js","assets/react-async-script-hpKOe7b1.js","assets/hoist-non-react-statics-H-_28-dc.js","assets/react-is-cHOZVpRJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}