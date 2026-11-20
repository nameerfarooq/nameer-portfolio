import { AnimatePresence, motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { useUI } from "../lib/ui-context";
import { EASE_OUT } from "./motion";

export default function Toast() {
  const { toast } = useUI();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4" role="status" aria-live="polite">
      <AnimatePresence>
        {toast ? (
          <motion.div
            key={toast.id}
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="flex items-center gap-2.5 rounded-full bg-fg py-2 pl-2 pr-4 text-sm font-medium text-bg shadow-[var(--shadow)]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-ink">
              <FiCheck aria-hidden="true" />
            </span>
            {toast.message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
