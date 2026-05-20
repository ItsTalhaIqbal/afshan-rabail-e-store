import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart, deliveryFor, cartSelectors } from "@/lib/cart-store";
import { formatPKR } from "@/lib/products";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const removeItem = useCart((s) => s.removeItem);
  const updateQty = useCart((s) => s.updateQty);
  const subtotal = useCart(cartSelectors.subtotal);
  const delivery = deliveryFor(subtotal);
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream-dark text-brown">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-text-dark">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Browse our collection and find your next favourite abaya.</p>
        <Link to="/products" className="mt-6 inline-block rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream hover:bg-brown-dark transition">Shop now</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="font-display text-4xl font-bold text-text-dark mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 rounded-lg border border-cream-dark bg-card p-4">
              <div className="h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 overflow-hidden rounded-md bg-cream-dark">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2">
                  <h3 className="font-display font-semibold text-text-dark">{item.name}</h3>
                  <button onClick={() => removeItem(item.id, item.size)} aria-label="Remove" className="text-muted-foreground hover:text-red-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                <p className="text-sm font-semibold text-brown mt-1">{formatPKR(item.price)}</p>
                <div className="mt-3 inline-flex items-center rounded-md border border-cream-dark">
                  <button onClick={() => updateQty(item.id, item.size, item.quantity - 1)} className="p-1.5 hover:bg-cream-dark"><Minus className="h-3.5 w-3.5" /></button>
                  <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, item.size, item.quantity + 1)} className="p-1.5 hover:bg-cream-dark"><Plus className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
          <Link to="/products" className="inline-block text-sm font-medium text-brown hover:text-brown-dark">← Continue Shopping</Link>
        </div>

        <aside className="rounded-lg border border-cream-dark bg-card p-6 h-fit sticky top-24">
          <h2 className="font-display text-xl font-bold text-text-dark">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">{formatPKR(subtotal)}</span></div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              {delivery === 0
                ? <span className="font-semibold text-green-700">FREE</span>
                : <span className="font-semibold">{formatPKR(delivery)}</span>}
            </div>
            {subtotal < 5000 && (
              <p className="text-xs text-amber-700 bg-amber-50 rounded-md p-2">
                Add {formatPKR(5000 - subtotal)} more for free delivery!
              </p>
            )}
            <div className="border-t border-cream-dark pt-3 flex justify-between text-base">
              <span className="font-semibold text-text-dark">Grand Total</span>
              <span className="font-bold text-brown">{formatPKR(total)}</span>
            </div>
          </div>
          <Link to="/checkout" className="mt-6 block w-full rounded-md bg-brown px-6 py-3 text-center text-sm font-semibold text-cream hover:bg-brown-dark transition">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
