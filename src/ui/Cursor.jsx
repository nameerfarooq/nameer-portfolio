import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const SIZES = { default: 34, hover: 64, text: 0, label: 92 };

/**
 * Custom cursor (desktop only).
 * - Elements with data-cursor="label" + data-cursor-label="View" show a lime label bubble.
 * - Links/buttons grow an inverting disc (mix-blend difference).
 */
export default function Cursor() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const rx = useSpring(x, { stiffness: 420, damping: 36, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 420, damping: 36, mass: 0.5 });

  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      const custom = target?.closest("[data-cursor]");
      if (custom) {
        setVariant(custom.dataset.cursor === "label" ? "label" : custom.dataset.cursor);
        setLabel(custom.dataset.cursorLabel || "");
        return;
      }
      setLabel("");
      if (target?.closest("input, textarea")) setVariant("text");
      else if (target?.closest("a, button, [role='button'], label, select, summary")) setVariant("hover");
      else setVariant("default");
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    root.addEventListener("pointerleave", leave);

    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      root.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isLabel = variant === "label";
  const size = SIZES[variant] ?? SIZES.default;

  return (
    <>
      {/* Inverting ring / disc */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: rx, y: ry }}
      >
        <motion.div
          className="rounded-full border border-white"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            width: isLabel ? 0 : size,
            height: isLabel ? 0 : size,
            opacity: visible && !isLabel ? 1 : 0,
            backgroundColor: variant === "hover" ? "rgb(255 255 255 / 1)" : "rgb(255 255 255 / 0)",
            scale: pressed ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        />
      </motion.div>

      {/* Label bubble */}
      <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: rx, y: ry }}>
        <AnimatePresence>
          {isLabel && visible ? (
            <motion.div
              className="grid place-items-center rounded-full bg-accent font-medium text-accent-ink shadow-[0_10px_40px_-10px_rgb(var(--accent)/0.6)]"
              style={{ x: "-50%", y: "-50%", width: SIZES.label, height: SIZES.label }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: pressed ? 0.9 : 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <span className="text-[13px] tracking-tight">{label}</span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* Precise dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] mix-blend-difference"
        style={{ x, y }}
      >
        <motion.div
          className="h-1.5 w-1.5 rounded-full bg-white"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ opacity: visible && variant !== "hover" && !isLabel ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
