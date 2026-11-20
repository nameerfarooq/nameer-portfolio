import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { initSmoothScroll } from "./lib/scroll";

import Preloader from "./ui/Preloader";
import Cursor from "./ui/Cursor";
import ScrollChrome from "./ui/ScrollChrome";
import CommandPalette from "./ui/CommandPalette";
import Toast from "./ui/Toast";

import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Clients from "./sections/Clients";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <Preloader />
      <Cursor />
      <ScrollChrome />
      <Nav />

      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Clients />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <CommandPalette />
      <Toast />
      <div className="grain" aria-hidden="true" />
    </MotionConfig>
  );
}
