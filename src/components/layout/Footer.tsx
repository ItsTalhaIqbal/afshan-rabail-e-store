import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-cream">Afshan Rabail</h3>
          <p className="mt-3 text-sm text-cream/80">Modest. Elegant. You.</p>
          <p className="mt-2 text-xs text-cream/60">Premium abayas & burkhas crafted with love in Pakistan.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-cream">Shop</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/products" className="hover:text-gold">All Products</Link></li>
            <li><Link to="/products" className="hover:text-gold">New Arrivals</Link></li>
            <li><Link to="/products" className="hover:text-gold">Bestsellers</Link></li>
            <li><Link to="/products" className="hover:text-gold">Sale</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-cream">Company</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><span className="hover:text-gold cursor-pointer">Returns</span></li>
            <li><span className="hover:text-gold cursor-pointer">Shipping</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-cream">Get in touch</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />0300 8603042</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />afsharabail@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Afshan Rabail. All rights reserved.
      </div>
    </footer>
  );
}
