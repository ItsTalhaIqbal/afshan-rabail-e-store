// Product catalog — Afshan Rabail
// Images are bundled locally so they work offline / when running locally.

import imgBlackClassic from "@/assets/products/abaya-black-classic.jpg";
import imgMaroonEmb from "@/assets/products/abaya-maroon-embroidered.jpg";
import imgBeigeCoat from "@/assets/products/abaya-beige-coat.jpg";
import imgNavyButterfly from "@/assets/products/abaya-navy-butterfly.jpg";
import imgGreyPlain from "@/assets/products/abaya-grey-plain.jpg";
import imgBlackStones from "@/assets/products/abaya-black-stones.jpg";
import imgCharcoalTurkish from "@/assets/products/abaya-charcoal-turkish.jpg";
import imgOliveKimono from "@/assets/products/abaya-olive-kimono.jpg";
import imgIvoryBridal from "@/assets/products/abaya-ivory-bridal.jpg";
import imgSkyPrinted from "@/assets/products/abaya-sky-printed.jpg";
import imgPinkPearl from "@/assets/products/abaya-pink-pearl.jpg";
import imgGreenVelvet from "@/assets/products/abaya-green-velvet.jpg";
import imgScarfStack from "@/assets/products/scarf-silk-stack.jpg";
import imgScarfBlack from "@/assets/products/scarf-black-chiffon.jpg";
import imgScarfBeige from "@/assets/products/scarf-beige-jersey.jpg";
import imgScarfFloral from "@/assets/products/scarf-floral-print.jpg";
import imgScarfEmerald from "@/assets/products/scarf-emerald-silk.jpg";
import imgScarfNavy from "@/assets/products/scarf-navy-cotton.jpg";

export interface Product {
  id: number;
  name: string;
  style: string;
  fabric: string;
  price: number;
  originalPrice?: number;
  color: string;
  rating: number;
  stock: number;
  sizes: string[];
  badge?: "NEW" | "BESTSELLER" | "SALE" | "PREMIUM";
  description: string;
  images: string[];
  tags: string[];
}

// Helper: 4-image gallery rotated from a base + accents
const gal = (main: string, ...extra: string[]) => [main, ...extra].slice(0, 4);

const ABAYA_SIZES = ["S", "M", "L", "XL"];
const ABAYA_SIZES_FULL = ["XS", "S", "M", "L", "XL", "XXL"];
const SCARF_SIZE = ["One Size"];

