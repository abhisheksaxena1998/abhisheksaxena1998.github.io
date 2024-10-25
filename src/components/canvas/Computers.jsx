import React, { Suspense, useEffect, useState, memo, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const lightProps = {
  hemisphere: {
    intensity: 0.6,
    groundColor: "#444", // Subtle ambient color
  },
  spot: {
    position: [-20, 50, 10],
    angle: 0.3,
    penumbra: 0.5,
    intensity: 0.7,
    castShadow: true,
    shadowMapSize: 512,
  },
  point: {
    intensity: 0.6,
    color: "#ffbb33", // Warm light for added color depth
  },
};

const Computers = memo(({ isMobile }) => {
  const { scene } = useMemo(() => useGLTF("./desktop_pc/scene.gltf"), []);

  return (
    <mesh>
      <hemisphereLight {...lightProps.hemisphere} />
      <spotLight {...lightProps.spot} />
      <pointLight {...lightProps.point} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -4.25, -2.2] : [0, -3.45, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]} // Reduced max dpr for better performance
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ marginTop: "-1rem" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
