import SectionHeader from "../ui/SectionHeader";
import Marquee from "../ui/Marquee";
import useMediaQuery from "../hooks/useMediaQuery";
import { testimonials } from "../data/content";

const AVATAR_GRADIENTS = [
  "from-accent to-[#7ee08a]",
  "from-violet to-[#c4b5fd]",
  "from-ember to-[#ffc49b]",
  "from-[#7dd3fc] to-violet",
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function Card({ t, i }) {
  return (
    <figure className="card spotlight w-full shrink-0 p-7" onPointerMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    }}>
      <div className="relative z-[1]">
        <span aria-hidden="true" className="serif-accent block h-8 text-6xl leading-none text-accent-text">
          “
        </span>
        <blockquote className="mt-3 text-pretty text-[15px] leading-relaxed text-fg/85">{t.quote}</blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-line/10 pt-5">
          <span
            aria-hidden="true"
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[13px] font-semibold text-[#0a0a0a] ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]}`}
          >
            {initials(t.name)}
          </span>
          <span>
            <span className="block font-medium tracking-tight">{t.name}</span>
            <span className="block text-sm text-muted">{t.role}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");
  const count = lg ? 3 : md ? 2 : 1;
  const columns = Array.from({ length: count }, (_, c) =>
    testimonials.map((t, i) => ({ t, i })).filter(({ i }) => i % count === c)
  );
  const speeds = [64, 78, 70];

  return (
    <section id="testimonials" className="section">
      <div className="container-site">
        <SectionHeader
          index="07"
          label="Testimonials"
          title={"Kind words from\n*people* I've worked with."}
          aside={`${testimonials.length} recommendations from founders, CTOs, engineers and clients. Hover a column to pause it.`}
        />

        <div
          className="mask-fade-y grid h-[720px] gap-4 overflow-hidden motion-reduce:h-auto motion-reduce:[mask-image:none] md:h-[780px]"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {columns.map((col, c) => (
            <Marquee key={`${count}-${c}`} vertical duration={speeds[c] * (col.length / 5)} gap="1rem" reverse={c === 1}>
              {col.map(({ t, i }) => (
                <Card key={t.name} t={t} i={i} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </section>
  );
}
