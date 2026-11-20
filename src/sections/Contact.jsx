import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiEye, FiSend } from "react-icons/fi";
import SplitText from "../ui/SplitText";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SpotlightCard from "../ui/SpotlightCard";
import { useUI } from "../lib/ui-context";
import useLocalTime from "../hooks/useLocalTime";
import { profile, socials } from "../data/content";
import { EASE_OUT } from "../ui/motion";
import cn from "../lib/cn";

const INTERESTS = [
  "Web application",
  "Landing page",
  "SaaS / Dashboard",
  "Web3 / dApp",
  "UI / UX design",
  "WordPress site",
  "Mentoring",
];

function useVisitorCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://portfolio-visitor-count.onrender.com/api/visitor", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Number(data.count) > 0) setCount(Number(data.count));
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return count;
}

function FlipLabel({ children }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">{children}</span>
      <span aria-hidden="true" className="absolute inset-0 translate-y-full text-accent-text transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}

export default function Contact() {
  const { copyEmail } = useUI();
  const { time } = useLocalTime(profile.timezone);
  const visitors = useVisitorCount();
  const [interests, setInterests] = useState(["Web application"]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const toggle = (item) =>
    setInterests((list) => (list.includes(item) ? list.filter((i) => i !== item) : [...list, item]));

  const mailto = useMemo(() => {
    const subject = `Project inquiry${interests.length ? ` — ${interests.join(", ")}` : ""}`;
    const body = [
      "Hi Nameer,",
      "",
      message.trim() || "I'd love to talk about a project.",
      "",
      interests.length ? `Interested in: ${interests.join(", ")}` : "",
      name.trim() ? `\n— ${name.trim()}` : "",
    ]
      .join("\n")
      .trim();
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [interests, message, name]);

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%]">
        <div className="absolute left-1/2 top-24 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent opacity-[calc(var(--blob-a)*0.7)] blur-[160px]" />
      </div>

      <div className="container-site">
        <Reveal blur={false} y={12}>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent-text">(08)</span>
            <span className="h-px w-10 bg-line/25" />
            Contact
          </p>
        </Reveal>

        <SplitText
          as="h2"
          text={"Got a project in mind?\nLet's *talk.*"}
          className="display mt-8 text-[clamp(2.8rem,7.4vw,7.6rem)] leading-[0.92] tracking-[-0.055em]"
        />

        <div className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-12">
          {/* Brief builder */}
          <Reveal className="lg:col-span-7">
            <SpotlightCard className="h-full">
              <form onSubmit={onSubmit} className="flex h-full flex-col gap-8 p-7 md:p-10">
                <div>
                  <p className="text-xl font-medium tracking-tight md:text-2xl">What can I help you with?</p>
                  <p className="mt-1 text-sm text-muted">Pick everything that applies.</p>
                  <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Project interests">
                    {INTERESTS.map((item) => {
                      const on = interests.includes(item);
                      return (
                        <motion.button
                          type="button"
                          key={item}
                          onClick={() => toggle(item)}
                          aria-pressed={on}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors duration-300",
                            on ? "border-transparent bg-accent text-accent-ink" : "border-line/15 text-muted hover:border-line/30 hover:text-fg"
                          )}
                        >
                          <motion.span
                            initial={false}
                            animate={{ width: on ? 14 : 0, opacity: on ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: EASE_OUT }}
                            className="inline-flex overflow-hidden"
                          >
                            <FiCheck aria-hidden="true" />
                          </motion.span>
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-6">
                  <label className="group block">
                    <span className="eyebrow">Your name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane from Acme Inc."
                      autoComplete="name"
                      className="mt-3 w-full border-b border-line/15 bg-transparent pb-3 text-lg text-fg outline-none transition-colors placeholder:text-subtle/70 focus:border-accent-text"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Tell me about it</span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="A few lines about your idea, timeline and goals…"
                      className="mt-3 w-full resize-none border-b border-line/15 bg-transparent pb-3 text-lg text-fg outline-none transition-colors placeholder:text-subtle/70 focus:border-accent-text"
                    />
                  </label>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <p className="max-w-xs text-xs text-subtle">
                    Opens your email app with everything pre-filled — nothing is stored on this site.
                  </p>
                  <Button type="submit" size="lg" icon={FiSend} iconMotion="up-right">
                    Send message
                  </Button>
                </div>
              </form>
            </SpotlightCard>
          </Reveal>

          {/* Direct contact */}
          <Reveal className="flex flex-col gap-6 lg:col-span-5" delay={0.1}>
            <SpotlightCard>
              <div className="p-7 md:p-8">
                <p className="eyebrow">Prefer email?</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-4 block break-all text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium tracking-tight underline decoration-line/20 underline-offset-[6px] transition-colors hover:decoration-accent-text"
                >
                  {profile.email}
                </a>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button onClick={copyEmail} size="sm" variant="secondary" icon={FiCopy} iconMotion="down" magnetic={false}>
                    Copy email
                  </Button>
                  <Button href={profile.whatsapp} size="sm" variant="secondary" magnetic={false}>
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SpotlightCard>

            <div className="card flex-1 p-3">
              <ul>
                {socials
                  .filter((s) => s.label !== "Email" && s.label !== "WhatsApp")
                  .map(({ label, handle, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-fg/[0.04]"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full border border-line/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-accent group-hover:text-accent-ink">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="flex-1 text-lg font-medium tracking-tight">
                          <FlipLabel>{label}</FlipLabel>
                        </span>
                        <span className="hidden font-mono text-xs text-subtle sm:inline">{handle}</span>
                        <FiArrowUpRight
                          aria-hidden="true"
                          className="text-muted transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-fg"
                        />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              <span>
                Local time · <span className="tabular-nums text-fg">{time}</span> {profile.timezoneLabel}
              </span>
              {visitors > 0 ? (
                <span className="inline-flex items-center gap-2">
                  <FiEye aria-hidden="true" /> {visitors.toLocaleString()} visits
                </span>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
