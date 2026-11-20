import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { scrollToTarget } from "../lib/scroll";
import { useUI } from "../lib/ui-context";
import useLocalTime from "../hooks/useLocalTime";
import { allSections, profile, socials } from "../data/content";

export default function Footer() {
  const ref = useRef(null);
  const { copyEmail } = useUI();
  const { time } = useLocalTime(profile.timezone);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const year = new Date().getFullYear();

  const go = (e, id) => {
    e.preventDefault();
    scrollToTarget(id === "home" ? "top" : `#${id}`);
  };

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line/10 pt-20">
      <div className="container-site grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-sm text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-snug tracking-tight">
            Have an idea worth building? <span className="serif-accent text-accent-text">Let&apos;s make it real.</span>
          </p>
          <button
            onClick={copyEmail}
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-muted underline decoration-line/20 underline-offset-4 transition-colors hover:text-fg"
          >
            {profile.email}
          </button>
        </div>

        <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
          <p className="eyebrow">Sitemap</p>
          <ul className="mt-5 space-y-2.5">
            {allSections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={(e) => go(e, s.id)} className="text-muted transition-colors hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-5 space-y-2.5">
            {socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6 md:col-span-2 md:items-end">
          <div className="md:text-right">
            <p className="eyebrow">Local time</p>
            <p className="mt-4 font-mono text-lg tabular-nums">
              {time} <span className="text-sm text-muted">{profile.timezoneLabel}</span>
            </p>
          </div>
          <button
            onClick={() => scrollToTarget("top")}
            className="group inline-flex items-center gap-3 rounded-full border border-line/15 py-2 pl-4 pr-2 text-sm transition-colors hover:border-fg hover:bg-fg hover:text-bg"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-fg/10 transition-colors group-hover:bg-bg group-hover:text-fg">
              <FiArrowUp className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      <motion.div style={{ y }} aria-hidden="true" className="container-site mt-16 select-none md:mt-24">
        <p className="display flex justify-center text-[clamp(5rem,24vw,23rem)] leading-[0.8] tracking-[-0.07em]">
          {"Nameer".split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-b from-fg to-fg/10 bg-clip-text pb-[0.08em] text-transparent transition-[transform,color] duration-500 ease-out-expo hover:-translate-y-[0.06em] hover:text-accent-text"
            >
              {ch}
            </span>
          ))}
          <span className="inline-block pb-[0.08em] text-accent-text">.</span>
        </p>
      </motion.div>

      <div className="container-site flex flex-col justify-between gap-2 border-t border-line/10 py-6 text-sm text-muted md:flex-row">
        <p>
          © {year} Muhammad Nameer — designed &amp; developed by Muhammad Nameer.
        </p>
        <p className="font-mono text-xs text-subtle">Built with React · Framer Motion · Lenis</p>
      </div>
    </footer>
  );
}
