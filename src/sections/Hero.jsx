import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import { useUI } from "../lib/ui-context";
import { scrollToTarget } from "../lib/scroll";
import useLocalTime from "../hooks/useLocalTime";
import { profile, socials, stats } from "../data/content";
import { EASE_OUT } from "../ui/motion";

/* ── Background: grid + two glows that drift toward the pointer ───────── */
function Backdrop() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 30, damping: 20 });
  const sy = useSpring(my, { stiffness: 30, damping: 20 });
  const ax = useTransform(sx, (v) => v * 160);
  const ay = useTransform(sy, (v) => v * 120);
  const bx = useTransform(sx, (v) => v * -200);
  const by = useTransform(sy, (v) => v * -140);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <motion.div
        style={{ x: ax, y: ay }}
        className="absolute left-[8%] top-[-12%] h-[36rem] w-[36rem] rounded-full bg-accent opacity-[var(--blob-a)] blur-[130px] will-change-transform"
      />
      <motion.div
        style={{ x: bx, y: by }}
        className="absolute right-[-6%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet opacity-[var(--blob-b)] blur-[140px] will-change-transform"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

/* ── Giant name, letter by letter ─────────────────────────────────────── */
function NameLine({ text, show, delay = 0, suffix }) {
  return (
    <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em] pt-[0.1em]">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: show ? "0%" : "110%" }}
            transition={{ duration: 1.2, delay: delay + i * 0.04, ease: EASE_OUT }}
          >
            <span className="inline-block transition-[transform,color] duration-500 ease-out-expo hover:-translate-y-[0.06em] hover:-rotate-6 hover:text-accent-text">
              {ch}
            </span>
          </motion.span>
        ))}
        {suffix}
      </span>
    </span>
  );
}

/* ── Rotating role ────────────────────────────────────────────────────── */
function RoleRotator({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="serif-accent block whitespace-nowrap leading-[1.3] text-accent-text"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ── Typing code card with 3D tilt ────────────────────────────────────── */
const CODE = [
  [["kw", "const "], ["id", "nameer"], ["p", " = {"]],
  [["p", "  "], ["key", "role"], ["p", ": "], ["str", '"Senior Frontend Engineer"'], ["p", ","]],
  [["p", "  "], ["key", "company"], ["p", ": "], ["str", '"Krank"'], ["p", ","]],
  [["p", "  "], ["key", "stack"], ["p", ": ["], ["str", '"React"'], ["p", ", "], ["str", '"Next.js"'], ["p", ", "], ["str", '"TS"'], ["p", "],"]],
  [["p", "  "], ["key", "experience"], ["p", ": "], ["str", '"4+ years"'], ["p", ","]],
  [["p", "  "], ["key", "mentored"], ["p", ": "], ["num", "100"], ["p", ", "], ["cm", "// students"]],
  [["p", "  "], ["key", "openToWork"], ["p", ": "], ["num", "true"], ["p", ","]],
  [["p", "};"]],
  [],
  [["kw", "export default "], ["id", "nameer"], ["p", ";"]],
];

const TOKEN = {
  kw: "text-violet",
  id: "text-fg",
  key: "text-fg/85",
  str: "text-accent-text",
  num: "text-ember",
  cm: "italic text-subtle",
  p: "text-muted",
};

function CodeCard({ start }) {
  const reduce = useReducedMotion();
  const total = useMemo(() => CODE.reduce((n, line) => n + line.reduce((m, [, t]) => m + t.length, 0) + 1, 0), []);
  const [typed, setTyped] = useState(0);
  const done = reduce || typed >= total;

  useEffect(() => {
    if (!start || reduce) return;
    let n = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        n += 2;
        setTyped(Math.min(n, total));
        if (n >= total) clearInterval(interval);
      }, 24);
    }, 1100);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [start, reduce, total]);

  // Tilt
  const rx = useSpring(0, { stiffness: 140, damping: 16 });
  const ry = useSpring(0, { stiffness: 140, damping: 16 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(py * -12);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  // Slice each line to what has been "typed" so far and find the caret line.
  let remaining = done ? Infinity : typed;
  let caretLine = CODE.length - 1;
  const rendered = CODE.map((line, li) => {
    const length = line.reduce((m, [, t]) => m + t.length, 0);
    if (!done && remaining >= 0 && remaining <= length) caretLine = li;
    let budget = remaining;
    const parts = [];
    for (const [type, text] of line) {
      if (budget <= 0) break;
      const slice = text.slice(0, budget);
      budget -= slice.length;
      parts.push(
        <span key={parts.length} className={TOKEN[type]}>
          {slice}
        </span>
      );
    }
    remaining -= length + 1;
    return parts;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 18 }}
      animate={start ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 1.3, delay: 0.7, ease: EASE_OUT }}
      className="[perspective:1400px]"
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry }}
        className="card spotlight relative overflow-hidden rounded-[24px] bg-elev/75 shadow-[var(--shadow)] backdrop-blur-xl"
      >
        <div className="relative z-[1]">
          <div className="flex items-center justify-between border-b border-line/10 px-5 py-3.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[11px] text-muted">nameer.config.ts</span>
            <span className="rounded-md bg-[#3178C6]/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#4b93e6]">TS</span>
          </div>

          <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.9] sm:text-[13px]" aria-label="A code snippet describing Muhammad Nameer">
            <code>
              {rendered.map((parts, li) => (
                <span key={li} className="flex">
                  <span className="mr-5 w-4 shrink-0 select-none text-right text-subtle/60">{li + 1}</span>
                  <span className="whitespace-pre">
                    {parts}
                    {li === caretLine ? (
                      <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-blink bg-accent-text" />
                    ) : null}
                  </span>
                </span>
              ))}
            </code>
          </pre>

          <div className="flex items-center justify-between border-t border-line/10 px-5 py-3 font-mono text-[11px] text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> main
            </span>
            <AnimatePresence mode="wait" initial={false}>
              {done ? (
                <motion.span key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-accent-text">
                  ✓ compiled successfully
                </motion.span>
              ) : (
                <motion.span key="typing" exit={{ opacity: 0, y: -6 }}>
                  typing…
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Rotating "let's talk" badge ──────────────────────────────────────── */
function TalkBadge() {
  return (
    <Magnetic strength={0.4}>
      <button
        onClick={() => scrollToTarget("#contact")}
        aria-label="Start a project — jump to contact"
        className="group relative grid h-[118px] w-[118px] place-items-center rounded-full bg-bg/60 backdrop-blur-md"
      >
        <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow" aria-hidden="true">
          <defs>
            <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text className="fill-fg font-mono text-[10.5px] uppercase tracking-[0.2em]">
            <textPath href="#badge-circle">Open to new projects • Let&apos;s talk •</textPath>
          </text>
        </svg>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-xl text-accent-ink transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-hover:scale-110">
          <FiArrowUpRight aria-hidden="true" />
        </span>
      </button>
    </Magnetic>
  );
}

/* ── Counting stat ────────────────────────────────────────────────────── */
function Stat({ value, suffix, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.8, delay: index * 0.1, ease: EASE_OUT });
    return () => controls.stop();
  }, [inView, mv, value, index]);

  return (
    <div ref={ref} className="border-line/10 py-6 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0">
      <p className="display text-[clamp(2.6rem,5vw,4.2rem)] tabular-nums">
        <motion.span>{rounded}</motion.span>
        <span className="text-accent-text">{suffix}</span>
      </p>
      <p className="mt-2 max-w-[12rem] text-sm text-muted">{label}</p>
    </div>
  );
}

