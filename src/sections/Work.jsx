import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useInView, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiX } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { projects } from "../data/content";
import { scrollToTarget } from "../lib/scroll";
import { EASE_OUT } from "../ui/motion";
import cn from "../lib/cn";

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "web", label: "Web development" },
  { id: "design", label: "Graphic design" },
];

const CATEGORY_LABEL = { web: "Web development", design: "Graphic design" };
const INITIAL_COUNT = 6;

function AutoVideo({ src, poster, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" className={className} />;
}

// forwardRef: AnimatePresence "popLayout" needs to measure each card.
const ProjectCard = forwardRef(function ProjectCard({ project, number, onOpen }, ref) {
  const mediaRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
      transition={{ duration: 0.9, ease: EASE_OUT }}
    >
      <button
        onClick={onOpen}
        data-cursor="label"
        data-cursor-label="View"
        aria-label={`Open project: ${project.title}`}
        className="group block w-full text-left"
      >
        <div
          ref={mediaRef}
          className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-line/10 bg-surface2 [transform:translateZ(0)]"
        >
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            {project.video ? (
              <AutoVideo
                src={project.video}
                poster={project.image}
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
              />
            ) : (
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
              />
            )}
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
            {CATEGORY_LABEL[project.category]}
          </span>
          <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-hover:scale-110">
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-700 ease-out-expo group-hover:bg-[length:100%_1px]">
                {project.title}
              </span>
            </h3>
            <p className="mt-2 text-sm text-muted">{project.tags.join("  ·  ")}</p>
          </div>
          <span className="pt-2 font-mono text-xs text-subtle">{String(number).padStart(2, "0")}</span>
        </div>
      </button>
    </motion.article>
  );
});

function ProjectDetail({ project, index, total, onPrev, onNext, onClose }) {
  return (
    <div>
      <div className="relative bg-[#0c0c0e]">
        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            className="mx-auto max-h-[58svh] w-full object-contain"
          />
        ) : (
          <img src={project.image} alt={`${project.title} preview`} className="mx-auto max-h-[58svh] w-full object-contain" />
        )}
        <button
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-transform duration-500 ease-out-expo hover:rotate-90"
        >
          <FiX aria-hidden="true" />
        </button>
      </div>

      <div className="grid gap-10 p-7 md:grid-cols-12 md:p-10">
        <div className="md:col-span-7">
          <p className="eyebrow">
            {CATEGORY_LABEL[project.category]} · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h3 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">{project.title}</h3>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">{project.description}</p>
        </div>

        <div className="flex flex-col gap-8 md:col-span-5">
          <div>
            <p className="eyebrow">Stack & scope</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="chip normal-case tracking-normal">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {project.link ? (
            <Button href={project.link} magnetic={false} className="self-start">
              Visit live project
            </Button>
          ) : (
            <p className="text-sm text-subtle">Live link isn&apos;t publicly available for this project.</p>
          )}

          <div className="mt-auto flex items-center gap-2 border-t border-line/10 pt-6">
            <button
              onClick={onPrev}
              aria-label="Previous project"
              className="grid h-11 w-11 place-items-center rounded-full border border-line/15 transition-colors hover:bg-fg hover:text-bg"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next project"
              className="grid h-11 w-11 place-items-center rounded-full border border-line/15 transition-colors hover:bg-fg hover:text-bg"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
            <span className="ml-2 font-mono text-[11px] text-subtle">Use ← → keys</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const columns = [visible.filter((_, i) => i % 2 === 0), visible.filter((_, i) => i % 2 === 1)];
  const counts = { all: projects.length, web: projects.filter((p) => p.category === "web").length, design: projects.filter((p) => p.category === "design").length };

  const open = openIndex !== null ? filtered[openIndex] : null;
  // Keep the last project around so the dialog's exit animation still has content.
  const lastShown = useRef(null);
  if (open) lastShown.current = { project: open, index: openIndex };
  const shown = lastShown.current;
  const step = (dir) => setOpenIndex((i) => (i + dir + filtered.length) % filtered.length);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, filtered.length]);

  return (
    <section id="work" className="section">
      <div className="container-site">
        <SectionHeader
          index="04"
          label="Selected work"
          title={"Products I've *shipped*\n& brands I've designed."}
          aside="SaaS dashboards, DeFi dApps, marketing sites and visual design — click any project for the story behind it."
        />

        <LayoutGroup>
          <div role="tablist" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => {
                  setFilter(f.id);
                  setExpanded(false);
                }}
                className={cn(
                  "relative isolate inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                  filter === f.id ? "border-transparent text-bg" : "border-line/15 text-muted hover:text-fg"
                )}
              >
                {filter === f.id ? (
                  <motion.span
                    layoutId="work-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {f.label}
                <span className={cn("font-mono text-[10px]", filter === f.id ? "text-bg/60" : "text-subtle")}>
                  {String(counts[f.id]).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12">
            {columns.map((col, ci) => (
              <div key={ci} className={cn("flex flex-col gap-16 lg:gap-24", ci === 1 && "md:pt-32")}>
                <AnimatePresence mode="popLayout" initial={false}>
                  {col.map((project) => {
                    const index = filtered.indexOf(project);
                    return (
                      <ProjectCard
                        key={project.title}
                        project={project}
                        number={index + 1}
                        onOpen={() => setOpenIndex(index)}
                      />
                    );
                  })}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </LayoutGroup>

        {filtered.length > INITIAL_COUNT ? (
          <div className="mt-20 flex justify-center">
            <Button
              onClick={() => {
                if (expanded) scrollToTarget("#work");
                setExpanded((e) => !e);
              }}
              variant="secondary"
              size="lg"
              icon={expanded ? FiArrowUpRight : FiArrowRight}
              iconMotion={expanded ? "up-right" : "right"}
            >
              {expanded ? "Show fewer projects" : `Show all ${filtered.length} projects`}
            </Button>
          </div>
        ) : null}
      </div>

      <Modal
        open={Boolean(open)}
        onClose={() => setOpenIndex(null)}
        label={open ? `${open.title} — project details` : "Project details"}
        className="max-h-[92svh] max-w-5xl rounded-t-[28px] sm:rounded-[32px]"
      >
        {shown ? (
          <ProjectDetail
            project={shown.project}
            index={shown.index}
            total={filtered.length}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            onClose={() => setOpenIndex(null)}
          />
        ) : null}
      </Modal>
    </section>
  );
}
