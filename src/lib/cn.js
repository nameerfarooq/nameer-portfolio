/** Tiny className joiner — skips falsy values. */
export default function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
