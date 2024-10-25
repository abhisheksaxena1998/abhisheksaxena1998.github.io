// CanvasLoader.js
import React, { memo, useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";

// Custom hook to throttle the progress updates
const useThrottledProgress = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
};

const CanvasLoader = () => {
  const { progress } = useProgress();
  const throttledProgress = useThrottledProgress(progress, 100); // Throttle updates every 100ms

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p className="loader-text">{throttledProgress.toFixed(2)}%</p>
    </Html>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(CanvasLoader);
