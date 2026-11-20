import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { scrollToTarget } from "../lib/scroll";
import { EASE_OUT } from "./motion";

/** Thin top progress bar + back-to-top button with a progress ring. */
export default function ScrollChrome() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 900));

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {showTop ? (
          <motion.button
            key="top"
            onClick={() => scrollToTarget("top")}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="group fixed bottom-5 right-5 z-[55] grid h-14 w-14 place-items-center rounded-full border border-line/10 bg-elev/80 text-fg shadow-[var(--shadow)] backdrop-blur-xl md:bottom-8 md:right-8"
          >
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
              <circle cx="28" cy="28" r="26" fill="none" stroke="rgb(var(--line) / 0.1)" strokeWidth="2" />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgb(var(--accent-text))"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength: progress }}
              />
            </svg>
            <FiArrowUp className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
