import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";
import cn from "../lib/cn";

const SIZES = {
  sm: { root: "h-10 gap-2 pl-4 pr-1 text-[13px]", bubble: "h-8 w-8 text-[13px]" },
  md: { root: "h-12 gap-3 pl-5 pr-1.5 text-[15px]", bubble: "h-9 w-9 text-[15px]" },
  lg: { root: "h-14 gap-4 pl-7 pr-2 text-base", bubble: "h-10 w-10 text-base" },
};

const VARIANTS = {
  primary: {
    root: "bg-btn text-btn-fg",
    fill: "bg-btn-hover",
    text: "group-hover:text-btn-hover-fg",
    bubble: "bg-btn-fg text-btn group-hover:bg-btn-hover-fg group-hover:text-btn-hover",
  },
  secondary: {
    root: "text-fg ring-1 ring-inset ring-line/15 hover:ring-transparent",
    fill: "bg-fg",
    text: "group-hover:text-bg",
    bubble: "bg-fg/10 text-fg group-hover:bg-bg group-hover:text-fg",
  },
};

// Icon slides out one way and a copy slides in from the other side.
const MOTION = {
  "up-right": {
    out: "group-hover:-translate-y-[160%] group-hover:translate-x-[160%]",
    in: "-translate-x-[160%] translate-y-[160%] group-hover:translate-x-0 group-hover:translate-y-0",
  },
  down: {
    out: "group-hover:translate-y-[160%]",
    in: "-translate-y-[160%] group-hover:translate-y-0",
  },
  right: {
    out: "group-hover:translate-x-[160%]",
    in: "-translate-x-[160%] group-hover:translate-x-0",
  },
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon = FiArrowUpRight,
  iconMotion = "up-right",
  className,
  magnetic = true,
  ...rest
}) {
  const Comp = href ? "a" : "button";
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const m = MOTION[iconMotion];
  const external = href && /^https?:/.test(href) && rest.target === undefined;

  const node = (
    <Comp
      href={href}
      type={href ? undefined : rest.type ?? "button"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
      className={cn(
        "group relative isolate inline-flex shrink-0 items-center overflow-hidden whitespace-nowrap rounded-full font-medium tracking-tight transition-[box-shadow] duration-500",
        s.root,
        v.root,
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 translate-y-[102%] rounded-[inherit] transition-transform duration-500 ease-out-expo group-hover:translate-y-0",
          v.fill
        )}
      />
      <span className={cn("relative transition-colors duration-500", v.text)}>{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "relative grid place-items-center overflow-hidden rounded-full transition-colors duration-500",
          s.bubble,
          v.bubble
        )}
      >
        <Icon className={cn("transition-transform duration-500 ease-out-expo", m.out)} />
        <Icon className={cn("absolute transition-transform duration-500 ease-out-expo", m.in)} />
      </span>
    </Comp>
  );

  return magnetic ? <Magnetic strength={0.22}>{node}</Magnetic> : node;
}
