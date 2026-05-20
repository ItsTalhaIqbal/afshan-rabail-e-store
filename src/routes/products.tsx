import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

const styles = ["All", "Casual", "Festive", "Bridal", "Kids", "Imported"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "new", label: "New Arrivals" },
];

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [style, setStyle] = useState("All");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sort, setSort] = useState("featured");
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        (style === "All" || p.style === style) &&
        p.price <= maxPrice,
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "new") list = [...list].sort((a, b) => (b.badge === "NEW" ? 1 : 0) - (a.badge === "NEW" ? 1 : 0));
    return list;
  }, [query, style, maxPrice, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold text-text-dark">All Products</h1>
        <p className="mt-1 text-sm text-muted-foreground">Explore our full collection of modest abayas & burkhas.</p>
      </header>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border border-cream-dark bg-card pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brown"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-md border border-cream-dark bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brown"
        >
          {sortOptions.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-lg bg-cream-dark/40">
        <div className="flex flex-wrap gap-2">
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                style === s ? "bg-brown text-cream" : "bg-card text-text-dark hover:bg-cream-dark"
              }`}
            >{s}</button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs text-text-dark">
          <label>Max price: <span className="font-semibold text-brown">PKR {maxPrice.toLocaleString()}</span></label>
          <input
            type="range" min={1000} max={20000} step={500}
            value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-brown"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-xl text-text-dark">No products found</p>
          <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible(visible + 8)}
                className="rounded-md border border-brown px-6 py-2.5 text-sm font-semibold text-brown hover:bg-brown hover:text-cream transition"
              >Load More</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
