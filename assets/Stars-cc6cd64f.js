import{j as t,r as s}from"./react-d998b26c.js";import{C as a,P as n,a as p,b as m,c as u}from"./@react-three-5c5d5b5b.js";import{i as l}from"./maath-723c05b8.js";import"./classnames-325479d5.js";import"./@babel-43e769cc.js";import"./three-4dacbd90.js";import"./react-use-measure-761a5d94.js";import"./debounce-5580f047.js";import"./its-fine-845edb61.js";import"./react-reconciler-32468f67.js";import"./scheduler-765c72db.js";import"./react-dom-890fecd1.js";import"./zustand-5d5ab9ea.js";import"./three-stdlib-63fdb085.js";import"./mmd-parser-06216fd5.js";import"./ktx-parse-b17e1334.js";import"./zstddec-5cb485fa.js";import"./opentype.js-95d064b1.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-4f9dedb1.js";const c=e=>{const r=s.useRef(),[i]=s.useState(()=>l(new Float32Array(6e3),{radius:1.2}));return p((x,o)=>{r.current.rotation.x-=o/10,r.current.rotation.y-=o/15}),t.jsx("group",{rotation:[0,0,Math.PI/4],children:t.jsx(m,{ref:r,positions:i,stride:3,frustumCulled:!0,...e,children:t.jsx(u,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},N=()=>t.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:t.jsxs(a,{camera:{position:[0,0,1]},children:[t.jsx(s.Suspense,{fallback:null,children:t.jsx(c,{})}),t.jsx(n,{all:!0})]})});export{N as default};
