import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowRight, FiCopy, FiCornerDownLeft, FiDownload, FiHash, FiMail, FiMoon, FiSearch, FiSun } from "react-icons/fi";
import Modal from "./Modal";
import { useUI } from "../lib/ui-context";
import { scrollToTarget } from "../lib/scroll";
import { allSections, profile, socials } from "../data/content";
import cn from "../lib/cn";

/** ⌘K / Ctrl+K quick actions: jump to sections, copy email, theme, socials. */
export default function CommandPalette() {
  const { paletteOpen, closePalette, toggleTheme, theme, copyEmail } = useUI();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  const items = useMemo(
    () => [
      ...allSections.map((s) => ({
        group: "Navigate",
        label: s.label,
        icon: FiHash,
        run: () => scrollToTarget(s.id === "home" ? "top" : `#${s.id}`),
      })),
      { group: "Actions", label: "Copy email address", icon: FiCopy, run: copyEmail },
      { group: "Actions", label: "Write me an email", icon: FiMail, run: () => (window.location.href = `mailto:${profile.email}`) },
      {
        group: "Actions",
        label: "Download résumé",
        icon: FiDownload,
        run: () => {
          const a = document.createElement("a");
          a.href = profile.resume;
          a.download = "Muhammad-Nameer-Resume.pdf";
          a.click();
        },
      },
      {
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
        icon: theme === "dark" ? FiSun : FiMoon,
        run: () => toggleTheme(),
      },
      ...socials
        .filter((s) => s.label !== "Email")
        .map((s) => ({
          group: "Elsewhere",
          label: s.label,
          hint: s.handle,
          icon: s.icon,
          run: () => window.open(s.href, "_blank", "noopener,noreferrer"),
        })),
    ],
    [copyEmail, theme, toggleTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => {
    if (paletteOpen) {
      setQuery("");
      setActive(0);
    }
  }, [paletteOpen]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const run = (item) => {
    if (!item) return;
    closePalette();
    // Let the dialog close (and unlock scrolling) before acting.
    setTimeout(item.run, 60);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(filtered[active]);
    }
  };

  let lastGroup = null;

  return (
    <Modal
      open={paletteOpen}
      onClose={closePalette}
      label="Command menu"
      align="top"
      className="max-w-xl rounded-[24px]"
    >
      <div className="flex items-center gap-3 border-b border-line/10 px-5">
        <FiSearch className="shrink-0 text-muted" aria-hidden="true" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a command or search…"
          aria-label="Search commands"
          aria-controls="palette-list"
          aria-activedescendant={filtered[active] ? `palette-item-${active}` : undefined}
          className="h-14 w-full bg-transparent text-[15px] text-fg placeholder:text-subtle focus:outline-none"
        />
        <kbd className="rounded-md border border-line/15 px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
      </div>

      <ul ref={listRef} id="palette-list" role="listbox" className="max-h-[52vh] overflow-y-auto p-2" data-lenis-prevent>
        {filtered.length === 0 ? (
          <li className="px-4 py-10 text-center text-sm text-muted">No results for “{query}”.</li>
        ) : (
          filtered.map((item, i) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            const Icon = item.icon;
            return (
              <li key={`${item.group}-${item.label}`} role="presentation">
                {showGroup ? (
                  <p className="eyebrow px-3 pb-2 pt-4 text-[10px] text-subtle">{item.group}</p>
                ) : null}
                <button
                  id={`palette-item-${i}`}
                  data-index={i}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(item)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] transition-colors",
                    i === active ? "bg-fg/[0.07] text-fg" : "text-muted"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line/10 transition-colors",
                      i === active && "border-transparent bg-accent text-accent-ink"
                    )}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {item.hint ? <span className="font-mono text-[11px] text-subtle">{item.hint}</span> : null}
                  {i === active ? <FiCornerDownLeft className="text-subtle" aria-hidden="true" /> : null}
                </button>
              </li>
            );
          })
        )}
      </ul>

      <div className="flex items-center justify-between border-t border-line/10 px-5 py-3 font-mono text-[11px] text-subtle">
        <span className="flex items-center gap-2">
          <FiArrowRight aria-hidden="true" /> Navigate with ↑ ↓, open with Enter
        </span>
        <span className="hidden sm:inline">Toggle with Ctrl/⌘ + K</span>
      </div>
    </Modal>
  );
}
