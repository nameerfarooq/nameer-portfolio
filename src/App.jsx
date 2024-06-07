import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

const App = () => {
  return (
    <div className="font-sora">
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
    </div>
  );
};

export default App;
