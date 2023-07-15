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
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="stars" />
        <div className="twinkle" />
        <div className="clouds" />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center -mt-10">
          <Navbar />
          &&
          <Hero />
          &&
          <Profile />
        </div>
        &&
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
