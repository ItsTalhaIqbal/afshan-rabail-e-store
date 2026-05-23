import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { StarRating } from "@/components/StarRating";
import { Truck, ShieldCheck, RotateCcw, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/products/abaya-ivory-bridal.jpg";
import catCasual from "@/assets/products/abaya-grey-plain.jpg";
import catFestive from "@/assets/products/abaya-maroon-embroidered.jpg";
import catBridal from "@/assets/products/abaya-ivory-bridal.jpg";
import catScarves from "@/assets/products/scarf-silk-stack.jpg";
import catImported from "@/assets/products/abaya-charcoal-turkish.jpg";
import lookA from "@/assets/products/abaya-black-stones.jpg";
import lookB from "@/assets/products/abaya-pink-pearl.jpg";
import lookC from "@/assets/products/abaya-green-velvet.jpg";
import lookD from "@/assets/products/abaya-olive-kimono.jpg";
import lookE from "@/assets/products/scarf-emerald-silk.jpg";
import lookF from "@/assets/products/abaya-navy-butterfly.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const shopCategories = [
  { name: "Casual", img: catCasual, desc: "Everyday modesty" },
  { name: "Festive", img: catFestive, desc: "Eid & gatherings" },
  { name: "Bridal", img: catBridal, desc: "Embellished elegance" },
  { name: "Scarves", img: catScarves, desc: "Silk, chiffon & jersey" },
  { name: "Imported", img: catImported, desc: "Turkish & Dubai picks" },
];

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
  const featured = products.slice(0, 6);
  const newArrivals = products.filter((p) => p.badge === "NEW").slice(0, 4);
  const bestSellers = products.filter((p) => p.badge === "BESTSELLER").slice(0, 4);

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

      {/* SHOP BY CATEGORY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-brown-light">Explore</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">Shop by Category</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">From everyday casual drapes to embellished bridal pieces — find your modest style.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {shopCategories.map((c) => (
            <Link key={c.name} to="/products" className="group relative overflow-hidden rounded-xl aspect-[3/4] shadow-sm hover:shadow-xl transition">
              <img src={c.img} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
                <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                <p className="text-xs text-cream/80">{c.desc}</p>
                <span className="mt-2 inline-block text-xs font-medium opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">Shop now →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">

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

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <section className="bg-cream-dark/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-brown-light">Just in</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark">New Arrivals</h2>
              </div>
              <Link to="/products" className="text-sm font-medium text-brown hover:text-brown-dark hidden sm:inline">Shop all →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* BRIDAL BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl grid md:grid-cols-2 bg-brown-dark text-cream shadow-xl">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full bg-gold/20 text-gold px-3 py-1 text-xs uppercase tracking-wider font-medium">Bridal Edit</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">Crafted for your special day.</h2>
            <p className="mt-4 text-cream/80 text-sm md:text-base max-w-md">Hand-embellished pearls, intricate threadwork, and luxe fabrics — discover bridal abayas designed to make memories.</p>
            <Link to="/products" className="mt-6 inline-flex w-fit rounded-md bg-gold px-6 py-3 text-sm font-semibold text-brown-dark hover:bg-cream transition">Explore Bridal</Link>
          </div>
          <div className="relative min-h-[300px] md:min-h-[400px]">
            <img src={catBridal} alt="Bridal abaya" className="absolute inset-0 h-full w-full object-cover" />
          </div>
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
