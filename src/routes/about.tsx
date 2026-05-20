import { createFileRoute } from "@tanstack/react-router";
import { Heart, Award, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-wider text-brown-light">Our Story</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-text-dark">About Afshan Rabail</h1>
        <p className="mt-6 text-base text-text-dark/80 leading-relaxed">
          Founded with a single belief — that modesty and elegance walk hand in hand — Afshan Rabail
          began as a small home studio in Pakistan and grew into a trusted name for premium abayas
          and burkhas. Every piece is thoughtfully designed and tailored with care, blending
          traditional silhouettes with contemporary cuts that today's modest woman loves.
        </p>
      </section>

      <section className="bg-cream-dark/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Modesty", text: "We design with reverence for modest expression." },
            { icon: Award, title: "Quality", text: "Premium fabrics, precise stitching, every time." },
            { icon: Shield, title: "Trust", text: "Honest pricing, easy returns, real customer care." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl bg-card p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brown/10 text-brown">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-text-dark">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["500+", "Happy Customers"],
            ["100+", "Products"],
            ["3+", "Years Experience"],
            ["PK", "Nationwide Delivery"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-cream-dark p-6">
              <p className="font-display text-4xl font-bold text-brown">{n}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brown text-cream py-16">
        <blockquote className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl md:text-3xl italic leading-relaxed">
            "We don't just sell abayas — we celebrate the quiet confidence of every woman who chooses
            to dress with grace."
          </p>
          <footer className="mt-5 text-sm text-cream/80">— Afshan, Founder</footer>
        </blockquote>
      </section>
    </div>
  );
}
