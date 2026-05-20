import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, getRelated, formatPKR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { ProductCard } from "@/components/ProductCard";
import { StarRating } from "@/components/StarRating";
import { Minus, Plus, Heart, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(Number(params.id));
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const related = getRelated(product);
  const addItem = useCart((s) => s.addItem);

  const [mainImg, setMainImg] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);
  const [wished, setWished] = useState(false);

  const stockLabel =
    product.stock === 0 ? "Out of Stock" : product.stock < 10 ? "Limited Stock" : "In Stock";
  const stockColor =
    product.stock === 0 ? "text-red-600" : product.stock < 10 ? "text-amber-600" : "text-green-700";
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = () => {
    addItem({
      id: product.id, name: product.name, price: product.price,
      quantity: qty, size, image: product.images[0],
    });
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  const toggleWish = () => {
    setWished(!wished);
    if (typeof window !== "undefined") {
      const key = "afshan-rabail-wishlist";
      const list: number[] = JSON.parse(localStorage.getItem(key) ?? "[]");
      const next = wished ? list.filter((i) => i !== product.id) : [...new Set([...list, product.id])];
      localStorage.setItem(key, JSON.stringify(next));
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-brown">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/products" className="hover:text-brown">Products</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-text-dark">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-cream-dark">
            <img src={mainImg} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImg(img)}
                className={`aspect-square overflow-hidden rounded-md border-2 transition ${
                  mainImg === img ? "border-brown" : "border-transparent hover:border-cream-dark"
                }`}
              >
                <img src={img} alt={`${product.name} ${i+1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-xs uppercase tracking-wider text-brown-light">{product.style} · {product.fabric}</p>
          <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold text-text-dark">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <StarRating value={product.rating} size={16} />
            <span className="text-xs text-muted-foreground">({product.rating})</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-brown">{formatPKR(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-base text-muted-foreground line-through">{formatPKR(product.originalPrice)}</span>
                <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">-{discount}%</span>
              </>
            )}
          </div>

          <p className={`mt-3 text-sm font-medium ${stockColor}`}>● {stockLabel}</p>

          <p className="mt-5 text-sm text-text-dark/80 leading-relaxed">{product.description}</p>

          {/* Sizes */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-text-dark mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[44px] rounded-md border px-3 py-2 text-sm font-medium transition ${
                    size === s ? "border-brown bg-brown text-cream" : "border-cream-dark bg-card text-text-dark hover:border-brown"
                  }`}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-text-dark mb-2">Quantity</p>
            <div className="inline-flex items-center rounded-md border border-cream-dark bg-card">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2.5 hover:bg-cream-dark"><Minus className="h-4 w-4" /></button>
              <span className="w-12 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2.5 hover:bg-cream-dark"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAdd}
              disabled={product.stock === 0}
              className="flex-1 rounded-md bg-brown px-6 py-3.5 text-sm font-semibold text-cream hover:bg-brown-dark transition disabled:opacity-50"
            >Add to Cart</button>
            <button
              onClick={toggleWish}
              className={`rounded-md border px-5 py-3.5 transition ${
                wished ? "border-red-500 bg-red-50 text-red-600" : "border-cream-dark text-text-dark hover:border-brown"
              }`}
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-red-500" : ""}`} />
            </button>
          </div>

          {/* Specifications */}
          <div className="mt-8 rounded-lg border border-cream-dark overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Fabric", product.fabric],
                  ["Style", product.style],
                  ["Color", product.color],
                  ["Available Sizes", product.sizes.join(", ")],
                  ["SKU", `AR-${product.id.toString().padStart(4, "0")}`],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-cream-dark last:border-0">
                    <td className="bg-cream-dark/40 px-4 py-2.5 font-medium text-text-dark w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-text-dark mb-6">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 rounded-md bg-brown-dark px-5 py-3 text-sm font-medium text-cream shadow-lg">
          ✓ Added to cart
        </div>
      )}
    </div>
  );
}
