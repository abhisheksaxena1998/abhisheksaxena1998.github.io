const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Loader-Ca0OjtfA.js","assets/index-Ciz8jMhJ.js","assets/index-B-XJJ_QF.css","assets/Preload-D3Z3FQ_b.js","assets/extends-CF3RwP-h.js"])))=>i.map(i=>d[i]);
import{r as e,_ as t,j as a}from"./index-Ciz8jMhJ.js";import{C as s,P as o}from"./Preload-D3Z3FQ_b.js";import{O as n,u as i}from"./OrbitControls-CnE-aEe-.js";import"./extends-CF3RwP-h.js";const l=e.lazy(()=>t(()=>import("./Loader-Ca0OjtfA.js"),__vite__mapDeps([0,1,2,3,4]))),m=()=>{const r=e.useMemo(()=>i("./planet/scene.gltf"),[]);return a.jsx("primitive",{object:r.scene,scale:2.5,"position-y":0,"rotation-y":0})},x=()=>a.jsx(s,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0,antialias:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:a.jsxs(e.Suspense,{fallback:a.jsx(l,{}),children:[a.jsx(n,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),a.jsx(m,{}),a.jsx(o,{all:!0})]})});export{x as default};
