import { useCallback, useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { UIContext } from "./ui-context";
import { profile } from "../data/content";

const THEME_COLORS = { dark: "#09090b", light: "#f4f3ef" };

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage can be unavailable (private mode) — the theme still applies */
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
}

export default function UIProvider({ children }) {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState(null);

  /**
   * Theme switch with a circular reveal (View Transitions API) that grows
   * from the point the visitor clicked. Falls back to an instant swap.
   */
  const toggleTheme = useCallback(
    (origin) => {
      const next = theme === "dark" ? "light" : "dark";
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!document.startViewTransition || reduce) {
        applyTheme(next);
        setTheme(next);
        return;
      }

      const x = origin?.x ?? window.innerWidth / 2;
      const y = origin?.y ?? 0;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(next));
        applyTheme(next);
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 700, easing: "cubic-bezier(0.76, 0, 0.24, 1)", pseudoElement: "::view-transition-new(root)" }
          );
        })
        .catch(() => {});
    },
    [theme]
  );

  const notify = useCallback((message) => setToast({ message, id: Date.now() }), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      notify("Email copied to clipboard");
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, [notify]);

  // Global ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      paletteOpen,
      openPalette: () => setPaletteOpen(true),
      closePalette: () => setPaletteOpen(false),
      ready,
      setReady,
      toast,
      notify,
      copyEmail,
    }),
    [theme, toggleTheme, paletteOpen, ready, toast, notify, copyEmail]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
