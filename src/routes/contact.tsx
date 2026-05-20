import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl font-bold text-text-dark">Get in Touch</h1>
        <p className="mt-3 text-sm text-muted-foreground">We'd love to hear from you. Reach out anytime.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="rounded-xl border border-cream-dark bg-card p-7 space-y-4">
          <h2 className="font-display text-2xl font-bold text-text-dark">Send a Message</h2>
          {["name","email","phone"].map((k) => (
            <input
              key={k}
              value={form[k as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              placeholder={k.charAt(0).toUpperCase() + k.slice(1)}
              className="w-full rounded-md border border-cream-dark bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brown"
            />
          ))}
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message..." rows={5}
            className="w-full rounded-md border border-cream-dark bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brown"
          />
          <button onClick={submit} className="w-full rounded-md bg-brown px-6 py-3 text-sm font-semibold text-cream hover:bg-brown-dark transition">
            {sent ? "✓ Message Sent!" : "Send Message"}
          </button>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="rounded-xl bg-cream-dark/40 p-7 space-y-4">
            <h2 className="font-display text-2xl font-bold text-text-dark">Contact Information</h2>
            <div className="space-y-3 text-sm">
              <a href="tel:03008603042" className="flex items-center gap-3 text-text-dark hover:text-brown">
                <Phone className="h-5 w-5 text-brown" /> 0300 8603042
              </a>
              <a href="mailto:afsharabail@gmail.com" className="flex items-center gap-3 text-text-dark hover:text-brown">
                <Mail className="h-5 w-5 text-brown" /> afsharabail@gmail.com
              </a>
              <a href="https://wa.me/923008603042" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-dark hover:text-brown">
                <MessageCircle className="h-5 w-5 text-green-600" /> WhatsApp: +92 300 8603042
              </a>
              <div className="flex items-center gap-3 text-text-dark">
                <Clock className="h-5 w-5 text-brown" /> Mon-Sat, 10am - 8pm
              </div>
              <div className="flex items-center gap-3 text-text-dark">
                <MapPin className="h-5 w-5 text-brown" /> Pakistan
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-cream-dark bg-cream-dark/20 aspect-video flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-10 w-10 mx-auto text-brown" />
              <p className="mt-2 text-sm">Google Maps embed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
