import cn from "../lib/cn";

const track = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/** Surface card with a pointer-following glow and lit border. */
export default function SpotlightCard({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag onPointerMove={track} className={cn("card spotlight overflow-hidden", className)} {...rest}>
      <div className="relative z-[1] h-full">{children}</div>
    </Tag>
  );
}
