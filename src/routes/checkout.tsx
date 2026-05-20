import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useCart, deliveryFor, cartSelectors } from "@/lib/cart-store";
import { formatPKR } from "@/lib/products";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

interface Form {
  name: string; phone: string; email: string; address: string; city: string;
}

function CheckoutPage() {
  const navigate = useNavigate();
  const items = useCart((s) => s.items);
  const clearCart = useCart((s) => s.clearCart);
  const subtotal = useCart(cartSelectors.subtotal);
  const delivery = deliveryFor(subtotal);
  const total = subtotal + delivery;

  const [form, setForm] = useState<Form>({ name: "", phone: "", email: "", address: "", city: "" });
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [orderId, setOrderId] = useState<string | null>(null);

  const set = <K extends keyof Form>(k: K, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const placeOrder = () => {
    const e: Partial<Form> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^(\+92|0)?3\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid Pakistani phone";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const id = `AR-${Date.now()}`;
    setOrderId(id);
    clearCart();
    setTimeout(() => navigate({ to: "/" }), 3500);
  };

  if (items.length === 0 && !orderId) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-text-dark">Your cart is empty</h1>
        <button onClick={() => navigate({ to: "/products" })} className="mt-6 rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream">Shop now</button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="font-display text-4xl font-bold text-text-dark mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 rounded-lg border border-cream-dark bg-card p-6 space-y-5">
          <h2 className="font-display text-xl font-bold text-text-dark">Delivery Details</h2>
          <Field label="Full Name" required value={form.name} onChange={(v) => set("name", v)} error={errors.name} />
          <Field label="Phone Number" required value={form.phone} onChange={(v) => set("phone", v)} error={errors.phone} placeholder="03XX XXXXXXX" />
          <Field label="Email (optional)" value={form.email} onChange={(v) => set("email", v)} />
          <Field label="Full Address" required value={form.address} onChange={(v) => set("address", v)} error={errors.address} textarea />
          <Field label="City" required value={form.city} onChange={(v) => set("city", v)} error={errors.city} />

          <div>
            <p className="text-sm font-semibold text-text-dark mb-2">Payment Method</p>
            <label className="flex items-center gap-3 rounded-md border-2 border-brown bg-cream-dark/40 p-4 cursor-pointer">
              <input type="radio" checked readOnly className="accent-brown" />
              <div>
                <p className="font-medium text-text-dark text-sm">Cash on Delivery</p>
                <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
              </div>
            </label>
          </div>

          <button
            onClick={placeOrder}
            className="w-full rounded-md bg-brown px-6 py-3.5 text-sm font-semibold text-cream hover:bg-brown-dark transition shadow-md"
          >Place Order — {formatPKR(total)}</button>
        </div>

        {/* Summary */}
        <aside className="rounded-lg border border-cream-dark bg-card p-6 h-fit">
          <h2 className="font-display text-xl font-bold text-text-dark">Your Order</h2>
          <div className="mt-4 space-y-3 max-h-72 overflow-y-auto">
            {items.map((i) => (
              <div key={`${i.id}-${i.size}`} className="flex gap-3 text-sm">
                <img src={i.image} alt={i.name} className="h-14 w-14 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-text-dark truncate">{i.name}</p>
                  <p className="text-xs text-muted-foreground">{i.size} × {i.quantity}</p>
                </div>
                <p className="font-semibold text-brown">{formatPKR(i.price * i.quantity)}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2 border-t border-cream-dark pt-4 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPKR(subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span>{delivery === 0 ? <span className="text-green-700 font-semibold">FREE</span> : <span>{formatPKR(delivery)}</span>}</div>
            <div className="flex justify-between border-t border-cream-dark pt-2 text-base font-bold">
              <span className="text-text-dark">Total</span><span className="text-brown">{formatPKR(total)}</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Success Modal */}
      {orderId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-md w-full rounded-2xl bg-card p-8 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
            <h2 className="mt-4 font-display text-2xl font-bold text-text-dark">Order Placed!</h2>
            <p className="mt-2 text-sm text-muted-foreground">Thank you for shopping with Afshan Rabail.</p>
            <div className="mt-5 rounded-md bg-cream-dark/40 p-4">
              <p className="text-xs text-muted-foreground">Order ID</p>
              <p className="font-mono font-bold text-brown">{orderId}</p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Estimated delivery: 3-5 business days</p>
            <p className="mt-2 text-xs text-muted-foreground">Redirecting to home...</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange, error, required, placeholder, textarea }: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const cls = `w-full rounded-md border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brown ${error ? "border-red-500" : "border-cream-dark"}`;
  return (
    <div>
      <label className="block text-sm font-medium text-text-dark mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3} className={cls} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
      )}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
