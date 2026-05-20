import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatPKR } from "@/lib/products";
import { StarRating } from "./StarRating";

const badgeColor: Record<string, string> = {
  NEW: "bg-green-600 text-white",
  BESTSELLER: "bg-brown text-cream",
  SALE: "bg-red-600 text-white",
  PREMIUM: "bg-gold text-text-dark",
};

export function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  return (
    <Link
      to="/products/$id"
      params={{ id: String(product.id) }}
      className="group block overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${badgeColor[product.badge]}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-bold text-white">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wider text-brown-light">{product.fabric}</p>
        <h3 className="mt-1 font-display text-base font-semibold text-text-dark line-clamp-1 group-hover:text-brown">
          {product.name}
        </h3>
        <div className="mt-1.5"><StarRating value={product.rating} /></div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-brown font-semibold">{formatPKR(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPKR(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
