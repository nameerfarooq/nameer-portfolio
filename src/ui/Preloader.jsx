import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { useUI } from "../lib/ui-context";
import { lockScroll, unlockScroll } from "../lib/scroll";
import { EASE_IN_OUT, EASE_OUT } from "./motion";

const GREETINGS = ["Hello", "Salaam", "Hola", "Hej", "Bonjour", "Ciao", "Hello"];
const SEEN_KEY = "nameer:intro-seen";

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

/** Short intro shown once per session: greeting cycle + counter, then a curtain wipe. */
export default function Preloader() {
  const { setReady } = useUI();
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => !hasSeenIntro());
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) {
      setReady(true);
      return;
    }
    if (reduce) {
      setShow(false);
      return;
    }

    window.scrollTo(0, 0);
    lockScroll();
    const controls = animate(0, 100, {
      duration: 1.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* ignore */
        }
        setTimeout(() => setShow(false), 180);
      },
    });

    return () => {
      controls.stop();
      unlockScroll();
    };
  }, [show, reduce, setReady]);

  const greetingIndex = Math.min(GREETINGS.length - 1, Math.floor((count / 100) * GREETINGS.length));

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[95] flex flex-col justify-between bg-bg p-5 text-fg md:p-10"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 1, ease: EASE_IN_OUT }}
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-muted">
            <span>Muhammad Nameer</span>
            <span>Portfolio ©{new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <AnimatePresence mode="wait">
              <motion.span
                key={greetingIndex}
                className="serif-accent text-[clamp(3rem,10vw,8rem)] leading-none"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
              >
                {GREETINGS[greetingIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div>
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-[16rem] text-sm text-muted">
                Crafting interfaces that feel fast, considered and alive.
              </p>
              <span className="display text-[clamp(4rem,16vw,14rem)] leading-[0.8] tabular-nums">
                {String(count).padStart(3, "0")}
              </span>
            </div>
            <div className="mt-6 h-px w-full bg-line/15">
              <div className="h-px bg-accent" style={{ width: `${count}%` }} />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
