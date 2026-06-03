import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { StarRating } from "@/components/StarRating";
import { Truck, ShieldCheck, RotateCcw, Sparkles, Heart, Award, Shield, ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/products/abaya-ivory-bridal.jpg";
import catBridal from "@/assets/products/abaya-ivory-bridal.jpg";
import lookA from "@/assets/products/abaya-black-stones.jpg";
import lookB from "@/assets/products/abaya-pink-pearl.jpg";
import lookC from "@/assets/products/abaya-green-velvet.jpg";
import lookD from "@/assets/products/abaya-olive-kimono.jpg";
import lookE from "@/assets/products/scarf-emerald-silk.jpg";
import lookF from "@/assets/products/abaya-navy-butterfly.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const lookbook = [lookA, lookB, lookC, lookD, lookE, lookF];

const faqs = [
  { q: "Do you offer Cash on Delivery?", a: "Yes — Cash on Delivery is available across Pakistan with no advance payment required." },
  { q: "How long does delivery take?", a: "Orders are dispatched within 24–48 hours and delivered in 3–5 working days nationwide." },
  { q: "What is your return policy?", a: "We offer 7-day easy returns and exchanges on unworn items with original tags." },
  { q: "Are sizes true to fit?", a: "Yes, but we recommend checking the size chart on each product page for the most accurate fit." },
];

const testimonials = [
  { name: "Ayesha K.", text: "Beautiful stitching and fabric quality is amazing. My festive abaya was a hit at Eid!", rating: 5 },
  { name: "Hira M.", text: "Loved the packaging and the colors are exactly as shown. Fast delivery too.", rating: 5 },
  { name: "Sana A.", text: "Comfortable, modest and elegant — exactly what I was looking for. Will order again inshaAllah.", rating: 4 },
];

function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [visible, setVisible] = useState(12);

  const allProducts = products;
  const shown = allProducts.slice(0, visible);
  const spotlight = products.find((p) => p.badge === "PREMIUM") ?? products[0];

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
              <a href="#products" className="rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream hover:bg-brown-dark transition shadow-md shadow-brown/20">
                Shop Now
              </a>
              <a href="#spotlight" className="rounded-md border border-brown px-6 py-3 text-sm font-semibold text-brown hover:bg-cream-dark transition">
                View Spotlight
              </a>
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

      {/* 4 ICON BOXES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Sparkles, title: "Quality Fabric", desc: "Hand-selected premium fabrics" },
            { icon: ShieldCheck, title: "Cash on Delivery", desc: "Pay only when you receive" },
            { icon: RotateCcw, title: "Easy Returns", desc: "7-day no-hassle returns" },
            { icon: Truck, title: "Nationwide Shipping", desc: "Delivered across Pakistan" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-xl bg-card border border-cream-dark p-5 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brown/10 text-brown">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-text-dark">{f.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-brown-light">The Collection</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">All Products</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">Explore our full range of abayas, burkhas and scarves.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {shown.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {visible < allProducts.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisible(visible + 8)}
              className="rounded-md border border-brown px-6 py-2.5 text-sm font-semibold text-brown hover:bg-brown hover:text-cream transition"
            >Load More</button>
          </div>
        )}
      </section>

      {/* SINGLE PRODUCT SPOTLIGHT */}
      <section id="spotlight" className="bg-cream-dark/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider text-brown-light">Spotlight</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">Product of the Month</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-card rounded-3xl shadow-xl overflow-hidden">
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img src={spotlight.images[0]} alt={spotlight.name} className="h-full w-full object-cover" />
              {spotlight.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-gold text-brown-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider">{spotlight.badge}</span>
              )}
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs uppercase tracking-wider text-brown-light">{spotlight.style} · {spotlight.fabric}</p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold text-text-dark">{spotlight.name}</h3>
              <div className="mt-3 flex items-center gap-3">
                <StarRating value={spotlight.rating} size={16} />
                <span className="text-xs text-muted-foreground">({spotlight.rating} / 5)</span>
              </div>
              <p className="mt-4 text-sm text-text-dark/80 leading-relaxed">{spotlight.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-text-dark">
                {["Premium hand-finished stitching", "Breathable & lightweight fabric", "Available in multiple sizes", "Cash on Delivery available"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-brown" /> {b}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-end gap-3">
                <p className="font-display text-3xl font-bold text-brown">PKR {spotlight.price.toLocaleString()}</p>
                {spotlight.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through mb-1">PKR {spotlight.originalPrice.toLocaleString()}</p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/products/$id" params={{ id: String(spotlight.id) }} className="rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream hover:bg-brown-dark transition">
                  View Product
                </Link>
                <a href="#products" className="rounded-md border border-brown px-6 py-3 text-sm font-semibold text-brown hover:bg-cream-dark transition">
                  Browse All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-brown-light">Our Story</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-text-dark">About Afshan Rabail</h2>
          <p className="mt-5 text-base text-text-dark/80 leading-relaxed">
            Founded with a single belief — that modesty and elegance walk hand in hand — Afshan Rabail
            began as a small home studio in Pakistan and grew into a trusted name for premium abayas
            and burkhas. Every piece is thoughtfully designed and tailored with care, blending
            traditional silhouettes with contemporary cuts the modern modest woman loves.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Modesty", text: "We design with reverence for modest expression." },
            { icon: Award, title: "Quality", text: "Premium fabrics, precise stitching, every time." },
            { icon: Shield, title: "Trust", text: "Honest pricing, easy returns, real customer care." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl bg-card border border-cream-dark p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brown/10 text-brown">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-text-dark">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            ["500+", "Happy Customers"],
            ["100+", "Products"],
            ["3+", "Years Experience"],
            ["PK", "Nationwide Delivery"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-cream-dark p-5">
              <p className="font-display text-3xl font-bold text-brown">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM SECTION 1 — BRIDAL BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl grid md:grid-cols-2 bg-brown-dark text-cream shadow-xl">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full bg-gold/20 text-gold px-3 py-1 text-xs uppercase tracking-wider font-medium">Bridal Edit</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">Crafted for your special day.</h2>
            <p className="mt-4 text-cream/80 text-sm md:text-base max-w-md">Hand-embellished pearls, intricate threadwork, and luxe fabrics — discover bridal abayas designed to make memories.</p>
            <a href="#products" className="mt-6 inline-flex w-fit rounded-md bg-gold px-6 py-3 text-sm font-semibold text-brown-dark hover:bg-cream transition">Explore Bridal</a>
          </div>
          <div className="relative min-h-[300px] md:min-h-[400px]">
            <img src={catBridal} alt="Bridal abaya" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* PREMIUM SECTION 2 — LOOKBOOK */}
      <section className="bg-cream-dark/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider text-brown-light">@afshanrabail</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">From the Lookbook</h2>
            <p className="mt-2 text-sm text-muted-foreground">Styled moments from our community. Tag us to be featured.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {lookbook.map((img, i) => (
              <a key={i} href="#products" className="group relative aspect-square overflow-hidden rounded-lg">
                <img src={img} alt={`Lookbook ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition flex items-center justify-center">
                  <span className="text-cream text-xs font-medium opacity-0 group-hover:opacity-100 transition">View →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM SECTION 3 — TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-brown-light">Kind words</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">Loved by Modest Women</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-cream-dark bg-card p-6">
              <StarRating value={t.rating} size={16} />
              <p className="mt-3 text-sm text-text-dark italic">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-brown">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-brown-light">Help center</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-cream-dark bg-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-display text-base font-semibold text-text-dark">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-brown transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
              )}
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
