import { Star } from "lucide-react";

export function StarRating({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${value} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          width={size}
          height={size}
          className={n <= Math.round(value) ? "fill-gold text-gold" : "text-cream-dark"}
        />
      ))}
    </div>
  );
}
