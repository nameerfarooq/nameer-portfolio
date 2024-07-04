import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Clients from "./Components/Clients";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div className="font-sora">
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
      <Work />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default App;
