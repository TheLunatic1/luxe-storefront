import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-200">
            {product.category}
          </span>
        </div>

        <div className="absolute inset-x-3 bottom-3 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-full bg-zinc-900/95 dark:bg-white/95 backdrop-blur-md text-white dark:text-black text-sm font-medium hover:bg-zinc-900 dark:hover:bg-white"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 tabular-nums">
          ${product.price}
        </p>
      </div>
    </motion.article>
  );
}
