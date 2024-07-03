import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Clients from "./Components/Clients";

const App = () => {
  return (
    <div className="font-sora">
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
      <Work />
      <Clients />
    </div>
  );
};

export default App;
