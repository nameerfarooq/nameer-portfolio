import { FiArrowUpRight, FiBookOpen, FiCode, FiCpu, FiGlobe, FiLayers, FiUsers } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import Reveal from "../ui/Reveal";
import useLocalTime from "../hooks/useLocalTime";
import { scrollToTarget } from "../lib/scroll";
import { profile, services } from "../data/content";

const SERVICE_ICONS = [FiCode, FiLayers, FiCpu, FiGlobe];

function Clock() {
  const { time, isDaytime } = useLocalTime(profile.timezone);
  const [h, m] = time.split(":");
  return (
    <div className="flex h-full flex-col justify-between gap-10 p-7 md:p-8">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Local time</p>
        <span className="chip">{isDaytime ? "☀ Daytime" : "☾ Night owl hours"}</span>
      </div>
      <div>
        <p className="display text-[clamp(3.5rem,7vw,5.5rem)] tabular-nums leading-none">
          {h}
          <span className="animate-blink text-accent-text">:</span>
          {m}
        </p>
        <p className="mt-4 text-muted">
          {profile.location} · {profile.timezoneLabel} — collaborating remotely with teams worldwide.
        </p>
      </div>
    </div>
  );
}

function Orbit() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-60">
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-line/15" />
      <div className="absolute inset-8 animate-spin-slow rounded-full border border-line/10 [animation-direction:reverse] [animation-duration:22s]" />
      <div className="absolute inset-16 rounded-full border border-line/10" />
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_rgb(var(--accent))]" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-site">
        <SectionHeader
          index="01"
          label="About"
          title={"Engineer by craft,\n*mentor* by heart."}
          aside="I sit where engineering meets design — turning complex product requirements into interfaces that are fast, accessible and genuinely pleasant to use."
        />

        <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          {/* Bio */}
          <Reveal className="md:col-span-6 lg:col-span-7 lg:row-span-2">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-10 p-7 md:p-10">
                <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted md:text-xl">
                  <p className="text-[clamp(1.4rem,2.3vw,2rem)] font-medium leading-snug tracking-tight text-fg">
                    Hi, I&apos;m Nameer — I build products people{" "}
                    <span className="serif-accent text-accent-text">enjoy</span> using, and teams enjoy maintaining.
                  </p>
                  {profile.bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/10 pt-6">
                  <p className="serif-accent text-2xl">— Muhammad Nameer</p>
                  <button
                    onClick={() => scrollToTarget("#contact")}
                    className="group inline-flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-fg after:transition-transform after:duration-500 group-hover:after:origin-left group-hover:after:scale-x-100">
                      Let&apos;s work together
                    </span>
                    <FiArrowUpRight className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Now */}
          <Reveal className="md:col-span-3 lg:col-span-5" delay={0.08}>
            <SpotlightCard className="h-full">
              <Orbit />
              <div className="relative flex h-full flex-col justify-between gap-8 p-7 md:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <p className="eyebrow">Currently</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                    Senior Software Engineer <span className="text-muted">@</span> Krank
                  </p>
                  <p className="mt-3 text-muted">
                    Building a global B2B SaaS for heavy-equipment inspections — AI-powered reporting, custom workflows and
                    real-time remote inspections.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Clock */}
          <Reveal className="md:col-span-3 lg:col-span-5" delay={0.12}>
            <SpotlightCard className="h-full">
              <Clock />
            </SpotlightCard>
          </Reveal>

          {/* Education */}
          <Reveal className="md:col-span-3 lg:col-span-3" delay={0.05}>
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-10 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-fg/[0.06] text-lg">
                  <FiBookOpen aria-hidden="true" />
                </span>
                <div>
                  <p className="display text-5xl">BSCS</p>
                  <p className="mt-2 text-muted">Computer Science, NED University</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Mentoring */}
          <Reveal className="md:col-span-3 lg:col-span-3" delay={0.1}>
            <SpotlightCard className="h-full bg-accent text-accent-ink [--glow:10_10_10]">
              <div className="flex h-full flex-col justify-between gap-10 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-ink/10 text-lg">
                  <FiUsers aria-hidden="true" />
                </span>
                <div>
                  <p className="display text-5xl">100+</p>
                  <p className="mt-2 text-accent-ink/70">Students mentored in the MERN stack at UIT University</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Services */}
          <Reveal className="md:col-span-6 lg:col-span-6" delay={0.15}>
            <SpotlightCard className="h-full">
              <div className="p-7 md:p-8">
                <p className="eyebrow">What I do</p>
                <ul className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {services.map((s, i) => {
                    const Icon = SERVICE_ICONS[i];
                    return (
                      <li key={s.title} className="flex gap-3">
                        <Icon className="mt-1 shrink-0 text-accent-text" aria-hidden="true" />
                        <div>
                          <p className="font-medium tracking-tight">{s.title}</p>
                          <p className="mt-1 text-sm text-muted">{s.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
