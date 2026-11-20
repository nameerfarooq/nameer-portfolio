import Lenis from "lenis";

/**
 * A single Lenis instance shared by the whole app. When the visitor prefers
 * reduced motion we skip Lenis entirely and fall back to native scrolling.
 */
let lenis = null;
let lockCount = 0;

export function initSmoothScroll() {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  let frame;
  const loop = (time) => {
    lenis?.raf(time);
    frame = requestAnimationFrame(loop);
  };
  frame = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = null;
  };
}

/** Scroll to "top", a CSS selector, or an element. */
export function scrollToTarget(target, { offset = 0, immediate = false } = {}) {
  const el =
    target === "top" ? 0 : typeof target === "string" ? document.querySelector(target) : target;
  if (el === null || el === undefined) return;

  if (lenis) {
    lenis.scrollTo(el, { offset, immediate, duration: 1.5 });
    return;
  }

  const top = el === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
}

/** Ref-counted scroll lock so stacked overlays don't fight each other. */
export function lockScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  }
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    lenis?.start();
    document.documentElement.style.overflow = "";
  }
}
