import{r as o,j as t}from"./react-d998b26c.js";import{b as p}from"./react-dom-890fecd1.js";import{B as E}from"./react-router-dom-b16adf4a.js";import"./classnames-325479d5.js";import"./react-router-def3222b.js";import"./@remix-run-726c34cc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function c(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(r){if(r.ep)return;r.ep=!0;const e=c(r);fetch(r.href,e)}})();const v="modulepreload",h=function(a){return"/"+a},m={},i=function(n,c,u){if(!c||c.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(c.map(e=>{if(e=h(e),e in m)return;m[e]=!0;const s=e.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!u)for(let d=r.length-1;d>=0;d--){const _=r[d];if(_.href===e&&(!s||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":v,s||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),s)return new Promise((d,_)=>{l.addEventListener("load",d),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})};const y=o.lazy(()=>i(()=>import("./About-dbe40fb1.js"),["assets/About-dbe40fb1.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-tilt-2613e010.js","assets/styles-bf024547.js","assets/index-8d342b17.js","assets/SectionWrapper-1d638943.js","assets/framer-motion-480b3473.js"])),x=o.lazy(()=>i(()=>import("./Contact-16836b9b.js"),["assets/Contact-16836b9b.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/SectionWrapper-1d638943.js","assets/styles-bf024547.js","assets/framer-motion-480b3473.js","assets/antd-cf697d74.js","assets/rc-util-6fbd7337.js","assets/react-is-e8e5dbb3.js","assets/@babel-43e769cc.js","assets/react-dom-890fecd1.js","assets/@ant-design-3c04ab4b.js","assets/@emotion-c0b5c018.js","assets/stylis-fad5b415.js","assets/throttle-debounce-87e7e444.js","assets/resize-observer-polyfill-0f9f8adb.js","assets/json2mq-6694b9c9.js","assets/string-convert-c60507dd.js","assets/@ctrl-fb5a5473.js","assets/rc-resize-observer-ee76393b.js","assets/rc-pagination-689bade9.js","assets/rc-picker-0d54b964.js","assets/dayjs-8c906c2d.js","assets/@rc-component-93a12345.js","assets/rc-motion-1104756f.js","assets/scroll-into-view-if-needed-640b7801.js","assets/compute-scroll-into-view-50f8bc03.js","assets/rc-notification-640eed4a.js","assets/rc-dialog-144699b2.js","assets/rc-field-form-d131c68b.js","assets/async-validator-dee29e8b.js","assets/rc-select-fc5c77f6.js","assets/rc-overflow-309b0131.js","assets/rc-virtual-list-87e0183e.js","assets/rc-tooltip-b02001df.js","assets/rc-dropdown-e84c210a.js","assets/rc-menu-e18a1022.js","assets/rc-checkbox-49342b76.js","assets/rc-tabs-4bc3661a.js","assets/rc-cascader-971d958b.js","assets/rc-tree-933a387c.js","assets/rc-collapse-2336b029.js","assets/rc-input-number-a86df21e.js","assets/rc-input-dfa5175e.js","assets/rc-textarea-f64ac05f.js","assets/rc-drawer-403ae98d.js","assets/rc-image-83392328.js","assets/rc-mentions-986dbed8.js","assets/rc-progress-22284798.js","assets/qrcode.react-9f9145c0.js","assets/rc-rate-14af8693.js","assets/rc-segmented-01a11e80.js","assets/rc-slider-fe241175.js","assets/rc-steps-9d441ee9.js","assets/rc-switch-65294e1c.js","assets/rc-table-a6863039.js","assets/rc-tree-select-c827921b.js","assets/copy-to-clipboard-ee38022b.js","assets/toggle-selection-93f4ad84.js","assets/rc-upload-af68c002.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),j=o.lazy(()=>i(()=>import("./Experience-d7c9fc20.js"),["assets/Experience-d7c9fc20.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-vertical-timeline-component-afe6a1d9.js","assets/prop-types-bef3c79f.js","assets/react-intersection-observer-2bfc65b8.js","assets/react-vertical-timeline-component-0c9b5da0.css","assets/styles-bf024547.js","assets/index-8d342b17.js","assets/SectionWrapper-1d638943.js","assets/framer-motion-480b3473.js","assets/react-dom-890fecd1.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),L=o.lazy(()=>i(()=>import("./Feedbacks-3bdd1921.js"),["assets/Feedbacks-3bdd1921.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/styles-bf024547.js","assets/SectionWrapper-1d638943.js","assets/framer-motion-480b3473.js","assets/index-8d342b17.js"])),g=o.lazy(()=>i(()=>import("./Hero-94f97bf7.js"),["assets/Hero-94f97bf7.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/styles-bf024547.js","assets/framer-motion-480b3473.js","assets/react-dom-890fecd1.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),P=o.lazy(()=>i(()=>import("./Navbar-bf69d83d.js"),["assets/Navbar-bf69d83d.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js","assets/styles-bf024547.js","assets/index-8d342b17.js","assets/AnimatedWords-58fef83e.js","assets/framer-motion-480b3473.js"])),R=o.lazy(()=>i(()=>import("./Tech-7762c053.js"),["assets/Tech-7762c053.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/Earth-3c2fd8b5.js","assets/@react-three-5c5d5b5b.js","assets/@babel-43e769cc.js","assets/three-4dacbd90.js","assets/react-use-measure-761a5d94.js","assets/debounce-5580f047.js","assets/its-fine-845edb61.js","assets/react-reconciler-32468f67.js","assets/scheduler-765c72db.js","assets/react-dom-890fecd1.js","assets/zustand-5d5ab9ea.js","assets/three-stdlib-63fdb085.js","assets/mmd-parser-06216fd5.js","assets/ktx-parse-b17e1334.js","assets/zstddec-5cb485fa.js","assets/opentype.js-95d064b1.js","assets/react-merge-refs-239dbb3c.js","assets/suspend-react-4f9dedb1.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js","assets/Loader-c331b580.js","assets/maath-723c05b8.js","assets/SectionWrapper-1d638943.js","assets/styles-bf024547.js","assets/framer-motion-480b3473.js","assets/index-8d342b17.js"])),O=o.lazy(()=>i(()=>import("./Works-fe436671.js"),["assets/Works-fe436671.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-tilt-2613e010.js","assets/styles-bf024547.js","assets/SectionWrapper-1d638943.js","assets/framer-motion-480b3473.js","assets/index-8d342b17.js","assets/@ant-design-3c04ab4b.js","assets/rc-util-6fbd7337.js","assets/react-is-e8e5dbb3.js","assets/@babel-43e769cc.js","assets/react-dom-890fecd1.js","assets/@emotion-c0b5c018.js","assets/stylis-fad5b415.js","assets/throttle-debounce-87e7e444.js","assets/resize-observer-polyfill-0f9f8adb.js","assets/json2mq-6694b9c9.js","assets/string-convert-c60507dd.js","assets/@ctrl-fb5a5473.js","assets/antd-cf697d74.js","assets/rc-resize-observer-ee76393b.js","assets/rc-pagination-689bade9.js","assets/rc-picker-0d54b964.js","assets/dayjs-8c906c2d.js","assets/@rc-component-93a12345.js","assets/rc-motion-1104756f.js","assets/scroll-into-view-if-needed-640b7801.js","assets/compute-scroll-into-view-50f8bc03.js","assets/rc-notification-640eed4a.js","assets/rc-dialog-144699b2.js","assets/rc-field-form-d131c68b.js","assets/async-validator-dee29e8b.js","assets/rc-select-fc5c77f6.js","assets/rc-overflow-309b0131.js","assets/rc-virtual-list-87e0183e.js","assets/rc-tooltip-b02001df.js","assets/rc-dropdown-e84c210a.js","assets/rc-menu-e18a1022.js","assets/rc-checkbox-49342b76.js","assets/rc-tabs-4bc3661a.js","assets/rc-cascader-971d958b.js","assets/rc-tree-933a387c.js","assets/rc-collapse-2336b029.js","assets/rc-input-number-a86df21e.js","assets/rc-input-dfa5175e.js","assets/rc-textarea-f64ac05f.js","assets/rc-drawer-403ae98d.js","assets/rc-image-83392328.js","assets/rc-mentions-986dbed8.js","assets/rc-progress-22284798.js","assets/qrcode.react-9f9145c0.js","assets/rc-rate-14af8693.js","assets/rc-segmented-01a11e80.js","assets/rc-slider-fe241175.js","assets/rc-steps-9d441ee9.js","assets/rc-switch-65294e1c.js","assets/rc-table-a6863039.js","assets/rc-tree-select-c827921b.js","assets/copy-to-clipboard-ee38022b.js","assets/toggle-selection-93f4ad84.js","assets/rc-upload-af68c002.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),w=o.lazy(()=>i(()=>import("./Stars-cc6cd64f.js"),["assets/Stars-cc6cd64f.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/@react-three-5c5d5b5b.js","assets/@babel-43e769cc.js","assets/three-4dacbd90.js","assets/react-use-measure-761a5d94.js","assets/debounce-5580f047.js","assets/its-fine-845edb61.js","assets/react-reconciler-32468f67.js","assets/scheduler-765c72db.js","assets/react-dom-890fecd1.js","assets/zustand-5d5ab9ea.js","assets/three-stdlib-63fdb085.js","assets/mmd-parser-06216fd5.js","assets/ktx-parse-b17e1334.js","assets/zstddec-5cb485fa.js","assets/opentype.js-95d064b1.js","assets/react-merge-refs-239dbb3c.js","assets/suspend-react-4f9dedb1.js","assets/maath-723c05b8.js"])),z=o.lazy(()=>i(()=>import("./Profile-c2bfcb38.js"),["assets/Profile-c2bfcb38.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-dom-890fecd1.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),b=o.lazy(()=>i(()=>import("./WishingStar-6950d511.js"),["assets/WishingStar-6950d511.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-dom-890fecd1.js","assets/react-router-dom-b16adf4a.js","assets/react-router-def3222b.js","assets/@remix-run-726c34cc.js"])),A=()=>{const[a,n]=o.useState(window.innerWidth<=768);return o.useEffect(()=>{const c=()=>n(window.innerWidth<=768);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),t.jsxs(E,{children:[!a&&t.jsx(b,{}),t.jsxs("div",{className:"relative z-0 bg-primary",children:[t.jsx("div",{className:"stars"}),t.jsx("div",{className:"twinkle"}),t.jsx("div",{className:"clouds"}),t.jsxs("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center -mt-10",children:[t.jsx(P,{}),t.jsx(g,{isMobile:a}),t.jsx(z,{})]}),t.jsx(y,{}),t.jsx(j,{}),t.jsx(R,{}),t.jsx(O,{}),t.jsx(L,{}),t.jsxs("div",{className:"relative z-0",children:[t.jsx(x,{}),t.jsx(w,{})]})]})]})};p.createRoot(document.getElementById("root")).render(t.jsx(A,{}));export{i as _};
