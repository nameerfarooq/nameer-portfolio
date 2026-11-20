import Reveal from "./Reveal";
import SplitText from "./SplitText";
import cn from "../lib/cn";

/** Consistent section opener: (index) — label, display title, optional aside. */
export default function SectionHeader({ index, label, title, aside, className }) {
  return (
    <div className={cn("mb-14 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-8">
        <Reveal blur={false} y={12}>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent-text">({index})</span>
            <span className="h-px w-10 bg-line/25" />
            {label}
          </p>
        </Reveal>
        <SplitText
          as="h2"
          text={title}
          className="display mt-6 text-[clamp(2.5rem,6.4vw,5.6rem)]"
        />
      </div>
      {aside ? (
        <Reveal className="text-pretty text-base leading-relaxed text-muted md:text-lg lg:col-span-4" delay={0.15}>
          {aside}
        </Reveal>
      ) : null}
    </div>
  );
}
