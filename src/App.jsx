import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import "./App.scss";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Profile = lazy(() => import("./components/Profile"));
const WishingStar = lazy(() => import("./components/WishingStar"));

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {!isMobile && <WishingStar />}
      <div className="relative z-0 bg-primary">
        <div className="stars" />
        <div className="twinkle" />
        {!isMobile && (
          <>
            <div className="clouds" />
          </>
        )}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center -mt-10">
          <Navbar />
          <Hero isMobile={isMobile} />
          <Profile />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
