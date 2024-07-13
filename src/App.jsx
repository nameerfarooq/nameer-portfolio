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
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="font-sora">
      <Header />
      <motion.div className="progress-bar" style={{ scaleX }} />

      <HeroSection />
      <Skills />
      <Experience />
      <Work />
      <Clients />
      <Acheivements />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
