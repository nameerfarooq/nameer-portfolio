/** @type {import('tailwindcss').Config} */

// Every colour is a CSS variable holding an "R G B" triplet, so Tailwind's
// opacity modifiers (e.g. `bg-accent/20`) work in both themes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        elev: token("bg-elev"),
        surface: token("surface"),
        surface2: token("surface-2"),
        fg: token("fg"),
        muted: token("muted"),
        subtle: token("subtle"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "accent-text": token("accent-text"),
        violet: token("violet"),
        ember: token("ember"),
        glow: token("glow"),
        btn: token("btn"),
        "btn-fg": token("btn-fg"),
        "btn-hover": token("btn-hover"),
        "btn-hover-fg": token("btn-hover-fg"),
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        serif: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        "marquee-x": {
          to: { transform: "translateX(calc(-100% - var(--gap, 0px)))" },
        },
        "marquee-y": {
          to: { transform: "translateY(calc(-100% - var(--gap, 0px)))" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        blink: { "50%": { opacity: "0" } },
        "scroll-cue": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x var(--duration, 40s) linear infinite",
        "marquee-y": "marquee-y var(--duration, 40s) linear infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        blink: "blink 1s step-end infinite",
        "scroll-cue": "scroll-cue 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite",
      },
    },
  },
  plugins: [],
};
