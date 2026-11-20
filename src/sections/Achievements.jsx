import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiX } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Modal from "../ui/Modal";
import useMediaQuery from "../hooks/useMediaQuery";
import { achievements } from "../data/content";
import { EASE_OUT } from "../ui/motion";

export default function Achievements() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [hovered, setHovered] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const lastShown = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  const onMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  if (openIndex !== null) lastShown.current = openIndex;
  const shown = lastShown.current !== null ? achievements[lastShown.current] : null;
  const step = (dir) => setOpenIndex((i) => (i + dir + achievements.length) % achievements.length);

  return (
    <section id="achievements" className="section">
      <div className="container-site">
        <SectionHeader
          index="06"
          label="Recognition"
          title={"Certificates, awards\n& *milestones*."}
          aside="Seminars, teaching recognition and certifications collected along the way — open any row to see the certificate."
        />

        <ul className="border-t border-line/10" onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
          {achievements.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
            >
              <button
                onClick={() => setOpenIndex(i)}
                onPointerEnter={() => setHovered(i)}
                data-cursor="label"
                data-cursor-label="Open"
                className="group relative isolate flex w-full items-center gap-4 border-b border-line/10 py-6 text-left md:grid md:grid-cols-12 md:gap-6 md:py-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-fg/[0.035] transition-transform duration-500 ease-out-expo group-hover:scale-y-100"
                />
                <span className="hidden font-mono text-xs text-subtle md:col-span-1 md:block md:pl-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 md:col-span-5">
                  <span className="block text-[clamp(1.35rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight transition-transform duration-500 ease-out-expo md:group-hover:translate-x-3">
                    {a.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-muted md:hidden">{a.text}</span>
                </span>
                <span className="hidden text-muted md:col-span-4 md:block">{a.text}</span>
                <span className="hidden justify-end md:col-span-2 md:flex md:items-center md:gap-4 md:pr-2">
                  <span className="chip">{a.kind}</span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="text-xl text-muted transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-fg"
                  />
                </span>
                <img
                  src={a.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-20 shrink-0 rounded-lg object-cover md:hidden"
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Floating preview that follows the pointer */}
      {fine ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
          style={{ x: sx, y: sy }}
        >
          <AnimatePresence>
            {hovered !== null && openIndex === null ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -4 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 4 }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
                style={{ x: "-50%", y: "-50%" }}
                className="relative h-56 w-72 overflow-hidden rounded-2xl border border-line/15 bg-surface shadow-[var(--shadow)]"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={hovered}
                    src={achievements[hovered].image}
                    alt=""
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        label={shown ? `${shown.title} certificate` : "Certificate"}
        className="max-h-[92svh] max-w-4xl rounded-t-[28px] sm:rounded-[32px]"
      >
        {shown ? (
          <div>
            <div className="relative bg-[#0c0c0e]">
              <img src={shown.image} alt={`${shown.title} certificate`} className="mx-auto max-h-[68svh] w-full object-contain" />
              <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-transform duration-500 ease-out-expo hover:rotate-90"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 md:p-8">
              <div>
                <p className="eyebrow">
                  {shown.kind} · {String(lastShown.current + 1).padStart(2, "0")} / {achievements.length}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{shown.title}</h3>
                <p className="mt-2 text-muted">{shown.text}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line/15 transition-colors hover:bg-fg hover:text-bg"
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line/15 transition-colors hover:bg-fg hover:text-bg"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
