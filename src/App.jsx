import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Clients from "./Components/Clients";
import Testimonials from "./Components/Testimonials";
import Acheivements from "./Components/Acheivements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

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
      <Acheivements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
