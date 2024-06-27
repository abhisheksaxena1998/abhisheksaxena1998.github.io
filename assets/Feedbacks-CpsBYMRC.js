import{r as p,R as b,j as e}from"./index-DB1dk6eM.js";import{m as u,s as f}from"./styles-CwsbMgzx.js";import{S as v}from"./SectionWrapper-CopXcA04.js";import{t as w}from"./index-BHSQFgSr.js";function N(s,i,n){return typeof s=="string"?s=document.querySelectorAll(s):s instanceof Element&&(s=[s]),Array.from(s||[])}const y={some:0,all:1};function E(s,i,{root:n,margin:a,amount:t="some"}={}){const o=N(s),c=new WeakMap,d=x=>{x.forEach(r=>{const m=c.get(r.target);if(r.isIntersecting!==!!m)if(r.isIntersecting){const h=i(r);typeof h=="function"?c.set(r.target,h):l.unobserve(r.target)}else m&&(m(r),c.delete(r.target))})},l=new IntersectionObserver(d,{root:n,rootMargin:a,threshold:typeof t=="number"?t:y[t]});return o.forEach(x=>l.observe(x)),()=>l.disconnect()}function I(s,{root:i,margin:n,amount:a,once:t=!1}={}){const[o,c]=p.useState(!1);return p.useEffect(()=>{if(!s.current||t&&o)return;const d=()=>(c(!0),t?void 0:()=>c(!1)),l={root:i&&i.current||void 0,margin:n,amount:a};return E(s.current,d,l)},[i,s,n,t,a]),o}const j={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},k={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},S=b.memo(({index:s,testimonial:i,image:n,event:a,repo_url:t,redirect_url:o,forks:c,stars:d,visitors:l,points:x,isMobile:r,award_text:m,award_link:h})=>e.jsxs(u.div,{variants:r?{}:k,className:"bg-black-200 p-10 rounded-3xl xs:w-[] w-full",children:[e.jsx("p",{className:"text-white font-black text-[40px]",children:a}),e.jsxs("div",{className:"mt-1",children:[e.jsx("p",{className:"text-white tracking-wider text-[18px]",children:i}),m&&e.jsx("a",{href:h,children:e.jsx("div",{className:"text-white tracking-wider text-[18px] mt-2",children:e.jsx("p",{className:"award-text",children:m})})}),e.jsxs("div",{className:"mt-7 flex justify-between items-center gap-1 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row",children:[e.jsxs("div",{className:"flex-4 flex flex-col px-3 py-1 gap-5",children:[x&&x.map(g=>e.jsxs("p",{className:"mt-1 text-secondary text-[18px]",children:[e.jsx("span",{className:"blue-text-gradient",children:"●"}),g]},g)),t&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:o,children:e.jsx("img",{loading:"lazy",src:t,alt:`feedback_by-${s}`,className:"w-[20rem]"})}),e.jsx("span",{className:"text-white font-medium text-[16px]",children:e.jsx("span",{className:"blue-text-gradient",children:e.jsxs("a",{href:o,children:["Repository Statistics:",e.jsxs("p",{className:"flex flex-row py-4",children:[l&&e.jsx("img",{src:l,alt:"github visitors"}),d&&e.jsx("img",{src:d,alt:"github stars"}),c&&e.jsx("img",{src:c,alt:"github forks"})]})]})})})]})]}),e.jsx("img",{loading:"lazy",src:n,alt:`feedback_by-${s}`,className:"w-[15rem] h-[15rem] rounded-full object-cover"})]})]})]})),C=()=>{const s=p.useRef(null),i=I(s,{once:!0}),n=window.innerWidth<768;return e.jsxs("div",{className:"mt-12 bg-black-100 rounded-[20px]",ref:s,children:[e.jsx("div",{className:`bg-tertiary rounded-2xl ${f.padding} min-h-[300px]`,children:e.jsxs(u.div,{variants:n?{}:j,initial:"hidden",animate:i?"visible":"hidden",children:[e.jsx("p",{className:f.sectionSubText}),e.jsx("h2",{className:f.sectionHeadText,children:"ACHIEVEMENTS."})]})}),e.jsx("div",{className:`-mt-20 pb-14 ${f.paddingX} flex flex-wrap gap-7`,children:e.jsx(u.div,{variants:n?{}:j,initial:"hidden",animate:i?"visible":"hidden",className:"flex flex-wrap gap-7",children:w.map((a,t)=>e.jsx(S,{index:t,isMobile:n,...a},a.event))})})]})},M=v(C,"achievements");export{M as default};
