import { BrowserRouter } from "react-router-dom";
import "./App.scss";
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
  WishingStar,
} from "./components";

const App = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <BrowserRouter>
      {!isMobile && <WishingStar />}
      <div className="relative z-0 bg-primary">
        <div className="stars" />
        <div className="twinkle" />
        <div className="clouds" />
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
