import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { experience } from "../data/content";
import { EASE_OUT } from "../ui/motion";
import cn from "../lib/cn";

const KIND_STYLE = {
  Engineering: "bg-accent text-accent-ink",
  Teaching: "bg-violet/15 text-violet",
  Freelance: "bg-ember/15 text-ember",
};

function Role({ item, index }) {
  const ref = useRef(null);
  const active = useInView(ref, { margin: "-40% 0px -45% 0px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: EASE_OUT }}
      className="relative pl-10 md:pl-16"
    >
      {/* Node on the rail */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-2 grid h-[19px] w-[19px] place-items-center rounded-full border transition-all duration-500 md:left-[6px]",
          active ? "border-accent-text bg-bg" : "border-line/20 bg-bg"
        )}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-500",
            active ? "scale-100 bg-accent-text" : "scale-50 bg-line/30"
          )}
        />
      </span>

      <article className="group rounded-[24px] border border-transparent p-0 transition-colors duration-500 md:-m-6 md:p-6 md:hover:border-line/10 md:hover:bg-surface">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{item.period}</span>
          <span className={cn("rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider", KIND_STYLE[item.kind])}>
            {item.kind}
          </span>
          {item.current ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent-text">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-text" /> Now
            </span>
          ) : null}
        </div>

        <h3
          className={cn(
            "mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-tight transition-colors duration-500",
            active ? "text-fg" : "text-fg/60"
          )}
        >
          {item.role} <span className="serif-accent font-normal text-accent-text">@ {item.company}</span>
        </h3>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">{item.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t} className="chip normal-case tracking-normal">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section">
      <div className="container-site">
        <SectionHeader
          index="03"
          label="Experience"
          title={"A track record of\n*building* & teaching."}
          aside="From agencies and Web3 start-ups to a global SaaS — plus years spent in classrooms helping others break into tech."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <div className="card p-7">
                <p className="eyebrow">At a glance</p>
                <dl className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm text-muted">Roles</dt>
                    <dd className="display mt-1 text-5xl">{String(experience.length).padStart(2, "0")}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Since</dt>
                    <dd className="display mt-1 text-5xl">2020</dd>
                  </div>
                  <div className="col-span-2 border-t border-line/10 pt-5">
                    <dt className="text-sm text-muted">Focus</dt>
                    <dd className="mt-2 text-lg font-medium leading-snug tracking-tight">
                      Frontend architecture, real-time & Web3 products, and mentoring developers.
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-8">
            {/* Rail */}
            <div aria-hidden="true" className="absolute bottom-2 left-[9px] top-2 w-px bg-line/10 md:left-[15px]">
              <motion.div className="h-full w-full origin-top bg-accent-text" style={{ scaleY: fill }} />
            </div>
            <ol ref={listRef} className="flex flex-col gap-14 md:gap-16">
              {experience.map((item, i) => (
                <Role key={`${item.company}-${item.role}`} item={item} index={i} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
