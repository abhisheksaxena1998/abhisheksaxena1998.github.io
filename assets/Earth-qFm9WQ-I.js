import{r,_ as t,j as a}from"./index-BZrrX7dv.js";import{C as s,P as o}from"./Preload-_60gBJN0.js";import{O as n,u as l}from"./OrbitControls-el1anIl0.js";import"./extends-dGVwEr9R.js";const i=r.lazy(()=>t(()=>import("./Loader-9fLXrYuq.js"),__vite__mapDeps([0,1,2,3,4]))),m=()=>{const e=l("./planet/scene.gltf");return a.jsx("primitive",{object:e.scene,scale:2.5,"position-y":0,"rotation-y":0})},x=()=>a.jsx(s,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:a.jsxs(r.Suspense,{fallback:a.jsx(i,{}),children:[a.jsx(n,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),a.jsx(m,{}),a.jsx(o,{all:!0})]})});export{x as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Loader-9fLXrYuq.js","assets/index-BZrrX7dv.js","assets/index-lU5t0QCD.css","assets/Preload-_60gBJN0.js","assets/extends-dGVwEr9R.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
