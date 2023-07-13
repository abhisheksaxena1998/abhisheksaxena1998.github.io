import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Profile,
} from "./components";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        color="255,255,255"
        innerSize={15}
        outerSize={40}
        innerScale={1.8}
        outerScale={2.5}
        outerAlpha={0}
        outerStyle={{
          border: "0.2rem solid #E239FF",
        }}
      />

      <div className="relative z-0 bg-primary">
        <div className="stars" />
        <div className="twinkle" />
        <div className="clouds" />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
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
