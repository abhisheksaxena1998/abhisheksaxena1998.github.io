import{r as s,j as e}from"./react-gY946ZKh.js";import{L as m}from"./react-router-dom-JpPL6j9G.js";import{s as p}from"./styles-XArcKjeV.js";import{n as c}from"./index-zrPh9aRe.js";import d from"./AnimatedWords-5wPhQB9q.js";import{m as f}from"./framer-motion-3135YHOd.js";import"./classnames-uKr76nPM.js";import"./react-dom-Wc9rTDnX.js";import"./react-router-1BDwAuXd.js";import"./@remix-run-xEq2s2Jc.js";const h="/assets/logo-VGnaa2Ih.svg",g="/assets/menu-xExA3zOC.svg",u="/assets/close-eyLaNEdR.svg",$=()=>{const[n,i]=s.useState(""),[l,r]=s.useState(!1),[x,a]=s.useState(!1),o=s.useCallback(()=>{window.scrollY>100?a(!0):a(!1)},[]);return s.useEffect(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)),[o]),e.jsx("nav",{className:`${p.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${x?"bg-primary":"bg-transparent"}`,children:e.jsxs("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[e.jsxs(m,{to:"/",className:"flex items-center gap-2  mr-10",onClick:()=>{i(""),window.scrollTo(0,0)},children:[e.jsx(f.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1.02},transition:{delay:1,type:"spring"},children:e.jsx("img",{loading:"lazy",src:h,alt:"logo",className:"w-9 h-9 object-contain"})}),e.jsxs("div",{className:"text-white text-[18px] font-bold cursor-pointer flex ",style:{marginRight:"2rem"},children:[e.jsx(d,{text:"Abhishek Saxena",styles:{overflow:"hidden",display:"flex",fontSize:"18px",fontWeight:"bold"}}),e.jsx("div",{className:"sm:block hidden",children:e.jsx(d,{text:" | Software Engineer",styles:{overflow:"hidden",display:"flex",fontSize:"18px",fontWeight:"bold"}})})]})]}),e.jsx("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:c.map(t=>e.jsx("li",{className:`${n===t.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>i(t.title),children:e.jsx("a",{href:`#${t.id}`,children:t.title})},t.id))}),e.jsxs("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e.jsx("img",{loading:"lazy",src:l?u:g,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>r(!l)}),e.jsx("div",{className:`${l?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e.jsx("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:c.map(t=>e.jsx("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${n===t.title?"text-white":"text-secondary"}`,onClick:()=>{r(!l),i(t.title)},children:e.jsx("a",{href:`#${t.id}`,children:t.title})},t.id))})})]})]})})};export{$ as default};