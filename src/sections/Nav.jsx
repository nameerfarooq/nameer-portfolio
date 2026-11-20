import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiCommand, FiDownload, FiMoon, FiSun } from "react-icons/fi";
import Button from "../ui/Button";
import { useUI } from "../lib/ui-context";
import { lockScroll, scrollToTarget, unlockScroll } from "../lib/scroll";
import useActiveSection from "../hooks/useActiveSection";
import { allSections, navLinks, profile, socials } from "../data/content";
import { EASE_IN_OUT, EASE_OUT } from "../ui/motion";
import cn from "../lib/cn";

const OBSERVED = allSections.map((s) => s.id);

function ThemeToggle() {
  const { theme, toggleTheme } = useUI();
  const onClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };
  return (
    <button
      onClick={onClick}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line/10 bg-elev/60 text-fg backdrop-blur-md transition-colors hover:border-line/25"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        >
          {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function MobileMenu({ open, onNavigate, active }) {
  const { copyEmail } = useUI();

  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  const links = allSections.filter((s) => s.id !== "home" && s.id !== "clients");

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-bg lg:hidden"
          initial={{ clipPath: "circle(0% at 92% 40px)" }}
          animate={{ clipPath: "circle(150% at 92% 40px)" }}
          exit={{ clipPath: "circle(0% at 92% 40px)" }}
          transition={{ duration: 0.75, ease: EASE_IN_OUT }}
          data-lenis-prevent
        >
          <div className="container-site flex h-full flex-col overflow-y-auto pb-8 pt-28">
            <p className="eyebrow">Menu</p>
            <nav aria-label="Mobile" className="mt-6 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => onNavigate(e, l.id)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: EASE_OUT }}
                  className="group flex items-baseline gap-4 border-b border-line/10 py-3"
                >
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <span
                    className={cn(
                      "display text-[clamp(2.2rem,10vw,3.5rem)] transition-colors",
                      active === l.id ? "text-accent-text" : "text-fg"
                    )}
                  >
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-auto flex flex-col gap-6 pt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button onClick={copyEmail} className="text-left text-lg font-medium underline decoration-line/30 underline-offset-4">
                {profile.email}
              </button>
              <div className="flex flex-wrap gap-2">
                {socials
                  .filter((s) => s.label !== "Email")
                  .map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line/15"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  ))}
              </div>
              <Button href={profile.resume} download="Muhammad-Nameer-Resume.pdf" icon={FiDownload} iconMotion="down" magnetic={false} className="self-start">
                Download résumé
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Nav() {
  const { openPalette, ready } = useUI();
  const active = useActiveSection(OBSERVED);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => setIsMac(/Mac|iPhone|iPad/i.test(navigator.userAgent)), []);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 24);
    setHidden(v > prev && v > 480);
  });

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    // Wait a beat on mobile so the menu's scroll lock is released first.
    setTimeout(() => scrollToTarget(`#${id}`), menuOpen ? 80 : 0);
  };

  const highlighted = hovered ?? active;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: "-100%" }}
        animate={{ y: !ready || (hidden && !menuOpen) ? "-110%" : "0%" }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: ready && !scrolled ? 0.6 : 0 }}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 border-b bg-bg/70 backdrop-blur-xl transition-opacity duration-500",
            scrolled && !menuOpen ? "border-line/10 opacity-100" : "border-transparent opacity-0"
          )}
        />
        <div className="container-site flex h-[72px] items-center justify-between gap-4 md:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              scrollToTarget("top");
            }}
            className="group flex items-center gap-3"
            aria-label="Muhammad Nameer — back to top"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-fg text-[13px] font-semibold tracking-tight text-bg">
              <span className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-8">MN</span>
              <span className="absolute translate-y-8 text-[15px] transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                ↑
              </span>
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[15px] font-semibold tracking-tight">Muhammad Nameer</span>
              <span className="block font-mono text-[11px] text-muted">{profile.title}</span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            onMouseLeave={() => setHovered(null)}
            className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-line/10 bg-elev/60 p-1.5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.35)] backdrop-blur-xl lg:flex"
          >
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                onMouseEnter={() => setHovered(l.id)}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative isolate rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                  highlighted === l.id ? "text-bg" : "text-muted hover:text-fg"
                )}
              >
                {highlighted === l.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openPalette}
              aria-label="Open command menu"
              className="hidden h-10 items-center gap-2 rounded-full border border-line/10 bg-elev/60 px-3.5 font-mono text-[11px] text-muted backdrop-blur-md transition-colors hover:border-line/25 hover:text-fg md:inline-flex"
            >
              <FiCommand aria-hidden="true" />
              <span>{isMac ? "⌘" : "Ctrl"} K</span>
            </button>
            <ThemeToggle />
            <Button
              href={profile.resume}
              download="Muhammad-Nameer-Resume.pdf"
              size="sm"
              icon={FiDownload}
              iconMotion="down"
              className="hidden sm:inline-flex"
            >
              Résumé
            </Button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative grid h-10 w-10 place-items-center rounded-full bg-fg text-bg lg:hidden"
            >
              <motion.span
                className="absolute h-[1.5px] w-4 rounded-full bg-bg"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              />
              <motion.span
                className="absolute h-[1.5px] w-4 rounded-full bg-bg"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onNavigate={go} active={active} />
    </>
  );
}
