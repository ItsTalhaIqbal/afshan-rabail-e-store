import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart, cartSelectors } from "@/lib/cart-store";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useCart(cartSelectors.totalItems);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-dark bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="font-display text-2xl font-bold text-brown-dark tracking-tight">
          Afshan Rabail
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-brown ${
                  active ? "text-brown border-b-2 border-brown pb-0.5" : "text-text-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-text-dark hover:bg-cream-dark transition" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-text-dark hover:bg-cream-dark transition"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brown px-1 text-[10px] font-bold text-cream">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center text-text-dark"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-cream-dark bg-cream px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-text-dark hover:text-brown"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
