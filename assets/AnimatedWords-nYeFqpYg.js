import{j as t}from"./react-jw9l9ZC3.js";import{m as n}from"./framer-motion-YRdXFUwf.js";import"./classnames-96-Rrpk_.js";const x=({text:s,styles:e,delayOffset:a})=>{const r=s.split(" "),o={hidden:{opacity:0},visible:(i=1)=>({opacity:1,transition:{staggerChildren:.12,delayChildren:a?.08*i+1.1:.08*i}})},p={visible:{opacity:1,x:0,transition:{type:"spring",damping:5,stiffness:5}},hidden:{opacity:0,x:20,transition:{type:"spring",damping:5,stiffness:5}}};return t.jsx(n.div,{className:"text-white text-[18px] font-bold cursor-pointer flex",style:e,variants:o,initial:"hidden",animate:"visible",children:r.map((i,d)=>t.jsx(n.span,{variants:p,style:{marginRight:"5px"},children:i},d))})};export{x as default};