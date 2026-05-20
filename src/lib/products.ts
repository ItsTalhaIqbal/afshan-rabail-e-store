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

const img = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=80`;

// Curated Unsplash photo IDs of modest fashion / abaya-style imagery
const photo = [
  "photo-1583391733956-6c78276477e2",
  "photo-1606107557195-0e29a4b5b4aa",
  "photo-1591047139829-d91aecb6caea",
  "photo-1539109136881-3be0616acf4b",
  "photo-1490481651871-ab68de25d43d",
  "photo-1469334031218-e382a71b716b",
  "photo-1551803091-e20673f15770",
  "photo-1566174053879-31528523f8ae",
  "photo-1487222477894-8943e31ef7b2",
  "photo-1502716119720-b23a93e5fe1b",
  "photo-1581338834647-b0fb40704e21",
  "photo-1492707892479-7bc8d5a4ee93",
];

function gallery(i: number): string[] {
  return [
    img(photo[i % photo.length]),
    img(photo[(i + 1) % photo.length]),
    img(photo[(i + 2) % photo.length]),
    img(photo[(i + 3) % photo.length]),
  ];
}

export const products: Product[] = [
  { id: 1, name: "Classic Black Nida Abaya", style: "Casual", fabric: "Nida", price: 2500, color: "Black", rating: 4.7, stock: 25, sizes: ["S","M","L","XL"], badge: "BESTSELLER", description: "A timeless black Nida abaya with a clean A-line silhouette. Smooth, breathable fabric makes it perfect for everyday wear.", images: gallery(0), tags: ["black","casual","daily"] },
  { id: 2, name: "Embroidered Festive Abaya", style: "Festive", fabric: "Chiffon", price: 5500, originalPrice: 6500, color: "Maroon", rating: 4.8, stock: 12, sizes: ["S","M","L","XL"], badge: "SALE", description: "Hand-embroidered chiffon abaya with delicate floral motifs. Perfect for Eid and family gatherings.", images: gallery(1), tags: ["festive","embroidered","eid"] },
  { id: 3, name: "Coat Style Open Abaya", style: "Casual", fabric: "Nida", price: 3800, color: "Beige", rating: 4.6, stock: 18, sizes: ["S","M","L","XL","XXL"], badge: "NEW", description: "Modern open-front coat-style abaya. Layer over your favourite outfit for an elegant modest look.", images: gallery(2), tags: ["coat","open","modern"] },
  { id: 4, name: "Butterfly Chiffon Abaya", style: "Festive", fabric: "Chiffon", price: 4200, color: "Navy", rating: 4.5, stock: 20, sizes: ["S","M","L","XL"], badge: "NEW", description: "Flowy butterfly-cut chiffon abaya with wide sleeves and a graceful drape.", images: gallery(3), tags: ["butterfly","chiffon","flowy"] },
  { id: 5, name: "Plain Daily Wear Abaya", style: "Casual", fabric: "Lawn", price: 1800, color: "Grey", rating: 4.3, stock: 40, sizes: ["XS","S","M","L","XL"], description: "Lightweight lawn abaya for daily use. Soft, cool and easy to manage.", images: gallery(4), tags: ["daily","lawn","plain"] },
  { id: 6, name: "Stone Work Party Abaya", style: "Festive", fabric: "Chiffon", price: 7500, color: "Black", rating: 4.9, stock: 8, sizes: ["S","M","L","XL"], badge: "PREMIUM", description: "Premium chiffon abaya with hand-applied stone work across the bodice and cuffs.", images: gallery(5), tags: ["party","stones","premium"] },
  { id: 7, name: "Turkish Luxury Abaya", style: "Imported", fabric: "Imported Fabric", price: 12000, color: "Charcoal", rating: 4.9, stock: 5, sizes: ["S","M","L","XL"], badge: "PREMIUM", description: "Authentic Turkish-cut abaya in premium imported fabric with structured tailoring.", images: gallery(6), tags: ["turkish","imported","luxury"] },
  { id: 8, name: "Kimono Style Abaya", style: "Casual", fabric: "Silk Blend", price: 4800, color: "Olive", rating: 4.7, stock: 15, sizes: ["S","M","L","XL"], badge: "BESTSELLER", description: "Kimono-inspired silhouette in a soft silk blend. Wide sleeves and a flowing fall.", images: gallery(7), tags: ["kimono","silk","trendy"] },
  { id: 9, name: "Maxi Full Length Abaya", style: "Casual", fabric: "Nida", price: 3200, color: "Black", rating: 4.5, stock: 22, sizes: ["S","M","L","XL","XXL"], description: "Full-length maxi abaya with extra coverage and a clean modern cut.", images: gallery(8), tags: ["maxi","long","nida"] },
  { id: 10, name: "Printed Summer Burkha", style: "Casual", fabric: "Lawn", price: 2200, color: "Sky Blue", rating: 4.4, stock: 30, sizes: ["S","M","L","XL"], badge: "NEW", description: "Light printed burkha for summer. Breathable lawn with a cheerful print.", images: gallery(9), tags: ["burkha","printed","summer"] },
  { id: 11, name: "Bridal Embellished Abaya", style: "Bridal", fabric: "Chiffon", price: 15000, color: "Ivory", rating: 5.0, stock: 3, sizes: ["S","M","L"], badge: "PREMIUM", description: "Hand-embellished bridal abaya with intricate beadwork. A statement piece for your big day.", images: gallery(10), tags: ["bridal","beaded","ivory"] },
  { id: 12, name: "Kids Nida Abaya", style: "Kids", fabric: "Nida", price: 1500, color: "Black", rating: 4.6, stock: 35, sizes: ["XS","S","M"], description: "Comfortable Nida abaya tailored for kids. Soft and easy to wear.", images: gallery(11), tags: ["kids","nida","child"] },
];

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelated(p: Product, n = 4): Product[] {
  return products.filter((x) => x.id !== p.id && x.style === p.style).slice(0, n);
}

export const categories = [
  { name: "Casual", icon: "👗" },
  { name: "Festive", icon: "✨" },
  { name: "Bridal", icon: "💍" },
  { name: "Kids", icon: "🎀" },
  { name: "Imported", icon: "🌍" },
  { name: "Burkha", icon: "🧕" },
];

export const formatPKR = (n: number) =>
  `PKR ${n.toLocaleString("en-PK")}`;