export default function Hero() {
  const { ready } = useUI();
  const { time } = useLocalTime(profile.timezone, { seconds: true });

  const fade = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, delay, ease: EASE_OUT },
  });

  return (
    <section id="home" className="relative isolate overflow-hidden pb-10 pt-28 md:pt-36">
      <Backdrop />

      <div className="container-site">
        <motion.div {...fade(0.2)} className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-elev/60 py-1.5 pl-3 pr-4 text-[13px] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance &amp; remote work
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            {profile.location} · <span className="tabular-nums text-fg">{time}</span> {profile.timezoneLabel}
          </span>
        </motion.div>

        <h1 className="display mt-10 text-[clamp(3.2rem,16.4vw,11.5rem)] leading-[0.84] tracking-[-0.06em] md:mt-14 lg:text-[clamp(6rem,12.6vw,11.5rem)]">
          <NameLine text={profile.firstName} show={ready} delay={0.25} />
          <NameLine
            text={profile.lastName}
            show={ready}
            delay={0.45}
            suffix={
              <motion.span
                className="inline-block text-accent-text"
                initial={{ scale: 0 }}
                animate={{ scale: ready ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: EASE_OUT }}
              >
                .
              </motion.span>
            }
          />
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-0 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-6 lg:pt-12 xl:col-span-6">
            <motion.p {...fade(0.9)} className="flex items-center gap-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-tight">
              <span className="h-px w-8 bg-fg/40" />
              <RoleRotator roles={profile.roles} />
            </motion.p>

            <motion.p {...fade(1)} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {profile.heroIntro}
            </motion.p>

            <motion.div {...fade(1.1)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#work");
                }}
                size="lg"
                icon={FiArrowDown}
                iconMotion="down"
              >
                Explore my work
              </Button>
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#contact");
                }}
                variant="secondary"
                size="lg"
              >
                Let&apos;s talk
              </Button>
            </motion.div>

            <motion.ul {...fade(1.2)} className="mt-10 flex flex-wrap gap-2" aria-label="Social links">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Magnetic strength={0.35}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group relative grid h-11 w-11 place-items-center rounded-full border border-line/15 text-fg transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg"
                    >
                      <Icon aria-hidden="true" />
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-fg px-2 py-1 font-mono text-[10px] text-bg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {label}
                      </span>
                    </a>
                  </Magnetic>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative lg:col-span-6 lg:-mt-40 xl:col-span-5 xl:col-start-8">
            <CodeCard start={ready} />
            <motion.div
              className="absolute -bottom-12 -left-10 hidden lg:block"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.5, ease: EASE_OUT }}
            >
              <TalkBadge />
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 border-t border-line/10 md:mt-28 md:grid-cols-4">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
