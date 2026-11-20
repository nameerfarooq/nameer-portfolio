import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { marqueeItems } from "../data/content";
import cn from "../lib/cn";

/** A row that drifts on its own and speeds up / reverses with scroll velocity. */
function VelocityRow({ children, baseVelocity = 3, className }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(smooth, [-2500, 2500], [8, -8]);
  const x = useTransform(baseX, (v) => `${-(((v % 50) + 50) % 50)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    moveBy += direction.current * moveBy * f;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className={cn("flex shrink-0 flex-nowrap", className)} style={{ x, skewX: reduce ? 0 : skew }}>
        {children}
        <span aria-hidden="true" className="flex">
          {children}
        </span>
      </motion.div>
    </div>
  );
}

function Items({ outline = false }) {
  return (
    <span className="flex items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className={cn("px-6 md:px-9", outline && "text-outline")}>{item}</span>
          <span className={cn("text-[0.5em]", outline ? "text-subtle" : "text-accent-text")} aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="relative border-y border-line/10 py-8 md:py-10">
      <div className="mask-fade-x flex flex-col gap-2 md:gap-4">
        <VelocityRow baseVelocity={2.2} className="display text-[clamp(2.4rem,6vw,5rem)] leading-[1.1]">
          <Items />
        </VelocityRow>
        <VelocityRow baseVelocity={-1.6} className="display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.1]">
          <Items outline />
        </VelocityRow>
      </div>
    </section>
  );
}
