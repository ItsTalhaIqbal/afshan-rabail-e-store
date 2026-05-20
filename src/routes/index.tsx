import { createFileRoute, Link } from "@tanstack/react-router";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { StarRating } from "@/components/StarRating";
import { Truck, ShieldCheck, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const heroImg =
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1600&q=80";

const testimonials = [
  { name: "Ayesha K.", text: "Beautiful stitching and fabric quality is amazing. My festive abaya was a hit at Eid!", rating: 5 },
  { name: "Hira M.", text: "Loved the packaging and the colors are exactly as shown. Fast delivery too.", rating: 5 },
  { name: "Sana A.", text: "Comfortable, modest and elegant — exactly what I was looking for. Will order again inshaAllah.", rating: 4 },
];

function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-cream-dark px-4 py-1 text-xs font-medium text-brown-dark uppercase tracking-wider">New Collection 2026</span>
            <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-[1.05]">
              Modest. <span className="italic text-brown">Elegant.</span> You.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Handpicked abayas & burkhas crafted with premium fabrics. Designed for the modern modest woman.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream hover:bg-brown-dark transition shadow-md shadow-brown/20">
                Shop Now
              </Link>
              <button className="rounded-md border border-brown px-6 py-3 text-sm font-semibold text-brown hover:bg-cream-dark transition">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img src={heroImg} alt="Afshan Rabail abaya collection" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-cream/95 backdrop-blur px-4 py-3">
              <p className="text-xs text-muted-foreground">Featured</p>
              <p className="font-display font-semibold text-text-dark">Bridal Embellished Collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="overflow-hidden border-y border-cream-dark bg-cream-dark/40 py-6">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...categories, ...categories, ...categories].map((c, i) => (
            <Link key={i} to="/products" className="flex items-center gap-3 px-8 group">
              <span className="text-2xl">{c.icon}</span>
              <span className="font-display text-lg text-text-dark group-hover:text-brown transition">{c.name}</span>
              <span className="text-brown-light">✦</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-brown-light">Curated picks</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">Featured Pieces</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-brown hover:text-brown-dark hidden sm:inline">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-cream-dark/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-text-dark">Why Choose Afshan Rabail</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Quality Fabric", desc: "Hand-selected premium fabrics" },
              { icon: ShieldCheck, title: "Cash on Delivery", desc: "Pay only when you receive" },
              { icon: RotateCcw, title: "Easy Returns", desc: "7-day no-hassle returns" },
              { icon: Truck, title: "Nationwide Shipping", desc: "Delivered across Pakistan" },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-card p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brown/10 text-brown">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-text-dark">Loved by Modest Women</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-cream-dark bg-card p-6">
              <StarRating value={t.rating} size={16} />
              <p className="mt-3 text-sm text-text-dark italic">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-brown">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-brown text-cream py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-cream">Join the Afshan Rabail family</h2>
          <p className="mt-2 text-cream/80 text-sm">Get early access to new arrivals & exclusive offers.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-md bg-cream/95 px-4 py-3 text-sm text-text-dark placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              onClick={() => { if (email) { setSubscribed(true); setEmail(""); } }}
              className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-text-dark hover:bg-gold/90 transition"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
