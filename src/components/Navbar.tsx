import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";

const links = ["Shop", "About", "Contact"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-50/70 dark:bg-black/50 border-b border-zinc-200/60 dark:border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          ATLAS<span className="text-zinc-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="relative text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="h-10 w-10 grid place-items-center rounded-full hover:bg-zinc-200/60 dark:hover:bg-white/5 transition-colors"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px] text-zinc-800 dark:text-zinc-200" strokeWidth={1.75} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="relative h-10 w-10 grid place-items-center rounded-full hover:bg-zinc-200/60 dark:hover:bg-white/5 transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-[18px] w-[18px] text-zinc-800 dark:text-zinc-200" strokeWidth={1.75} />
            <span className="absolute -top-0.5 -right-0.5 h-[18px] min-w-[18px] px-1 grid place-items-center rounded-full bg-zinc-900 dark:bg-white text-[10px] font-semibold text-white dark:text-black">
              3
            </span>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
