import{j as n}from"./index-BTh11bBO.js";import{m as s}from"./styles-CQzaVd5x.js";const m=({text:t,styles:a,delayOffset:e=0})=>{const o=t.split(" "),r={hidden:{opacity:0},visible:(i=1)=>({opacity:1,transition:{staggerChildren:.1,delayChildren:.05*i+e}})},l={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",damping:7,stiffness:100}}};return n.jsx(s.div,{className:"flex flex-wrap",style:a,initial:"hidden",animate:"visible",variants:r,children:o.map((i,d)=>n.jsx(s.span,{style:{marginRight:"8px",display:"inline-block"},variants:l,children:i},d))})};export{m as default};