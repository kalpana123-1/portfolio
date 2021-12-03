import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import Skill from "./components/section/Skill";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
  }, 
  []);
  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}

export default App;