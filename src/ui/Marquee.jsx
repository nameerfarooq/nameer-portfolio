import cn from "../lib/cn";

/** Seamless CSS marquee (two copies of the track). */
export default function Marquee({
  children,
  duration = 40,
  gap = "2rem",
  reverse = false,
  vertical = false,
  pauseOnHover = true,
  className,
  trackClassName,
}) {
  return (
    <div
      className={cn("group/marquee flex overflow-hidden [gap:var(--gap)]", vertical && "flex-col", className)}
      style={{ "--duration": `${duration}s`, "--gap": gap }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 ? "true" : undefined}
          className={cn(
            "flex shrink-0 [gap:var(--gap)]",
            vertical ? "animate-marquee-y flex-col" : "animate-marquee-x",
            reverse && "[animation-direction:reverse]",
            copy === 1 && "motion-reduce:hidden",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
            trackClassName
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
