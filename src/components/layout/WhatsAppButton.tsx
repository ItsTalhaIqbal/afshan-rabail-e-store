import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const href =
    "https://wa.me/923008603042?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20your%20abayas!";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
