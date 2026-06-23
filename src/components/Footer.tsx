import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 dark:border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3 items-start">
        <div>
          <a href="/" className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            ATLAS<span className="text-zinc-400">.</span>
          </a>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs leading-relaxed">
            Considered essentials, made to last. Designed in Copenhagen.
          </p>
        </div>

        <div className="flex md:justify-center gap-6">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Youtube, label: "YouTube" },
          ].map(({ Icon, label }) => (
            <motion.a
              key={label}
              whileTap={{ scale: 0.9 }}
              href="#"
              aria-label={label}
              className="h-10 w-10 grid place-items-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </motion.a>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full"
        >
          <label className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Newsletter
          </label>
          <div className="mt-3 flex items-center gap-2 border-b border-zinc-300 dark:border-white/15 focus-within:border-zinc-900 dark:focus-within:border-white transition-colors">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-2 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              aria-label="Subscribe"
              className="h-8 w-8 grid place-items-center rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </form>
      </div>

      <div className="border-t border-zinc-200/70 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-zinc-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Atlas Studio. All rights reserved.</p>
          <p>Designed with intent.</p>
        </div>
      </div>
    </footer>
  );
}
