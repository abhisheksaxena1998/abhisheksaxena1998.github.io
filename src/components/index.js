import { lazy } from "react";

const EarthCanvas = lazy(() => import("./canvas/EarthCanvas"));
const BallCanvas = lazy(() => import("./canvas/BallCanvas"));
const ComputersCanvas = lazy(() => import("./canvas/ComputersCanvas"));
const StarsCanvas = lazy(() => import("./canvas/StarsCanvas"));
const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Tech = lazy(() => import("./Tech"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
const CanvasLoader = lazy(() => import("./Loader"));
const ProjectDetails = lazy(() => import("./ProjectDetails"));
const Profile = lazy(() => import("./Profile"));
const WishingStar = lazy(() => import("./WishingStar"));

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
  ProjectDetails,
  Profile,
  WishingStar,
};
