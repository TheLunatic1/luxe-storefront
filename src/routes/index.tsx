import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas — Considered Essentials" },
      {
        name: "description",
        content: "A minimalist edit of premium essentials. Crafted from natural fibres, designed to outlast trend cycles.",
      },
      { property: "og:title", content: "Atlas — Considered Essentials" },
      {
        property: "og:description",
        content: "A minimalist edit of premium essentials. Crafted from natural fibres, designed to outlast trend cycles.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 antialiased font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
