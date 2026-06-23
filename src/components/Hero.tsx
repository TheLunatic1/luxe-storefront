import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient orb */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-zinc-300/40 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
        >
          Autumn / Winter — 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[3.5rem] sm:text-7xl lg:text-[8.5rem] leading-[0.95] font-extrabold tracking-[-0.04em] text-zinc-900 dark:text-zinc-50"
        >
          Elevate Your
          <br />
          <span className="italic font-light text-zinc-400 dark:text-zinc-500">Everyday.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-5xl"
        >
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            A considered edit of essentials. Crafted from natural fibres, designed to outlast trend cycles.
          </p>

          <motion.a
            href="#shop"
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-3 self-start sm:self-auto px-7 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium transition-colors hover:bg-white hover:text-zinc-900 dark:hover:bg-black dark:hover:text-white border border-zinc-900 dark:border-white"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
