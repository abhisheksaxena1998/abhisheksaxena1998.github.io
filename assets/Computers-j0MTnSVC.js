import{r as o,j as e}from"./index-BZrrX7dv.js";import{C as m,P as p}from"./Preload-_60gBJN0.js";import l from"./Loader-9fLXrYuq.js";import{u as h,O as c}from"./OrbitControls-el1anIl0.js";import"./extends-dGVwEr9R.js";const a={hemisphere:{intensity:.975,groundColor:"black"},spot:{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,shadowMapSize:1024},point:{intensity:1.5}},d=o.memo(({isMobile:s})=>{const{scene:t}=h("./desktop_pc/scene.gltf");return e.jsxs("mesh",{children:[e.jsx("hemisphereLight",{...a.hemisphere}),e.jsx("spotLight",{...a.spot}),e.jsx("pointLight",{...a.point}),e.jsx("primitive",{object:t,scale:s?.7:.75,position:s?[0,-4.25,-2.2]:[0,-3.45,-1.5],rotation:[-.01,-.2,-.1]})]})}),v=()=>{const[s,t]=o.useState(!1);return o.useEffect(()=>{const r=window.matchMedia("(max-width: 500px)");t(r.matches);const n=i=>t(i.matches);return r.addEventListener("change",n),()=>r.removeEventListener("change",n)},[]),e.jsxs(m,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},style:{marginTop:"-1rem"},children:[e.jsxs(o.Suspense,{fallback:e.jsx(l,{}),children:[e.jsx(c,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(d,{isMobile:s})]}),e.jsx(p,{all:!0})]})};export{v as default};