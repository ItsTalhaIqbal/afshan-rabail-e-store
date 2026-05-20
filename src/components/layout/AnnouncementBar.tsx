const message =
  "Free Delivery on Orders Over PKR 5,000  ✦  New Arrivals Every Week  ✦  Cash on Delivery Available  ✦  Call: 0300 8603042  ✦  Easy Returns & Exchanges";

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-brown text-cream text-xs sm:text-sm py-2 border-b border-brown-dark">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="px-8">{message}</span>
        <span className="px-8">{message}</span>
        <span className="px-8">{message}</span>
        <span className="px-8">{message}</span>
      </div>
    </div>
  );
}
