import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./motion";

/** Fades + lifts its children into view once. */
export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  amount = 0.25,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