export const products: Product[] = [
  // ===== ABAYAS =====
  { id: 1, name: "Classic Black Nida Abaya", style: "Casual", fabric: "Nida", price: 2500, color: "Black", rating: 4.7, stock: 25, sizes: ABAYA_SIZES, badge: "BESTSELLER",
    description: "A timeless black Nida abaya with a clean A-line silhouette. Smooth, breathable fabric makes it perfect for everyday wear.",
    images: gal(imgBlackClassic, imgCharcoalTurkish, imgGreyPlain, imgScarfBlack), tags: ["black","casual","daily"] },

  { id: 2, name: "Maroon Embroidered Festive Abaya", style: "Festive", fabric: "Chiffon", price: 5500, originalPrice: 6500, color: "Maroon", rating: 4.8, stock: 12, sizes: ABAYA_SIZES, badge: "SALE",
    description: "Hand-embroidered chiffon abaya with delicate floral motifs. Perfect for Eid and family gatherings.",
    images: gal(imgMaroonEmb, imgGreenVelvet, imgIvoryBridal, imgScarfFloral), tags: ["festive","embroidered","eid"] },

  { id: 3, name: "Beige Coat Style Open Abaya", style: "Casual", fabric: "Nida", price: 3800, color: "Beige", rating: 4.6, stock: 18, sizes: ABAYA_SIZES_FULL, badge: "NEW",
    description: "Modern open-front coat-style abaya. Layer over your favourite outfit for an elegant modest look.",
    images: gal(imgBeigeCoat, imgOliveKimono, imgGreyPlain, imgScarfBeige), tags: ["coat","open","modern"] },

  { id: 4, name: "Navy Butterfly Chiffon Abaya", style: "Festive", fabric: "Chiffon", price: 4200, color: "Navy", rating: 4.5, stock: 20, sizes: ABAYA_SIZES, badge: "NEW",
    description: "Flowy butterfly-cut chiffon abaya with wide sleeves and a graceful drape.",
    images: gal(imgNavyButterfly, imgScarfNavy, imgBlackStones, imgCharcoalTurkish), tags: ["butterfly","chiffon","flowy"] },

  { id: 5, name: "Plain Grey Daily Wear Abaya", style: "Casual", fabric: "Lawn", price: 1800, color: "Grey", rating: 4.3, stock: 40, sizes: ABAYA_SIZES_FULL,
    description: "Lightweight lawn abaya for daily use. Soft, cool and easy to manage.",
    images: gal(imgGreyPlain, imgBlackClassic, imgBeigeCoat, imgScarfBeige), tags: ["daily","lawn","plain"] },

  { id: 6, name: "Black Stone Work Party Abaya", style: "Festive", fabric: "Chiffon", price: 7500, color: "Black", rating: 4.9, stock: 8, sizes: ABAYA_SIZES, badge: "PREMIUM",
    description: "Premium chiffon abaya with hand-applied stone work across the bodice and cuffs.",
    images: gal(imgBlackStones, imgBlackClassic, imgScarfBlack, imgGreenVelvet), tags: ["party","stones","premium"] },

  { id: 7, name: "Turkish Luxury Charcoal Abaya", style: "Imported", fabric: "Imported Fabric", price: 12000, color: "Charcoal", rating: 4.9, stock: 5, sizes: ABAYA_SIZES, badge: "PREMIUM",
    description: "Authentic Turkish-cut abaya in premium imported fabric with structured tailoring.",
    images: gal(imgCharcoalTurkish, imgBlackStones, imgGreenVelvet, imgScarfNavy), tags: ["turkish","imported","luxury"] },

  { id: 8, name: "Olive Kimono Style Abaya", style: "Casual", fabric: "Silk Blend", price: 4800, color: "Olive", rating: 4.7, stock: 15, sizes: ABAYA_SIZES, badge: "BESTSELLER",
    description: "Kimono-inspired silhouette in a soft silk blend. Wide sleeves and a flowing fall.",
    images: gal(imgOliveKimono, imgBeigeCoat, imgGreyPlain, imgScarfStack), tags: ["kimono","silk","trendy"] },

  { id: 9, name: "Maxi Full Length Black Abaya", style: "Casual", fabric: "Nida", price: 3200, color: "Black", rating: 4.5, stock: 22, sizes: ABAYA_SIZES_FULL,
    description: "Full-length maxi abaya with extra coverage and a clean modern cut.",
    images: gal(imgBlackClassic, imgBlackStones, imgCharcoalTurkish, imgScarfBlack), tags: ["maxi","long","nida"] },

  { id: 10, name: "Sky Blue Printed Summer Burkha", style: "Casual", fabric: "Lawn", price: 2200, color: "Sky Blue", rating: 4.4, stock: 30, sizes: ABAYA_SIZES, badge: "NEW",
    description: "Light printed burkha for summer. Breathable lawn with a cheerful print.",
    images: gal(imgSkyPrinted, imgScarfFloral, imgPinkPearl, imgGreyPlain), tags: ["burkha","printed","summer"] },

  { id: 11, name: "Ivory Bridal Embellished Abaya", style: "Bridal", fabric: "Chiffon", price: 15000, color: "Ivory", rating: 5.0, stock: 3, sizes: ["S","M","L"], badge: "PREMIUM",
    description: "Hand-embellished bridal abaya with intricate beadwork. A statement piece for your big day.",
    images: gal(imgIvoryBridal, imgScarfBeige, imgPinkPearl, imgMaroonEmb), tags: ["bridal","beaded","ivory"] },

  { id: 12, name: "Kids Black Nida Abaya", style: "Kids", fabric: "Nida", price: 1500, color: "Black", rating: 4.6, stock: 35, sizes: ["XS","S","M"],
    description: "Comfortable Nida abaya tailored for kids. Soft and easy to wear.",
    images: gal(imgBlackClassic, imgGreyPlain, imgScarfBlack, imgScarfNavy), tags: ["kids","nida","child"] },

  { id: 13, name: "Dusty Pink Pearl Abaya", style: "Festive", fabric: "Nida", price: 4500, color: "Dusty Pink", rating: 4.7, stock: 14, sizes: ABAYA_SIZES, badge: "NEW",
    description: "Soft dusty pink abaya with delicate pearl detailing on the cuffs. Feminine and elegant.",
    images: gal(imgPinkPearl, imgScarfStack, imgScarfFloral, imgIvoryBridal), tags: ["pink","pearl","feminine"] },

  { id: 14, name: "Emerald Velvet Festive Abaya", style: "Festive", fabric: "Velvet", price: 8500, originalPrice: 9800, color: "Emerald Green", rating: 4.8, stock: 7, sizes: ABAYA_SIZES, badge: "SALE",
    description: "Luxurious velvet abaya with hand-stitched golden embroidery on cuffs. A winter-festive favourite.",
    images: gal(imgGreenVelvet, imgScarfEmerald, imgMaroonEmb, imgBlackStones), tags: ["velvet","green","embroidered"] },

  { id: 15, name: "Two-Tone Beige & Brown Abaya", style: "Casual", fabric: "Nida", price: 3600, color: "Beige/Brown", rating: 4.4, stock: 19, sizes: ABAYA_SIZES,
    description: "A relaxed two-tone abaya combining beige body and brown trims. Easy daily styling.",
    images: gal(imgBeigeCoat, imgScarfBeige, imgOliveKimono, imgScarfStack), tags: ["beige","brown","casual"] },

  { id: 16, name: "Pleated Front Open Abaya", style: "Casual", fabric: "Nida", price: 3900, color: "Stone", rating: 4.5, stock: 16, sizes: ABAYA_SIZES,
    description: "Open-front abaya with elegant pleated detailing. Versatile and flattering.",
    images: gal(imgBeigeCoat, imgGreyPlain, imgScarfBeige, imgOliveKimono), tags: ["pleated","open","stone"] },

  { id: 17, name: "Dubai Style Premium Abaya", style: "Imported", fabric: "Imported Fabric", price: 11500, color: "Black", rating: 4.9, stock: 6, sizes: ABAYA_SIZES, badge: "PREMIUM",
    description: "Inspired by Dubai modest fashion — premium drape, sleek tailoring, statement cuffs.",
    images: gal(imgBlackStones, imgCharcoalTurkish, imgBlackClassic, imgScarfBlack), tags: ["dubai","imported","premium"] },

  { id: 18, name: "Sequin Sleeve Party Abaya", style: "Festive", fabric: "Chiffon", price: 6800, color: "Black", rating: 4.6, stock: 9, sizes: ABAYA_SIZES,
    description: "Festive black chiffon abaya with shimmering sequin sleeves. Perfect for evening events.",
    images: gal(imgBlackStones, imgGreenVelvet, imgMaroonEmb, imgScarfEmerald), tags: ["sequin","party","festive"] },

  { id: 19, name: "Soft Lawn Summer Abaya", style: "Casual", fabric: "Lawn", price: 1950, color: "Cream", rating: 4.3, stock: 28, sizes: ABAYA_SIZES_FULL, badge: "NEW",
    description: "Breathable lawn abaya in a warm cream tone. Lightweight comfort for hot days.",
    images: gal(imgGreyPlain, imgBeigeCoat, imgScarfBeige, imgPinkPearl), tags: ["summer","lawn","cream"] },

  { id: 20, name: "Floral Print Chiffon Burkha", style: "Casual", fabric: "Chiffon", price: 2800, color: "Multi", rating: 4.5, stock: 21, sizes: ABAYA_SIZES,
    description: "Soft chiffon burkha with a delicate floral print. Easy to drape, lovely to wear.",
    images: gal(imgSkyPrinted, imgScarfFloral, imgPinkPearl, imgScarfStack), tags: ["floral","burkha","chiffon"] },

  { id: 21, name: "Royal Maroon Bridal Abaya", style: "Bridal", fabric: "Velvet", price: 18000, color: "Maroon", rating: 5.0, stock: 2, sizes: ["S","M","L"], badge: "PREMIUM",
    description: "Statement maroon velvet bridal abaya with intricate zari work. Heirloom-quality piece.",
    images: gal(imgMaroonEmb, imgGreenVelvet, imgBlackStones, imgIvoryBridal), tags: ["bridal","maroon","velvet"] },

  { id: 22, name: "Kids Printed Abaya", style: "Kids", fabric: "Lawn", price: 1700, color: "Sky Blue", rating: 4.5, stock: 24, sizes: ["XS","S","M"], badge: "NEW",
    description: "Soft printed lawn abaya for little ones. Comfortable for all-day wear.",
    images: gal(imgSkyPrinted, imgScarfFloral, imgPinkPearl, imgGreyPlain), tags: ["kids","printed","lawn"] },

  // ===== SCARVES / HIJABS =====
  { id: 23, name: "Premium Silk Hijab Set (4 pcs)", style: "Scarves", fabric: "Silk", price: 3200, originalPrice: 3800, color: "Earth Tones", rating: 4.8, stock: 30, sizes: SCARF_SIZE, badge: "BESTSELLER",
    description: "Bundle of four premium silk hijabs in beautiful earth tones — beige, cream, brown and dusty pink.",
    images: gal(imgScarfStack, imgScarfBeige, imgScarfBlack, imgScarfNavy), tags: ["scarf","silk","bundle"] },

  { id: 24, name: "Classic Black Chiffon Scarf", style: "Scarves", fabric: "Chiffon", price: 850, color: "Black", rating: 4.7, stock: 60, sizes: SCARF_SIZE,
    description: "Lightweight black chiffon scarf with a soft, airy drape. A wardrobe essential.",
    images: gal(imgScarfBlack, imgScarfNavy, imgScarfBeige, imgScarfStack), tags: ["scarf","black","chiffon"] },

  { id: 25, name: "Beige Cotton Jersey Hijab", style: "Scarves", fabric: "Cotton Jersey", price: 950, color: "Beige", rating: 4.6, stock: 45, sizes: SCARF_SIZE, badge: "NEW",
    description: "Soft stretchy cotton jersey hijab — no slipping, easy daily styling.",
    images: gal(imgScarfBeige, imgScarfStack, imgScarfFloral, imgScarfNavy), tags: ["scarf","jersey","beige"] },

  { id: 26, name: "Floral Print Silk Scarf", style: "Scarves", fabric: "Silk", price: 1400, color: "Dusty Rose", rating: 4.7, stock: 22, sizes: SCARF_SIZE,
    description: "Elegant printed silk scarf with floral motifs in dusty rose and sage tones.",
    images: gal(imgScarfFloral, imgScarfStack, imgScarfBeige, imgPinkPearl), tags: ["scarf","floral","silk"] },

  { id: 27, name: "Emerald Silk Hijab with Gold Trim", style: "Scarves", fabric: "Silk", price: 1800, color: "Emerald", rating: 4.8, stock: 18, sizes: SCARF_SIZE, badge: "PREMIUM",
    description: "Statement emerald silk hijab with a glossy gold trim — perfect for festive occasions.",
    images: gal(imgScarfEmerald, imgGreenVelvet, imgScarfStack, imgScarfFloral), tags: ["scarf","emerald","luxury"] },

  { id: 28, name: "Navy Cotton Hijab", style: "Scarves", fabric: "Cotton", price: 700, color: "Navy", rating: 4.4, stock: 50, sizes: SCARF_SIZE,
    description: "Everyday navy cotton hijab with a breathable, easy-to-drape finish.",
    images: gal(imgScarfNavy, imgScarfBlack, imgScarfBeige, imgScarfStack), tags: ["scarf","navy","cotton"] },

  { id: 29, name: "Maroon Chiffon Hijab", style: "Scarves", fabric: "Chiffon", price: 900, color: "Maroon", rating: 4.5, stock: 35, sizes: SCARF_SIZE, badge: "NEW",
    description: "Lightweight maroon chiffon hijab to pair beautifully with festive abayas.",
    images: gal(imgScarfBlack, imgMaroonEmb, imgScarfStack, imgScarfFloral), tags: ["scarf","maroon","chiffon"] },

  { id: 30, name: "Mixed Pastel Hijab Bundle (3 pcs)", style: "Scarves", fabric: "Chiffon", price: 2100, originalPrice: 2500, color: "Pastel Mix", rating: 4.7, stock: 25, sizes: SCARF_SIZE, badge: "SALE",
    description: "Three soft pastel chiffon hijabs in dusty pink, cream and sage. Mix and match daily.",
    images: gal(imgScarfStack, imgScarfFloral, imgScarfBeige, imgPinkPearl), tags: ["scarf","bundle","pastel"] },

  { id: 31, name: "Luxury Emerald Velvet Abaya", style: "Festive", fabric: "Velvet", price: 9200, color: "Emerald", rating: 4.9, stock: 5, sizes: ABAYA_SIZES, badge: "PREMIUM",
    description: "Rich emerald velvet abaya for winter weddings and evening events.",
    images: gal(imgGreenVelvet, imgScarfEmerald, imgBlackStones, imgIvoryBridal), tags: ["velvet","emerald","festive"] },

  { id: 32, name: "Everyday Black Cotton Hijab", style: "Scarves", fabric: "Cotton", price: 650, color: "Black", rating: 4.5, stock: 70, sizes: SCARF_SIZE, badge: "BESTSELLER",
    description: "Soft black cotton hijab — the everyday essential that goes with everything.",
    images: gal(imgScarfBlack, imgScarfNavy, imgScarfBeige, imgScarfStack), tags: ["scarf","black","everyday"] },
];

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelated(p: Product, n = 4): Product[] {
  const sameStyle = products.filter((x) => x.id !== p.id && x.style === p.style);
  if (sameStyle.length >= n) return sameStyle.slice(0, n);
  // Top up from other products if style group too small
  const others = products.filter((x) => x.id !== p.id && x.style !== p.style);
  return [...sameStyle, ...others].slice(0, n);
}

export const categories = [
  { name: "Casual", icon: "👗" },
  { name: "Festive", icon: "✨" },
  { name: "Bridal", icon: "💍" },
  { name: "Kids", icon: "🎀" },
  { name: "Imported", icon: "🌍" },
  { name: "Scarves", icon: "🧣" },
];

export const formatPKR = (n: number) =>
  `PKR ${n.toLocaleString("en-PK")}`;
