import{_ as a,C as e,O as s,P as i,d as p}from"./@react-three-Ja7KR4kA.js";import{r as t,j as r}from"./react-gY946ZKh.js";import"./@babel-DbNJHz-F.js";import"./three-eA2GTmlT.js";import"./react-use-measure-UU-HAmmI.js";import"./debounce-APzbbIae.js";import"./classnames-uKr76nPM.js";import"./its-fine-M-AykjuR.js";import"./react-reconciler-5eZyO6cF.js";import"./scheduler-iwWdm5Ml.js";import"./react-dom-Wc9rTDnX.js";import"./zustand-eEH7vIQH.js";import"./maath-Gdth3wcG.js";import"./three-stdlib-qBRC31QU.js";import"./react-merge-refs-hAbx5P3g.js";import"./suspend-react-7rE_FwbT.js";const m=t.lazy(()=>a(()=>import("./Loader-40Hog8RS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),n=()=>{const o=p("./planet/scene.gltf");return r.jsx("primitive",{object:o.scene,scale:2.5,"position-y":0,"rotation-y":0})},A=()=>r.jsx(e,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:r.jsxs(t.Suspense,{fallback:r.jsx(m,{}),children:[r.jsx(s,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),r.jsx(n,{}),r.jsx(i,{all:!0})]})});export{A as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Loader-40Hog8RS.js","assets/react-gY946ZKh.js","assets/classnames-uKr76nPM.js","assets/@react-three-Ja7KR4kA.js","assets/@babel-DbNJHz-F.js","assets/three-eA2GTmlT.js","assets/react-use-measure-UU-HAmmI.js","assets/debounce-APzbbIae.js","assets/its-fine-M-AykjuR.js","assets/react-reconciler-5eZyO6cF.js","assets/scheduler-iwWdm5Ml.js","assets/react-dom-Wc9rTDnX.js","assets/zustand-eEH7vIQH.js","assets/maath-Gdth3wcG.js","assets/three-stdlib-qBRC31QU.js","assets/react-merge-refs-hAbx5P3g.js","assets/suspend-react-7rE_FwbT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}