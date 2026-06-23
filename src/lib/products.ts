export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Atelier Wool Coat",
    price: 489,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
  },
  {
    id: "2",
    name: "Monochrome Knit",
    price: 189,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    category: "Knitwear",
  },
  {
    id: "3",
    name: "Tailored Trouser",
    price: 245,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    category: "Bottoms",
  },
  {
    id: "4",
    name: "Linen Overshirt",
    price: 165,
    image: "https://images.unsplash.com/photo-1614495039943-5ce5e3df40a4?auto=format&fit=crop&w=800&q=80",
    category: "Shirts",
  },
  {
    id: "5",
    name: "Minimal Leather Tote",
    price: 320,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Cashmere Scarf",
    price: 145,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
  },
  {
    id: "7",
    name: "Structured Blazer",
    price: 425,
    image: "https://images.unsplash.com/photo-1591047139756-eb1095032ba0?auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
  },
  {
    id: "8",
    name: "Essential White Tee",
    price: 65,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    category: "Basics",
  },
];
