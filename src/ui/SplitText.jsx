import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./motion";

/**
 * Parses "Projects I've *shipped* & designed.\nSecond line" into lines → words → segments.
 * Text wrapped in *asterisks* renders in the italic serif accent.
 */
function parse(text) {
  let em = false;
  return text.split("\n").map((line) =>
    line
      .split(" ")
      .filter(Boolean)
      .map((word) => {
        const segments = [];
        word.split("*").forEach((part, i) => {
          if (i > 0) em = !em;
          if (part) segments.push({ text: part, em });
        });
        return segments;
      })
  );
}

const word = {
  hidden: { y: "115%", rotate: 5 },
  show: { y: "0%", rotate: 0, transition: { duration: 1.05, ease: EASE_OUT } },
};

/** Word-by-word masked reveal. Pass `trigger` to control it manually. */
export default function SplitText({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.05,
  trigger,
  accentClassName = "serif-accent text-accent-text",
}) {
  const reduce = useReducedMotion();
  const lines = parse(text);
  const plain = text.replace(/\*/g, "").replace(/\n/g, " ");
  const Comp = motion[as] ?? motion.span;

  const control = reduce
    ? { initial: false, animate: "show" }
    : trigger === undefined
      ? { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.35 } }
      : { initial: "hidden", animate: trigger ? "show" : "hidden" };

  return (
    <Comp
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...control}
    >
      <span className="sr-only">{plain}</span>
      {lines.map((words, li) => (
        <span key={li} className="block" aria-hidden="true">
          {words.map((segments, wi) => (
            <Fragment key={wi}>
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                <motion.span className="inline-block origin-bottom-left will-change-transform" variants={word}>
                  {segments.map((s, si) =>
                    s.em ? (
                      <span key={si} className={`${accentClassName} pr-[0.04em]`}>
                        {s.text}
                      </span>
                    ) : (
                      <Fragment key={si}>{s.text}</Fragment>
                    )
                  )}
                </motion.span>
              </span>
              {wi < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      ))}
    </Comp>
  );
}
