import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between mb-12 lg:mb-16"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            The Edit
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-zinc-900 dark:text-zinc-50">
            Featured Products
          </h2>
        </div>
        <a
          href="#all"
          className="hidden sm:inline-block text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline-offset-4 hover:underline"
        >
          View all →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
